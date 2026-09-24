// Demo observations share a single model across territory, channel and source views.
const sourceCatalog = [
  ['press', 'Rassegna stampa', 'Cartacea e online', 'Articoli, citazioni, tono e territorio citato. Fornitore da definire.', 'Esempio'],
  ['owned', 'Social proprietari', 'Account corporate', 'Post e interazioni aggregate da analytics autorizzati.', 'Esempio'],
  ['listening', 'Social listening', 'Menzioni pubbliche', 'Menzioni del brand e conversazioni pubbliche, ove accessibili.', 'Esempio'],
  ['leaders', 'Top management', 'Canali dei portavoce', 'Post pubblici e metriche dei canali autorizzati; separati dai social corporate.', 'Esempio'],
  ['web', 'Web aperto', 'Siti, blog e forum', 'Contenuti pubblici con attribuzione geografica verificabile.', 'Esempio'],
  ['activities', 'Registro attivita', 'Campagne ed eventi', 'Output online/offline con perimetro dichiarato; report dei team e delle agenzie.', 'Esempio'],
  ['alpha', 'Alpha', 'Insight esterni', 'Segnali comportamentali e territoriali per arricchire la conoscenza della customer base. Solo insight, nessun dato raw.', 'Insight'],
  ['closed', 'Web chiuso', 'Accessi su licenza', 'Inclusione subordinata a disponibilita, licenza e autorizzazione. Escluso dai conteggi.', 'Non disponibile']
];
const areas = [
  {name:'Piemonte', perception:72, previous:67, survey:180, need:'Interesse per efficienza e servizi di prossimita', agency:'Agenzia territoriale Nord-Ovest', proposal:'Incontro locale e contenuti sui benefici della rete'},
  {name:'Lazio', perception:64, previous:62, survey:160, need:'Domanda di chiarezza su cantieri e continuita del servizio', agency:'Agenzia territoriale Centro', proposal:'Q&A geolocalizzate e presidio della stampa locale'},
  {name:'Campania', perception:59, previous:60, survey:145, need:'Sensibilita verso tempi di intervento e impatto sul territorio', agency:'Agenzia territoriale Sud', proposal:'Ascolto locale e aggiornamenti sui lavori'},
  {name:'Sicilia', perception:69, previous:63, survey:170, need:'Interesse per innovazione delle infrastrutture', agency:'Agenzia territoriale Isole', proposal:'Racconto dei progetti e incontri con le comunita'}
];
const channels = ['Campagne','Stampa locale','Social','Web aperto','Eventi offline'];
const activityNames = ['Reti efficienti','Dialogo con le redazioni','Voci dal territorio','Informazione di servizio','Incontri con le comunita'];
const activitySources = ['activities','press','owned','web','activities'];
const observations = areas.flatMap((area, i) => channels.map((channel, j) => {
  const mentions = [34,27,48,19,12][j] + i * 3;
  const positive = Math.round(mentions * [0.68,0.56,0.45,0.64][i]);
  const negative = Math.round(mentions * [0.08,0.15,0.26,0.10][i]);
  return {area:area.name, channel, title:activityNames[j], source:activitySources[j], mentions, positive, negative, previous:mentions - 4 + i, outputs:[3,8,12,6,2][j]+i, metric:['visite alla pagina','uscite locali','interazioni','citazioni web','partecipanti'][j], result:[820,8,340,6,95][j]+i*[80,2,45,2,15][j], before:[670,6,290,4,80][j]+i*[70,2,40,2,12][j]};
}));
const integrationStyle = document.createElement('style');
integrationStyle.textContent = `
 .main:has(#territory.active) .topbar .segmented,.main:has(#sources.active) .topbar .segmented{display:none}
 .workspace-section{padding:20px 0;border-top:1px solid var(--line);margin-top:18px;min-width:0}
 section.workspace-section{padding:18px;border:1px solid var(--line);border-radius:var(--radius);background:var(--panel);box-shadow:0 14px 36px rgba(16,32,51,.07)}
 section.workspace-section>p:last-child{margin-bottom:0}
 .territory-summary{padding:18px;background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 14px 36px rgba(16,32,51,.07)}
 .territory-summary>.workspace-section{padding:0;border:0;margin:0}
 .territory-summary .territory-metrics{margin-bottom:0}
 .workspace-section h2{font-size:20px;margin:0 0 8px}.workspace-section h3{font-size:16px;margin:0 0 12px}
 .territory-highlights{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;margin:24px 0}
 .territory-highlight{padding-left:14px;border-left:3px solid var(--green)}
 .territory-highlight.attention{border-left-color:var(--amber)}
 .territory-highlight h3{margin:0 0 8px;font-size:16px}
 .territory-highlight p{margin:0;font-size:14px;line-height:1.6;color:var(--ink)}
 .territory-provenance{border-top:1px solid var(--line);padding-top:14px}
 .territory-provenance p{margin:0;font-size:12px;line-height:1.6}
 .territory-provenance strong{display:block;margin-bottom:4px;color:var(--ink)}
 @media(max-width:700px){.territory-highlights{grid-template-columns:1fr;gap:20px}}
 .source-note,.workspace-section p{color:var(--muted);font-size:13px;line-height:1.55}
 .source-note{margin:14px 0}.filter-line{display:flex;gap:16px;flex-wrap:wrap;margin:18px 0}
 .filter-line label{display:grid;gap:6px;font-size:12px;font-weight:700}.filter-line select{font:inherit;padding:10px;border:1px solid var(--line);border-radius:6px;background:white;min-width:170px;max-width:100%}
 .territory-metrics{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:20px 0}
 .territory-metrics article{border-left:3px solid var(--green);padding:6px 14px}.territory-metrics strong{display:block;font-size:27px;margin:8px 0}.territory-metrics small{color:var(--muted)}
 .territory-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px}.territory-rank{display:grid;gap:8px}
 .territory-rank button{display:grid;grid-template-columns:100px 1fr 46px;align-items:center;gap:10px;border:1px solid var(--line);padding:12px;background:white;color:var(--ink);border-radius:6px;cursor:pointer;text-align:left}
 .territory-rank button[aria-pressed=true]{border-color:var(--blue);background:#edf5fc}.territory-rank .track{height:8px}
 .data-scroll{overflow-x:auto} .data-table{width:100%;border-collapse:collapse;font-size:13px;text-align:left}.data-table th,.data-table td{padding:14px 10px;border-bottom:1px solid var(--line);vertical-align:top}.data-table th{font-size:12px;color:var(--muted);background:var(--panel-soft)}.data-table small{display:block;color:var(--muted);margin-top:5px;line-height:1.4}
 .source-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.source-entry{border:1px solid var(--line);border-radius:8px;background:white;padding:16px}.source-entry h3{margin:0 0 8px}.source-entry p{margin:8px 0}.source-entry summary{cursor:pointer;color:var(--blue);font-size:13px}
 .source-footer{border-top:1px solid var(--line);padding:18px 0;margin-top:24px;font-size:12px;color:var(--muted);line-height:1.6}.source-footer button,.text-link{background:none;border:0;padding:0;color:var(--blue);font:inherit;text-decoration:underline;cursor:pointer}
 .reading-blocks{display:grid;gap:20px;margin:20px 0}
 .reading-blocks h4,.alpha-area h4{font-size:14px;margin:0 0 6px;color:var(--ink)}
 .reading-blocks p,.source-entry p,.alpha-area dd{font-size:14px;line-height:1.65;color:var(--ink);margin:0}
 .reading-note{border-top:1px solid var(--line);padding-top:14px;margin-top:20px}
 .reading-note p,.source-entry .reading-note p{font-size:12px;line-height:1.6;color:var(--muted);margin:0 0 6px}
 .reading-note strong{color:var(--ink)}
 .source-entry .source-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:8px}
 .source-heading h3{font-size:16px;margin:0}.source-entry .source-scope{color:var(--muted);font-size:13px;margin:0 0 16px}
 .source-entry details{border-top:1px solid var(--line);padding-top:12px}.source-entry summary{font-weight:700}
 .source-entry details>p{margin-top:12px}
 .perception-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:6px 16px;padding:16px 0;border-top:1px solid var(--line)}
 .perception-row h4{font-size:14px;margin:0}.perception-value{text-align:right;font-size:24px;font-weight:800;line-height:1.2}
 .perception-value small{display:block;font-size:12px;font-weight:400;color:var(--muted);margin-top:4px}
 .perception-row p{grid-column:1 / -1;margin:0;font-size:12px}.perception-change{font-weight:700;color:var(--ink)}
 .alpha-area{border-top:1px solid var(--line);padding:20px 0}.alpha-area h4{font-size:16px;margin-bottom:16px}
 .alpha-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin:0}
 .alpha-steps div{min-width:0;border-left:3px solid var(--blue);padding-left:12px}
 .alpha-steps div:last-child{border-color:var(--green)}
 .alpha-steps dt{font-size:12px;font-weight:700;color:var(--muted);margin-bottom:8px}.alpha-steps dd{margin:0}
 .alpha-steps small{display:block;font-size:12px;color:var(--muted);margin-top:6px}
 @media(max-width:700px){.alpha-steps{grid-template-columns:1fr;gap:18px}}
 @media(max-width:700px){.territory-layout,.source-grid{grid-template-columns:1fr}.territory-metrics{grid-template-columns:1fr 1fr}.data-table{min-width:580px}.row.coverage{grid-template-columns:1fr}.status{white-space:normal}.journalist-card{grid-template-columns:44px minmax(0,1fr)}.journalist-action{grid-column:2;text-align:left}.panel-head{flex-wrap:wrap}}
 .row.coverage .coverage-caption{display:none}
 .coverage-panel>.panel-head{align-items:flex-start;gap:24px;margin-bottom:20px}
 .coverage-panel>.panel-head h2{font-size:22px;line-height:1.3;margin-bottom:8px}
 .coverage-panel>.panel-head p{max-width:520px;line-height:1.6;margin:0}
 .coverage-total{flex-shrink:0;padding-left:18px;border-left:1px solid var(--line);text-align:right}
 .coverage-total strong{display:block;font-size:28px;line-height:1.15;font-variant-numeric:tabular-nums}
 .coverage-total span{display:block;margin-top:5px;font-size:12px;color:var(--muted)}
 .coverage-panel>.tabs{border-bottom:1px solid var(--line);padding-bottom:16px;margin-bottom:18px}
 #media .coverage-panel .row.coverage{grid-template-columns:1.5fr 1fr .8fr .85fr .85fr}
 #media .coverage-panel .row.header{font-size:11px;text-transform:none;letter-spacing:0;line-height:1.4;background:#eef3f7;padding:12px 14px}
 #media .coverage-panel .row.coverage:not(.header){padding:20px 14px;align-items:start;line-height:1.5}
 #media .coverage-panel .row.coverage>div{min-width:0;overflow-wrap:anywhere}
 #media .coverage-panel .row.coverage>div:first-child strong{font-size:15px;line-height:1.5}
 #media .coverage-panel .row.coverage>div:first-child>span{margin-top:8px;font-size:11px;line-height:1.6}
 #media .coverage-panel .row.coverage:not(.header)>div:nth-child(2){font-weight:600}
 #media .coverage-panel .row.coverage:not(.header)>div:nth-child(2)>span:not(.coverage-caption){font-weight:400;margin-top:6px}
 #media .coverage-panel .row.coverage:not(.header)>div:nth-child(3),#media .coverage-panel .row.coverage:not(.header)>div:nth-child(4){font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}
 #media .coverage-panel .row.coverage .message-caption{display:block;margin:12px 0 6px;font-size:10px;font-weight:500;color:var(--muted);line-height:1.4}
 #media .coverage-panel .row.coverage:not(.header)>div:nth-child(5){font-size:13px;font-weight:600;color:var(--blue)}
 @media(max-width:700px){
  #media>.panel{padding:16px 12px}
  #media .row.header.coverage{display:none}
  #media .row.coverage:not(.header){grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;padding:20px 14px;align-items:start;font-size:14px;line-height:1.5}
  #media .row.coverage:not(.header)+.row.coverage{border-top:6px solid var(--panel-soft)}
  #media .row.coverage>div{min-width:0;overflow-wrap:anywhere}
  #media .row.coverage>div:nth-child(1),#media .row.coverage>div:nth-child(2),#media .row.coverage>div:nth-child(5){grid-column:1 / -1}
  #media .row.coverage>div:first-child strong{font-size:16px;line-height:1.45}
  #media .row.coverage>div:first-child>span{margin-top:8px}
  #media .row.coverage>div:nth-child(3),#media .row.coverage>div:nth-child(4){border-top:1px solid var(--line);padding-top:12px;font-weight:700}
  #media .row.coverage>div:nth-child(5){border-top:1px solid var(--line);padding-top:12px;font-weight:700}
  #media .row.coverage .coverage-caption{display:block;font-size:11px;font-weight:700;color:var(--muted);line-height:1.4;margin:0 0 6px}
  #media .row.coverage .message-caption{margin-top:14px}
  #media .row.coverage .pill{width:fit-content;max-width:100%;font-size:12px}
  #media .coverage-panel .row.coverage:not(.header){grid-template-columns:repeat(2,minmax(0,1fr))}
  .coverage-panel>.panel-head{gap:14px}
  .coverage-total{display:flex;align-items:baseline;gap:8px;border:0;padding:0;text-align:left}
  .coverage-total strong{font-size:24px}.coverage-total span{margin:0}
 }
`;
document.head.append(integrationStyle);
document.querySelector('.topbar .status').replaceChildren();
document.querySelector('.mobile-header .status').textContent='Prototipo';
for (const nav of document.querySelectorAll('.nav,.mobile-nav')) {
  for (const [id, label] of [['territory','Analisi territoriale'],['sources','Fonti e copertura']]) {
    const button = document.createElement('button');
    button.type='button'; button.dataset.view=id; button.setAttribute('aria-selected','false'); button.textContent=label;
    nav.append(button);
  }
}
document.querySelector('main').insertAdjacentHTML('beforeend', `
 <section id="territory" class="view">
  <div class="territory-summary">
  <header class="workspace-section"><div class="eyebrow">Comunicazione e territori</div><h2>Analisi territoriale</h2><p>Sentiment, menzioni e percezione del brand nelle aree presidiate.</p></header>
  <div class="filter-line"><label>Territorio<select id="area-filter"><option value="all">Tutte le aree</option>${areas.map(a=>`<option>${a.name}</option>`).join('')}</select></label><label>Attivita / canale<select id="channel-filter"><option value="all">Tutte le attivita</option>${channels.map(c=>`<option>${c}</option>`).join('')}</select></label><label>Periodo territoriale<select id="territory-period"><option value="current">14 - 20 settembre 2026</option><option value="previous">7 - 13 settembre 2026</option></select></label></div>
  <div id="territory-summary-metrics" aria-live="polite"></div>
  </div>
  <div id="territory-content" aria-live="polite"></div>
 </section>
 <section id="sources" class="view">
  <header class="workspace-section"><div class="eyebrow">Provenienza e perimetro</div><h2>Fonti e copertura</h2><p>Catalogo delle integrazioni previste.</p><div class="reading-note"><p><strong>Stato delle integrazioni</strong><br>Nessun connettore attivo. I contenuti visualizzati sono dimostrativi.</p></div></header>
  <div class="source-grid">${sourceCatalog.map(s=>`<article class="source-entry"><div class="source-heading"><h3>${s[1]}</h3>${s[4]==='Esempio'?'':`<span class="pill ${s[0]==='closed'?'warn':''}">${s[4]}</span>`}</div><p class="source-scope">${s[2]}</p><details><summary>Perimetro e utilizzo</summary><p>${s[3]}</p><div class="reading-note"><p><strong>Ultima sincronizzazione</strong><br>Non disponibile · fonte da collegare.</p></div></details></article>`).join('')}</div>
  <section class="workspace-section"><h3>Competitor e confronti omogenei</h3><div class="reading-blocks"><div><h4>Panel da concordare</h4><p>Competitor A e B sono segnaposto.</p></div><div><h4>Perimetro del confronto</h4><p>Stesso periodo, territorio e insieme di fonti pubbliche.</p></div><div><h4>Fonti escluse</h4><p>Analytics privati, insight Alpha e web chiuso.</p></div></div><div class="data-scroll"><table class="data-table"><thead><tr><th>Panel</th><th>Menzioni pubbliche</th><th>Quota delle menzioni</th></tr></thead><tbody><tr><td>Italgas</td><td>120</td><td>40%</td></tr><tr><td>Competitor A</td><td>105</td><td>35%</td></tr><tr><td>Competitor B</td><td>75</td><td>25%</td></tr></tbody></table></div><div class="reading-note"><p><strong>Campione e periodo</strong><br>Menzioni stampa, social pubblici e web · 14 - 20 settembre 2026.<br>Campione distinto dalle 42 uscite della rassegna.</p></div></section>
  <section class="workspace-section"><h3>Regole di aggregazione</h3><div class="reading-blocks"><div><h4>Unita di misura separate</h4><p>Articoli, post, menzioni, interazioni e partecipanti mantengono conteggi distinti.</p></div><div><h4>Riprese e duplicati</h4><p>Le riprese vengono collegate alla notizia originaria. URL canonico o ID del contenuto identificano i duplicati.</p></div><div><h4>Attribuzione geografica</h4><p>Territorio citato, target della campagna e sede dell'evento sono dimensioni distinte: non equivalgono alla residenza del lettore.</p><p>I contenuti senza territorio affidabile restano nella categoria non attribuita, senza distribuirli artificialmente sulle regioni.</p></div><div><h4>Audience e persone uniche</h4><p>Reach, OTS e utenti unici delle testate non sono sommati come persone uniche.</p></div><div><h4>Ruolo di Alpha</h4><p>Gli insight arricchiscono il contesto decisionale e non aumentano i conteggi delle menzioni.</p></div></div></section>
 </section>
 <footer class="source-footer">Prototipo · dati dimostrativi · Fonti previste: rassegna stampa, social corporate e top management, listening, web, report attivita e Alpha. Web chiuso non disponibile. <button type="button" data-view="sources">Dettaglio fonti e metodologia</button></footer>
`);
document.querySelector('#overview').insertAdjacentHTML('beforeend', `<section class="workspace-section"><div class="panel-head"><div><h2>Presidio territoriale</h2><p>4 aree · Campagne, stampa locale, social, web ed eventi.</p></div><button class="text-link" type="button" data-view="territory">Apri analisi territoriale</button></div><div class="territory-highlights"><article class="territory-highlight attention"><h3>Campania</h3><p>Maggiore quota di menzioni negative nel campione.</p></article><article class="territory-highlight"><h3>Piemonte e Sicilia</h3><p>Percezione favorevole in crescita tra le due rilevazioni.</p></article></div><div class="territory-provenance"><p><strong>Fonti</strong>Rassegna e listening per il tono; rilevazione locale simulata per la brand perception; Alpha per gli insight di attivazione.</p></div></section>`);
document.querySelector('#media').insertAdjacentHTML('beforeend', `<p class="source-note">Fonte: rassegna stampa cartacea e online, fornitore da definire. AVE, OTS e audience sono valori simulati; OTS indica esposizione potenziale, non lettori effettivi.</p><section class="workspace-section"><h2>Segnali dagli altri canali</h2><p>Campione multicanale · 14 - 20 settembre 2026 · conteggi distinti dalla rassegna.</p><div class="filter-line"><label>Fonte<select id="signal-filter"><option value="all">Tutte le fonti</option><option value="owned">Social proprietari</option><option value="listening">Menzioni pubbliche</option><option value="leaders">Top management</option><option value="web">Web aperto</option></select></label></div><div id="signal-feed" aria-live="polite"></div></section>`);
const signals = [ ['owned','Piemonte','Post corporate sulle reti efficienti','12 post · 340 interazioni'],['listening','Campania','Conversazioni sui tempi dei cantieri','26 menzioni · tono misto'],['leaders','Nazionale, non attribuito','Intervento del portavoce sulla transizione','3 post · 180 interazioni'],['web','Lazio','Riprese delle informazioni di servizio','6 citazioni web'] ];
function renderSignals(){const filter=document.querySelector('#signal-filter').value;document.querySelector('#signal-feed').innerHTML=signals.filter(s=>filter==='all'||s[0]===filter).map(s=>`<article class="workspace-section"><h3>${s[2]}</h3><p>${s[3]} · ${s[1]}</p><small>Fonte: ${sourceCatalog.find(f=>f[0]===s[0])[1]} · esempio simulato</small></article>`).join('');}
document.querySelector('#signal-filter').addEventListener('change',renderSignals);renderSignals();
function renderTerritory(){
 const selected=document.querySelector('#area-filter').value, channel=document.querySelector('#channel-filter').value, previous=document.querySelector('#territory-period').value==='previous';
 const rows=observations.filter(r=>(selected==='all'||r.area===selected)&&(channel==='all'||r.channel===channel));
 const total=rows.reduce((s,r)=>s+(previous?r.previous:r.mentions),0);
 const positives=rows.reduce((s,r)=>s+(previous?Math.round(r.previous*r.positive/r.mentions):r.positive),0);
 const negatives=rows.reduce((s,r)=>s+(previous?Math.round(r.previous*r.negative/r.mentions):r.negative),0);
 const area=areas.find(a=>a.name===selected);
 document.querySelector('#territory-content').innerHTML=`
 <div class="territory-metrics"><article>Menzioni attribuite<strong>${total}</strong><small>Campione multicanale</small></article><article>Tono positivo<strong>${Math.round(positives/total*100)}%</strong><small>${positives} su ${total} menzioni</small></article><article>Tono negativo<strong>${Math.round(negatives/total*100)}%</strong><small>${negatives} su ${total}; altre neutre</small></article><article>Brand perception<strong>${area?(previous?area.previous:area.perception)+'%':'Per area'}</strong><small>${area?'Favorevoli · n = '+area.survey:'Rilevazioni locali separate'}</small></article></div>
 <div class="territory-layout"><section class="workspace-section"><h3>Confronto territoriale</h3><p>Quota di menzioni positive · stesso canale e periodo.</p><div class="territory-rank">${areas.map(a=>{const r=observations.filter(r=>r.area===a.name&&(channel==='all'||r.channel===channel));const n=r.reduce((s,r)=>s+(previous?r.previous:r.mentions),0);const p=r.reduce((s,r)=>s+(previous?Math.round(r.previous*r.positive/r.mentions):r.positive),0);const percent=Math.round(p/n*100);return `<button type="button" data-area="${a.name}" aria-pressed="${selected===a.name}"><span>${a.name}</span><span class="track"><span class="fill" style="display:block;--w:${percent}%;--c:var(--green)"></span></span><strong>${percent}%</strong></button>`;}).join('')}</div><p class="source-note">Attribuzione al territorio dell'attivita o citato nel contenuto. 24 menzioni nazionali/non attribuite escluse dal dettaglio territoriale.</p></section>
 <section class="workspace-section"><h3>Percezione del brand</h3>${(area?[area]:areas).map(a=>`<article class="perception-row"><h4>${a.name}</h4><div class="perception-value">${previous?a.previous:a.perception}%<small>favorevoli</small></div><p><span class="perception-change">${previous?'Rilevazione precedente':((a.perception-a.previous)>0?'+':'')+(a.perception-a.previous)+' punti'}</span>${previous?'':' rispetto alla rilevazione precedente'}<br>Campione: ${a.survey}</p></article>`).join('')}<div class="reading-note"><p><strong>Fonte e campione</strong><br>Rilevazione locale simulata; campioni diversi e non ponderati.</p><p><strong>Lettura del dato</strong><br>La percezione non deriva dal sentiment dei media e non cambia con il filtro canale.</p></div></section></div>
 <section class="workspace-section"><h3>Attivita e risultati osservati</h3><div class="data-scroll"><table class="data-table"><thead><tr><th>Territorio / attivita</th><th>Canale e fonte</th><th>Output</th><th>Risultato</th><th>Periodo precedente</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.area}</strong><small>${r.title}</small></td><td>${r.channel}<small>${sourceCatalog.find(s=>s[0]===r.source)[1]}</small></td><td>${previous?Math.max(1,r.outputs-1):r.outputs}<small>${r.channel==='Eventi offline'?'eventi':'contenuti / iniziative'}</small></td><td>${previous?r.before:r.result}<small>${r.metric}</small></td><td>${previous?'Non disponibile':r.before+' '+r.metric}</td></tr>`).join('')}</tbody></table></div><p class="source-note">Confronto descrittivo tra periodi: la variazione non dimostra un effetto causale della comunicazione. Output e risultati di natura diversa non vengono sommati.</p></section>
 <section class="workspace-section"><div class="panel-head"><h3>Alpha · dal segnale all'attivazione</h3><span class="pill">Solo insight</span></div><div class="reading-blocks"><div><h4>Conoscenza della customer base</h4><p>Insight esterni, comportamentali e territoriali collegano il bisogno emergente a un'agenzia candidata e a una proposta pertinente.</p></div></div>${(area?[area]:areas).map(a=>`<article class="alpha-area"><h4>${a.name}</h4><dl class="alpha-steps"><div><dt>Bisogno emerso</dt><dd>${a.need}</dd></div><div><dt>Agenzia candidata</dt><dd>${a.agency}<small>Segnaposto da validare</small></dd></div><div><dt>Proposta da valutare</dt><dd>${a.proposal}</dd></div></dl></article>`).join('')}<div class="reading-note"><p><strong>Fonte e dati acquisiti</strong><br>Insight Alpha simulati. Nessun record individuale o dato raw acquisito.</p><p><strong>Stato delle proposte</strong><br>Agenzie e proposte sono ipotesi da validare con il team territoriale; non indicano incarichi attivi.</p></div></section>`;
 document.querySelector('#territory-summary-metrics').replaceChildren(document.querySelector('#territory-content .territory-metrics'));
 document.querySelectorAll('[data-area]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#area-filter').value=b.dataset.area;renderTerritory();}));
}
for(const id of ['area-filter','channel-filter','territory-period'])document.getElementById(id).addEventListener('change',renderTerritory);
renderTerritory();
