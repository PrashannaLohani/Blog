from .models import *
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=100)
    slug = serializers.SlugField(max_length=100)
    description = serializers.CharField(allow_blank=True, allow_null=True)

    class Meta:
        model = Category
        fields = ['name', 'slug', 'description']
    
    def create(self, validated_data):
        """
        Create and return a new `Category` instance, given the validated data.
        """
        category = Category.objects.create(**validated_data)

        return category

class TagSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length=50)
    slug = serializers.CharField(max_length=50)

    class Meta():
        model = Tag
        fields = ["name", "slug"]

    def create(self, validated_data):
        """
        Create and return a `Tag` instance, given the validated data
        """
        tag = Tag.objects.create(**validated_data)

        return tag