import { Component, effect, inject, signal } from '@angular/core';
import { IUser } from './types';
import { HttpClient, httpResource } from '@angular/common/http';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  private readonly apiUrl = "https://reqres.in/api/users";
  
  // new "constructor" in Ang. 19;
  private http = inject(HttpClient);

  // signal state current page;
  current_page = signal(1);

  // fetch users based on the current page
  usersResource = httpResource<{ data: IUser[] }>(
    () => `${this.apiUrl}?page=${this.current_page()}`, 
    { defaultValue: { data: [] }}
  );

  nextPage() {
    this.current_page.update((page) => page + 1);
  }

  prevPage() {
    this.current_page.update((page) => Math.max(page - 1, 1));
  }
}
