import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-eperson-template-driven-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css',
})
export class EpersonTemplateDrivenFormComponent {
  @Output() person = new EventEmitter<EPerson>();
  onSubmit(value: any) {
    console.log(value as EPerson);
    this.person.emit(value as EPerson);
  }
}
