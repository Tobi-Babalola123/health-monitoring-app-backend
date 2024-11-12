# health_monitor_app/urls.py (app-level)
from django.urls import path
from . import views

urlpatterns = [
    path('health-data/', views.health_data, name='health_data'),
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
]
