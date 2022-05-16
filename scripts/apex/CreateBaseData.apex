Id recordTypeId = Schema.SObjectType.FinServ__ReciprocalRole__c.getRecordTypeInfosByDeveloperName().get('AccountRole').getRecordTypeId();
    
FinServ__ReciprocalRole__c rr = new FinServ__ReciprocalRole__c(FinServ__CreateInverseRole__c=true, 
    	                        									  Name='Representante',
        	                                                          FinServ__InverseRole__c = 'Representado',
            	                                                      FinServ__SourceSystemId__c = '1',
                	                                                  RecordTypeId = recordTypeId);

insert rr;
system.debug(rr);