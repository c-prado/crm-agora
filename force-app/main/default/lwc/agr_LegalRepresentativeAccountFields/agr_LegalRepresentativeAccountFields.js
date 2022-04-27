import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import CPFCNPJ from '@salesforce/schema/Account.Agr_CPF_CNPJ__c';
import STATUS from '@salesforce/schema/Account.FinServ__Status__c';
import RECORD_TYPE_ID from '@salesforce/schema/Account.RecordTypeId';
import FOUNDATION_DATE from '@salesforce/schema/Account.Agr_FoundationDate__c';
import PERSON_BIRTHDATE from '@salesforce/schema/Account.PersonBirthdate';

export default class Agr_LegalRepresentativeAccountFields extends LightningElement {
    areDetailsVisible = false;
    str = "";

    fields1 = [CPFCNPJ, STATUS, FOUNDATION_DATE];
    fields2 = [CPFCNPJ, STATUS, PERSON_BIRTHDATE];

    @api recordId;
    @api objectApiName;

    @wire(getRecord, { recordId: '$recordId', fields: [RECORD_TYPE_ID] })
    record;

    get isBusinessAccount() {
        this.str = new String(getFieldValue(this.record.data, RECORD_TYPE_ID));
        return this.str.localeCompare("0125f000000huQzAAI") == 0 ? true : false;
    }
}