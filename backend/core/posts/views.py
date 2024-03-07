from django.shortcuts import render

# Create your views here.
# views.py
from django.http import JsonResponse
from .models import FormData
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt  # Disable CSRF protection for this view for simplicity (not recommended in production)
def submit_form(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        phone_number = request.POST.get('phoneNumber')
        email = request.POST.get('email')

        # Validate data (optional)
        if name and phone_number and email:
            # Save form data to the database
            form_data = FormData.objects.create(
                name=name,
                phone_number=phone_number,
                email=email
            )
            return JsonResponse({'message': 'Form data saved successfully.'})
        else:
            return JsonResponse({'error': 'Missing form fields.'}, status=400)

    return JsonResponse({'error': 'Invalid request method.'}, status=405)
