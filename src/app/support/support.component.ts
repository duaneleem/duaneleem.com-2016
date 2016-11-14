import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-support',
    template: `
        <section class="container space-top-40">
            <div class="row">
                <div class="col-xs-12">
                    <h1 class="text-center">Customer Support</h1>
                    <div class="divider half-margins"><i class="fa fa-star"></i></div>

                    <div class="space-bottom-40">
                        <h2 class="space-bottom-10">Remote Support</h2>
                        <p class="lead">URL for remote support assistance.</p>
                        <ul class="list-inline">
                            <li><a class="btn btn-primary" href="http://center.leemtek.com:8040/" target="_blank"><i class="fa fa-medkit" aria-hidden="true"></i> Remote Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="space-bottom-10">ScreenConnect</h2>
                        <p class="lead">Download links for StagedHomes &amp; LeemTek ScreenConnect Software</p>
                        <ul class="list-inline">
                            <li><a class="btn btn-primary" href="https://d1xrp9zhb3ks3c.cloudfront.net/downloads/ScreenConnect.ClientSetup.exe"><i class="fa fa-windows" aria-hidden="true"></i> Windows</a></li>
                            <li><a class="btn btn-primary" href="https://d1xrp9zhb3ks3c.cloudfront.net/downloads/ScreenConnect.ClientSetup.pkg"><i class="fa fa-apple" aria-hidden="true"></i> Mac OS</a></li>
                        </ul>
                    </div>
                </div><!-- /col -->
            </div><!-- /row -->
        </section>
    `
})

export class SupportComponent implements OnInit {
    ngOnInit() {
    }
}
