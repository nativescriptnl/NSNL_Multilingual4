import {HomeComponent} from "./components/home/home.component";
import {ExampleComponent} from "./components/example/example.component";

export const AppRoutes: any = [
    {path: "", component: HomeComponent},
    {path: "example", component: ExampleComponent}

];

export const AppComponents: any = [
    HomeComponent,
    ExampleComponent
];

