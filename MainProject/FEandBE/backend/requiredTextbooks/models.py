from django.db import models

# Create your models here.
class RequiredTextBooks(models.Model):
    title = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    edition = models.CharField(max_length=30)
    publisher = models.CharField(max_length=30)
