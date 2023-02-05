from django.db import models

class EventList(models.Model):
    short_title = models.CharField(max_length=200,blank=True,null=True)
    event_type = models.CharField(max_length=200,blank=True,null=True)
    city = models.CharField(max_length=200,blank=True,null=True)
    state = models.CharField(max_length=2,blank=True,null=True)
    postal_code = models.CharField(max_length=200,blank=True,null=True)
    lon = models.FloatField(blank=True,null=True)
    lat = models.FloatField(blank=True,null=True)
    local_dtg = models.DateTimeField(blank=True,null=True)
    # should these go here or in the user's model?
    author = models.CharField(max_length=50,blank=True,null=True)
    created_date = models.DateTimeField(auto_now_add=True) #search dtg
    notes = models.CharField(max_length=200) #field for user-added notes; unsure ATT if should be attached to user or specific search
    def __str__(self):
        return self.short_title
    
    class Meta: 
        ordering = ['-created']