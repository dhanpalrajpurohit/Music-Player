# Generated by Django 3.2.16 on 2022-12-10 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_songmodel_song_path'),
    ]

    operations = [
        migrations.AddField(
            model_name='songmodel',
            name='file',
            field=models.FileField(blank=True, default=None, null=True, upload_to='media'),
        ),
    ]
