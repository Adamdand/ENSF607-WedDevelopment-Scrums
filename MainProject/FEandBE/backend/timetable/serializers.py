
# todo/serializers.py

from rest_framework import serializers
from .models import TimeTable
      
class TimeTableSerializer(serializers.ModelSerializer):
  class Meta:
    model = TimeTable
    fields = ('id', 'section', 'daysOfWeek', 'time', 'location')