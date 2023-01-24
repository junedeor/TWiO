from django.shortcuts import render
from .models import EventList
import requests
# import json

# class EventList(generics.ListCreateAPIView): #can I combine this w/ my own functions?
#     eventListings = EventList.objects.all()

def get_events(request):
    all_events = {}
    if 'city' in request.GET:
        city = request.GET['city']
        url = 'https://api.seatgeek.com/2/events?venue.city=%s&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg' % city
        response = requests.get(url)
        data = response.json()
        events = data['events'] #if this doesn't work, try venues, but events should be name of data set

        for i in events:
            event_data = EventList(
                short_title = i['short_title'],
                type = i['type'],
                city = i['city'],       
                state = i['state'],
                postal_code = i['postal_code'],  
                datetime_utc = i['datetime_utc'],     
            )
            event_data.save()
            all_events = EventList.objects.all().order_by('-type')

    return render (request, 'event_list.html', { "all_events": all_events})