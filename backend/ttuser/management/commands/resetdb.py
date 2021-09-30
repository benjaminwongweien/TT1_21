# File Operations
import os, glob, shutil

# Get the Platform
from sys import platform

# Django Settings
from django.conf import settings

# Django Sites
from django.contrib.sites.models import Site

# Djnago Command
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    """
    Django Manage.py Command
    
    Resets the Database By:
    (1) Deleting the Database File (If any)
    (2) Deleting All Migrations
    (3) Running Make Migrations
    (4) Running Migrate
    (5) Creating One Super User
    
    """
    def add_arguments(self, parser):
        
        parser.add_argument(
            '-sdn', '--site_domain_name',  
            dest  = "domain",
            type  = str,
            default = "",
            help = "Domain Name of the Site"
        ),
        
        parser.add_argument(
            '-sn', '--site_name',  
            dest  = "name",
            type  = str,
            default = "",
            help = "Name of the Site"
        ),
    
    help = 'Resets the database'

    def handle(self, *args, **options) -> None:
        """
        Handles the Resetting of Database
        
        :param self: self
        """
        
        print("[1] Getting the Name of the Database")
        dbname = settings.DATABASES["default"]["NAME"]
        
        print("[2] Attempting to Delete the Database")
        try:
            os.remove(dbname)
        except FileNotFoundError:
            print("Database Not Found, Proceeding...")

        print("[3] Attempting to Delete all the Migrations")
        base = str(settings.BASE_DIR)
        migrations = glob.glob(os.path.join(base, "*", "migrations"))

        for migration in migrations:
            shutil.rmtree(migration)
            
        if platform == "linux" or platform == "linux2":
            # Linux
            apps = [migration.split("/")[-2] for migration in migrations]
        elif platform == "darwin":
            # OSX
            apps = [migration.split("/")[-2] for migration in migrations]
        elif platform == "win32":
            apps = [migration.split("\\")[-2] for migration in migrations]

        print("[4] Making Migrations")
        for app in apps:
            os.system("python manage.py makemigrations %s" % app)
            
        print("[5] Migrating")
        os.system("python manage.py migrate")
        
        if options["name"] and options["domain"]:
            print("[6] Changing the Default Site Domain and Name")
            site = Site.objects.all().first()
            site.domain = options["name"]
            site.name = options["domain"]
            site.save()
        else:
            print("[SKIP] Changing the Default Site Domain and Name (either field is blank)")
            print("Site Name  :", options["name"])
            print("Domain Name:", options["domain"])
        
        print("[7] Creating Super User")
        email, username, password = "test@test.test", "admin", "admin"
        print("E-mail  :", email)
        print("Username:", username)
        print("Password:", password)

        try:
            # create environment variable for password
            os.environ['DJANGO_SUPERUSER_PASSWORD'] = password
            os.system(f"python manage.py createsuperuser --username {username} --noinput --email {email} --skip-checks")
        
        except Exception as e:
            print(e)
        
