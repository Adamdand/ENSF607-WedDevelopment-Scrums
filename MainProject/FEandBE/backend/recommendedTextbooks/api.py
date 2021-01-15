from recommendedTextbooks.models import RecommendedTextBooks
from rest_framework import viewsets, permissions
from .serializers import RecommendedTextBooksSerializer

class RecommendedTextBooksViewSet(viewsets.ModelViewSet):
    queryset = RecommendedTextBooks.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RecommendedTextBooksSerializer