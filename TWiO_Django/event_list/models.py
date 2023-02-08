from django.db import models
from django.utils import timezone

class EventList(models.Model):
    short_title = models.CharField(max_length=200,blank=True,null=True)
    event_type = models.CharField(max_length=200,blank=True,null=True)
    city = models.CharField(max_length=200,blank=True,null=True)
    state = models.CharField(max_length=2,blank=True,null=True)
    postal_code = models.CharField(max_length=200,blank=True,null=True)
    lon = models.FloatField(blank=True,null=True)
    lat = models.FloatField(blank=True,null=True)
    local_dtg = models.DateTimeField(blank=True,null=True)
    saved_searches = models.CharField(max_length=200,blank=True,null=True)
    # recent_searches should just be named after its created dtg; should it have dtf or charfield?
    recent_searches = models.CharField(max_length=200,blank=True,null=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE,blank=True,null=True)
    # this was returning a "impossible to add w/o providing a default" error:
    # created= models.DateTimeField(auto_now_add=True)
    created= models.DateTimeField(default=timezone.now)
    notes = models.CharField(max_length=200,blank=True,null=True) #field for user-added notes; unsure ATT if should be attached to user or specific search
    def __str__(self):
        return self.short_title
    
    class Meta: 
        ordering = ['-created']