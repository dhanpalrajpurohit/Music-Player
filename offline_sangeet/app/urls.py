from django.urls import path

from .views import *

urlpatterns = [
    path('', SongViewList, name='song-list-view'),
    path('<int:pk>/', PlaySong, name='play-song'),
]
