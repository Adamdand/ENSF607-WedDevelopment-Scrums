from calendarInfo.models import CalendarInfo
from rest_framework import viewsets, permissions
from .serializers import CalendarInfoSerializer

class CalendarInfoViewSet(viewsets.ModelViewSet):
    queryset = CalendarInfo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CalendarInfoSerializer