import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";

import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {Http} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutes, AppComponents} from "./app.routing";

// for AoT compilation
export function translateLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "/i18n/", ".json");
};

@NgModule({
    declarations: [AppComponent, ...AppComponents],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(AppRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                deps: [Http],
                useFactory: (translateLoaderFactory)
            }
        })
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
