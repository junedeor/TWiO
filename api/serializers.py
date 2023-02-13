from rest_framework import serializers
from event_list.models import EventList

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventList
        fields = ("short_title", "event_type", "lat", "lon")
        