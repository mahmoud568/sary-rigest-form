
import { Component, OnInit } from '@angular/core';


import { TranslateService } from "@ngx-translate/core";
import { DOCUMENT } from "@angular/common";
import { Inject } from "@angular/core";

import { Select } from "./select.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sary-task';
  imagePath = "";

  constructor(
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.justtest();
  }

  onAddItem(form: NgForm) {
console.log(form.value);
  }

  // chang language
  language = 'ar';
  justtest() {
    if(this.language =='ar'){
      this.changeLangage('ar');
      this.language = 'en';
      this.imagePath = "assets/logo/Logo-white.svg";
      let element = document.getElementById('registBuyer');
        element!.classList.remove('en');
    }
    else  {
      this.changeLangage('en');
      this.language = 'ar';
      this.imagePath = "assets/logo/logo-white-en.svg";
      let element = document.getElementById('registBuyer');
        element!.classList.add('en');
    }
  }
  
  changeLangage(lang: string) {
    let htmlTag = this.document.getElementsByTagName(
      "html"
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      "head"
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      "langCss"
    ) as HTMLLinkElement;

    let bundleName = lang === "ar" ? "arabicStyle.css" : "englishStyle.css";

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      let newLink = this.document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.type = "text/css";
      newLink.id = "langCss";
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  // end of change language

  // city select
  citySelects: Select[] = [
    { id: 1, name: 'Al Dammam' },
    { id: 2, name: 'Al Dhahran' },
    { id: 3, name: 'Al Khobar' },
    { id: 4, name: 'Al Qatif' },
    { id: 5, name: 'AlHofuf' },
    { id: 6, name: 'Alaflaj' },
    { id: 7, name: 'Alahsaa' },
    { id: 8, name: 'Albahah' },
    { id: 9, name: 'Aldwadmi' },
    { id: 10, name: 'Alfresh' },
    { id: 11, name: 'Alhawiah' },
    { id: 12, name: 'Alhoutah' },
    { id: 13, name: 'Aljubail' },
    { id: 14, name: 'Alkhrj' },
    { id: 15, name: 'Almdena Almunwra' },
    { id: 16, name: 'Almubarraz' },
    { id: 17, name: 'Alqurayat' },
    { id: 18, name: 'Alruss' },
    { id: 19, name: 'Altaif' },
    { id: 20, name: 'Althougbah' },
    { id: 21, name: 'Alzolfi' },
    { id: 22, name: 'Anak' },
    { id: 23, name: 'Arar' },
    { id: 24, name: 'Bariq' },
    { id: 25, name: 'Beesha' },
    { id: 26, name: 'Buhrah' },
    { id: 27, name: 'Buridah' },
    { id: 28, name: 'Dhabaa' },
    { id: 29, name: 'Hafr Albatn' },
    { id: 30, name: 'Hafr al batin' },
    { id: 31, name: 'Hail' },
    { id: 32, name: 'Jazan' },
    { id: 33, name: 'Jeddah' },
    { id: 34, name: 'Jubail' },
    { id: 35, name: 'Khamis Musheet' },
    { id: 36, name: 'Makkah' },
    { id: 37, name: 'Yanbu' },
    { id: 38, name: 'Qassim' },
    { id: 39, name: 'Ras Tanura' },
    { id: 40, name: 'Riyadh' },
    { id: 41, name: 'Sabia' },
    { id: 42, name: 'Safwa' },
    { id: 43, name: 'Saihat' },
    { id: 44, name: 'Sharorah' },
    { id: 45, name: 'Skaka' },
    { id: 46, name: 'Tabuk' },
    { id: 47, name: 'Tarout' },
    { id: 48, name: 'Uhud Rafidah' },
    { id: 49, name: 'Unizah' },
    { id: 50, name: 'Wadi Aldoyasser' },
    { id: 5, name: 'Other' }
  ];

  // market select
  marketSelects: Select[] = [
    { id: 1, name: 'Groceries' },
    { id: 2, name: 'Resturants' },
    { id: 3, name: 'Cafes' },
    { id: 4, name: 'Hotels' },
    { id: 5, name: 'Halls' },
    { id: 6, name: 'Cafeterias' },
    { id: 7, name: 'Schools' },
    { id: 8, name: 'Offices' },
    { id: 9, name: 'Other market' },
    { id: 10, name: 'Wholesalers' }
  ];

  
  // Montly purchases amount select 
  amountSelects: Select[] = [
    { id: 1, name: 'Less than 50000 SAR' },
    { id: 2, name: '50,000-100,000 SAR' },
    { id: 3, name: 'More than 150,000 SAR' },
  ];
  
  // submit reguist buyer
  
}
