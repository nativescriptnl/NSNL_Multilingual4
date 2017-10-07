import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common";

import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: "example",
    templateUrl: "./example.component.html"
})

export class ExampleComponent implements OnInit {

    public constructor(private location: Location, private translate: TranslateService) {
    }

    public ngOnInit() {
        
    }

    public goBack() {
        this.location.back();
    }

    public changeLanguage(lang: string) {
        this.translate.use(lang);
    }

}

