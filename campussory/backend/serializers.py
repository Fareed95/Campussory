from rest_framework import serializers
from .models import Client

class EventSerializer(serializers.ModelSerializer):
    class Meta :
        model = Client 
        fields = ('name','variable1','variable2','variable3')