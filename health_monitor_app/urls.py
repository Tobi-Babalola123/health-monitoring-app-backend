from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.ask_ai, name='ask_ai'),  # Root URL for ask_ai
    path('api/health-data/', views.health_data, name='health_data'),  # For health data
    path('api/login/', views.login_view, name='login'),  # For user login
]
