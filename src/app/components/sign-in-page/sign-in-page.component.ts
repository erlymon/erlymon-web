import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { MdDialog } from '@angular/material';

import { Router } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

import { CountryCodeService } from '../../services/country-code.service';

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

  constructor(private translate: TranslateService, private countryCode: CountryCodeService, private router: Router, private fb: FormBuilder, public dialog: MdDialog) {
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
    this.router.navigate(['/']);
  }

  onChangeLanguage() {
    this.translate.use(this.selectedLanguage);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = event.target.innerHeight - 20;
  }

}
