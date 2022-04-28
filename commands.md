# ver configuração do projeto git
git remote show origin

# listar org conectada
sfdx force:org:display

# retrieve via package.xml
sfdx force:source:retrieve -x ./manifest/package-feature.xml
sfdx force:source:retrieve -m CustomObject:AccountTeamMember

# deploy para QA
sfdx force:source:deploy -x ./manifest/package-feature.xml -u cprado@salesforce.com.qa01 --checkonly
sfdx force:source:deploy -x ./manifest/package.xml -u cprado@salesforce.com.qa01 --checkonly
sfdx force:source:deploy -x ./manifest/package.xml -u cprado@salesforce.com.qa01 >> out.txt