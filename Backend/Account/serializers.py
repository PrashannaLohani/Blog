from rest_framework import serializers
from .models import *

class UserSignupSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=150, required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, min_length=8)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )

        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)
    
    
class UserSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Social
        fields = ['instagram', 'facebook', 'twitter', 'linkedin']

    def create(self, validated_data):
        user = self.context['user']  # Pass user context
        return Social.objects.create(user=user, **validated_data)
    
class FeedbackSerializer(serializers.Serializer):
    email = serializers.EmailField()
    feedback = serializers.CharField()

class EmailVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField()

class PasswordResetSerializer(serializers.Serializer):
    new_password = serializers.CharField(min_length=8)  # Ensure a minimum password length