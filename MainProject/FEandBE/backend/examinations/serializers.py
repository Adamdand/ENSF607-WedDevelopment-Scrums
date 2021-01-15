from rest_framework import serializers
from examinations.models import Examinations

class ExaminationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examinations
        fields = '__all__'