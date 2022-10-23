from email.policy import default
from pyexpat import model
from django.db import models
import hashlib

# Create your models here.

def CreateHash(username):
    hash = hashlib.sha1()
    hash.update(str(username).encode('utf-8'))
    return  hash.hexdigest()[:-20]



class User(models.Model):
    name=models.CharField(max_length=30,blank=True, null=True)
    password= models.CharField(max_length=255,blank=True, null=False)
    hashcode= models.CharField(max_length=20, blank=True, null=False)
    pass

