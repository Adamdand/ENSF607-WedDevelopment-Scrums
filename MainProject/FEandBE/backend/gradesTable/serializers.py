from rest_framework import serializers
from gradesTable.models import GradesTable


class GradesTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = GradesTable
        fields = '__all__'