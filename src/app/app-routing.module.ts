import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component'



const routes: Routes = [
{path: "", pathMatch: "full", redirectTo: "about"},
{path: "about", component: AboutComponent },
{path: "education", component: EducationComponent},
{path: "skills", component: SkillsComponent},
{path: "experience", component: ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
