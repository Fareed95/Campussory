# Generated by Django 5.0.3 on 2024-03-07 04:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_remove_formdata_email_remove_formdata_phone_number_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='FormDataCompany',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=100)),
                ('description', models.CharField(default='', max_length=100)),
                ('no_of_people_needed', models.CharField(default='', max_length=100)),
                ('domain_needed', models.CharField(default='', max_length=100)),
                ('interview_date', models.CharField(default='', max_length=100)),
            ],
        ),
    ]
