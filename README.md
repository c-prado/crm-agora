# Solução CRM da Ágora - Sprint 2
Carga de todos os dados dos clientes, layouts de todos os objetos do cliente.

# Procedimentos de instalação
1. Executar o destructive changes para apagar os campos que mudaram de nome.
2. Fazer o deploy dos metadados citados em ./manifest/package.xml.
3. Executar ./script/apex/CreateBaseData.apex para criar o papel recíproco de representante.

## Etapas manuais pré-deploy
1. -

## Etapas manuais pós-deploy
1. Habilitar a permissão "Usuário único de API" para o perfil "Perfil de API" (só em PROD).

## Teste do deploy
1. Carregar arquivos .csv de teste.
2. Verificar se as telas de conta, conta pessoal, contato, restrições, bens, cblc, bloqueio de cblc, estão de acordo com a especificação.

# Build and Test
Antes de fazer deploy para a org:
1. Crie uma scratch org.
2. Instale os pacotes gerenciados, executando: sfdx force:source:deploy -p force-app/scratch
3. Execute os procedimentos de instalação
4. Realize os testes

# Contribute
Cadastre problemas encontrados cadastrando um issue no repositório de versões