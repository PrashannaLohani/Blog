from django.urls import path
from .views import *

urlpatterns = [
    path('signup', user_signup, name="user_signup"),
]