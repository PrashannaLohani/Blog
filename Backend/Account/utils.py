from django.core.mail import send_mail
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import FeedbackSerializer
from decouple import config

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
                from_email=email,  
                recipient_list=config('EMAIL_HOST_USER'),  # Replace with your Gmail account
                fail_silently=False,
            )

            return Response({"message": "Feedback sent successfully!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)