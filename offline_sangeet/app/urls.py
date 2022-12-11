from django.urls import path

from .views import *

urlpatterns = [
    path('', get_song, name='song-list-view'),
    path('<int:pk>/', play_song, name='play-song'),
]
