from django.shortcuts import render
from rest_framework import generics
from .serializers import MapSerializer
from event_list.models import EventList

class MapApi(generics.ListAPIView):
    queryset = EventList.objects.all()
    serializer_class = MapSerializer
