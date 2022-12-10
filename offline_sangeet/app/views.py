from django.shortcuts import render

from .models import PlayListModel, SongModel as Songs
# Create your views here.


def SongViewList(request):
    song_list = Songs.objects.all()
    song_detail = Songs.objects.all().last()
    data = {
        'song_list': song_list,
        'song_detail': song_detail
    }
    return render(request, "home.html", data)


def PlaySong(request, pk):
    song_list = Songs.objects.all()
    song_detail = Songs.objects.get(pk=pk)
    data = {
        'song_list': song_list,
        'song_detail': song_detail
    }
    return render(request, 'home.html', context=data)

