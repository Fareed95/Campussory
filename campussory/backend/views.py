from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import EventSerializer
from .models import Client
# Create your views here.
class index(generics.CreateAPIView):
    queryset = Client.objects.all()
    serializer_class = EventSerializer