from django.contrib import admin

# Register your models here.
from .models import TimeTable # add this
    
class TimeTableAdmin(admin.ModelAdmin):  # add this
  list_display = ('section', 'daysOfWeek', 'time', 'location') # add this
        
# Register your models here.
admin.site.register(TimeTable, TimeTableAdmin) # add this