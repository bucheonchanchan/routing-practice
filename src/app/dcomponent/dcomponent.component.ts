import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'D-component',
  templateUrl: './dcomponent.component.html',
  styleUrls: ['./dcomponent.component.css']
})
export class Dcomponent {
  param: any;


  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      console.log("params: ", params);
    })
    const alphabet = this.route.snapshot.paramMap.get('alphabet');
    console.log("alphabet: ", alphabet);
  }
}
