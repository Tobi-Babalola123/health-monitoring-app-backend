# health_monitoring_app/urls.py (project-level)
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('health_monitor_app.urls')),  # Ensure your app's URLs are included under /api/
]
