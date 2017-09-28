import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { MdDialog } from '@angular/material';

import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  height: Number;
  public signInForm: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, public dialog: MdDialog) {
    this.signInForm = this.fb.group({
      email: '', // <--- the FormControl called "name"
      password: ''
    });

    this.username = this.signInForm.controls['email'];
    this.password = this.signInForm.controls['password'];
    this.height = window.innerHeight - 20;
  }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }

  onSignIn() {
    this.router.navigate(['/']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = event.target.innerHeight - 20;
  }

}
