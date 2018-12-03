import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantServices} from './restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restaurantServices: RestaurantServices) { }

  ngOnInit() {
    this.restaurantServices.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }

}
