import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

   loginform = new FormGroup({
    user:new FormControl(''),
    password:new FormControl('')
   });

   loginCalled(){
    console.log(this.loginform.value);
   }
}
