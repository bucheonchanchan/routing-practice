import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'E-component',
  templateUrl: './ecomponent.component.html'
})
export class Ecomponent {
  userId: any;
  obs: any;

  constructor(
    public route: ActivatedRoute
  ){ }

  ngOnInit(){
    console.log("snapshot paramMap: ", this.route.snapshot.paramMap.get('id'));


    this.route.queryParams.subscribe(queryParams => {
      // do something with the query params
      console.log("queryParams: ", queryParams);
    });
    this.route.params.subscribe(routeParams => {
      console.log("routeParams: ", routeParams);
      this.userId = routeParams['id'];
    });
  }
}
