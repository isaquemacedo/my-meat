import { Component, OnInit } from '@angular/core';

import {Restaurant} from './restaurant/restaurant.model'
import {RestaurantServices} from './restaurants.service'

import { trigger, style, state, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operator/switchMap';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] 

  searchBarState = 'hidden'

  searchForm: FormGroup
  searchControl: FormControl

  constructor(
    private restaurantServices: RestaurantServices,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.restaurantServices.restaurants()
    .subscribe(restaurants => this.restaurants = restaurants)

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges.switchMap(searchTerm =>
    this.restaurantServices.restaurants(searchTerm)).subscribe(
      restaurants => this.restaurants = restaurants
    )
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
