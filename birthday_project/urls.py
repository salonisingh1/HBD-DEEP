from django.urls import include, path

urlpatterns = [
    path("", include("birthday_app.urls")),
]
