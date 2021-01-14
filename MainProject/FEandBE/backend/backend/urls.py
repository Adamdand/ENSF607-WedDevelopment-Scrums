
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from todo import views                            # add this
from timetable import views as timeviews
from instructor import views as instructorviews
        
router = routers.DefaultRouter()                      # add this
router.register(r'todos', views.TodoView, 'todo')     # add this
router.register(r'timetable', timeviews.TimeTableView, 'timetable')
router.register(r'instructor', instructorviews.InstructorView, 'instructor')

urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                # add this
]