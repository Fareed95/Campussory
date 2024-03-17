from rest_framework import serializers
from ..models import Client, FormData, FormDataCompany, Company

class ClientSerializer(serializers.ModelSerializer):
    class Meta :
        model = Client 
        fields = ('name','variable1','variable2','variable3')

class CompanySerializer(serializers.ModelSerializer):
    class Meta :
        model = Company 
        fields = ('name','variable1','variable2','variable3')


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = '__all__'

class FormCompanyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormDataCompany
        fields = '__all__'