from django.shortcuts import render
from django.db.models import Max, Count
from leads.models import Team, Distance
from leads.serializers import TeamSerializer, TeamActvSerializer, DistanceSerializer
from rest_framework import generics

class TeamListAPI(generics.ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class TeamRetriveAPI(generics.RetrieveUpdateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamActvSerializer

class DistanceListCreate(generics.ListCreateAPIView):
    queryset = Distance.objects.all()
    serializer_class = DistanceSerializer

