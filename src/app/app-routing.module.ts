import { ActivatedRoute, Routes } from '@angular/router';
import { Error404Component } from './events/errors/404.component';
import { EventDetailComponent } from './events/event-details/event-detail.component';
import { EventRouterActivator } from './events/event-details/event-route-activator.service';
import { EventListComponent } from './events/event-list.component';
import { CreateEventComponent } from './events/shared/create-event.component';
import { EventListResolver } from './events/shared/event-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouterActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: ()=>import('./user/user.module').then(m => m.userModule)}
];
