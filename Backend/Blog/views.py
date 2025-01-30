from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.utils import timezone


# Create your views here.
@api_view(["POST"])
def create_category(request):
    if request.method == "POST":
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Category Created successfully!!!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def create_tag(request):
    if request.method == "POST":
        serializer = TagSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Tag Created Successfully!!!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["POST"])
def create_post(request):
    """
    Create a new post
    """
    if request.method == "POST":
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            post = serializer.save(author=request.user)
            return Response(
                {
                    "message": "Post created successfully!!!",
                    # "data": PostSerializer(post).data
                },
                status=status.HTTP_201_CREATED
            )
        return Response(
            {
                "message": "Failed to create post.",
                "errors": serializer.errors  # Return detailed validation errors
            },
            status=status.HTTP_400_BAD_REQUEST
        )
        
@api_view(["POST"])
def create_comments( request):
        # Get the post_id from query parameters
        post_id = request.query_params.get('post_id')
        if not post_id:
            return Response(
                {"error": "post_id is required in query parameters."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Check if the post exists
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response(
                {"error": "Post not found."},
                status=status.HTTP_404_NOT_FOUND
            )

        # Add the post_id and current timestamp to the request data
        data = request.data.copy()
        data['post'] = post.id
        data['created_at'] = timezone.now()

        # Validate and save the comment
        serializer = CommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(["GET"])
def get_post(request):
    """
    Returns all post on param ?get_all=true
    or returns specific post on param ?post_id=<int>
    """
    get_all = request.query_params.get("get_all","").lower() == "true"
    post_id = request.query_params.get("post_id")

    if get_all:
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if post_id:
        try:
            post = Post.objects.get(id=post_id)
            serializer = PostSerializer(post)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Post.DoesNotExixt:
            return Response({"message": "Post not found."}, status=status.HTTP_404_NOT_FOUND)

    return Response(
        {"message": "Invalid request. Please provide either `get_all=true` or `post_id`."},
        status=status.HTTP_400_BAD_REQUEST
    )

@api_view(["DELETE"])
def archive_post(request):
    """
    Archives or unarchives a post based on the query parameter.
    URL: /Blog/Archive_post/?post_id=<int>&archive=true
    """
    post_id = request.query_params.get('post_id')
    archive = request.query_params.get('archive').lower() == 'true'

    try:
        post = Post.objects.get(id=post_id)
    
        if archive:
            post.archive()
            return Response(
                {"message": "Post archived successfully."},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"message": "Invalid request. Provide both parameters 'post_id=<int>` and `archive=true`"},
                status=status.HTTP_400_BAD_REQUEST
            )
    except Post.DoesNotExist:
        return Response(
            {"message": "Post not found."},
            status=status.HTTP_404_NOT_FOUND
        )