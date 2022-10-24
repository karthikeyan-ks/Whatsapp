from email.policy import default
from enum import unique
from django.db import models
import hashlib

from django.dispatch import receiver

# Create your models here.
def CreateHash(username):
    hash = hashlib.sha1()
    hash.update(str(username).encode('utf-8'))
    return  hash.hexdigest()[:-20]

class User(models.Model):
    name=models.CharField(max_length=30,default="",blank=True, null=False,unique=True)
    password= models.CharField(max_length=255,default="",blank=True, null=False,unique=True)
    hashcode= models.CharField(max_length=20,default=CreateHash(""), blank=True, null=False,unique=True)

    @classmethod
    def CreateHash(username):
        hash = hashlib.sha1()
        hash.update(str(username).encode('utf-8'))
        return  hash.hexdigest()[:-20]

class Userhub(models.Model):
    hashid = models.CharField(max_length=20,default="", null=False)
    users = models.CharField(max_length=30,default="",null=False)
    
class ChatRoom(models.Model):
    hashroom=models.CharField(max_length=200,default="",null=False)
    sender=models.CharField(max_length=200,default="",null=False)
    receiver=models.CharField(max_length=200,default="",null=False)
    message=models.TextField(default="",null=False)

