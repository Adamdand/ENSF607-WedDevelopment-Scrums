from rest_framework import serializers
from requiredTextbooks.models import RequiredTextBooks


class RequiredTextBooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequiredTextBooks
        fields = '__all__'