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
 .workspace-section h2{font-size:20px;margin:0 0 8px}.workspace-section h3{font-size:16px;margin:0 0 12px}
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
 .territory-callout{border-left:3px solid var(--blue);padding:8px 16px;margin-top:14px}.territory-callout dt{font-size:12px;color:var(--muted);margin-top:12px}.territory-callout dd{margin:4px 0;font-size:14px}
 @media(max-width:700px){.territory-layout,.source-grid{grid-template-columns:1fr}.territory-metrics{grid-template-columns:1fr 1fr}.data-table{min-width:580px}.row.coverage{grid-template-columns:1fr}.status{white-space:normal}.journalist-card{grid-template-columns:44px minmax(0,1fr)}.journalist-action{grid-column:2;text-align:left}.panel-head{flex-wrap:wrap}}
`;
document.head.append(integrationStyle);
document.querySelector('.topbar .status').textContent='Fonti non collegate';
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
  <header class="workspace-section"><div class="eyebrow">Comunicazione e territori</div><h2>Analisi territoriale</h2><p>Sentiment, menzioni e percezione del brand nelle aree presidiate.</p></header>
  <div class="filter-line"><label>Territorio<select id="area-filter"><option value="all">Tutte le aree</option>${areas.map(a=>`<option>${a.name}</option>`).join('')}</select></label><label>Attivita / canale<select id="channel-filter"><option value="all">Tutte le attivita</option>${channels.map(c=>`<option>${c}</option>`).join('')}</select></label><label>Periodo territoriale<select id="territory-period"><option value="current">14 - 20 settembre 2026</option><option value="previous">7 - 13 settembre 2026</option></select></label></div>
  <div id="territory-content" aria-live="polite"></div>
 </section>
 <section id="sources" class="view">
  <header class="workspace-section"><div class="eyebrow">Provenienza e perimetro</div><h2>Fonti e copertura</h2><p>Catalogo delle integrazioni previste. Tutti i contenuti visualizzati sono dimostrativi; nessun connettore e attivo.</p></header>
  <div class="source-grid">${sourceCatalog.map(s=>`<article class="source-entry"><h3>${s[1]}</h3><span class="pill ${s[0]==='closed'?'warn':''}">${s[4]}</span><p>${s[2]}</p><details><summary>Perimetro e utilizzo</summary><p>${s[3]}</p><p>Ultima sincronizzazione: non disponibile. Fonte da collegare.</p></details></article>`).join('')}</div>
  <section class="workspace-section"><h3>Competitor e confronti omogenei</h3><p>Competitor A e B sono segnaposto del panel da concordare. Il confronto usa lo stesso periodo, territorio e insieme di fonti pubbliche; esclude analytics privati, insight Alpha e web chiuso.</p><div class="data-scroll"><table class="data-table"><thead><tr><th>Panel</th><th>Menzioni pubbliche</th><th>Quota delle menzioni</th></tr></thead><tbody><tr><td>Italgas</td><td>120</td><td>40%</td></tr><tr><td>Competitor A</td><td>105</td><td>35%</td></tr><tr><td>Competitor B</td><td>75</td><td>25%</td></tr></tbody></table></div><p>Campione distinto dalle 42 uscite della rassegna: menzioni stampa, social pubblici e web; 14 - 20 settembre 2026.</p></section>
  <section class="workspace-section"><h3>Regole di aggregazione</h3><p>Articoli, post, menzioni, interazioni e partecipanti mantengono unita separate. Le riprese vengono collegate alla notizia originaria; URL canonico o ID del contenuto identificano i duplicati. I contenuti senza territorio affidabile restano nella categoria non attribuita, senza distribuirli artificialmente sulle regioni.</p><p>La geografia distingue territorio citato, target della campagna e sede dell'evento: non equivale alla residenza del lettore. Reach, OTS e utenti unici delle testate non sono sommati come persone uniche. Alpha arricchisce il contesto decisionale e non aumenta i conteggi delle menzioni.</p></section>
 </section>
 <footer class="source-footer">Prototipo · dati dimostrativi · Fonti previste: rassegna stampa, social corporate e top management, listening, web, report attivita e Alpha (solo insight). Web chiuso non disponibile. <button type="button" data-view="sources">Dettaglio fonti e metodologia</button></footer>
`);
document.querySelector('#overview').insertAdjacentHTML('beforeend', `<section class="workspace-section"><div class="panel-head"><div><h2>Presidio territoriale</h2><p>4 aree · Campagne, stampa locale, social, web ed eventi.</p></div><button class="text-link" type="button" data-view="territory">Apri analisi territoriale</button></div><p>Campania: maggiore quota di menzioni negative nel campione. Piemonte e Sicilia: percezione favorevole in crescita tra le due rilevazioni.</p><p class="source-note">Fonti: rassegna e listening per il tono; rilevazione locale simulata per la brand perception; Alpha per gli insight di attivazione.</p></section>`);
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
 <section class="workspace-section"><h3>Percezione del brand</h3>${(area?[area]:areas).map(a=>`<p><strong>${a.name}: ${previous?a.previous:a.perception}% favorevoli</strong><br>${previous?'Rilevazione precedente':((a.perception-a.previous)>0?'+':'')+(a.perception-a.previous)+' punti vs rilevazione precedente'} · campione ${a.survey}</p>`).join('')}<p class="source-note">Fonte: rilevazione locale simulata, campioni diversi e non ponderati. La percezione non deriva dal sentiment dei media e non cambia con il filtro canale.</p></section></div>
 <section class="workspace-section"><h3>Attivita e risultati osservati</h3><div class="data-scroll"><table class="data-table"><thead><tr><th>Territorio / attivita</th><th>Canale e fonte</th><th>Output</th><th>Risultato</th><th>Periodo precedente</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.area}</strong><small>${r.title}</small></td><td>${r.channel}<small>${sourceCatalog.find(s=>s[0]===r.source)[1]}</small></td><td>${previous?Math.max(1,r.outputs-1):r.outputs}<small>${r.channel==='Eventi offline'?'eventi':'contenuti / iniziative'}</small></td><td>${previous?r.before:r.result}<small>${r.metric}</small></td><td>${previous?'Non disponibile':r.before+' '+r.metric}</td></tr>`).join('')}</tbody></table></div><p class="source-note">Confronto descrittivo tra periodi: la variazione non dimostra un effetto causale della comunicazione. Output e risultati di natura diversa non vengono sommati.</p></section>
 <section class="workspace-section"><div class="panel-head"><h3>Alpha · dal segnale all'attivazione</h3><span class="pill">Solo insight</span></div><p>Insight esterni, comportamentali e territoriali arricchiscono la conoscenza della customer base: bisogno emergente, agenzia in grado di attivarlo e proposta pertinente.</p>${(area?[area]:areas).map(a=>`<dl class="territory-callout"><dt>${a.name} · bisogno emerso</dt><dd>${a.need}</dd><dt>Agenzia candidata</dt><dd>${a.agency} (segnaposto da validare)</dd><dt>Proposta da valutare</dt><dd>${a.proposal}</dd></dl>`).join('')}<p class="source-note">Fonte: insight Alpha simulati. Nessun record individuale o dato raw acquisito. Agenzie e proposte sono ipotesi da validare con il team territoriale; non indicano incarichi attivi.</p></section>`;
 document.querySelectorAll('[data-area]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#area-filter').value=b.dataset.area;renderTerritory();}));
}
for(const id of ['area-filter','channel-filter','territory-period'])document.getElementById(id).addEventListener('change',renderTerritory);
renderTerritory();
