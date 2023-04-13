from django.urls import path

from . import views
app_name = 'comicbook'

urlpatterns = [
    path('', views.show_all_comics),
    # path('/<int:universeid>', views.show_this_comic),
    # path('/<str:universe_name>', views.show_this_universe),
]