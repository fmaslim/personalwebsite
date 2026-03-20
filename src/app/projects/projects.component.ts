import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    pageTitle = 'Projects';
    pageSubTitle = 'A selection of work focused on systems, structure, and practical engineering';
    featuredProject = 'Contoso Public Health IT';
    projectName = 'Contoso Public Health IT';

    projects = [
        {
            title: 'Contoso Public Health IT',
            description: 'A simulated enterprise Azure environment built to practice real-world architecture, naming conventions, Dev/Prod structure, and deployment flow.',
            tags: ['Azure', '.NET', 'Bicep', 'SQL', 'CI/CD'],
            proof: 'Demonstrates cloud architecture thinking, structured environment design, and practical platform engineering fundamentals.',
            github: '#',
            caseStudy: '#'
        }, 
        {
            title: 'Personal Website',
            description: 'A premium Angular portfolio site designed to present my work, personal brand, and technical growth in a clean, structured way.',
            tags: ['Angular', 'TypeScript', 'CSS'],
            proof: 'Demonstrates front-end structure, routing, reusable layouts, and visual polish.',
            github: '#',
            caseStudy: '#'
        },
        {
            title: '.NET API Training Lab',
            description: 'A hands-on API practice project focused on DTOs, service layers, controllers, validation, and realistic backend design patterns.',
            tags: ['.NET', 'C#', 'Web API', 'Swagger', 'SQL'],
            proof: 'Demonstrates clean API structure, separation of concerns, and realistic backend development workflow.',
            github: '#',
            caseStudy: ''
        }
    ];

    selectedProject = this.projects[0];

    bannerUrl = '/website-banner-2.png';
    bannerAlt = 'Cloud computing and workspace banner';

    showFeatured = true;

    toggleFeatured() {
        this.showFeatured = !this.showFeatured;
    }

    setSelectedProject(project: any) {
        this.selectedProject = project;
    }
}
