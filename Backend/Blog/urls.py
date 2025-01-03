from django.urls import path
from .views import *

urlpatterns = [
    path('Create_category/', create_category, name="create_category"),

]