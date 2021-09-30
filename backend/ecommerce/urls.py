from django.urls import path, re_path
from .views import *

urlpatterns = [
    
    path("api/products/", ViewAllProducts.as_view()),
    path("api/addorder/", AddOrder.as_view()),
    path("api/orders/", GetOrders.as_view()),
    re_path("api/order/update/(?P<pk>[0-9A-Za-z]+)/", UpdateOrder.as_view()),
    re_path("api/orderitem/update/(?P<pk>[0-9A-Za-z]+)/", UpdateOrderItem.as_view()),
    re_path("api/orderitem/delete/(?P<pk>[0-9A-Za-z]+)/", DeleteOrderItem.as_view()),
    re_path("api/order/delete/(?P<pk>[0-9A-Za-z]+)/", DeleteOrder.as_view())
    
]