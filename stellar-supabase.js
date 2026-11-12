/*
 * Adaptador de segurança para publicação estática.
 * O HTML original referencia esta integração, mas não inclui o módulo
 * funcional de autenticação/sincronização. Não simula login nem sincronização.
 */
(() => {
  const cfg = window.STELLAR_SUPABASE_CONFIG || {};
  const status = document.getElementById('sb-cloud-status');
  const ready = Boolean(cfg.url && cfg.anonKey && window.supabase?.createClient);
  if (ready) {
    // A conexão é intencionalmente não inicializada aqui: exige esquema,
    // políticas RLS e fluxo de autenticação definidos no projeto Supabase.
    if (status) status.textContent = 'Supabase configurado. Integração de dados ainda não ativada nesta versão.';
  } else if (status) {
    status.textContent = 'Modo local — configure o Supabase e implemente autenticação/RLS para ativar a nuvem.';
  }
})();
