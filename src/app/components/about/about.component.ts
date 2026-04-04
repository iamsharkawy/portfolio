import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
    skills = [
        'Angular', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Jest', 'Bootstrap 5'
    ];

    ngAfterViewInit() {
        // Check if script is already loaded
        if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = '//cdn.credly.com/assets/utilities/embed.js';
            document.body.appendChild(script);
        }
    }
}
