from rest_framework.viewsets import ModelViewSet
from ..models import Client
from .serializers import ClientSerializer, FormDataSerializer
from rest_framework.response import Response

class ClientViewSet(ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

def create(self, request, *args, **kwargs):
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)