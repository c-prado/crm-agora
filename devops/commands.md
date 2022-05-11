## ti
sfdx auth:jwt:grant --clientid 3MVG9SM6_sNwRXqv87fhnI9wtadxYZQ4XahmNCc6_uewQF7OajCt7ofDKZoytqGgCuvDst1eeLFG.JkFKOiuR --jwtkeyfile ./devops/sf-keys-ti/server.key --username integration@agora.com.ti01 --instanceurl https://test.salesforce.com

sfdx force:source:deploy -x ./manifest/package-test.xml -u integration@agora.com.ti01 -w 30 --checkonly --testlevel RunLocalTests > out.txt

## th 
sfdx auth:jwt:grant --clientid 3MVG9U_dUptXGpYJA8.J2FzMC.vHyEVM1X4hYhCg3.MhIb8IPyklm7HD.bwKZZOzaQzGXn3p9FyMqtsUV3HII --jwtkeyfile ./devops/sf-keys-th/server.key --username integration@agora.com.th01 --instanceurl https://test.salesforce.com

sfdx force:source:deploy -x ./manifest/package-test.xml -u integration@agora.com.th01 -w 30 --checkonly --testlevel RunLocalTests > out.txt

sfdx force:mdapi:deploy -d ./destructiveChanges -u integration@agora.com.th01 --ignorewarnings --json
sfdx force:apex:execute -u integration@agora.com.th01 -f scripts/apex/CreateBaseData.apex
