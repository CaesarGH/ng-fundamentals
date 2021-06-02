import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service.component';
import { EventService } from './shared/event.service.component';

@Component({
  selector: 'events-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events?: any;

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
    // this.eventService.getEvents().subscribe((events) => {
    //   this.events = events;
    // });

    // this.events = this.eventService.getEvents();
  }

  // handle received data
  handleEventClicked(data: any) {
    console.log('received:', data);
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
