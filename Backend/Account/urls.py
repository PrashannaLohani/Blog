from django.urls import path
from .views import *
from .utils import FeedbackView

urlpatterns = [
    path('signup/', create_user, name="create_user"),
    path('login/', login_user, name="login_user"),
    path('feedback/', FeedbackView.as_view(), name="feedback"),
]