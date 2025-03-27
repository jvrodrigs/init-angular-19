import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { LayoutComponent } from './layout/layout.component';
import { CoinsComponent } from './coins/coins.component';

export const routes: Routes = [
    {
        path: "",
        component: CoinsComponent
    },
    {
        path: "users",
        component: UsersComponent
    }
];
