import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.css'
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
        }
    ];
}
