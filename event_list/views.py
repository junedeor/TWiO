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
        url = 'https://api.seatgeek.com/2/events?venue.city=%s&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg' %city
        # url = 'https://api.seatgeek.com/2/events?venue.city=eugene&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'
        response = requests.get(url)
        data = response.json()
        events = data['events']

        for i in range(len(events)):
            event_data = EventList.objects.create(
                short_title = events[i]['short_title'], 
                event_type = events[i]['type'],
                city = events[i]['venue']['city'],       
                state = events[i]['venue']['state'],
                postal_code = events[i]['venue']['postal_code'],  
                #datetime_utc = events[i]['datetime_utc'],     
            )
        #events = data['events'] 
        # event_data = EventList.objects.create(
        #     short_title = data['short_title'],
        #     event_type = data['type'],
        #     city = data['venue']['city'],       
        #     state = data['venue']['state'],
        #     postal_code = data['venue']['postal_code'],  
        #     datetime_local = data['datetime_utc'],     
        # )

        event_data.save()
        # all_events = EventList.objects.all().order_by('-type')
        all_events = EventList.objects.all()

    return render (request, 'event_list.html', {"all_events": all_events})