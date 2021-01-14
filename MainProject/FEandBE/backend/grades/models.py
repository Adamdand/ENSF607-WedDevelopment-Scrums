from django.db import models

# Create your models here.
class Grades(models.Model):
    component = models.CharField(max_length=30)
    outcomes = models.CharField(max_length=30)
    weight = models.IntegerField()