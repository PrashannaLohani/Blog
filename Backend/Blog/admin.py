from django.contrib import admin
from .models import *

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id','title', 'author', 'status', 'published_date', 'created_at')
    list_filter = ('status', 'categories', 'tags', 'author', 'created_at')
    search_fields = ('title', 'content')
    prepopulated_fields = {"slug": ("title",)}
    raw_id_fields = ('author',)
    date_hierarchy = 'published_date'
    ordering = ['status', '-published_date']

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('comment_id','user','post','rating','comment_like')
    list_filter = ('user', 'post', 'created_at')
    search_fields = ('comment', 'comment_like')
    ordering = ['comment_like', '-created_at']
    