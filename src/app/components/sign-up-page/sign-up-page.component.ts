import { Component, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { MdDialog } from '@angular/material';

import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  height: Number;
  public signUpForm: FormGroup;
  public username: AbstractControl;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(private router: Router, private location: Location, private fb: FormBuilder, public dialog: MdDialog) {
    this.signUpForm = this.fb.group({
      username: '', // <--- the FormControl called "name"
      email: '', // <--- the FormControl called "name"
      password: ''
    });

    this.username = this.signUpForm.controls['username'];
    this.password = this.signUpForm.controls['password'];
    this.height = window.innerHeight - 20;
  }

  ngOnInit() {
  }

  onSignUp() {
  }

  onBack() {
    this.location.back();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = event.target.innerHeight - 20;
  }

}
