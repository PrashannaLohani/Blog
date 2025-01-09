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
    slug = serializers.SlugField(max_length=50)

    class Meta():
        model = Tag
        fields = ["name", "slug"]

    def create(self, validated_data):
        """
        Create and return a `Tag` instance, given the validated data
        """
        tag = Tag.objects.create(**validated_data)

        return tag

class PostSerializer(serializers.ModelSerializer):
    # Nested serializers for categories and tags
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)

    # Custom field for a content preview
    content_preview = serializers.SerializerMethodField()

    # If you want to allow writing categories and tags by their IDs
    category_ids = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), many=True, write_only=True, source='categories'
    )
    tag_ids = serializers.PrimaryKeyRelatedField(
        queryset=Tag.objects.all(), many=True, write_only=True, source='tags'
    )

    class Meta:
        model = Post
        fields = [
            'id', 'title', 'slug', 'author', 'content', 'content_preview', 
            'categories', 'tags', 'category_ids', 'tag_ids', 
            'status', 'published_date', 'created_at', 'updated_at'
        ]
        read_only_fields = ['id', 'slug', 'author', 'created_at', 'updated_at']
    
    def create(self, validated_data):
        """
        Handle category and tag assignments on creation.
        """
        categories = validated_data.pop('categories', [])
        tags = validated_data.pop('tags', [])
        post = super().create(validated_data)
        post.categories.set(categories)
        post.tags.set(tags)
        return post

    def get_content_preview(self, obj):
        """
        Generate a short preview of the content.
        """
        return obj.content[:100] + '...' if len(obj.content) > 100 else obj.content