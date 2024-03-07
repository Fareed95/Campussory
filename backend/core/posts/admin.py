from django.contrib import admin
from .models import Client, FormData, FormDataCompany
# Register your models here.
admin.site.register(Client)
admin.site.register(FormData)
admin.site.register(FormDataCompany)