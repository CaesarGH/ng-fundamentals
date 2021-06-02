import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'events-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls:['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {

    childProperty : any = "child property"

    // receive data from parent component
    @Input() event:any

    // pass data to parent component
    @Output() eventClick = new EventEmitter()

    // pass data to parent component
    handleClickMe(){
        this.eventClick.emit(this.event.name)
    }

    logFoo(){
        console.log("foo")
    }

    getStartClass(){
        // const isEarlyStart = this.event.time === '8:00 am';
        // return {green: isEarlyStart, bold: isEarlyStart}
        if(this.event && this.event.time === '8:00 am'){
            return ['green', 'bold']
        }
        return []
    }
}