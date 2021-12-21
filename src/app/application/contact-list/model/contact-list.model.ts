import { ACTION_TYPE } from "../enum";

export class ContactDialogModel{
    contact?: ContactListData;
    action?: ACTION_TYPE
}

export class ContactListData {
   
    firstName?: string;
    lastName?: string;
    phone?: string;
    id?: number;
}