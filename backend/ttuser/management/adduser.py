# UUID
from uuid import uuid4

# Get the Platform
from sys import platform

# Django Settings
from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

# DB Utils
import django.db.utils

# Secrets
import secrets

def gen_safe_password(password_length = 13):
    return secrets.token_urlsafe(password_length)

# Auth
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from allauth.account.models import EmailAddress 

# Djnago Command
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    """
    Django Manage.py Command
    
    Creates a New User    
    """
    
    help = 'Creates a New User'
    
    def clean_up(self, user):
        print("Cleaning Up: Removing Added User")
        user.delete()
    
    def add_arguments(self, parser):
        
        parser.add_argument(
            '-u', '--username',  
            dest  = "username",
            type  = str,
            default = uuid4().__str__(),
            help = "Username of the User"
        ),
        
        parser.add_argument(
            '-p', '--password',  
            dest  = "password",
            type  = str,
            default = gen_safe_password(),
            help = "Password of the User"
        )

        parser.add_argument(
            '-e', '--email', 
            dest     = "email",
            type     = str,
            required = True,
            help     = "Email of the User",
        )
        
        parser.add_argument(
            '-g', '--groups', 
            dest     = "groups",
            nargs    = '+',
            type     = str,
            default  = ["speaker"],
            help     = "Groups the User is in (If Exists)",  
        )
        
        parser.add_argument(
            '-fn', '--first_name', 
            dest     = "first_name",
            type     = str,
            default  = "",
            help     = "First Name of the User",
        )
        
        parser.add_argument(
            '-ln', '--last_name', 
            dest     = "last_name",
            type     = str,
            default  = "",
            help     = "Last Name of the User",
        )
        
        parser.add_argument(
            '-ev', '--email_verified', 
            dest     = "verified",
            action   = 'store_true',
            help     = "Is the Email Verified?",
        )

    def handle(self, *args, **options) -> None:
        """
        Handles the Adding of a new User
        
        :param self: self
        """
        User = get_user_model()
        
        print("[1] Creating User Model")
        
        try:
            user = User.objects.create_user(
                username = options["username"],
                password = options["password"],
                email    = options["email"]
            )
        except django.db.utils.IntegrityError as e:
            print("[ERR] Integrity Error, User Might Probably Already Exist")
            print("See CFP User Information: CFP User Table")
            print(e)
            return
        
        print("[2] Adding User Groups")
        
        try:
            groups = [Group.objects.get(name=x) for x in options["groups"]]
        except ObjectDoesNotExist as e:
            print("[ERR] One of your groups:", *options["groups"], "Does not Exist")
            print("See Authentication & Authroization: Groups Table")
            print(e)
            return self.clean_up(user)
        
        try:
            user.groups.set(groups)
        except Exception as e:
            print("Exception occured when adding groups")
            print(e)
            return self.clean_up(user)
        
        print("[3] Adding User Details")
            
        if options.get("first_name"):
            user.first_name = options["first_name"]
            
        if options.get("last_name"):
            user.first_name = options["first_name"]
            
        user.save()
            
        print("[4] Adding User Email Address")
        
        try:
            EmailAddress.objects.create(
                user     = user,
                email    = options["email"],
                primary  = True,
                verified = options["verified"]
            ),
        except django.db.utils.IntegrityError as e:
            print("[ERR] Integrity Error, Email Might Probably Already Exist")
            print("See Accounts: Email Table")
            print(e)
            return self.clean_up(user)
        
        msg = f"""----------
[SUCCESS] CREATED USER:
Username  : {options["username"]}
Password  : {options["password"]}
First Name: {options["first_name"] if options["first_name"] else "Blank"}
Last Name : {options["last_name"] if options["last_name"] else "Blank"}
Groups    : {", ".join(options["groups"])}

Email     : {options["email"]}
Primary   : {True}
verified  : {options["verified"]}
----------"""

        print(msg)
        
        
        
        