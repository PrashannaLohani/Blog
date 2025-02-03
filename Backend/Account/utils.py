from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from decouple import config
from .models import User
from django.utils import timezone
from datetime import timedelta
from django.conf import settings


class FeedbackView(APIView):
    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            feedback = serializer.validated_data['feedback']

            # Send email to both user and your Gmail account
            send_mail(
                subject='New Feedback Received',
                message=f'Email: {email}\nFeedback: {feedback}',
                from_email=config('EMAIL_HOST_USER'),  
                recipient_list=[config('EMAIL_HOST_USER')],  
                fail_silently=False,
            )

            return Response({"message": "Feedback sent successfully!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class EmailVerification(APIView):
    def post(self, request):
        serializer = EmailVerificationSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']

            # Check if email exists in the User model
            user = User.objects.filter(email=email).first()
            if not user:
                return Response({"message": "Email not registered."}, status=status.HTTP_400_BAD_REQUEST)

          
            reset_token = user.id 
            reset_token_expiry = timezone.now() + timedelta(seconds=30)  # Set expiration time to 30 seconds

            # Save the expiration time to the user model (without needing a separate method in the model)
            user.password_reset_token_expiry = reset_token_expiry
            user.save()

            # Create password reset link
            reset_link = f"test/reset-password/{reset_token}/"

            # Send the password reset link via email
            send_mail(
                subject="Password Reset Link",
                message=f"Click the following link to reset your password: {reset_link}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                fail_silently=False,
            )

            return Response({"message": "Password reset link sent successfully!"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)