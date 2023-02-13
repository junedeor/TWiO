from django.urls import path
from . import views


app_name = 'event_list'

urlpatterns = [
    path('', views.get_events, name='get_events'),
    path('event_list/', views.map_view, name='map_view'),
    # path('', views.sort, name='sort'),
]
