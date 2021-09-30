from django.contrib import admin
from .models import TTUser, TTUserAdmin

admin.site.register(TTUser, TTUserAdmin)
