from django.db import models

# Create your models here.

class Examinations(models.Model):
    
    value = models.CharField(max_length=1000)