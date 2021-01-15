from requiredTextbooks.models import RequiredTextBooks
from rest_framework import viewsets, permissions
from .serializers import RequiredTextBooksSerializer

class RequiredTextBooksViewSet(viewsets.ModelViewSet):
    queryset = RequiredTextBooks.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RequiredTextBooksSerializer