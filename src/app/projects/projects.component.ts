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

    bannerUrl = '/website-banner-2.png';
    bannerAlt = 'Cloud computing and workspace banner';

    showFeatured = true;

    toggleFeatured() {
        this.showFeatured = !this.showFeatured;
    }
}
