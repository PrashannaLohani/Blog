from django.contrib import admin

# Register your models here.
from .models import *

@admin.register(User)
class UserAdmin (admin.ModelAdmin):
    list_display = ('id','username', 'email', 'is_staff', 'is_active', 'date_joined')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('username', 'email')
    ordering = ['username']

@admin.register(Social)
class UserSocial (admin.ModelAdmin):
    list_display = ('user', 'instagram', 'facebook', 'twitter', 'linkedin')
    search_fields = ('user',)
    ordering = ['user']
