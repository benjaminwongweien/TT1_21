# Django Models
from typing import List
from django.db import models

# Abstract User for Custom User Model
from django.contrib.auth.models import AbstractUser

class TTUser(AbstractUser):
    """
    CFP Custom User Model
    """

    class Meta:
        # A human-readable name for the object.
        verbose_name = verbose_name_plural = "TT User"

    # ╔═══════════╗
    # ║ Read Only ║
    # ╚═══════════╝

    # ╔════════╗
    # ║ Fields ║
    # ╚════════╝
    

    postalcode = models.CharField(
        verbose_name = 'Postal Code',
        max_length=255,
        blank=True
    )

    gender = models.CharField(
        max_length=255,
        blank=True   
    )


from django.contrib.auth.admin import UserAdmin

# ====================================================
#  !IMPORTANT!  !IMPORTANT!  !IMPORTANT!  !IMPORTANT!
# ====================================================


class TTUserAdmin(UserAdmin):
    """
    TT Custom User Model Admin Customization
    """

    readonly_fields = []

    fieldsets = (
        (
            ('Basic Authentication Information'),
            {
                'fields':
                    (
                        'username',
                        'password',
                        'email',
                    )
            }
        ),
        (
            ('Permissions'),
            {'fields':
                (
                    'is_superuser',
                    'is_staff',
                    'is_active',
                    'groups',
                    'user_permissions'
                ),
             'classes': ('collapse',)
             }
        ),
        (
            ('Profile'),
            {'fields':
                (
                    'first_name',
                    'last_name',
                    'postalcode',
                ),
             'classes': ('collapse',),
             'description': "<strong>The Basic Profile Information of each User.</strong>"
             }
        ),
        (
            ('Important dates'),
            {'fields':
                (
                    'last_login',
                    'date_joined'
                ),
             'classes': ('collapse',)
             }
        ),
    )
