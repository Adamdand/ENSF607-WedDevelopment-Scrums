from django.db import models

# Create your models here.
# add this
class Instructor(models.Model):
  section = models.CharField(max_length=120)
  fname = models.TextField()
  lname = models.TextField()
  phone = models.TextField()
  office = models.TextField()
  email = models.TextField()
  

      
  def __str__(self):
    return self.title