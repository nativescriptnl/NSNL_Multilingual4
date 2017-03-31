import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "home",
    templateUrl: "./components/home/home.component.html"
})

export class HomeComponent implements OnInit {

    public constructor(private router: Router) {
    }

    public ngOnInit() {
    }

    public goToPage(componentName: string) {
        this.router.navigate([componentName]);
    }

}
