from rest_framework import serializers
from ..models import Client, FormData

class ClientSerializer(serializers.ModelSerializer):
    class Meta :
        model = Client 
        fields = ('name','variable1','variable2','variable3')


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = '__all__'