import { CoursesService } from './courses.service';
import { Component} from '@angular/core'

@Component( 
    {
        selector: 'courses',
                     // <courses> "courses"
                     // < div id="courses">  ".courses"
                     // < class id="courses">  "#courses" 

        template: `
                <h2>{{ title }}</h2>
                <ul>
                    <li *ngFor= " let course of courses">
                    {{ course }}
                    </li>
                </ul> 
                <button class="btn btn-primary">Save</button>
                `
    }
)

export class CoursesComponent {

    title='List of courses'
    courses;

    constructor(service: CoursesService) {
     //constructor() {   
     //let service = new CoursesService(); 
       this.courses = service.getCourses();
       
    }
}