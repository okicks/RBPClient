import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {LiquorService} from 'src/app/services/liquor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liquor-create',
  templateUrl: './liquor-create.component.html',
  styleUrls: ['./liquor-create.component.css']
})
export class LiquorCreateComponent implements OnInit {

  liquorForm: FormGroup;

  constructor(private form: FormBuilder, private liquorService: LiquorService, private router: Router) {
    //this.createForm();
   }

  ngOnInit() {

  }

}
