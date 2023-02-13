from django.shortcuts import render
from .models import EventList
import requests
# import json

def get_events(request):
    all_events = {}
    #Single Sesarch Option
    if 'city' in request.GET:
        city = request.GET['city']
        url = f'https://api.seatgeek.com/2/events?venue.city={city}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'
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
                lat = events[i]['venue']['location']['lat'],
                lon = events[i]['venue']['location']['lon'],  
                local_dtg = events[i]['datetime_local'],     
            )
        
        event_data.save()
            # all_events = EventList.objects.all().order_by('-type')
        all_events = EventList.objects.all().order_by('-id')

    return render (request, 'event_list.html', {"all_events": all_events})

def map_view(request):
    return render(request, 'map_view.html')


#is there a generic class for viewing saved searches, or do I just treat it like the BlogDetailView?

 #Multiple Search Options:
#  def get_events(request):
#     all_events = {}
#     #print(request.GET)
#     if request.GET['city'] != '':
#         #print(request.GET['city'])
#         city = request.GET['city']
#         url = f'https://api.seatgeek.com/2/events?venue.city={city}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'
#         response = requests.get(url)
#         data = response.json()
#         events = data['events'] 
#         #print(events)

#     elif request.GET['postal_code'] !='':
#         postal_code = request.GET['postal_code']
#         url = f'https://api.seatgeek.com/2/events?venue.postal_code={postal_code}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'
#         response = requests.get(url)
#         data = response.json()
#         events = data['events']
        
        
#     #elif 'state' in request.GET:
#     elif request.GET['state'] !='':
#         state = request.GET['state']
#         url = f'https://api.seatgeek.com/2/events?venue.state={state}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'    
#         response = requests.get(url)
#         data = response.json()
#         events = data['events']
    

#     for i in range(len(events)):
#         event_data = EventList.objects.create(
#             short_title = events[i]['short_title'], 
#             event_type = events[i]['type'],
#             city = events[i]['venue']['city'],       
#             state = events[i]['venue']['state'],
#             postal_code = events[i]['venue']['postal_code'], 
#             lat = events[i]['venue']['location']['lat'],
#             lon = events[i]['venue']['location']['lon'],
#             local_dtg = events[i]['datetime_local'],

#         )
        
#     event_data.save()
#         # all_events = EventList.objects.all().order_by('-type')
#     all_events = EventList.objects.all().order_by('-id')

#     return render (request, 'event_list.html', {"all_events": all_events})