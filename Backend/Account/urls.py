from django.urls import path
from .views import *
from .utils import FeedbackView

urlpatterns = [
    path('Create_user', create_user, name="create_user"),
    path('feedback', FeedbackView.as_view(), name="feedback"),
]