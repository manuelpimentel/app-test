import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class HttpProvider {

    users =
        [
            { username: 'manolo', password: '123456' },
            { username: 'beto', password: '123456' }
        ]

    constructor(  ) { }

    post(url, obj)
    {
    }



}