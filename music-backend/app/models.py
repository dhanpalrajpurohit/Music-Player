from django.db import models
from django.contrib.auth.models import User
import os, uuid
from pytube import YouTube



from django.conf import settings as django_settings
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.


class PlayListModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None, blank=True)
    playlist = models.CharField(default=None, max_length=1024)
    share_link = models.CharField(default=None, blank=True, null=True, max_length=1024)

    def __str__(self) -> str:
        return self.playlist


class SongModel(models.Model):
    uid = models.UUIDField(blank=True, null=True, default = uuid.uuid4)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=None, blank=True)
    name = models.CharField(default=None, blank=True, null=True, max_length=1024)
    song_link = models.CharField(default=None, max_length=1024)
    song_path = models.CharField(default=None, blank=True, null=True, max_length=1024)
    playlist = models.ForeignKey(PlayListModel, on_delete=models.CASCADE, default=None)
    thumbnail_url = models.CharField(default=None, blank=True, null=True, max_length=1024)
    length = models.FloatField(default=None, blank=True, null=True)
    file = models.FileField(upload_to="media", default=None, blank=True, null=True)

    def __str__(self) -> str:
        return str(self.name)


@receiver(post_save, sender=SongModel)
def song_downloader(sender, instance, created, **kwargs):
    if created:
        song_object = YouTube(instance.song_link)
        song = song_object.streams.filter(only_audio=True).first()
        destination = os.path.join(django_settings.MEDIA_ROOT, "song")
        try:
            out_file = song.download(output_path=destination)
            base, ext = os.path.splitext(out_file)
            new_file = destination+"\\"+str(instance.uid) + '.mp3'
            os.rename(out_file, new_file)
        except FileExistsError:
            pass
        instance.name = song_object.title
        instance.song_path = str(instance.uid) + '.mp3'
        instance.thumbnail_url = song_object.thumbnail_url
        instance.length = (song_object.length/60)
        instance.file = new_file
        instance.save()
