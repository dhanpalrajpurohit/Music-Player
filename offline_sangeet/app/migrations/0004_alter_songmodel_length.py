# Generated by Django 3.2.16 on 2022-12-04 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_songmodel_length'),
    ]

    operations = [
        migrations.AlterField(
            model_name='songmodel',
            name='length',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
    ]
