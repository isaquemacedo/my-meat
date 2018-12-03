import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RestaurantServices } from '../../restaurants/restaurants.service';
import {MenuItem} from '../menu-item/menu-item.model'

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private RestaurantServices: RestaurantServices,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.RestaurantServices.menuOfRestaurants(
      this.route.parent.snapshot.params['id']
    )
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
