# Generated by Django 5.1.3 on 2024-11-12 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('health_monitor_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='is_superuser',
            field=models.BooleanField(default=False),
        ),
    ]
