from rest_framework import serializers
from leads.models import Team, Distance


class TeamActvSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class DistanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distance
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    distance = DistanceSerializer(many=True, read_only=True)
    class Meta:
        model = Team
        fields = '__all__'