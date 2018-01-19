import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl } from '@angular/forms';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: any[];
  itemRef: any[]; 
  title: FormControl;
  auth: FormControl;
  constructor(db: AngularFireDatabase){
  	this.courses = db.list('/courses').valueChanges();
  	this.itemRef = db.list('/courses');

  }

  ngOnInit(){
  	this.title = new  FormControl();
  	this.auth = new FormControl();
  }

  addCourse(){
  	this.itemRef.push({title: this.title.value, auth: this.auth.value});
  }
}
