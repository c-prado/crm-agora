# Solução CRM da Ágora - Release 1
Configuração básica e carga de contas e contatos para início do aquecimento de IP pelo Marketing Cloud.

# Procedimentos de instalação

## Etapas manuais pré-deploy
1. Associar os permission sets do financial services ao usuário q vai fazer o deploy:
   - Extensão do Financial Services Cloud
   - Financial Services Cloud Standard

## Etapas manuais pós-deploy
1. Ativar o tema de cores e marca da Ágora
2. Se o deploy foi após refresh: criar usuário de integração para Mulesoft e associar os permission sets do FSC
3. Habilitar a permissão "Usuário único de API" no "Perfil de API" em produção

## Teste do deploy
Carregar os arquivos do diretório /test e acessar os relatórios Carga de Contas e Carga de Contatos

# Build and Test
Antes de fazer deploy para a org:
1. Crie uma scratch org.
2. Instale os pacotes gerenciados, executando: sfdx force:source:deploy -p force-app/scratch
3. Execute os procedimentos de instalação
4. Realize os testes

# Contribute
Cadastre problemas encontrados cadastrando um issue no repositório de versões