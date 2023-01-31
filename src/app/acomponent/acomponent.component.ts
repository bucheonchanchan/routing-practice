import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'A-component',
  templateUrl: './acomponent.component.html',
  styleUrls: ['./acomponent.component.css']
})
export class Acomponent {
  array = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' },
  ];

  constructor(
    private route : ActivatedRoute,
    private router : Router
  ){ }

  subLink(id: number){
    // this.router.navigate(['/A/E'], { queryParams: { id, name: 'chanki'}});
    this.router.navigate(['./', id], { relativeTo: this.route });
    console.log('hi');
  }
  
  link(param: string){
    this.router.navigate(['./', param], { relativeTo: this.route });
  }
}
