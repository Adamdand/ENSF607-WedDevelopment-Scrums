from grades.models import Grades
from rest_framework import viewsets, permissions
from .serializers import GradesSerializer

class GradesViewSet(viewsets.ModelViewSet):
    queryset = Grades.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = GradesSerializer