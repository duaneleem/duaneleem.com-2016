import { Component, Input, AfterViewInit } from '@angular/core';
declare var $:any; // Enables jQuery

// Global Variables
import { GLOBALS } from "../../../../../shared/globals";

@Component({
    selector: 'app-timeline-item',
    templateUrl: './timeline-item.component.html',
    styleUrls: ['./timeline-item.component.css']
})
export class TimelineItemComponent implements AfterViewInit {
    // Pull data from calling source.
    @Input() objAchievement;
    @Input() strFullDescription;

    // Variables from external TS.
    arrGlobals = GLOBALS;

    private getDescriptionFull() {
        // Sanitize the HTML given by objAchievement.
        if(this.strFullDescription != null) {
            return this.strFullDescription;
        } else {
            return null;
        }
    }

    ngAfterViewInit() {
        // Moves modal to #modal-section
        $(".modal").appendTo("#modal-section");
    }
    
    // Retrieve modal type.
    getModalType(): string {
        if(this.objAchievement.type == "position") {
            return "warning";
        } else {
            return "primary"
        } // if
    } // getModalType()

    // Retrieve timeline types.
    getTimeLinePointType(): string {
        if(this.objAchievement.type == "position") {
            return "warning";
        } else {
            return "success"
        } // if
    } // getTimeLinePointType()

    // Disable if no image or description.
    mtdDisabled_btnView(): string {
        if(this.getDescriptionFull() == null && this.objAchievement.imgSrc == null) {
            return "hidden";
        } else {
            // do nothing
        } // if
    } // isDisabled_btnView()
}
