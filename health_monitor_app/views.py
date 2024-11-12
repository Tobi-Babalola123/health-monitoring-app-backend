from django.shortcuts import render
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login
from health_monitor_app.models import CustomUser  # Ensure you're importing CustomUser from your models

# Health Data API View
@api_view(['GET', 'POST'])
def health_data(request):
    if request.method == 'GET':
        data = {
            'health_data': {
                'steps': 5000,
                'heart_rate': 72,
                'calories_burned': 150,
                'exercise_minutes': 45,
            }  # Replace with actual health data
        }
        return Response(data)
    elif request.method == 'POST':
        new_data = request.data
        # Handle the new data received
        # You can save it to the database or process it as needed
        return Response({"status": "success"})


# AI Response API View
API_KEY = 'AIzaSyCP7bzPOmyy0qFQlNQPrtKDsrcjZO476ZM'
API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent'

@api_view(['POST'])
def ask_ai(request):
    query = request.data.get('query')
    if query:
        # Prepare data to send to the API
        data = {
            "contents": [
                {
                    "parts": [
                        {"text": query}
                    ]
                }
            ]
        }
        headers = {
            'Content-Type': 'application/json',
        }

        # Make the API request
        response = requests.post(f'{API_URL}?key={API_KEY}', json=data, headers=headers)

        if response.status_code == 200:
            api_response = response.json()
            ai_answer = api_response.get("content", "No answer received.")
        else:
            ai_answer = "Failed to get a valid response from AI."
        
        # Return a JSON response to the React frontend
        return JsonResponse({'response': ai_answer})
    else:
        return JsonResponse({'response': 'No query provided'}, status=400)


# Login and Signup API Views

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if email and password:
        # Check if the user exists and authenticate
        user = authenticate(request, username=email, password=password)
        if user is not None:
            # If successful, log the user in
            login(request, user)
            return JsonResponse({'status': 'success', 'message': 'Login successful!'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Email and password are required'}, status=400)


@api_view(['POST'])
def signup_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    password_confirmation = request.data.get('passwordConfirmation')

    print(f"Received data: email={email}, password={password}, password_confirmation={password_confirmation}")
    
    if email and password and password_confirmation:
        if password != password_confirmation:
            return JsonResponse({'status': 'error', 'message': 'Passwords do not match'}, status=400)
        
        if CustomUser.objects.filter(email=email).exists():
            return JsonResponse({'status': 'error', 'message': 'Email already in use'}, status=400)
        
        try:
            # Use create_user, which will hash the password automatically
            user = CustomUser.objects.create_user(email=email, password=password)
            return JsonResponse({'status': 'success', 'message': 'User created successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Email, password, and password confirmation are required'}, status=400)
