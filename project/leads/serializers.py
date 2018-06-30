from rest_framework import serializers
from leads.models import Team, Distance
class TeamSerializer(serializers.ModelSerializer):
    distance = serializers.StringRelatedField(many=True)
    class Meta:
        model = Team
        fields = ('id', 'name', 'responsible', 'activated', 'distance')

class DistanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Distance
        fields = ('id', 'meters', 'team')
