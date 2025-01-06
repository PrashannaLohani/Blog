from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


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