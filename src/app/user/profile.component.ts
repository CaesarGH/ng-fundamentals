import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './profile.component.html',
  })

  export class ProfileComponent {
    constructor(private router: Router) {}
    cancel() {
        this.router.navigate(['/events']);
      }
  }