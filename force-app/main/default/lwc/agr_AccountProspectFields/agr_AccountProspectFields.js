import { LightningElement, api } from 'lwc';
import STATUS_CADASTRO from '@salesforce/schema/Account.Agr_RegisterStatus__c';
import STATUS_ROCKET from '@salesforce/schema/Account.Agr_DocumentationStatus__c';

export default class RecordViewFormConditional extends LightningElement {

    fields = [STATUS_CADASTRO,STATUS_ROCKET];

    @api recordId;
    @api objectApiName;
}