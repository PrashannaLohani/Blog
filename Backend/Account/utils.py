from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from decouple import config
from .models import User
from django.conf import settings
import random

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
            if not User.objects.filter(email=email).exists():
                return Response({"message": "Email not registered."}, status=status.HTTP_400_BAD_REQUEST)

            # Generate OTP
            otp = random.randint(100000, 999999)  

            # Store OTP in session or cache (you can use Redis or database)
            request.session['otp'] = otp
            request.session['email'] = email
            # Send OTP email
            send_mail(
                subject="Your OTP for Email Verification",
                message=f"Your OTP for verification is {otp}. Please enter this to verify your email.",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[email],
                fail_silently=False,
            )

            return Response({"message": "OTP sent successfully!"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)