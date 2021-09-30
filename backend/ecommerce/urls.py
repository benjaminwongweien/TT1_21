from django.urls import path
from .views import *

urlpatterns = [
    
    path("api/products/", ViewAllProducts.as_view()),
    path("api/addorder/", AddOrder.as_view()),
    path("api/orders/", GetOrders.as_view())
    
]