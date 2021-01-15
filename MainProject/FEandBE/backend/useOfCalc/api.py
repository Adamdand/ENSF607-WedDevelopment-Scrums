from useOfCalc.models import UseOfCacl
from rest_framework import viewsets, permissions
from .serializers import UseOfCalcSerializer

class UseOfCaclViewSet(viewsets.ModelViewSet):
    queryset = UseOfCacl.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UseOfCalcSerializer