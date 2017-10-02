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
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  langs = [
    "ar", "bg", "cs", "da", "de", "el", "en", "es", "fa", "fi", "fr", "hu",
    "id", "it", "ka", "lt", "ml", "ms", "nl", "no", "pl", "pt_BR", "pt", "ro",
    "ru", "si", "sk", "sl", "sr", "ta", "th", "tr", "uk", "vi", "zh"
  ];

  constructor(translate: TranslateService) {
    translate.addLangs(this.langs);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(translate.getBrowserLang());
  }
}
