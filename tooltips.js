(() => {
  const definitions = {
    'Uscite monitorate': 'Numero di articoli e uscite inclusi nella rassegna del periodo. Non equivale al numero di notizie originali: uno stesso tema puo essere ripreso da piu testate.',
    'AVE stimato': 'Advertising Value Equivalent: stima del costo di uno spazio pubblicitario equivalente alla copertura ottenuta. Non misura il ritorno economico o il valore della reputazione. Metodo e tariffe dipendono dal fornitore.',
    'OTS potenziale': 'Opportunity To See: opportunita potenziali di esposizione ai contenuti. Non rappresenta lettori effettivi o persone uniche e puo includere esposizioni ripetute.',
    'Utenti unici digital': 'Audience mensile stimata delle testate online, non lettori del singolo articolo. Periodo, fonte e deduplicazione tra testate devono essere verificati prima di aggregare i valori.',
    'Sentiment score': 'Indicatore del tono della copertura verso il brand. Nel prototipo il valore e illustrativo: scala, pesi e gestione dei toni misti vanno definiti con il fornitore.',
    'Tier-1 coverage': 'Uscite sulle testate considerate strategiche per autorevolezza e pertinenza. Il panel Tier-1 deve essere concordato con il team comunicazione.',
    'Executive brief': 'Sintesi delle principali evidenze, criticita e opportunita della rassegna, a supporto della lettura quotidiana.',
    '3 segnali da valutare': 'Selezione di temi che richiedono una valutazione del team: possibili criticita, opportunita o argomenti da monitorare.',
    'Narrative attive': 'Temi associati al brand nella copertura osservata. I punteggi sono illustrativi e non rappresentano percentuali di pubblico.',
    'Digitalizzazione reti': 'Copertura relativa a reti intelligenti, tecnologie e innovazione delle infrastrutture. Il punteggio esprime la forza narrativa ipotizzata nel prototipo.',
    'Sostenibilita e ESG': 'Presenza dei temi ambientali, sociali e di governance nel racconto del brand. Non e una valutazione della performance ESG aziendale.',
    'Regolatorio': 'Attenzione mediatica a norme, tariffe e decisioni delle autorita che possono influenzare il contesto della comunicazione.',
    'Territori e concessioni': 'Copertura di servizi locali, rapporti con le comunita e concessioni. Evidenzia i temi rilevanti per il presidio territoriale.',
    'Copertura rilevante': 'Selezione delle uscite da esaminare per tema, visibilita e possibile impatto sulle relazioni esterne. I punteggi sono illustrativi.',
    'Giornalisti piu attivi': 'Autori con maggiore frequenza di pubblicazione nel campione. Il tono dei contenuti non descrive opinioni personali o qualita della relazione con il giornalista.',
    'Peso media e reach': 'Lettura della copertura per tipologia di media. AVE e OTS sono metriche diverse: le barre del prototipo non costituiscono un confronto su una scala comune.',
    'Online nazionale': 'Copertura sulle testate online a diffusione nazionale. Il valore mostrato e un AVE stimato, non ricavo generato.',
    'Stampa economica': 'Copertura nelle testate economiche e finanziarie. Le OTS indicano esposizioni potenziali, non lettori unici.',
    'Testate locali': 'Copertura nelle testate territoriali. Le audience possono sovrapporsi e non identificano automaticamente la residenza dei lettori.',
    'Trade e settore': 'Copertura nelle testate specializzate di settore. Il valore economico equivalente non misura da solo la rilevanza per gli stakeholder.',
    'Presidio territoriale': 'Lettura dei bisogni e delle opportunita territoriali guidata dagli insight Alpha, integrata con tono dei media e percezione del brand. Questi ultimi provengono da misurazioni distinte, non da Alpha.',
    'Coverage intelligence': 'Rassegna che collega articolo, autore, audience potenziale, AVE e priorita di approfondimento.',
    'Articolo': 'Titolo e metadati della singola uscita inclusa nel campione di rassegna.',
    'Testata / Autore': 'Fonte editoriale e firma dell\'articolo. Le attribuzioni nel prototipo sono illustrative.',
    'Audience': 'Dimensione potenziale del pubblico della fonte. UU indica utenti unici della testata; OTS indica esposizioni potenziali. Non sono letture misurate dell\'articolo.',
    'Valore': 'AVE stimato dell\'uscita. Il badge sottostante indica invece quanto il messaggio aziendale e stato ripreso: sono due informazioni distinte.',
    'Priorita': 'Azione o tema di approfondimento suggerito al team in base alla rilevanza del contenuto.',
    'Segnali dagli altri canali': 'Contenuti da social corporate, menzioni pubbliche, top management e web aperto. I conteggi restano distinti da quelli della rassegna stampa.',
    'Leadership sostenibilita': 'Lettura del posizionamento narrativo sulla sostenibilita. Gli score mostrati sono ipotesi del prototipo, non certificazioni o misure di impatto ESG.',
    'Proactive coverage': 'Quota di copertura associata a iniziative e messaggi proattivi. Richiede una regola di attribuzione alle attivita del team.',
    'ESG message quality': 'Valutazione illustrativa della chiarezza e della presenza dei messaggi ESG nella copertura. La metodologia deve essere validata.',
    'Greenwashing risk': 'Segnale qualitativo da approfondire quando claim ambientali e prove disponibili non risultano coerenti. Non e un giudizio legale o una verifica automatica.',
    'Editorial opportunity': 'Potenziale interesse editoriale di un tema, da valutare rispetto a pubblici, attualita e disponibilita di evidenze.',
    'Opportunita editoriali': 'Spunti per iniziative proattive e contenuti. Richiedono validazione editoriale prima dell\'attivazione.',
    'Stakeholder heatmap': 'Quadro delle priorita per gruppi di interlocutori. I livelli di attenzione sono illustrativi e non misurano opinioni individuali.',
    'Attenzione': 'Livello indicativo di rilevanza del tema per il gruppo di stakeholder, utile per ordinare gli approfondimenti.',
    'Tema dominante': 'Argomento prevalente associato al gruppo di stakeholder nel campione osservato.',
    'Azione': 'Passo operativo suggerito, soggetto alla valutazione e all\'approvazione del team.',
    'Priorita: Regolatorio ARERA': 'Caso illustrativo per organizzare la risposta a un tema regolatorio e coordinare comunicazione e public affairs.',
    'Response priority score': 'Punteggio illustrativo di priorita di risposta. Non rappresenta la probabilita di una crisi; pesi e soglie vanno concordati.',
    'Riepilogo decisionale': 'Raccoglie classificazione del tema, interlocutori coinvolti, owner e prossimo controllo per supportare la decisione.',
    'Analisi territoriale': 'Confronto di menzioni, tono, percezione e risultati delle attivita per area geografica. Il filtro canale non modifica le rilevazioni sulla percezione.',
    'Menzioni attribuite': 'Contenuti associati al territorio e al canale selezionati. Le menzioni nazionali o senza attribuzione affidabile sono escluse dal dettaglio geografico.',
    'Tono positivo': 'Quota delle menzioni attribuite classificate come positive sul totale del campione filtrato.',
    'Tono negativo': 'Quota delle menzioni attribuite classificate come negative sul totale del campione filtrato. Le altre sono positive o neutre.',
    'Brand perception': 'Quota di rispondenti favorevoli nella rilevazione locale simulata. Non deriva dal sentiment dei media e non rappresenta tutta la popolazione.',
    'Confronto territoriale': 'Confronto della quota di menzioni positive tra aree, mantenendo lo stesso canale e periodo. I campioni possono avere dimensioni diverse.',
    'Percezione del brand': 'Percentuale di rispondenti favorevoli per area. La variazione e espressa in punti percentuali; i campioni sono distinti e non ponderati.',
    'Attivita e risultati osservati': 'Output e risultati per attivita geograficamente attribuibili. Il confronto temporale non dimostra un effetto causale della comunicazione.',
    'Territorio / attivita': 'Area di riferimento e iniziativa associata. Il perimetro puo derivare dal target, dal luogo dell\'evento o dal territorio citato.',
    'Canale e fonte': 'Tipo di attivita e origine dell\'informazione utilizzata per descriverne i risultati.',
    'Output': 'Numero di contenuti, iniziative o eventi prodotti. L\'unita indicata varia per tipo di attivita.',
    'Risultato': 'Esito osservato, ad esempio visite, interazioni o partecipanti. Metriche con unita differenti non vanno sommate.',
    'Periodo precedente': 'Valore della stessa metrica nel periodo di confronto. Non disponibile quando manca una rilevazione precedente.',
    "Insight e opportunità territoriali": 'Collega insight esterni e territoriali a un bisogno, a un\'agenzia candidata e a una proposta da validare.',
    'Conoscenza della customer base': 'Contesto aggiuntivo sui bisogni potenziali, ricavato da insight comportamentali e territoriali e non da record individuali.',
    'Bisogno emerso': 'Esigenza suggerita dagli insight territoriali. E un\'ipotesi da verificare prima di pianificare un\'attivazione.',
    'Agenzia candidata': 'Presidio ipotizzato per sviluppare la proposta sul territorio. I nomi sono segnaposto e non indicano incarichi attivi.',
    'Proposta da valutare': 'Possibile attivita coerente con il bisogno individuato. Non e una campagna approvata o gia avviata.',
    'Fonti e copertura': 'Catalogo delle fonti previste, del loro perimetro e delle regole di aggregazione. Nessun connettore reale e attivo nel prototipo.',
    'Competitor e confronti omogenei': 'Confronto tra brand sullo stesso insieme di fonti pubbliche, territorio e periodo. I competitor sono segnaposto.',
    'Panel da concordare': 'Insieme di competitor da selezionare con il team prima di usare il confronto per decisioni operative.',
    'Perimetro del confronto': 'Stesse fonti, area e finestra temporale rendono confrontabili i conteggi dei diversi brand.',
    'Fonti escluse': 'Integrazioni non incluse nel benchmark per evitare confronti tra dati con disponibilita differente.',
    'Menzioni pubbliche': 'Conteggio dei contenuti che citano il brand nel campione pubblico di stampa, social e web.',
    'Quota delle menzioni': 'Menzioni del brand divise per il totale delle menzioni del panel. Non e quota di mercato o quota di pubblico.',
    'Regole di aggregazione': 'Criteri per mantenere coerenti unita, deduplicazione, geografia e perimetri delle diverse fonti.',
    'Unita di misura separate': 'Articoli, post, interazioni e partecipanti descrivono fenomeni diversi e conservano conteggi distinti.',
    'Riprese e duplicati': 'URL canonico o ID aiutano a identificare duplicati; le riprese sono collegate alla notizia originaria.',
    'Attribuzione geografica': 'Distingue luogo citato, target e sede dell\'attivita. Non coincide con la residenza del pubblico.',
    'Audience e persone uniche': 'Le audience di piu testate possono sovrapporsi: senza deduplicazione non costituiscono un totale di persone uniche.',
    'Ruolo di Alpha': 'Fornisce insight per la lettura dei bisogni e delle opportunita. Non aggiunge record raw o menzioni ai conteggi.'
  };
  sourceCatalog.forEach(source => { definitions[source[1]] = source[3]; });
  const normalize = text => text.trim().replace(/\s+/g, ' ').toLowerCase();
  // These are planned inputs, not claims of live integrations or measured data.
  const sources = new Map();
  function assignSources(labels, value) {
    labels.forEach(label => sources.set(normalize(label), value));
  }
  assignSources(['Uscite monitorate','Articolo','Testata / Autore','Giornalisti piu attivi'], 'Rassegna stampa cartacea e online, con firme e metadati editoriali.');
  assignSources(['AVE stimato','Online nazionale','Trade e settore'], 'Rassegna stampa; tariffe pubblicitarie e metodo AVE del fornitore, da definire.');
  assignSources(['OTS potenziale','Stampa economica','Testate locali'], 'Rassegna stampa; dati di audience delle testate e metodo di stima OTS del fornitore.');
  assignSources(['Utenti unici digital'], 'Dati di audience mensile delle testate digitali, da fornitore da definire. Non analytics del sito Italgas.');
  assignSources(['Audience','Audience e persone uniche'], 'Dati di audience delle testate, con periodo e metodo di deduplicazione dichiarati.');
  assignSources(['Peso media e reach'], 'Rassegna stampa; dati di audience delle testate; tariffe pubblicitarie e metodi di stima AVE e OTS del fornitore.');
  assignSources(['Coverage intelligence'], 'Rassegna stampa; dati di audience delle testate; tariffe pubblicitarie. Priorita definite con il team comunicazione.');
  assignSources(['Sentiment score','Narrative attive','Digitalizzazione reti','Sostenibilita e ESG','Regolatorio','Territori e concessioni'], 'Rassegna stampa; classificazione tematica e del tono da validare con il team comunicazione.');
  assignSources(['Tier-1 coverage'], 'Rassegna stampa; panel delle testate strategiche definito dal team comunicazione.');
  assignSources(['Executive brief','3 segnali da valutare','Copertura rilevante','Priorita','Response priority score'], 'Rassegna stampa; criteri di rilevanza e priorita del team comunicazione. Sintesi e valutazioni derivate, non dati grezzi del fornitore.');
  assignSources(['Valore','Messaggio ripreso'], 'Rassegna stampa; comunicati e messaggi chiave approvati per verificare la ripresa. Per AVE: tariffe e metodo del fornitore.');
  definitions['Messaggio ripreso'] = 'Presenza del messaggio chiave aziendale nell\'articolo, da verificare rispetto ai materiali approvati. Non misura audience o valore economico.';
  assignSources(['Segnali dagli altri canali'], 'Social proprietari e top management (analytics autorizzati); social listening; web aperto.');
  assignSources(['Leadership sostenibilita','ESG message quality'], 'Rassegna stampa; messaggi ESG approvati e documentazione aziendale a supporto. Valutazione editoriale da validare.');
  assignSources(['Proactive coverage'], 'Rassegna stampa; registro attivita e comunicati diffusi. Attribuzione alle iniziative da verificare.');
  assignSources(['Greenwashing risk'], 'Claim nella copertura; documentazione ESG e prove aziendali verificabili. Necessaria revisione specialistica, non un giudizio automatico.');
  assignSources(['Editorial opportunity','Opportunita editoriali'], 'Rassegna stampa; calendario editoriale, progetti ed evidenze forniti dal team. Opportunita elaborate, non risultati misurati.');
  assignSources(['Stakeholder heatmap','Attenzione','Tema dominante'], 'Rassegna stampa; mappa stakeholder e contesto forniti dal team relazioni esterne.');
  assignSources(['Azione','Riepilogo decisionale'], 'Valutazioni e registro operativo del team comunicazione, a partire dai contenuti monitorati.');
  assignSources(['Priorita: Regolatorio ARERA'], 'Rassegna stampa; atti ufficiali ARERA da verificare; valutazione del team public affairs.');
  assignSources(['Presidio territoriale'], 'Alpha: insight comportamentali e territoriali sui bisogni e sulle opportunita di attivazione. A integrazione: rassegna stampa e social listening per il tono; indagini locali per la percezione del brand.');
  assignSources(['Analisi territoriale'], 'Rassegna stampa, social e web per i contenuti; indagini locali per la percezione; report attivita e analytics autorizzati per i risultati; Alpha per gli insight di attivazione.');
  assignSources(['Menzioni attribuite','Tono positivo','Tono negativo','Confronto territoriale'], 'Contenuti di rassegna, social e web attribuibili al territorio; classificazione del tono. Registri di campagne ed eventi danno contesto, non producono menzioni o sentiment da soli.');
  assignSources(['Brand perception','Percezione del brand'], 'Indagini di percezione locali con campione e questionario dichiarati. Rilevazioni simulate nel prototipo; non derivate da Alpha o dal sentiment.');
  assignSources(['Attivita e risultati osservati','Risultato','Periodo precedente'], 'Report attivita; web analytics autorizzati per visite; analytics social per interazioni; rassegna e web per uscite e citazioni; registrazioni eventi per partecipanti.');
  assignSources(['Territorio / attivita','Canale e fonte','Output','Attribuzione geografica'], 'Registro attivita e report delle agenzie; metadati dei contenuti stampa, social e web.');
  assignSources(["Insight e opportunità territoriali",'Conoscenza della customer base','Bisogno emerso','Ruolo di Alpha'], 'Alpha: insight comportamentali e territoriali, senza dati raw individuali. Interpretazione e attivazione a cura del team.');
  assignSources(['Agenzia candidata'], 'Anagrafica delle agenzie e competenze territoriali del team; insight Alpha come contesto del bisogno, non come assegnazione automatica.');
  assignSources(['Proposta da valutare'], 'Insight Alpha; pianificazione e valutazione del team comunicazione. Non una proposta gia approvata da Alpha.');
  assignSources(['Competitor e confronti omogenei','Perimetro del confronto','Menzioni pubbliche','Quota delle menzioni'], 'Rassegna stampa; social listening pubblico; web aperto. Stesso panel e periodo; esclusi Alpha, analytics privati e web chiuso.');
  assignSources(['Panel da concordare'], 'Panel competitor concordato con il team comunicazione.');
  assignSources(['Fonti e copertura','Fonti escluse','Regole di aggregazione','Unita di misura separate','Riprese e duplicati'], 'Catalogo delle integrazioni e regole metodologiche del progetto, da validare con i fornitori.');
  const descriptions = new Map(Object.entries(definitions).map(([key, value]) => [normalize(key), value]));
  const style = document.createElement('style');
  style.textContent = `
    .tooltip-info{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;width:16px;height:16px;min-width:16px;padding:0;margin:0 0 2px 6px;border:1px solid currentColor;border-radius:50%;background:transparent;color:var(--muted);font:700 11px/1 Georgia,serif;letter-spacing:0;text-transform:none;cursor:help}
    .tooltip-info:hover{color:var(--blue);background:var(--panel-soft)}
    .brief .tooltip-info{color:#d7e5ef}
    .tooltip-text{cursor:help;text-decoration:underline dotted #98a8b8;text-underline-offset:4px;text-decoration-thickness:1px}
    .kpi{position:relative}
    .kpi .tooltip-info{position:absolute;top:5px;right:5px;margin:0;width:14px;height:14px;min-width:14px;font-size:10px}
    .dashboard-tooltip{position:fixed;z-index:1000;width:max-content;max-width:min(330px,calc(100vw - 24px));padding:12px 14px;background:#102033;color:white;border:1px solid #526476;border-radius:6px;box-shadow:0 6px 24px #10203330;font:400 13px/1.55 system-ui,sans-serif;letter-spacing:0;overflow-wrap:anywhere}
    .dashboard-tooltip[hidden]{display:none}
    .tooltip-sources{margin-top:10px;padding-top:9px;border-top:1px solid #526476;color:#c4cfda;font-size:11px;line-height:1.5}
    .tooltip-sources-label{font-weight:600}
    @media(hover:none){.tooltip-info,.tooltip-text{cursor:inherit}.tooltip-text{text-decoration:none}}
  `;
  document.head.append(style);
  const tooltip = document.createElement('div');
  tooltip.id = 'dashboard-tooltip'; tooltip.className = 'dashboard-tooltip';
  tooltip.setAttribute('role', 'tooltip'); tooltip.hidden = true;
  document.body.append(tooltip);
  const main = document.querySelector('main');
  function annotate() {
    // Metric labels are bare text nodes in the territorial template.
    main.querySelectorAll('.territory-metrics article').forEach(article => {
      const text = article.firstChild;
      if (text?.nodeType === Node.TEXT_NODE && text.textContent.trim()) {
        const label = document.createElement('span');
        label.className = 'metric-caption'; label.textContent = text.textContent;
        text.replaceWith(label);
      }
    });
    main.querySelectorAll('h2,h3,h4,.eyebrow,.kpi .label,.bar-meta>span,.legend-row>strong,.row.header>div,th,dt,.metric-caption,.coverage-caption').forEach(element => {
      if (element.querySelector('.tooltip-info') || element.dataset.description) return;
      const description = descriptions.get(normalize(element.textContent));
      const source = sources.get(normalize(element.textContent));
      if (description) {
        // Section titles and standalone KPI titles keep an icon; inner labels use text hover.
        if (!element.matches('h2,h3,.eyebrow,.kpi .label')) {
          element.dataset.description = description;
          if (source) element.dataset.sources = source;
          element.classList.add('tooltip-text');
          return;
        }
        const icon = document.createElement('button');
        icon.type = 'button'; icon.className = 'tooltip-info';
        icon.setAttribute('aria-label', 'Informazioni: ' + element.textContent.trim());
        icon.textContent = 'i'; icon.dataset.description = description;
        if (source) icon.dataset.sources = source;
        element.append(icon);
      }
    });
  }
  let active = null;
  let hideTimer;
  function hide() {
    clearTimeout(hideTimer);
    active?.removeAttribute('aria-describedby');
    active = null; tooltip.hidden = true;
  }
  function show(element) {
    hide(); active = element;
    tooltip.textContent = element.dataset.description;
    if (element.dataset.sources) {
      const details = document.createElement('div');
      details.className = 'tooltip-sources';
      const label = document.createElement('span');
      label.className = 'tooltip-sources-label'; label.textContent = 'Fonti: ';
      details.append(label, document.createTextNode(element.dataset.sources));
      tooltip.append(details);
    }
    tooltip.hidden = false;
    element.setAttribute('aria-describedby', tooltip.id);
    const rect = element.getBoundingClientRect();
    const box = tooltip.getBoundingClientRect();
    const x = Math.max(12, Math.min(rect.left, innerWidth - box.width - 12));
    const y = rect.bottom + box.height + 20 < innerHeight ? rect.bottom + 8 : Math.max(12, rect.top - box.height - 8);
    tooltip.style.left = x + 'px'; tooltip.style.top = y + 'px';
  }
  document.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse') return;
    if (tooltip.contains(event.target)) { clearTimeout(hideTimer); return; }
    const element = event.target.closest('[data-description]');
    if (element) { clearTimeout(hideTimer); if (element !== active) show(element); }
  });
  document.addEventListener('pointerout', event => {
    if (!active) return;
    const next = event.relatedTarget;
    if (next instanceof Node && (active.contains(next) || tooltip.contains(next))) return;
    clearTimeout(hideTimer); hideTimer = setTimeout(hide, 100);
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  document.addEventListener('click', hide);
  document.addEventListener('scroll', () => {
    if (active?.matches(':hover')) show(active);
    else hide();
  }, true);
  window.addEventListener('resize', hide);
  // Reapply descriptions after territory filters recreate their content.
  new MutationObserver(() => { if (active && !active.isConnected) hide(); annotate(); }).observe(main, {childList:true, subtree:true});
  annotate();
})();
