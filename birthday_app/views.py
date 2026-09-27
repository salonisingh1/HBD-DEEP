from datetime import date
from django.shortcuts import render

def home(request):
    today = date.today()
    return render(request, "birthday_app/home.html", {
        "today": today,
        "pretty_date": today.strftime("%d %B %Y"),
    })
