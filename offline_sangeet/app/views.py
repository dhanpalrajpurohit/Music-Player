import http
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.http.response import JsonResponse

from .models import PlayListModel, SongModel as Songs
from .serializers import PlaySongSerializer
# Create your views here.


@api_view(['GET'])
def get_song(request):
    song_list = Songs.objects.all()
    song_serializer = PlaySongSerializer(song_list, many=True)
    return JsonResponse({"data": song_serializer.data}, status=200)


@api_view(['GET'])
def play_song(request, pk):
    song_list = Songs.objects.get(pk=pk)
    song_serializer = PlaySongSerializer(song_list)
    return JsonResponse({"data": song_serializer.data}, status=200)

