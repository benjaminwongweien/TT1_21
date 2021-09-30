from django.db import models

# Create your models here.

class Ecommerce(models.Model):
    name = models.CharField(unique=True, max_length=255, null=False)
    description = models.TextField(null=False)
    image = models.TextField(null=False)