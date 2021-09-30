from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(EcommerceCategory)
admin.site.register(EcommerceOrder)
admin.site.register(EcommerceProduct)
admin.site.register(EcommerceOrderItem)
