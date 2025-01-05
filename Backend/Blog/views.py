from .serializers import *
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.
@api_view(["POST"])
def create_category(request):
    if request.method == "POST":
        serializer = CategorySeriallizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Category Created successfully!!!"}, status=status.HTTP_201_CREATED[[]])
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)