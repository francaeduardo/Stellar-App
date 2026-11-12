# Stellar — publicação no GitHub Pages

Esta pasta contém a versão estática do Stellar preparada para hospedagem no **GitHub Pages**.

## Publicar

1. Crie um repositório no GitHub (por exemplo, `stellar`).
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório — especialmente `index.html`, `manifest.webmanifest`, `sw.js`, `icons/` e `src/`.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)` e salve.
6. Aguarde a publicação. O endereço será semelhante a `https://SEU-USUARIO.github.io/stellar/`.

Também é possível enviar o ZIP diretamente pelo GitHub (descompacte antes de confirmar o commit; o GitHub Pages precisa encontrar `index.html` na raiz publicada).

## O que foi preparado

- `index.html`: página principal, preservando o conteúdo e os módulos existentes.
- `manifest.webmanifest` e ícones: metadados para instalação como aplicativo.
- `sw.js`: cache básico dos arquivos estáticos do próprio site.
- `src/stellar-supabase-config.js`: modelo vazio para configuração pública do Supabase.
- `src/stellar-supabase.js`: adaptador informativo; não finge autenticação nem sincronização.

## Limitações importantes

- GitHub Pages é hospedagem estática: **não executa APIs, PHP, Node.js ou funções de servidor**.
- A assistente Nova que usa IA depende de um serviço HTTPS externo (`/api/nova-chat`). Configure o endereço e token na própria tela do Stellar e hospede essa API separadamente. **Nunca coloque chaves privadas ou tokens de servidor no HTML/repositório.**
- O HTML original referencia integração Supabase, mas os módulos funcionais correspondentes não vieram no arquivo enviado. A nuvem, autenticação e sincronização entre dispositivos não ficam ativas apenas com esta publicação. Para ativá-las, implemente o fluxo no Supabase com políticas RLS e credenciais públicas adequadas.
- Dados financeiros armazenados em `localStorage` ficam somente no navegador/dispositivo. O bloqueio por senha/biometria do front-end não equivale a autenticação de servidor nem protege dados contra alguém com acesso ao navegador/perfil.
- Os recursos de notícias e bibliotecas externas dependem de conexão e dos serviços de terceiros.

## Antes de usar com dados reais

Revise a segurança, configure autenticação real no servidor, aplique políticas de acesso no banco e teste em um ambiente privado. Não publique dados pessoais, saldos, tokens, chaves privadas ou backups no repositório.
