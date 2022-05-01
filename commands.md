# ver configuração do projeto git
git remote show origin

# fetch a remote branch
https://www.loginradius.com/blog/engineering/git-fetch-remote-branch/#:~:text=If%20you%20have%20a%20single,already%20loaded%20in%20your%20system

# listar org atual
sfdx force:org:display

# retrieve
sfdx force:source:retrieve -u qa01 -m "Profile:Segurança Corporativa"
sfdx force:source:retrieve -x ./manifest/package-feature.xml
sfdx force:source:retrieve -m "Layout:Account-Account Layout"

# deploy para QA
sfdx force:source:deploy -x ./manifest/package.xml -u qa01 --checkonly >> out.txt
sfdx force:source:deploy -u qa01 -m "Layout:Account-Account Layout"

# destructive changes
sfdx force:source:deploy -u qa01 -x ./manifest/destructive-changes/package.xml --predestructivechanges ./manifest/destructive-changes/destructiveChangesPre.xml --checkonly --verbose

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

