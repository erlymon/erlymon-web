/**
    Erlymon is an open source GPS tracking system for various GPS tracking devices.

    Copyright (C) 2015, Sergey Penkovsky <sergey.penkovsky@gmail.com>.

    This file is part of Erlymon.

    Erlymon is free software: you can redistribute it and/or  modify
    it under the terms of the GNU Affero General Public License, version 3,
    as published by the Free Software Foundation.

    Erlymon is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
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
