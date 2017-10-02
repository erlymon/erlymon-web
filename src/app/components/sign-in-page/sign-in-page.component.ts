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
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { MdDialog } from '@angular/material';

import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

import { CountryCodeService } from '../../services/country-code.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  height: Number;
  public signInForm: FormGroup;
  public submitted: boolean = false;

  selectedLanguage: string;
  languages = [];

  constructor(
    private translate: TranslateService,
    private countryCode: CountryCodeService,
    private session: SessionService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MdDialog
  ) {
    for (let i in this.translate.getLangs()) {
      var code = this.translate.getLangs()[i]
      this.languages.push({ name: countryCode.getLanguageNativeName(code), value: code });
    }
    this.selectedLanguage = translate.currentLang;
    this.signInForm = this.fb.group({
      language: '', // <--- the FormControl called "name"
      email: '', // <--- the FormControl called "name"
      password: ''
    });

    this.height = window.innerHeight - 20;
  }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigate(['/signup']);
  }

  onSignIn() {
    this.session.setData({});
    this.router.navigate(['/main']);
  }

  onChangeLanguage() {
    this.translate.use(this.selectedLanguage);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = event.target.innerHeight - 20;
  }

}
