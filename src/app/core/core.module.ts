import { NgModule } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantServices } from "../restaurants/restaurants.service";
import { OrderService } from "../order/order.service";

@NgModule({
    providers: [ShoppingCartService, RestaurantServices, OrderService]
})
export class CoreModule {}