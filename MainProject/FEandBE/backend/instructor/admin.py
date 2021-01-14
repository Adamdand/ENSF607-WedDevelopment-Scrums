from django.contrib import admin

# Register your models here.
from .models import Instructor # add this
    
class InstructorAdmin(admin.ModelAdmin):  # add this
  list_display = ('section', 'fname', 'lname', 'phone', 'office', 'email') # add this
        
# Register your models here.
admin.site.register(Instructor, InstructorAdmin) # add this