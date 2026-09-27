# Deepak Birthday — Django Birthday Experience 🎂

A personalized birthday website for Deepak ("Baby"), built with Python + Django.

## Run on Windows

```powershell
cd deepak_birthday_django
py -m venv venv
venv\Scripts\activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Open: http://127.0.0.1:8000/

If `py` doesn't work, use `python` instead.

## Run on macOS/Linux

```bash
cd deepak_birthday_django
python3 -m venv venv
source venv/bin/activate
python -m pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## What's inside

- Today's date in the hero title
- Personalized "Happy Birthday Baby, Deepak"
- Memory/love section
- Click-to-reveal love notes
- Funny pickup-line generator
- Personalized "How well do you know us?" quiz
- Confetti celebration
- Final birthday letter
- Responsive design for phone and laptop

## Customize

The main text is in:
`birthday_app/templates/birthday_app/home.html`

The styling is in:
`birthday_app/static/birthday_app/style.css`

The interactive quiz, notes, pickup lines and confetti are in:
`birthday_app/static/birthday_app/app.js`

You can replace the placeholder memories/messages with your own private jokes, photos, or memories.


## Share it with Deepak

For a link that he can open from his phone without installing Python, **yes, deploy the project**.

A simple option is **Render**:
1. Push this project to GitHub.
2. Create a new Web Service on Render and connect the GitHub repository.
3. Build command: `pip install -r requirements.txt`
4. Start command: `gunicorn birthday_project.wsgi:application`
5. After deployment, Render gives you a public `https://...onrender.com` link.
6. Send that link to Deepak on WhatsApp/Instagram.

For local testing, `python manage.py runserver` is enough, but that URL only works on your own computer.
