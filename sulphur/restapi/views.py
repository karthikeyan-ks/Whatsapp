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
        username=request.data['username']
        password=request.data['password']
        user=User.objects.all().filter(name=username).filter(password=password)
        if user.count()==0:
            return Response("no such user found")
        elif user.count()==1:
            hash=user[0].hashcode
            userhub=Userhub.objects.all().filter(hashid=hash)
            data=[]
            for userlist in userhub:
                data.append(userlist.users)
            return Response(data)
        else:
            return Response("something went wrong")

class ReactView3(APIView):
    serializer_class=ReactSerializer
    def get(self,request):
        details=[{"name":details.name,"password":details.password,"hascode":details.hashcode}
        for details in User.objects.all()]
        return Response(details)

    def post(self,request):
        print(request.data)
        username=request.data['username']
        password=request.data['password']
        query=User.objects.filter(name=username).filter(password=password)
        if query.count()==0:
            print("creating new user")
            user=User()
            hash=CreateHash(username)
            user.name=username
            user.password=password
            user.hashcode=hash
            try:
                user.save()
                for u in User.objects.all().exclude(hashcode=hash):
                    userhub=Userhub()
                    userhub.hashid=hash
                    userhub.users=u.name
                    userhub.save()
                    print("new connection generated")
                pass
            except:
                print("exeception occured")
            pass
        else:
            print(query[0].name)
            for q in query:
                print("working else part")
                return Response(q.name)
        return Response("karthiekayan")