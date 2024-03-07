from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FormData
from .api.serializers import FormDataSerializer

@api_view(['POST'])
def submit_form(request):
    if request.method == 'POST':
        # Extract form data from request
        name = request.data.get('name')
        domain = request.data.get('domain')
        availability = request.data.get('availability')
        preference = request.data.get('preference')
        print(name ,domain ,availability,preference)
        
        # Create and save an instance of the FormData model
        form_data = FormData.objects.create(name=name, domain=domain, availability=availability, preference=preference)
        
        # Serialize the form data and return it in the response
        serializer = FormDataSerializer(form_data)
        return Response(serializer.data, status=201)
