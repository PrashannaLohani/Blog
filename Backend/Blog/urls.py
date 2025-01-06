from django.urls import path
from .views import *

urlpatterns = [
    path('Create_category/', create_category, name="create_category"),
    path('Create_tag/', create_tag, name="create_tag"),
    path('Create_post/', create_post, name="create_post"),

]