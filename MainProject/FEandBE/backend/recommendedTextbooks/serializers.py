from rest_framework import serializers
from recommendedTextbooks.models import RecommendedTextBooks


class RecommendedTextBooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecommendedTextBooks
        fields = '__all__'