from django.urls import path
from . import views

app_name = 'event_list'

urlpatterns = [
    path('', views.get_events, name='get_events'),
    path('event_list/', views.map_view, name='map_view'),
    path('event_list/', views.home_view, name='home'),
    path('event_list/', views.SearchListView.as_view(), name='search_list'),
    path('event_list/<int:pk>/', views.SearchDetailsView.as_view(), name='search_detail'),
    path('event_list/', views.NotesCreateView.as_view(), name='notes'),
    path('event_list/<int:pk>/', views.NotesEditView.as_view(), name='notes_edit'),
    path('event_list/<int:pk>/', views.NotesDeleteView.as_view(), name='notes_delete'),
]
