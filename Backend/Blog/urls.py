from django.urls import path
from .views import *

urlpatterns = [
    path('create_category/', create_category, name="create_category"),
    path('create_tag/', create_tag, name="create_tag"),
    path('create_post/', create_post, name="create_post"),
    path('get_post/',get_post, name="get_post"),
    path('comments/', create_comments, name="create_comments"),
    path('archive_post/', archive_post, name='archive_post'),
]