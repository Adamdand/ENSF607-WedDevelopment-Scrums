from django.db import models

# Create your models here.

class CalendarInfo(models.Model):
    
    coursecode = models.CharField(max_length=30)
    coursenumber = models.IntegerField()
    coursename = models.CharField(max_length=30)
    coursehours = models.CharField(max_length=30)
    academiccredit = models.IntegerField()
    calendarref = models.URLField()
    value = models.CharField(max_length=1000)