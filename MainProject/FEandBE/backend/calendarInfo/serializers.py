from rest_framework import serializers
from calendarInfo.models import CalendarInfo

class CalendarInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CalendarInfo
        fields = '__all__'