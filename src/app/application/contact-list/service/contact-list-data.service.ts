import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactListData } from '../model';
import { ContactListEndpointService } from './contact-list-endpoint.service';


@Injectable()

export class ContactListDataService {

    constructor(
        private _http: HttpClient,
        private _endPoint: ContactListEndpointService
    ) { }
    

    fetchContactDetails(): Observable<ContactListData[]>{
        return this._http.get<ContactListData[]>(`https://${this._endPoint.getContactDetails()}`)
    }

}