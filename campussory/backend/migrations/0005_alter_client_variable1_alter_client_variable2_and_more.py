# Generated by Django 5.0.3 on 2024-03-06 08:10

import backend.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_alter_client_variable1_alter_client_variable2_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='variable1',
            field=backend.models.WeekdayField(choices=[('Sunday', 'Sunday'), ('Saturday', 'Saturday'), ('Wednesday', 'Wednesday'), ('Tuesday', 'Tuesday'), ('Monday', 'Monday'), ('Friday', 'Friday'), ('Thursday', 'Thursday')], max_length=50),
        ),
        migrations.AlterField(
            model_name='client',
            name='variable2',
            field=backend.models.WeekdayField(choices=[('Friday', 'Friday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday'), ('Tuesday', 'Tuesday'), ('Thursday', 'Thursday'), ('Monday', 'Monday'), ('Wednesday', 'Wednesday')], max_length=50),
        ),
        migrations.AlterField(
            model_name='client',
            name='variable3',
            field=backend.models.WeekdayField(choices=[('Thursday', 'Thursday'), ('Tuesday', 'Tuesday'), ('Friday', 'Friday'), ('Wednesday', 'Wednesday'), ('Monday', 'Monday'), ('Saturday', 'Saturday'), ('Sunday', 'Sunday')], max_length=50),
        ),
    ]