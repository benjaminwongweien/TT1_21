from re import L
from rest_framework import serializers
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer
from ..models import EcommerceOrder, EcommerceProduct, EcommerceOrderItem


class ProductSerializer(ModelSerializer):

    class Meta:

        model = EcommerceProduct

        fields = "__all__"

class EcommerceOrderS(ModelSerializer):
    
    class Meta:
        
        model = EcommerceOrder
        
        fields = "__all__"

class OrderCreateSerializer(ModelSerializer):

    class Meta:

        model = EcommerceOrderItem

        fields = "__all__"


class OrderGetSerializer(ModelSerializer):

    class Meta:

        model = EcommerceOrderItem

        fields = "__all__"


class OrderRemoveSerializer(ModelSerializer):

    class Meta:

        model = EcommerceOrder

        fields = "pk"

class OrderItemRemoveSerializer(ModelSerializer):

    class Meta:

        model = EcommerceOrderItem

        fields = "pk"
