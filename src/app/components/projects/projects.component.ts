import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects = [
        {
            title: 'Corona',
            description: 'Responsive site with COVID data and prevention tips.',
            tags: ['HTML', 'CSS', 'JS', 'Bootstrap'],
            image: 'assets/corona.png',
            viewDemo: 'https://coronavirus-front-end-project.vercel.app/',
            code: 'https://github.com/iamsharkawy/Coronavirus-Front-End-Project'
        },
        {
            title: 'Bankist',
            description: 'A mock banking interface where users log in to view transactions, transfer funds, request loans, and manage accounts.',
            tags: ['HTML', 'CSS', 'JS'],
            image: 'assets/bankist.png',
            viewDemo: 'https://bankist-three-blond.vercel.app/',
            code: 'https://github.com/iamsharkawy/Bankist'
        },
        {
            title: 'Weather Forecast',
            description: 'Beautiful weather application.',
            tags: ['HTML', 'CSS', 'JS'],
            image: 'assets/weather.png',
            viewDemo: 'https://weather-app-kappa-red-22.vercel.app/',
            code: 'https://github.com/iamsharkawy/Weather-App'
        },
        {
          title: 'Book Store',
          description: 'Books store where you can find, search or add to wishlist any book',
          tags: ['HTML', 'CSS', 'JS', 'Angular', 'tailwind'],
          image: 'assets/books-store.png',
          viewDemo: 'https://books-store-swart.vercel.app/',
          code: 'https://github.com/iamsharkawy/Books-Library'
        }
    ];
}
