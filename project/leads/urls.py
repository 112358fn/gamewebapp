from django.urls import path, re_path
from . import views

urlpatterns = [
    path('api/team/', views.TeamListAPI.as_view() ),
    path('api/team/<int:pk>/', views.TeamRetriveAPI.as_view() ),
    path('api/distance/', views.DistanceCreateAPI.as_view()) ,
]

