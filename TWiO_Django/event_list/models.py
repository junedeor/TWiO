from django.db import models
from django.utils import timezone

class EventList(models.Model):
    short_title = models.CharField(max_length=200,blank=True,null=True)
    event_type = models.CharField(max_length=200,blank=True,null=True)
    city = models.CharField(max_length=200,blank=True,null=True)
    state = models.CharField(max_length=2,blank=True,null=True)
    postal_code = models.CharField(max_length=200,blank=True,null=True)
    lat = models.DecimalField(max_digits=5,decimal_places=3,blank=True,null=True)
    lon = models.DecimalField(max_digits=5,decimal_places=2,blank=True,null=True)
    local_dtg = models.DateTimeField(blank=True,null=True)
    author = models.ForeignKey('auth.User',on_delete=models.CASCADE,blank=True,null=True)
    notes = models.CharField(max_length=200,blank=True,null=True) 
    def __str__(self):
        return self.short_title
    
    # class Meta: 
    #     ordering = ['-created']