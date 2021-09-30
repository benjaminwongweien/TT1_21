from django.shortcuts import render
from rest_framework.generics import ListAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.
from .serializers.serializers import *
from .models import EcommerceProduct, EcommerceOrder, EcommerceOrderItem


class ViewAllProducts(ListAPIView):

    serializer_class = ProductSerializer
    queryset = EcommerceProduct.objects.all()
    permission_classes = []


class GetOrders(ListAPIView):

    serializer_class = OrderGetSerializer
    queryset = EcommerceOrder.objects.all()
    permission_classes = [IsAuthenticated]

    def filter_queryset(self, queryset):
        pk = EcommerceOrder.objects.filter(customer_id=self.request.user).all()
        return EcommerceOrderItem.objects.filter(order_id__pk__in=pk).all()


class DeleteOrderItem(DestroyAPIView):

    permission_classes = [IsAuthenticated]
    queryset = EcommerceOrderItem.objects.all()
    serializer_class = OrderItemRemoveSerializer
    

class DeleteOrder(DestroyAPIView):

    permission_classes = [IsAuthenticated]
    queryset = EcommerceOrder.objects.all()
    serializer_class = OrderRemoveSerializer


class UpdateOrder(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = EcommerceOrder.objects.all()
    serializer_class = EcommerceOrderS

class UpdateOrderItem(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = EcommerceOrderItem.objects.all()
    serializer_class = OrderCreateSerializer

class AddOrder(APIView):

    serializer_class = OrderCreateSerializer
    permission_classes = [IsAuthenticated]
    queryset = EcommerceOrderItem.objects.all()

    def post(self, request, *args, **kwargs):

        new_order = EcommerceOrder.objects.create(
            customer_id=request.user, status=1)

        for x in request.data:

            x["order_id"] = new_order
            x["product_id"] = EcommerceProduct.objects.filter(
                pk=x["product_id"]).first()
            x["total_price"] = x["product_id"].price * x["product_qty"]

            EcommerceOrderItem.objects.create(**x)

        return Response({}, status=200)
