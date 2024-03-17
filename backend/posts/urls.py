# urls.py
from django.urls import path
from .views import submit_form, submit_company_form

urlpatterns = [
    path('', submit_form, name='submit_form'),
    path('company', submit_company_form, name='submit_company_form'),
]
