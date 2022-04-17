# ver configuração do projeto git
git remote show origin

# listar org atual
sfdx force:org:display

# retrieve 
sfdx force:source:retrieve -x ./manifest/package-feature.xml
sfdx force:source:retrieve -m "Layout:Account-Account Layout"

# deploy para QA
sfdx force:source:deploy -x ./manifest/package-feature.xml -u cprado@salesforce.com.qa01 --checkonly >> out.txt
sfdx force:source:deploy -u cprado@salesforce.com.qa01 -m "Layout:Account-Account Layout"

# listar as diferenças de metadados entre a org e o projeto local
sfdx force:source:status -u cprado@salesforce.com.dev01 >> out.txt

# puxar todas as alterações da org, sobrescrevendo diferenças locais
sfdx force:source:pull -u cprado@salesforce.com.dev01 -f

# open an org
sfdx force:org:open

# delete scratch org
sfdx force:org:delete -u <nome da scratch org>

# Install FSC packages
sfdx force:source:deploy -p force-app/scratch

