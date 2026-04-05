import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ApiPracticeComponent } from './components/api-practice/api-practice.component';
import { TemplateFormsDemoComponent } from './components/template-forms-demo/template-forms-demo.component';
import { TodoHttpPracticeComponent } from './components/todo-http-practice/todo-http-practice.component';
import { UserDemoComponent } from './components/user-demo/user-demo.component';
import { Products2DemoComponent } from './components/products2-demo/products2-demo.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'api', component: ApiPracticeComponent },
    { path: 'template-forms-demo', component: TemplateFormsDemoComponent },
    { path: 'todo-http', component: TodoHttpPracticeComponent },
    { path: 'users', component: UserDemoComponent },
    { path: 'products2', component: Products2DemoComponent },
    { path: 'sandbox', component: SandboxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
