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
            description: 'A comprehensive dashboard for managing products, orders, and analytics. Built with Angular and Chart.js.',
            tags: ['HTML', 'CSS', 'JS'],
            image: 'assets/corona.png',
            viewDemo: 'https://coronavirus-front-end-project.vercel.app/',
            code: 'https://github.com/iamsharkawy/Coronavirus-Front-End-Project'
        },
        {
            title: 'Bankist',
            description: 'A collaborative task manager with real-time updates and team features.',
            tags: ['HTML', 'CSS', 'JS'],
            image: 'assets/bankist.png',
            viewDemo: 'https://bankist-three-blond.vercel.app/',
            code: 'https://github.com/iamsharkawy/Bankist'
        },
        {
            title: 'Weather Forecast',
            description: 'Beautiful weather application using OpenWeatherMap API with location detection.',
            tags: ['HTML', 'CSS', 'JS'],
            image: 'assets/weather.png',
            viewDemo: 'https://weather-app-kappa-red-22.vercel.app/',
            code: 'https://github.com/iamsharkawy/Weather-App'
        }
    ];
}
