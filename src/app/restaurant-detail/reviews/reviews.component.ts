import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestaurantServices } from '../../restaurants/restaurants.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private RestaurantServices: RestaurantServices,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.RestaurantServices.reviewsOfRestaurants(this.route.parent.snapshot.params['id'])
  }

}
