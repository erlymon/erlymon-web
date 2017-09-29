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
