from django.db import models
import random
from django.core.exceptions import ValidationError
from django.shortcuts import redirect


class WeekdayField(models.CharField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault('choices', self.get_weekday_choices())
        super().__init__(*args, **kwargs)

    def get_weekday_choices(self):
        weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        random.shuffle(weekdays)
        return [(day, day) for day in weekdays]

class Client(models.Model):
    client_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50, default="")
    variable1 = WeekdayField(max_length=50)  # Use WeekdayField instead of CharField
    variable2 = WeekdayField(max_length=50)  # Use WeekdayField instead of CharField
    variable3 = WeekdayField(max_length=50)  # Use WeekdayField instead of CharField
    

    def save(self, *args, **kwargs):
        if self.variable1 == self.variable2 or self.variable1 == self.variable3 or self.variable2 == self.variable3:
            return redirect('admin:backend_client_add')  # Replace 'backend_client_add' with your actual add URL name
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
