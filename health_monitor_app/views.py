from django.shortcuts import render
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def health_data(request):
    if request.method == 'GET':
        data = {...}  # Your health data here
        return Response(data)
    elif request.method == 'POST':
        new_data = request.data
        return Response({"status": "success"})

# AI response view
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






@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if email and password:
        # Check if the user exists
        user = authenticate(request, username=email, password=password)
        
        if user is not None:
            # If user exists, return success
            return JsonResponse({'status': 'success', 'message': 'Login successful!'})
        else:
            # If the user does not exist, create a new user (register)
            try:
                # Create a new user
                user = User.objects.create_user(username=email, email=email, password=password)
                # Automatically log the user in
                login(request, user)
                return JsonResponse({'status': 'success', 'message': 'User created and logged in successfully!'})
            except Exception as e:
                return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Email and password are required'}, status=400)


@api_view(['POST'])
def signup_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    if email and password:
        try:
            # Create a new user
            user = User.objects.create_user(username=email, email=email, password=password)
            return JsonResponse({'status': 'success', 'message': 'User created successfully!'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Email and password are required'}, status=400)
