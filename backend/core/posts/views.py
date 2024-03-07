from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FormData, FormDataCompany
from .api.serializers import FormDataSerializer, FormCompanyDataSerializer

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
    


@api_view(['POST'])
def submit_company_form(request):
    if request.method == 'POST':
        # Extract form data from request
        name = request.data.get('name')
        description = request.data.get('description')
        no_of_people_needed = request.data.get('no_of_people_needed')
        domain_needed = request.data.get('domain_needed')
        interview_date = request.data.get('interview_date')
        print(name ,description ,no_of_people_needed,domain_needed,interview_date)
        
        # Create and save an instance of the FormData model
        form_data = FormDataCompany.objects.create(name=name, description = description,no_of_people_needed = no_of_people_needed, domain_needed=domain_needed, interview_date = interview_date)
        
        # Serialize the form data and return it in the response
        serializer = FormCompanyDataSerializer(form_data)
        return Response(serializer.data, status=201)
