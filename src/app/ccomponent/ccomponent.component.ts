import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'C-component',
  templateUrl: './ccomponent.component.html',
  styleUrls: ['./ccomponent.component.css']
})
export class Ccomponent {
  param: any;
  userId: any;
  
  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id;
    console.log("id: ", id);
  }
  ngOnChanges(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log("???");
  }
}
