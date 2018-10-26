import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    private users: User [] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'Coca-cola',
            hobbies: ['Coder', 'degustations de café']
        }
    ];
    userSubject = new Subject<User[]>();


    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
      this.users.push(user);
      this.emitUsers();
    }

}
