from unicodedata import name
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *

def CreateHash(username):
    hash = hashlib.sha1()
    hash.update(str(username).encode('utf-8'))
    return  hash.hexdigest()[:-20]
     
# Create your views here.
class ReactView(APIView):
    serializer_class=ReactSerializer
    def get(self,request):
        print(request.GET.get('username'))
        details=[{"name":details.name,"password":details.password}
        for details in User.objects.all()]
        return Response(details)

    def post(self,request):
        serializer=ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class ReactView2(APIView):
    serializer_class=ReactSerializer
    def get(self,request):
        details=[{"name":details.name,"password":details.password,"hascode":details.hashcode}
        for details in User.objects.all()]
        return Response(details)

    def post(self,request):
        print(request.data)
        username=request.data['username']
        password=request.data['password']
        user=User.objects.all().filter(name=username).filter(password=password)
        if(request.data['createAccount']):
            username=request.data['username']
            password=request.data['password']
            email=request.data['email']
            pass
        else:
            username=request.data['username']
            password=request.data['password']
            query=User.objects.filter(name=username).filter(password=password)
            if query.count()>0:
                print('user found',query[0].hashcode)
                return Response(query[0].hashcode)
            else:
                print("user not found")
                return Response("user not found")
        query=User.objects.filter(name=username).filter(password=password)  
        if query.count()==0:    
            print("creating new user")
            user=User()
            hash=user.CreateHash()
            user.name=username
            user.password=password
            user.hashcode=hash
            user.email=email
            try:
                user.save()
                pass
            except:
                print("exception raised")
                return Response("username already taken")
        else:
            print(query[0].name)
            return Response(query[0].hashcode)
        return Response(query[0].hashcode)

class ReactView3(APIView):
    serializer_class=ReactSerializer
    def get(self,request,extends):
        print(extends)
        details=[{"name":details.name,"password":details.password,"hascode":details.hashcode}
        for details in User.objects.all()]
        return Response(details)

    def post(self,request,extends):
        print(request.data)
        print(extends)
        user=User.objects.filter(hashcode=extends)
        print(user[0].name)
        message=MessagePool()
        message.message=request.data['message']
        message.sender=user[0].name
        message.receiver="karthikeyan"
        message.fileAttached=request.data['file_attach']
        message.filelink=str(request.data['file_link'])
        message.hash=extends
        message.messageid=message.increment(extends)
        message.save()
        return Response(request.data)
        