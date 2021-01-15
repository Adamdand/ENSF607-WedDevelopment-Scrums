from examinations.models import Examinations
from rest_framework import viewsets, permissions
from .serializers import ExaminationsSerializer

class ExaminationsViewSet(viewsets.ModelViewSet):
    queryset = Examinations.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExaminationsSerializer