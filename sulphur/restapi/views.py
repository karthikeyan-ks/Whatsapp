from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . models import *
from . serializer import *

# Create your views here.
class ReactView(APIView):
    serializer_class=ReactSerializer
    def get(self,request):
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
        serializer=ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
