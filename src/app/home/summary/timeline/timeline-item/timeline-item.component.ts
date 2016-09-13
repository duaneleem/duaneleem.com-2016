import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-timeline-item',
    templateUrl: 'timeline-item.component.html',
    styleUrls: ['timeline-item.component.css']
})
export class TimelineItemComponent {
    id: string;
    @Input() objAchievement;
}