from django.shortcuts import render
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate


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
        user = authenticate(request, username=email, password=password)
        if user is not None:
            return JsonResponse({'status': 'success', 'message': 'Login successful!'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid credentials'}, status=400)
    else:
        return JsonResponse({'status': 'error', 'message': 'Email and password are required'}, status=400)
