from django.db import models

# Create your models here.
class GradesTable(models.Model):
    letter = models.CharField(max_length=2)
    minGrade = models.IntegerField()
