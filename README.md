### Create and Activate venv
```
    python -m venv venv
    Linux: source venv/bin/activate
```

### Installing dependencies
```
    pip install -r requirements.txt
```

### Freeze library
```
    pip freeze > requirements.txt
```

### Run project
```
    python manage.py runserver
```

### Migrate database
```
    python manage.py makemigrations
    python manage.py migrate
```

### Create new app
```
    python manage.py startapp new_app
```

### Open Django Shell
```
    python manage.py shell
```

### Create superuser
```
    python manage.py createsuperuser
```

### Change user's password
```
    python manage.py changepassword [username]
```