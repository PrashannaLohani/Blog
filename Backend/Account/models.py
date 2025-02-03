from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    numberofblogs = models.IntegerField(default=0)
    
    def __str__(self):
        return self.username
    
class Login(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=100)
    last_login = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.email
    
class Social(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    instagram = models.CharField(max_length=100, blank=True, null=True)
    facebook = models.CharField(max_length=100, blank=True, null=True)
    twitter = models.CharField(max_length=100, blank=True, null=True)
    linkedin = models.CharField(max_length=100, blank=True, null=True)


    def __str__(self):
        return self.user.username
    
