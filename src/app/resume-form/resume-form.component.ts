import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {

  public static countries = [ 
    {name: 'Afghanistan', code: 'AF'}, 
    {name: 'Åland Islands', code: 'AX'}, 
    {name: 'Albania', code: 'AL'}, 
    {name: 'Algeria', code: 'DZ'}, 
    {name: 'American Samoa', code: 'AS'}, 
    {name: 'AndorrA', code: 'AD'}, 
    {name: 'Angola', code: 'AO'}, 
    {name: 'Anguilla', code: 'AI'}, 
    {name: 'Antarctica', code: 'AQ'}, 
    {name: 'Antigua and Barbuda', code: 'AG'}, 
    {name: 'Argentina', code: 'AR'}, 
    {name: 'Armenia', code: 'AM'}, 
    {name: 'Aruba', code: 'AW'}, 
    {name: 'Australia', code: 'AU'}, 
    {name: 'Austria', code: 'AT'}, 
    {name: 'Azerbaijan', code: 'AZ'}, 
    {name: 'Bahamas', code: 'BS'}, 
    {name: 'Bahrain', code: 'BH'}, 
    {name: 'Bangladesh', code: 'BD'}, 
    {name: 'Barbados', code: 'BB'}, 
    {name: 'Belarus', code: 'BY'}, 
    {name: 'Belgium', code: 'BE'}, 
    {name: 'Belize', code: 'BZ'}, 
    {name: 'Benin', code: 'BJ'}, 
    {name: 'Bermuda', code: 'BM'}, 
    {name: 'Bhutan', code: 'BT'}, 
    {name: 'Bolivia', code: 'BO'}, 
    {name: 'Bosnia and Herzegovina', code: 'BA'}, 
    {name: 'Botswana', code: 'BW'}, 
    {name: 'Bouvet Island', code: 'BV'}, 
    {name: 'Brazil', code: 'BR'}, 
    {name: 'British Indian Ocean Territory', code: 'IO'}, 
    {name: 'Brunei Darussalam', code: 'BN'}, 
    {name: 'Bulgaria', code: 'BG'}, 
    {name: 'Burkina Faso', code: 'BF'}, 
    {name: 'Burundi', code: 'BI'}, 
    {name: 'Cambodia', code: 'KH'}, 
    {name: 'Cameroon', code: 'CM'}, 
    {name: 'Canada', code: 'CA'}, 
    {name: 'Cape Verde', code: 'CV'}, 
    {name: 'Cayman Islands', code: 'KY'}, 
    {name: 'Central African Republic', code: 'CF'}, 
    {name: 'Chad', code: 'TD'}, 
    {name: 'Chile', code: 'CL'}, 
    {name: 'China', code: 'CN'}, 
    {name: 'Christmas Island', code: 'CX'}, 
    {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
    {name: 'Colombia', code: 'CO'}, 
    {name: 'Comoros', code: 'KM'}, 
    {name: 'Congo', code: 'CG'}, 
    {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
    {name: 'Cook Islands', code: 'CK'}, 
    {name: 'Costa Rica', code: 'CR'}, 
    {name: 'Cote D\'Ivoire', code: 'CI'}, 
    {name: 'Croatia', code: 'HR'}, 
    {name: 'Cuba', code: 'CU'}, 
    {name: 'Cyprus', code: 'CY'}, 
    {name: 'Czech Republic', code: 'CZ'}, 
    {name: 'Denmark', code: 'DK'}, 
    {name: 'Djibouti', code: 'DJ'}, 
    {name: 'Dominica', code: 'DM'}, 
    {name: 'Dominican Republic', code: 'DO'}, 
    {name: 'Ecuador', code: 'EC'}, 
    {name: 'Egypt', code: 'EG'}, 
    {name: 'El Salvador', code: 'SV'}, 
    {name: 'Equatorial Guinea', code: 'GQ'}, 
    {name: 'Eritrea', code: 'ER'}, 
    {name: 'Estonia', code: 'EE'}, 
    {name: 'Ethiopia', code: 'ET'}, 
    {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
    {name: 'Faroe Islands', code: 'FO'}, 
    {name: 'Fiji', code: 'FJ'}, 
    {name: 'Finland', code: 'FI'}, 
    {name: 'France', code: 'FR'}, 
    {name: 'French Guiana', code: 'GF'}, 
    {name: 'French Polynesia', code: 'PF'}, 
    {name: 'French Southern Territories', code: 'TF'}, 
    {name: 'Gabon', code: 'GA'}, 
    {name: 'Gambia', code: 'GM'}, 
    {name: 'Georgia', code: 'GE'}, 
    {name: 'Germany', code: 'DE'}, 
    {name: 'Ghana', code: 'GH'}, 
    {name: 'Gibraltar', code: 'GI'}, 
    {name: 'Greece', code: 'GR'}, 
    {name: 'Greenland', code: 'GL'}, 
    {name: 'Grenada', code: 'GD'}, 
    {name: 'Guadeloupe', code: 'GP'}, 
    {name: 'Guam', code: 'GU'}, 
    {name: 'Guatemala', code: 'GT'}, 
    {name: 'Guernsey', code: 'GG'}, 
    {name: 'Guinea', code: 'GN'}, 
    {name: 'Guinea-Bissau', code: 'GW'}, 
    {name: 'Guyana', code: 'GY'}, 
    {name: 'Haiti', code: 'HT'}, 
    {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
    {name: 'Holy See (Vatican City State)', code: 'VA'}, 
    {name: 'Honduras', code: 'HN'}, 
    {name: 'Hong Kong', code: 'HK'}, 
    {name: 'Hungary', code: 'HU'}, 
    {name: 'Iceland', code: 'IS'}, 
    {name: 'India', code: 'IN'}, 
    {name: 'Indonesia', code: 'ID'}, 
    {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
    {name: 'Iraq', code: 'IQ'}, 
    {name: 'Ireland', code: 'IE'}, 
    {name: 'Isle of Man', code: 'IM'}, 
    {name: 'Israel', code: 'IL'}, 
    {name: 'Italy', code: 'IT'}, 
    {name: 'Jamaica', code: 'JM'}, 
    {name: 'Japan', code: 'JP'}, 
    {name: 'Jersey', code: 'JE'}, 
    {name: 'Jordan', code: 'JO'}, 
    {name: 'Kazakhstan', code: 'KZ'}, 
    {name: 'Kenya', code: 'KE'}, 
    {name: 'Kiribati', code: 'KI'}, 
    {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
    {name: 'Korea, Republic of', code: 'KR'}, 
    {name: 'Kuwait', code: 'KW'}, 
    {name: 'Kyrgyzstan', code: 'KG'}, 
    {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
    {name: 'Latvia', code: 'LV'}, 
    {name: 'Lebanon', code: 'LB'}, 
    {name: 'Lesotho', code: 'LS'}, 
    {name: 'Liberia', code: 'LR'}, 
    {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
    {name: 'Liechtenstein', code: 'LI'}, 
    {name: 'Lithuania', code: 'LT'}, 
    {name: 'Luxembourg', code: 'LU'}, 
    {name: 'Macao', code: 'MO'}, 
    {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
    {name: 'Madagascar', code: 'MG'}, 
    {name: 'Malawi', code: 'MW'}, 
    {name: 'Malaysia', code: 'MY'}, 
    {name: 'Maldives', code: 'MV'}, 
    {name: 'Mali', code: 'ML'}, 
    {name: 'Malta', code: 'MT'}, 
    {name: 'Marshall Islands', code: 'MH'}, 
    {name: 'Martinique', code: 'MQ'}, 
    {name: 'Mauritania', code: 'MR'}, 
    {name: 'Mauritius', code: 'MU'}, 
    {name: 'Mayotte', code: 'YT'}, 
    {name: 'Mexico', code: 'MX'}, 
    {name: 'Micronesia, Federated States of', code: 'FM'}, 
    {name: 'Moldova, Republic of', code: 'MD'}, 
    {name: 'Monaco', code: 'MC'}, 
    {name: 'Mongolia', code: 'MN'}, 
    {name: 'Montserrat', code: 'MS'}, 
    {name: 'Morocco', code: 'MA'}, 
    {name: 'Mozambique', code: 'MZ'}, 
    {name: 'Myanmar', code: 'MM'}, 
    {name: 'Namibia', code: 'NA'}, 
    {name: 'Nauru', code: 'NR'}, 
    {name: 'Nepal', code: 'NP'}, 
    {name: 'Netherlands', code: 'NL'}, 
    {name: 'Netherlands Antilles', code: 'AN'}, 
    {name: 'New Caledonia', code: 'NC'}, 
    {name: 'New Zealand', code: 'NZ'}, 
    {name: 'Nicaragua', code: 'NI'}, 
    {name: 'Niger', code: 'NE'}, 
    {name: 'Nigeria', code: 'NG'}, 
    {name: 'Niue', code: 'NU'}, 
    {name: 'Norfolk Island', code: 'NF'}, 
    {name: 'Northern Mariana Islands', code: 'MP'}, 
    {name: 'Norway', code: 'NO'}, 
    {name: 'Oman', code: 'OM'}, 
    {name: 'Pakistan', code: 'PK'}, 
    {name: 'Palau', code: 'PW'}, 
    {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
    {name: 'Panama', code: 'PA'}, 
    {name: 'Papua New Guinea', code: 'PG'}, 
    {name: 'Paraguay', code: 'PY'}, 
    {name: 'Peru', code: 'PE'}, 
    {name: 'Philippines', code: 'PH'}, 
    {name: 'Pitcairn', code: 'PN'}, 
    {name: 'Poland', code: 'PL'}, 
    {name: 'Portugal', code: 'PT'}, 
    {name: 'Puerto Rico', code: 'PR'}, 
    {name: 'Qatar', code: 'QA'}, 
    {name: 'Reunion', code: 'RE'}, 
    {name: 'Romania', code: 'RO'}, 
    {name: 'Russian Federation', code: 'RU'}, 
    {name: 'RWANDA', code: 'RW'}, 
    {name: 'Saint Helena', code: 'SH'}, 
    {name: 'Saint Kitts and Nevis', code: 'KN'}, 
    {name: 'Saint Lucia', code: 'LC'}, 
    {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
    {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
    {name: 'Samoa', code: 'WS'}, 
    {name: 'San Marino', code: 'SM'}, 
    {name: 'Sao Tome and Principe', code: 'ST'}, 
    {name: 'Saudi Arabia', code: 'SA'}, 
    {name: 'Senegal', code: 'SN'}, 
    {name: 'Serbia and Montenegro', code: 'CS'}, 
    {name: 'Seychelles', code: 'SC'}, 
    {name: 'Sierra Leone', code: 'SL'}, 
    {name: 'Singapore', code: 'SG'}, 
    {name: 'Slovakia', code: 'SK'}, 
    {name: 'Slovenia', code: 'SI'}, 
    {name: 'Solomon Islands', code: 'SB'}, 
    {name: 'Somalia', code: 'SO'}, 
    {name: 'South Africa', code: 'ZA'}, 
    {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
    {name: 'Spain', code: 'ES'}, 
    {name: 'Sri Lanka', code: 'LK'}, 
    {name: 'Sudan', code: 'SD'}, 
    {name: 'Suriname', code: 'SR'}, 
    {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
    {name: 'Swaziland', code: 'SZ'}, 
    {name: 'Sweden', code: 'SE'}, 
    {name: 'Switzerland', code: 'CH'}, 
    {name: 'Syrian Arab Republic', code: 'SY'}, 
    {name: 'Taiwan, Province of China', code: 'TW'}, 
    {name: 'Tajikistan', code: 'TJ'}, 
    {name: 'Tanzania, United Republic of', code: 'TZ'}, 
    {name: 'Thailand', code: 'TH'}, 
    {name: 'Timor-Leste', code: 'TL'}, 
    {name: 'Togo', code: 'TG'}, 
    {name: 'Tokelau', code: 'TK'}, 
    {name: 'Tonga', code: 'TO'}, 
    {name: 'Trinidad and Tobago', code: 'TT'}, 
    {name: 'Tunisia', code: 'TN'}, 
    {name: 'Turkey', code: 'TR'}, 
    {name: 'Turkmenistan', code: 'TM'}, 
    {name: 'Turks and Caicos Islands', code: 'TC'}, 
    {name: 'Tuvalu', code: 'TV'}, 
    {name: 'Uganda', code: 'UG'}, 
    {name: 'Ukraine', code: 'UA'}, 
    {name: 'United Arab Emirates', code: 'AE'}, 
    {name: 'United Kingdom', code: 'GB'}, 
    {name: 'United States', code: 'US'}, 
    {name: 'United States Minor Outlying Islands', code: 'UM'}, 
    {name: 'Uruguay', code: 'UY'}, 
    {name: 'Uzbekistan', code: 'UZ'}, 
    {name: 'Vanuatu', code: 'VU'}, 
    {name: 'Venezuela', code: 'VE'}, 
    {name: 'Viet Nam', code: 'VN'}, 
    {name: 'Virgin Islands, British', code: 'VG'}, 
    {name: 'Virgin Islands, U.S.', code: 'VI'}, 
    {name: 'Wallis and Futuna', code: 'WF'}, 
    {name: 'Western Sahara', code: 'EH'}, 
    {name: 'Yemen', code: 'YE'}, 
    {name: 'Zambia', code: 'ZM'}, 
    {name: 'Zimbabwe', code: 'ZW'} 
  ];

  public firstName: FormControl = new FormControl('');
  public lastName: FormControl = new FormControl('');
  public month: FormControl = new FormControl('');
  public day: FormControl = new FormControl('');
  public year: FormControl = new FormControl('');
  public email: FormControl = new FormControl('');
  public areaCodeOne: FormControl = new FormControl('');
  public areaCodeTwo: FormControl = new FormControl('');
  public phone: FormControl = new FormControl('');
  public street: FormControl = new FormControl('');
  public streetSecond: FormControl = new FormControl('');
  public city: FormControl = new FormControl('');
  public state: FormControl = new FormControl('');
  public country: FormControl = new FormControl('Country');
  public zip: FormControl = new FormControl('');
  public resume: FormControl = new FormControl('');
  public areaCode: number = 0;
  public invalidAreaCode: boolean = false;
  public formControls: FormControl[] = [];
  public disabledFormControl: number = 0;
  public displayErrors = false;

  public Clear() {
    this.firstName.reset('');
    this.lastName.reset('');
    this.month.reset('');
    this.day.reset('');
    this.year.reset('');
    this.email.reset('Email Here');
    this.areaCodeOne.reset('');
    this.areaCodeTwo.reset('');
    this.phone.reset('');
    this.street.reset('');
    this.streetSecond.reset('');
    this.city.reset('');
    this.state.reset('');
    this.country.reset('Country');
    this.zip.reset('');
    this.resume.reset('');
    this.areaCode = 0;
    this.invalidAreaCode = false;
    this.formControls.forEach((formControl)=>{
      formControl.enable();
    })
    this.disabledFormControl = 0;
    alert("Thank you for clearing the form, please re-enter your correct details so you may send us your resume");
  }

  public OnSubmit() {
    console.log("clicked");
    this.invalidAreaCode = false;
    this.displayErrors = false;
    if (this.streetSecond.value !== '' && (this.streetSecond.value.toLowerCase().indexOf("apartment number") === -1 || this.streetSecond.value.toLowerCase().indexOf("unit number") === -1)){
      this.streetSecond.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (this.numbersInValue(this.zip.value)){
      this.zip.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (this.invalidEmailService(this.email.value)){
      this.email.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (this.numbersInValue(this.month.value)){
      this.month.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    var date = new Date(Date.now());
    if (this.year.value > date.getFullYear() || this.year.value < date.getFullYear() - 100){
      this.year.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (this.resume.dirty && (this.resume.value.indexOf("money") === -1 || this.resume.value.indexOf("need") === -1)){
      this.resume.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (this.areaCodeTwo.value === '0' || this.areaCodeTwo.value === '1'){
      this.areaCodeTwo.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (this.areaCode < 100 || this.areaCode > 999){
      this.displayErrors = true;
      this.invalidAreaCode = true;
    }
    if(this.state.value.length === 2 || this.state.value.toUpperCase() !== this.state.value){
      this.state.setErrors({
        invalid: true
      });
      this.displayErrors = true;
    }
    if (
      this.country.value === '' || 
      this.firstName.value === '' || 
      this.lastName.value === '' || 
      this.month.value === '' || 
      this.day.value === '' ||
      this.year.value === '' ||
      this.email.value === '' ||
      this.email.value === 'Email Here' ||
      this.areaCodeOne.value === '' ||
      this.areaCodeTwo.value === '' ||
      this.phone.value === '' ||
      this.street.value === '' ||
      this.city.value === '' ||
      this.state.value === '' ||
      this.country.value === 'Country' ||
      this.zip.value === '' 
    ){
      this.displayErrors = true;
    }

    if (!this.displayErrors){
      //open submit modal
      this.streetSecond.setErrors({
        invalid: false
      });
      this.zip.setErrors({
        invalid: false
      });
      this.email.setErrors({
        invalid: false
      });
      this.month.setErrors({
        invalid: false
      });
      this.year.setErrors({
        invalid: false
      });
      this.resume.setErrors({
        invalid: false
      });
      this.areaCodeTwo.setErrors({
        invalid: false
      });
      if (confirm("Do you want to clear the form?") === true){
        this.Clear();
      }
      else if(confirm("Are you sure you don't want to clear the form?") === true){
        if (confirm("Then do you want to submit the form?") === true){
          alert("Your form has been submitted");
        }
        else {
          alert("Okay, well then finish filling out the form. The clock is ticking");
        }
      }
    }
  }

  private numbersInValue(value: string): boolean{
    return /\d/.test(value);
  }

  private invalidEmailService(email: string): boolean{
    if (email.indexOf("@") === -1 || email.indexOf("@aol") !== -1 || email.indexOf("@gmail") !== -1 || email.indexOf("@yahoo") !== -1 || email.indexOf("@microsoft") !== -1 || email.indexOf("@outlook") !== -1){
      return true;
    }
    
    return false;
  }

  public lastNameModal() {
    var letter = prompt("Enter the number in the alphabet for the next letter in the name.");
    if (letter && /^[0-9]+$/.test(letter as string)){
      var numberInAlphabet = parseInt(letter);
      if (numberInAlphabet > 26 || numberInAlphabet < 1){
        alert("You must enter a number between 1 and 26");
        
        return;
      }
      var nextValue = `${this.lastName.value}` + (this.lastName.value.length === 0 ? (numberInAlphabet + 9).toString(36).toUpperCase() : (numberInAlphabet + 9).toString(36));
      this.lastName.setValue(nextValue);
    }
    else {
      alert("You must enter a number between 1 and 26");
    }
  }

  public randomLetter() {
    this.firstName.setValue(this.firstName.value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
  }

  public randomNumber() {
    this.phone.setValue(this.phone.value + Math.floor(Math.random() * 9));
  }

  public randomCountry(){
    this.country.setValue(ResumeFormComponent.countries[Math.floor(Math.random() * ResumeFormComponent.countries.length)].name);
  }

  public randomMonth(){
    this.month.setValue(Math.floor(Math.random() * 12) + 1);
  }

  public cityInteraction(){
    setTimeout(()=>{
      this.city.reset('');
    }, 60000);
  }

  public updateAreaCode(){
    this.areaCode = this.areaCodeOne.value - this.areaCodeTwo.value;
    this.invalidAreaCode = false;
  }
  
  ngOnInit(): void {
    setInterval(()=>{
      this.formControls[this.disabledFormControl].disable();
      this.disabledFormControl++;
      if (this.disabledFormControl >= this.formControls.length){
        this.disabledFormControl = this.formControls.length -1;
      }
    }, 120000)
  }

  constructor() {
    this.formControls.push(this.firstName);
    this.formControls.push(this.lastName);
    this.formControls.push(this.month);
    this.formControls.push(this.day);
    this.formControls.push(this.year);
    this.formControls.push(this.email);
    this.formControls.push(this.areaCodeOne);
    this.formControls.push(this.areaCodeTwo);
    this.formControls.push(this.phone);
    this.formControls.push(this.street);
    this.formControls.push(this.streetSecond);
    this.formControls.push(this.city);
    this.formControls.push(this.state);
    this.formControls.push(this.country);
    this.formControls.push(this.zip);
    this.formControls.push(this.resume);
  }

}
