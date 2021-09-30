from django.db import models

# Create your models here.

class EcommerceCategory(models.Model):
    
    id = models.IntegerField(unique=True, primary_key=True, null=False)
    name = models.CharField(unique=True, max_length=255, null=False)
    description = models.TextField(null=False)
    image = models.TextField(null=False)

class EcommerceCustomer(models.Model):
    
    id = models.IntegerField(unique=True, primary_key=True, null=False)
    name = models.CharField(unique=True, max_length=255, null=False)
    password = models.CharField(max_length=255, null=False)
    first_name = models.CharField(max_length=255, null=False)
    last_name = models.CharField(max_length=255, null=False)
    postal_code = models.CharField(max_length=255, null=False)
    gender = models.CharField(max_length=50, null=False)
    created_at = models.DateField(null=false)

class EcommerceOrder(models.Model):
    
    id = models.IntegerField(unique=True, primary_key=True, null=False)
    customer_id = models.IntegerField(null=False)
    status = models.IntegerField(null=False)
    created_at = models.DateField(null=False)

class EcommerceOrderItem(models.Model):
    product_id = models.IntegerField(unique=True, primary_key=True, null=False)
    order_id = models.IntegerField(null=False)
    product_qty = models.IntegerField(null=True)
    total_price = models.models.FloatField(null=True)

class EcommerceProduct(models.Model):
    id = models.IntegerField(unique=True, primary_key=True, null=False)
    title = models.TextField(null=False)
    price = models.models.FloatField(null=True)
    description = models.TextField(null=False)
    category_id = models.IntegerField(null=False)
    image = models.TextField(null=False)
    qty = models.IntegerField(null=False)


