import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'B-component',
  templateUrl: './bcomponent.component.html',
  styleUrls: ['./bcomponent.component.css']
})
export class Bcomponent {
  constructor(
    private route : ActivatedRoute,
    private router : Router
  ){ }
  
  link(param: string){
    this.router.navigate(['./', param], { relativeTo: this.route });
  }
}
