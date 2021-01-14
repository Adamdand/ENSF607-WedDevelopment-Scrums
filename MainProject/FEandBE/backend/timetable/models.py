from django.db import models

# Create your models here.

# add this
class TimeTable(models.Model):
  section = models.CharField(max_length=120)
  daysOfWeek = models.TextField()
  time = models.TextField()
  location = models.TextField()
  

      
  def __str__(self):
    return self.title