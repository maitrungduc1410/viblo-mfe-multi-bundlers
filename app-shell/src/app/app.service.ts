import { Injectable } from '@angular/core';

const users = [
  {
    username: 'user',
    password: 'user',
  },
];

const remoteModules = [
  {
    remoteEntry: 'http://localhost:3001/remoteEntry.js',
    remoteName: 'angular_mfe_app',
    exposedModule: 'AngularAppLoader',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loggedUser: { username: string; password: string } | null = null;
  authorized_modules: typeof remoteModules = [];

  login(username: string, password: string) {
    const user = users.find(
      (item) => item.username === username && item.password === password
    );

    if (!user) return false;

    this.loggedUser = user;

    this.authorized_modules = remoteModules; // all modules

    return true;
  }
}
