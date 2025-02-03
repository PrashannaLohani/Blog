from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils.timezone import now
from .serializers import *
from .models import *
from django.utils import timezone
from django.contrib.auth.hashers import make_password, check_password
from rest_framework.permissions import IsAuthenticated


@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        user_serializer = UserSignupSerializer(data=request.data)

        if user_serializer.is_valid():
            user = user_serializer.save()

            # Handle optional social links
            social_data = request.data.get('socials', {})  
            social_serializer = UserSocialSerializer(data=social_data, context={'user': user})

            if social_serializer.is_valid():
                social_serializer.save()

            return Response({"message": "User created successfully."}, status=status.HTTP_201_CREATED)
        
        return Response({'message': 'Please check credentials and try again.'}, status=status.HTTP_400_BAD_REQUEST)

    return Response({'error': 'Invalid request'}, status=status.HTTP_400_BAD_REQUEST)

class AuthView(APIView):
    def post(self, request):
        """Handles user login and token generation"""
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            try:
                user = User.objects.get(email=email)  # Fetch from Login model
            except User.DoesNotExist:
                return Response({"message": "User Doesn't Exist."}, status=status.HTTP_401_UNAUTHORIZED)

            if user.password != password:  # Since passwords are not hashed
                return Response({"message": "Wrong Password."}, status=status.HTTP_401_UNAUTHORIZED)

            # Update last login time
            user.last_login = now()
            user.save(update_fields=['last_login'])

            # Generate JWT token
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            return Response({
                "message": "Login successful.",
                "access_token": access_token,
                "refresh_token": str(refresh),
                "user": {
                    "email": user.email,
                    "last_login": user.last_login.strftime("%Y-%m-%d %H:%M:%S")
                }
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request):
        """Handles user logout by blacklisting the token"""
        try:
            refresh_token = request.data.get("refresh_token")
            if not refresh_token:
                return Response({"message": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)

            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the refresh token to prevent reuse

            return Response({"message": "Logout successful."}, status=status.HTTP_200_OK)

        except Exception as e:
            return Response({"message": "Invalid token or already logged out."}, status=status.HTTP_400_BAD_REQUEST)
        

class PasswordReset(APIView):
    def post(self, request, reset_token):
        # Check if the reset token exists in the database
        try:
            user = User.objects.get(id=reset_token)
        except User.DoesNotExist:
            return Response({"message": "Invalid or expired reset token."}, status=status.HTTP_400_BAD_REQUEST)

        # Check if the token has expired
        if user.password_reset_token_expiry < timezone.now():
            return Response({"message": "This reset link has expired."}, status=status.HTTP_400_BAD_REQUEST)

        # Validate the new password
        serializer = PasswordResetSerializer(data=request.data)
        if serializer.is_valid():
            new_password = serializer.validated_data['new_password']
            
            # Update the user's password
            user.password = make_password(new_password)
            user.password_reset_token_expiry = None  # Clear the expiry time after password reset
            user.save()

            return Response({"message": "Password successfully updated."}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]
    def patch(self, request):
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            current_password = serializer.validated_data['current_password']
            new_password = serializer.validated_data['new_password']

            # Get the authenticated user
            user = request.user

            # Check if the current password matches
            if not check_password(current_password, user.password):
                return Response({"message": "Current password is incorrect."}, status=status.HTTP_400_BAD_REQUEST)

            # Update the password with the new one
            user.password = make_password(new_password)
            user.save()

            return Response({"message": "Password successfully changed."}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)