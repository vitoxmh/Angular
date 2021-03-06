import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }


  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  ngOnInit(): void {
  }

  onSubmit() {
    
    console.warn(this.profileForm.value);
  }

  updateNancy(){

    this.profileForm .patchValue({
      firstName: 'dsddssssssd',
      address: {
      street: 'dsdssddsdsd'
    }
    });
  }

}
