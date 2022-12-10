from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(SongModel)
admin.site.register(PlayListModel)