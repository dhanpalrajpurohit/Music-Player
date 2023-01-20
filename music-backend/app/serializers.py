from rest_framework import serializers

from .models import SongModel


class PlaySongSerializer(serializers.ModelSerializer):
    class Meta:
        model = SongModel
        fields = '__all__'
