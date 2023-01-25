from django.db import models

class EventList(models.Model):
    short_title = models.CharField(max_length=200,blank=True,null=True)
    event_type = models.CharField(max_length=200,blank=True,null=True)
    city = models.CharField(max_length=200,blank=True,null=True)
    state = models.CharField(max_length=200,blank=True,null=True)
    postal_code = models.CharField(max_length=200,blank=True,null=True)
    # datetime_utc = models.DateTimeField #it doesn't like this OR datetime_local

    def __str__(self):
        return self.short_title