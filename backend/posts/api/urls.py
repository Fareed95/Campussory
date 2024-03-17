from django.urls import path 
from rest_framework.routers import DefaultRouter
from .views import ClientViewSet, CompanyViewSet

post_router = DefaultRouter()
post_router.register(r'posts',ClientViewSet)
post_router.register(r'companyposts',CompanyViewSet)