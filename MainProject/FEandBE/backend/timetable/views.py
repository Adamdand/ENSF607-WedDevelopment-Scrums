from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import TimeTableSerializer      # add this
from .models import TimeTable                     # add this
        
class TimeTableView(viewsets.ModelViewSet):       # add this
  serializer_class = TimeTableSerializer          # add this
  queryset = TimeTable.objects.all()              # add this