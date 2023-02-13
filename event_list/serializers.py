from rest_framework import serializers
from .models import EventList

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("short_title", "event_type", "lat", "lon")
        model = EventList