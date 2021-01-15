from django.db import models

# Create your models here.

class UseOfCacl(models.Model):
    
    value = models.CharField(max_length=1000)
