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
    
class UserSocialSerializer(serializers.ModelSerializer):
    instagram = serializers.CharField(max_length=100, required=False)
    facebook = serializers.CharField(max_length=100, required=False)
    twitter = serializers.CharField(max_length=100, required=False)
    linkedin = serializers.CharField(max_length=100, required=False)

    class Meta:
        model = User
        fields = ['instagram', 'facebook', 'twitter', 'linkedin']

    def create(self, validated_data):
        user = User.objects.create(
            instagram=validated_data['instagram'],
            facebook=validated_data['facebook'],
            twitter=validated_data['twitter'],
            linkedin=validated_data['linkedin']
        )

        return user
    
class FeedbackSerializer(serializers.Serializer):
    email = serializers.EmailField()
    feedback = serializers.CharField()