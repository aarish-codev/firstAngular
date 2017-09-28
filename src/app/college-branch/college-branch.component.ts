import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-branch',
  //templateUrl:  './college-branch.component.html',
    template:          
              `
                <ul>
                  <li *ngFor= "let branch of branches">
                    {{branches}}
                  </li>
                </ul>
              `
              ,
              
  styleUrls: ['./college-branch.component.css']
})

export class CollegeBranchComponent  {

  branches= ["CS", "IT", "ME", "ECE", "EE"];
}
