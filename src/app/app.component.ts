import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {InvestmentResultComponent} from "./investment-result/investment-result.component";
import {UserInputComponent} from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    InvestmentResultComponent,
    UserInputComponent
  ]
})
export class AppComponent {
  

}
