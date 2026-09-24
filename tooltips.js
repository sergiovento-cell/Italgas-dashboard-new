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
    'Presidio territoriale': 'Sintesi dei segnali per area: tono dei media e percezione del brand provengono da misurazioni distinte.',
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
    "Alpha · dal segnale all'attivazione": 'Collega insight esterni e territoriali a un bisogno, a un\'agenzia candidata e a una proposta da validare. Non acquisisce dati raw individuali.',
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
      if (description) {
        // Section titles and standalone KPI titles keep an icon; inner labels use text hover.
        if (!element.matches('h2,h3,.eyebrow,.kpi .label')) {
          element.dataset.description = description;
          element.classList.add('tooltip-text');
          return;
        }
        const icon = document.createElement('button');
        icon.type = 'button'; icon.className = 'tooltip-info';
        icon.setAttribute('aria-label', 'Informazioni: ' + element.textContent.trim());
        icon.textContent = 'i'; icon.dataset.description = description;
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
