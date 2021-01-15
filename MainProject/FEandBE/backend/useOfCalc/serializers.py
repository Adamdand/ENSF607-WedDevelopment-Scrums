from rest_framework import serializers
from useOfCalc.models import UseOfCacl

class UseOfCalcSerializer(serializers.ModelSerializer):
    class Meta:
        model = UseOfCacl
        fields = '__all__'