/*
 * Configuração opcional do Supabase.
 * Crie um projeto Supabase e configure somente a URL pública do projeto
 * e a chave anon/public. NUNCA coloque service_role, senha ou segredo privado
 * neste arquivo: tudo que está no GitHub Pages é público.
 *
 * Exemplo:
 * window.STELLAR_SUPABASE_CONFIG = {
 *   url: 'https://SEU-PROJETO.supabase.co',
 *   anonKey: 'SUA_CHAVE_ANON_PUBLIC'
 * };
 */
window.STELLAR_SUPABASE_CONFIG = window.STELLAR_SUPABASE_CONFIG || {
  url: '',
  anonKey: ''
};
