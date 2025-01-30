from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import *
from .models import *

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

@api_view(['POST'])
def login_user(request):
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"message": "User Doesn't Exist."}, status=status.HTTP_401_UNAUTHORIZED)

        if not user.check_password(password):
            return Response({"message": "Wrong Password."}, status=status.HTTP_401_UNAUTHORIZED)

        # Generate JWT token
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)

        # Return token and user data
        return Response({
            "message": "Login successful.",
            "access_token": access_token,
            "refresh_token": str(refresh),
            "user": {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "numberofblogs": user.numberofblogs
            }
        }, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)