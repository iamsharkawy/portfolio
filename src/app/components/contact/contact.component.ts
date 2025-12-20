import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.css'
})
export class ContactComponent {
    formData = {
        name: '',
        email: '',
        message: ''
    };

onSubmit() {
  fetch('https://formspree.io/f/mzdprana', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: JSON.stringify(this.formData),
  }).then(() => {
    alert('Message sent successfully!');
    this.formData = {name: '', email: '', message: ''};
  });
}


}
