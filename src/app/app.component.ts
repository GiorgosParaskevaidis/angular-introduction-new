import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'GiorgosParaskevaidis';

  person0 = {
    givenName: 'Georgios',
    surName: 'Paraskevaidis',
    age: 0x22,
    email: 'georgios@aueb.gr',
    address: 'Athens, Greece',
  };

  person1 = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@aueb.gr',
    address: 'New York, USA',
  };
}
