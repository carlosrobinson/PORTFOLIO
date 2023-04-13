from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse



def show_all_comics(request):
    # return HttpResponse('<h1> Display All Available Comics</h1>')
    context = {}
    return render(request,'comicbook/index.html', context )