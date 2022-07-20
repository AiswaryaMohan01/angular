import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
//import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  repeatpass:string='none'
  constructor() { }

  ngOnInit(): void {
  }
  registerForm=new FormGroup({
  firstname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
  lastname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
  email:new FormControl("",[Validators.required,Validators.email]),
  phone:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10)]),
  mci:new FormControl("",[Validators.required,Validators.pattern("[0-9]*")]),
  password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
  conformpassword :new FormControl(""),
});
registerSubmited()
{
  if(this.password.value==this.confrompassword.value){
   console.log("submitted");
  //console.log(this.registerForm.get("firstname"));
  //firstname:['',Validators.required]
  
  //this.authService.registerUser().subscribe ((res: any) =>{
   // console.log(res);
  }
  else
  {
    this.repeatpass='inline'
  }
}
get Firstname() :FormControl
{
return this.registerForm.get("firstname") as FormControl;
}
get lastname() :FormControl
{
return this.registerForm.get("lastname") as FormControl;
}
get email() :FormControl
{
return this.registerForm.get("email") as FormControl;
}
get phone() :FormControl
{
return this.registerForm.get("phone") as FormControl;
}
get mci() :FormControl
{
return this.registerForm.get("mci") as FormControl;
}
get password() :FormControl
{
return this.registerForm.get("password") as FormControl;
}
get confrompassword() :FormControl
{
return this.registerForm.get("conformpassword") as FormControl;
}
}