import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'reactivedriven2-form',
  templateUrl: './reactivedriven2-form.component.html',
  styleUrls: ['./reactivedriven2-form.component.css']
})
export class Reactivedriven2FormComponent {

  loginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });

  loginCalled(){
    console.log(this.loginForm.value);
  }
}
