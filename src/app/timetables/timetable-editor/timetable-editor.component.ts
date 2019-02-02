import {Component, Input, OnInit, Output} from '@angular/core';
import {TimetableComponentBase} from '../timetable-component-base';
import {TimetableService} from '../timetable.service';
import {Observable, Subject} from 'rxjs';
import {Order} from '../timetable';
import {FormArray} from '@angular/forms';

@Component({
  selector: 'app-timetable-editor',
  templateUrl: './timetable-editor.component.html',
  styleUrls: ['./timetable-editor.component.scss']
})
export class TimetableEditorComponent extends TimetableComponentBase implements OnInit {
  @Output() protected timetableChanged: Subject<any> = new Subject();

  constructor(api: TimetableService) {
    super(api);
  }

  ngOnInit() {
    this.loadTimetable();
  }

  onStayingTimeChanged(order: Order, newValue: number) {
    order.stayingTime = newValue;
    this.api.updateOrder(this.timetableId, order)
      .subscribe(() => this.timetableChanged.next());
  }

  onTravelingTimeChanged(order: Order, newValue: number) {
    order.travelingTime = newValue;
    this.api.updateOrder(this.timetableId, order)
      .subscribe(() => this.timetableChanged.next());
  }
}

