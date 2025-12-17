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
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive dashboard for managing products, orders, and analytics. Built with Angular and Chart.js.',
            tags: ['Angular', 'Tailwind', 'Chart.js'],
            image: 'bg-blue-100 dark:bg-blue-900' // Placeholder class
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task manager with real-time updates and team features.',
            tags: ['Angular', 'Firebase', 'RxJS'],
            image: 'bg-purple-100 dark:bg-purple-900'
        },
        {
            title: 'Weather Forecast',
            description: 'Beautiful weather application using OpenWeatherMap API with location detection.',
            tags: ['TypeScript', 'API', 'CSS Grid'],
            image: 'bg-indigo-100 dark:bg-indigo-900'
        }
    ];
}
