import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "GiorgosParaskevaidis";

  person = {
    givenName: 'Georgios',
    surName: 'Paraskevaidis',
    age: 0x22,
    email: 'georgios@aueb.gr',
  };
}
