from django.urls import path
from .views import *
from .utils import *

urlpatterns = [
    path('signup/', create_user, name="create_user"),
    path('login/', AuthView.as_view(), name="login_user"),
    path('logout/', AuthView.as_view(), name="logout_user"),
    path('feedback/', FeedbackView.as_view(), name="feedback"),
    path('email-verification/', EmailVerification.as_view(), name="email_verification"),
    path('password-reset/', PasswordReset.as_view(), name="password_reset"),
    path('change-password/', ChangePasswordView.as_view(), name='change_password'),
    path('user-details/', UserDetailView.as_view(), name='user-detail'),
]