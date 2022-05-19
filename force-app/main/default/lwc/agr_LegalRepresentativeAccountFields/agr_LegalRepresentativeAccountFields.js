import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import CPFCNPJ from '@salesforce/schema/Account.Agr_CPF_CNPJ_Repr__c';
import STATUS from '@salesforce/schema/Account.Agr_AccountStatus__c';

import RECORD_TYPE_ID from '@salesforce/schema/Account.RecordTypeId';

import FOUNDATION_DATE from '@salesforce/schema/Account.Agr_FoundationDate__c';
import PERSON_BIRTHDATE from '@salesforce/schema/Account.PersonBirthdate';
import LINKWITHAGORA from '@salesforce/schema/Account.Agr_LinkWithAgora__c';

import HASPERMANENTVISA from '@salesforce/schema/Account.Agr_HasPermanentVisa__c';
import HASSECONDARYCITIZENSHIP from '@salesforce/schema/Account.Agr_HasSecondaryCitizenship__c';

import ISPOLITICALLYEXPOSED from '@salesforce/schema/Account.Agr_IsPoliticallyExposed__c';
import FISCALRESIDENCYABROAD from '@salesforce/schema/Account.Agr_FiscalResidencyAbroad__c';

export default class Agr_LegalRepresentativeAccountFields extends LightningElement {
    areDetailsVisible = false;
    str = "";

    fields1 = [CPFCNPJ, STATUS, FOUNDATION_DATE, LINKWITHAGORA, HASPERMANENTVISA, HASSECONDARYCITIZENSHIP, ISPOLITICALLYEXPOSED, FISCALRESIDENCYABROAD];
    fields2 = [CPFCNPJ, STATUS, PERSON_BIRTHDATE, LINKWITHAGORA, HASPERMANENTVISA, HASSECONDARYCITIZENSHIP, ISPOLITICALLYEXPOSED, FISCALRESIDENCYABROAD];

    @api recordId;
    @api objectApiName;

    @wire(getRecord, { recordId: '$recordId', fields: [RECORD_TYPE_ID] })
    record;

    get isBusinessAccount() {
        this.str = new String(getFieldValue(this.record.data, RECORD_TYPE_ID));
        return this.str.localeCompare("0125f000000huQzAAI") == 0 ? true : false;
    }
}