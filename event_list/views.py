from django.shortcuts import render
from .models import EventList
import requests
# from rest_framework import generics
# from .serializers import MapSerializer
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

 #Multiple Search Options:
    #print(request.GET)
    #if request.GET['city'] != '':
    # if request.GET.get('city', False):
    #     #print(request.GET['city'])
    #     city = request.GET['city']
    #     #city = request.GET.get('city')
    #     url = f'https://api.seatgeek.com/2/events?venue.city={city}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'
    #     response = requests.get(url)
    #     data = response.json()
    #     events = data['events'] 
        #print(events)

    # #elif request.GET['postal_code'] !='':
    # elif request.GET.get('postal_code', False):
    #     postal_code = request.GET['postal_code']
    #     #postal_code = request.GET.get('postal_code')
    #     url = f'https://api.seatgeek.com/2/events?venue.postal_code={postal_code}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'
    #     response = requests.get(url)
    #     data = response.json()
    #     events = data['events']
        
        
    # #elif 'state' in request.GET:
    # #elif request.GET['state'] !='':
    # elif request.GET.get('state', False):
    #     state = request.GET['state']
    #     #state = request.GET.get('state')
    #     url = f'https://api.seatgeek.com/2/events?venue.state={state}&client_id=MzE2MDc3Mzl8MTY3NDUxMjYxMS42OTk4Mg'    
    #     response = requests.get(url)
    #     data = response.json()
    #     events = data['events']






# def sort(request):
#     if request.GET['short_title_sort'] == True:
#         #url = 
#         all_events = EventList.objects.all().order_by('short_title')

#sort results
    # short_title = short_title
    # event_type_sort = event_type_sort
    # city_sort = city_sort
    # state_sort = state_sort
    # postal_code_sort = postal_code_sort
    # local_dtg_sort = local_dtg_sort
    # if short_title == True:
    #     all_events = EventList.objects.all().order_by('short_title')
    # elif event_type_sort == True:
    #      all_events = EventList.objects.all().order_by('event_type') 
    # elif city_sort == True:
    #      all_events = EventList.objects.all().order_by('city') 
    # elif state_sort == True:
    #      all_events = EventList.objects.all().order_by('state')
    # elif postal_code_sort == True:
    #      all_events = EventList.objects.all().order_by('postal_code')
    # elif local_dtg_sort == True:
    #      all_events = EventList.objects.all().order_by('local_dtg')
    
    #return render (request, 'event_list.html', {"all_events": all_events})