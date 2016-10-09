import { Component } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent {
    // Logo Configuration
    $strLogo = "https://d1xrp9zhb3ks3c.cloudfront.net/web/duaneleem/images/logo.png";

    ngOnInit() {
        /* =========================================================
            One Page Navigation | Options
        ========================================================= */
        jQuery('#topMain').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: ':not(.external)',
            easing: 'easeInOutExpo'
        });
    } // ngOnInit()
}
