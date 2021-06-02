import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { EventService } from '../shared/event.service.component';

@Injectable()
export class EventRouterActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExisits = !!this.eventService.getEvent(+route.params['id'])
    if (!eventExisits) {
      this.router.navigate(['/404'])
      return eventExisits
    }
    return true
  }
}
