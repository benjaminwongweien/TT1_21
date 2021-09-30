from django.db import models
from django.conf import settings

# Create your models here.


class EcommerceCategory(models.Model):

    name = models.CharField(unique=True, max_length=255, null=False)
    description = models.TextField(null=False)
    image = models.TextField(null=False)


class EcommerceOrder(models.Model):

    customer_id = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user")
    status = models.IntegerField(null=False)
    created_at = models.DateField(null=False)


class EcommerceProduct(models.Model):
    title = models.TextField(null=False)
    price = models.FloatField(null=True)
    description = models.TextField(null=False)
    category_id = models.ForeignKey(
        EcommerceCategory, on_delete=models.CASCADE, related_name="orderitem")
    image = models.TextField(null=False)
    qty = models.IntegerField(null=False)


class EcommerceOrderItem(models.Model):
    product_id = models.ForeignKey(
        EcommerceProduct, on_delete=models.CASCADE, related_name="orderitem")
    order_id = models.ForeignKey(
        EcommerceOrder, on_delete=models.CASCADE, related_name="orderitem")
    product_qty = models.IntegerField(null=True)
    total_price = models.FloatField(null=True)
