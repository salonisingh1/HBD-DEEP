from pathlib import Path
import os 

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "deepak-birthday-local-demo-secret-key"
DEBUG = True
ALLOWED_HOSTS = [
   ".vercel.app",
    "localhost",
    "127.0.0.1",
]

if os.environ.get("VERCEL_URL"):
    ALLOWED_HOSTS.append(os.environ["VERCEL_URL"])

INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.staticfiles",
    "birthday_app",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "birthday_project.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
            ],
        },
    },
]

WSGI_APPLICATION = "birthday_project.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kolkata"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

CSRF_TRUSTED_ORIGINS = [
    "https://*.vercel.app",
]