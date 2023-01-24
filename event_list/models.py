from django.db import models

class EventList(models.Model):
    short_title = models.CharField(max_length=200)
    event_type = models.CharField(max_length=200)
    city = models.CharField(max_length=200)
    state = models.CharField(max_length=200)
    postal_code = models.CharField(max_length=200)
    datetime_utc = models.DateTimeField

    def __str__(self):
        return self.short_title