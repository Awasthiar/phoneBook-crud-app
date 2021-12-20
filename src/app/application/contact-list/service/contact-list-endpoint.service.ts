import { Injectable } from '@angular/core';
import { ApiUrl } from '../constant';

@Injectable()

export class ContactListEndpointService {

    private _const = ApiUrl;
    
    getContactDetails():string{
        return this._const.GET_CONTACTS;
    }
    
}