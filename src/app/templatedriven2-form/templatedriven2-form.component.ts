import { Component } from '@angular/core';

@Component({
  selector: 'templatedriven2-form',
  templateUrl: './templatedriven2-form.component.html',
  styleUrls: ['./templatedriven2-form.component.css']
})
export class Templatedriven2FormComponent {

  loginCalled(item:string){
    console.log(item);
  }
}
