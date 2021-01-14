from gradesTable.models import GradesTable
from rest_framework import viewsets, permissions
from .serializers import GradesTableSerializer

class GradesTableViewSet(viewsets.ModelViewSet):
    queryset = GradesTable.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GradesTableSerializer