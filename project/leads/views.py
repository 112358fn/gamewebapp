from django.shortcuts import render
from leads.models import Team, Distance
from leads.serializers import TeamSerializer, DistanceSerializer
from rest_framework import generics

class TeamListAPI(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class DistanceListCreate(generics.ListCreateAPIView):
    queryset = Distance.objects.all()
    serializer_class = DistanceSerializer

