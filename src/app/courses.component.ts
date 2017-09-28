import { CoursesService } from './courses.service';
import { Component} from '@angular/core'

@Component( 
    {
        selector: 'courses',
                     // <courses> "courses"
                     // < div id="courses">  ".courses"
                     // < class id="courses">  "#courses" 

        template: '{{ "Title: "+title }}<h3>There will be 6 courses in each branch</h3>'
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