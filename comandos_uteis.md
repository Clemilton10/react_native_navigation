# Resolver inconscientências nas dependências

```powershell
# listar pacotes desatualizados
npm outdated

# instalar pacotes com novas versões
npm install pacote@versao

# limpar o cache de dependências do npm
npm cache clean --force

# resinstalar todos os pacotes
rm -rf node_modules # Linux/Git Bash
rmdir /q /s node_modules # Windows/Powershell/CMD
npm install
yarn install

# instalando checkador
npm install -g npm-check

# checkando
npm-check

# checkando e atualizando
npm-check -u

# atualizar todos (não funcionou)
npm update

# atualizar apenas um
npm install pacote@latest
yarn add pacote@latest

# OBS.: Não se esqueça de fazer isso no final
npm install
yarn install
```
