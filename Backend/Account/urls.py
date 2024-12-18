from django.urls import path
from .views import *

urlpatterns = [
    path('Create_user', create_user, name="create_user"),
]