import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ScheduledDispatchService} from '@shared/services/scheduled-dispatch.service';
import {StationsService} from '@shared/services/stations.service';
import {TimetableService} from '@shared/services/timetable.service';
import {StatsService} from '@shared/services/stats.service';
import { OpenTTTErrorHandler } from '@shared/OpenTTTErrorHandler';
import { TagsService } from '@shared/services/tags.service';
import {
  IconArrowDown,
  IconArrowDownRight, IconArrowUp,
  IconChevronRight,
  IconClock,
  IconHelpCircle,
  IconHome,
  IconMapPin,
  IconPlus,
  IconSettings,
  IconTag,
  IconX,
} from 'angular-feather';
import { OpenTTTService } from '@shared/services/openttt-service';

// A collection of the icons used in the application
const icons: any[] = [
  IconHome, // Sidebar: Home
  IconMapPin, // Sidebar: Destinations
  IconArrowDownRight, // Sidebar: Timetables
  IconClock, // Sidebar: Scheduled Dispatches
  IconTag, // Sidebar: Tags
  IconHelpCircle, // Sidebar: Default
  IconChevronRight, // Stations: Type Waypoint
  IconSettings, // Stations: Type Depots
  IconX, // Functional button: delete
  IconPlus, // Functional button: add,
  IconArrowUp, // Functional button: up
  IconArrowDown, // Functional button: down
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ].concat(...icons),
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ].concat(...icons),
  providers: [
    ScheduledDispatchService,
    StationsService,
    StatsService,
    TagsService,
    TimetableService,
    {provide: ErrorHandler, useClass: OpenTTTErrorHandler},
  ],
})
export class SharedModule {

  constructor() {
  }
}
