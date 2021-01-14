from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import InstructorSerializer      # add this
from .models import Instructor                     # add this
        
class InstructorView(viewsets.ModelViewSet):       # add this
  serializer_class = InstructorSerializer          # add this
  queryset = Instructor.objects.all()              # add this