from django.urls import path
from .views import MapApi

urlpatterns = [
    path('', MapApi.as_view()),
]
