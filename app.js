// ─────────────────────────────────────────────
// FIDOG — Core Application
// ─────────────────────────────────────────────

// Static breed data (used as fallback for API results)

const BREEDS_DB = [
  {
    id: "golden-retriever",
    name: "Golden Retriever",
    subtitle: "Il compagno di vita per eccellenza, un concentrato di pura gioia e lealtà.",
    description: "I Golden Retriever sono rinomati per la loro intelligenza, dolcezza e tolleranza. Sono ottimi compagni di famiglia, estremamente socievoli con le persone e con gli altri animali. Amano l'acqua, il gioco e hanno una naturale attitudine al riporto.",
    energy: "Energia media",
    size: "Grande",
    life: "10-12 anni",
    temperament: "Intelligente, gentile, fidato, socievole",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
    funFact: "I Golden Retriever hanno una bocca estremamente 'morbida', tanto da poter trasportare un uovo crudo senza romperlo."
  },
  {
    id: "border-collie",
    name: "Border Collie",
    subtitle: "Energia pura ed intelligenza straordinaria al servizio del lavoro e del gioco.",
    description: "Il Border Collie è considerato il cane più intelligente del mondo. Estremamente attivo, ha bisogno di stimoli fisici e mentali continui. Eccelle in discipline come l'agility dog e lo sheepdog.",
    energy: "Energia alta",
    size: "Media",
    life: "12-15 anni",
    temperament: "Intelligente, energico, attento, tenace",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=800",
    funFact: "Un Border Collie di nome Chaser conosceva il nome di ben 1.022 giocattoli diversi e sapeva trovarli a comando."
  },
  {
    id: "french-bulldog",
    name: "Bulldog Francese",
    subtitle: "Un piccolo compagno dal grande cuore. Adatto alla vita in appartamento.",
    description: "Il Bulldog Francese è un perfetto cane da compagnia: affettuoso, giocherellone ma tranquillo, ama stare al centro dell'attenzione della sua famiglia. Le sue dimensioni e il suo temperamento lo rendono perfetto per la vita di città.",
    energy: "Basso",
    size: "Piccola",
    life: "10-12 anni",
    temperament: "Affettuoso, socievole, tranquillo, giocherellone",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800",
    funFact: "Nonostante il nome, i Bulldog Francesi sono stati originariamente allevati in Inghilterra per i merlettai di Nottingham prima di diventare famosi in Francia."
  },
  {
    id: "labrador-retriever",
    name: "Labrador Retriever",
    subtitle: "Affettuoso, giocoso ed instancabile nuotatore, perfetto per la famiglia.",
    description: "Il Labrador è una delle razze più popolari al mondo. Dolce, desideroso di compiacere e molto attivo, eccelle come cane da compagnia, da terapia, soccorso in acqua e cane guida per non vedenti.",
    energy: "Energia alta",
    size: "Grande",
    life: "10-12 anni",
    temperament: "Gentile, intelligente, desideroso di compiacere, amichevole",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800",
    funFact: "I Labrador hanno le zampe palmate, il che li rende eccezionali nuotatori e li aiuta a muoversi agilmente nell'acqua."
  },
  {
    id: "cocker-spaniel",
    name: "Cocker Spaniel",
    subtitle: "Occhi dolci e temperamento allegro in una taglia compatta.",
    description: "Il Cocker Spaniel Inglese è famoso per le sue lunghe orecchie setose e il suo carattere costantemente allegro. È un cane da caccia ma anche un dolcissimo compagno casalingo che ama correre all'aria aperta.",
    energy: "Energia media",
    size: "Piccola",
    life: "12-15 anni",
    temperament: "Allegro, amichevole, giocherellone, affettuoso",
    image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800",
    funFact: "La celebre cagnolina Lilli del film d'animazione Disney 'Lilli e il vagabondo' è proprio un Cocker Spaniel."
  },
  {
    id: "meticcio",
    name: "Meticcio",
    subtitle: "Unico, irripetibile e pronto a donare un amore senza confini.",
    description: "I cani meticci uniscono le migliori qualità di diverse razze, rendendoli spesso robusti, intelligenti ed estremamente adattabili. Ogni meticcio ha un carattere unico e speciale tutto da scoprire.",
    energy: "Energia media",
    size: "Media",
    life: "12-16 anni",
    temperament: "Affettuoso, leale, riconoscente, unico",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    funFact: "I cani meticci tendono ad avere una salute di ferro e una longevità superiore grazie alla grande diversità genetica."
  }
];


// ─────────────────────────────────────────────
// GLOBAL STATE
// ─────────────────────────────────────────────

const state = {
  currentView: "home",
  selectedBreedId: null,
  selectedDogId: null,
  favorites: ["13", "14", "15", "37"],
  isLoggedIn: true,
  breeds: [...BREEDS_DB],
  breedsPage: 1,
  breedsPerPage: 12,
  filteredBreeds: [],
  userProfile: {
    name: "Dani",
    location: "Milano, Italia",
    email: "dani@esempio.it",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
  },
  adoptionStatus: {
    dogName: "Rocky",
    stepIndex: 1, // 0: Richiesta, 1: Intervista, 2: Visita, 3: Affido
    appointment: "Sabato 24 Giugno • 10:30 presso Canile Oasi Serena"
  },
  questionnaire: {
    step: 1,
    answers: {
      casa: null, // "appartamento", "indipendente"
      giardino: null, // "no", "piccolo", "ampio"
      tempo: null // "poco", "medio", "molto"
    }
  },
  partnerDogs: [],
  stats: {
    caniOspitati: 42,
    adozioniMese: 8,
    attesaMatching: 15
  },
  dashboardTab: "dashboard", // "dashboard", "cani", "canili", "questionari"
  editingDogId: null
};

// LocalStorage helpers
const storage = {
  saveFavorites: () => {
    localStorage.setItem("fidog_favorites", JSON.stringify(state.favorites));
  },
  loadFavorites: () => {
    const saved = localStorage.getItem("fidog_favorites");
    if (saved) {
      let loaded = JSON.parse(saved);
      loaded = loaded.filter(id => !String(id).startsWith("dog-"));
      if (loaded.length > 0) {
        state.favorites = loaded;
      } else {
        state.favorites = ["13", "14", "15", "37"];
        storage.saveFavorites();
      }
    }
  },
  saveProfile: () => {
    localStorage.setItem("fidog_profile", JSON.stringify(state.userProfile));
  },
  loadProfile: () => {
    const saved = localStorage.getItem("fidog_profile");
    if (saved) state.userProfile = JSON.parse(saved);
  },
  savePartnerDogs: () => {
    localStorage.setItem("fidog_partner_dogs", JSON.stringify(state.partnerDogs));
  },
  loadPartnerDogs: () => {
    const saved = localStorage.getItem("fidog_partner_dogs");
    if (saved) state.partnerDogs = JSON.parse(saved);
  },
  saveLoginState: () => {
    localStorage.setItem("fidog_logged_in", JSON.stringify(state.isLoggedIn));
  },
  loadLoginState: () => {
    const saved = localStorage.getItem("fidog_logged_in");
    if (saved !== null) state.isLoggedIn = JSON.parse(saved);
  }
};

// ─────────────────────────────────────────────
// ROUTING
// ─────────────────────────────────────────────

function navigateTo(hash) {
  closeMobileMenu();
  window.location.hash = hash;
}

function toggleMobileMenu() {
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!overlay) return;
  const icon = document.getElementById('mobile-menu-icon');
  const isOpen = overlay.classList.contains('open');
  if (isOpen) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    if (icon) icon.setAttribute('data-lucide', 'menu');
  } else {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (icon) icon.setAttribute('data-lucide', 'x');
  }
  if (window.lucide) window.lucide.createIcons();
}

function closeMobileMenu() {
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const icon = document.getElementById('mobile-menu-icon');
  if (icon) icon.setAttribute('data-lucide', 'menu');
  if (window.lucide) window.lucide.createIcons();
}


function handleRouting() {
  let hash = window.location.hash || "#home";
  
  if (hash === "#cani") {
    window.location.hash = "#razze";
    return;
  }
  
  // Reset questionnaire state when navigating away
  if (!hash.startsWith("#questionario")) {
    state.questionnaire.step = 1;
    state.questionnaire.answers = { casa: null, giardino: null, tempo: null };
  }

  // Parse hash parameters
  if (hash.startsWith("#dettaglio/")) {
    state.currentView = "dettaglio";
    state.selectedBreedId = hash.split("/")[1];
    state.selectedDogId = null;
  } else if (hash.startsWith("#cane/")) {
    state.currentView = "cane";
    const dogVal = hash.split("/")[1];
    state.selectedDogId = isNaN(dogVal) ? dogVal : parseInt(dogVal, 10);
    state.selectedBreedId = null;
  } else {
    state.currentView = hash.replace("#", "");
    state.selectedBreedId = null;
    state.selectedDogId = null;
  }

  window.scrollTo(0, 0);
  updateHeaderNavLinks();
  renderCurrentView();
}

function updateHeaderNavLinks() {
  document.querySelectorAll("nav a").forEach(link => {
    const linkHash = link.getAttribute("href");
    if (linkHash === `#${state.currentView}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// ─────────────────────────────────────────────
// VIEW RENDERING
// ─────────────────────────────────────────────

const viewContainer = document.getElementById("app-view");

function renderCurrentView() {
  let html = "";

  switch (state.currentView) {
    case "home":
      html = renderHome();
      break;
    case "razze":
      html = renderRazze();
      break;
    case "dettaglio":
      html = renderDettaglio();
      break;
    case "cane":
      html = renderCaneDetail();
      break;
    case "chisiamo":
      html = renderChiSiamo();
      break;
    case "partner":
      html = renderPartner();
      break;
    case "account":
      html = renderAccount();
      break;
    case "questionario":
      html = renderQuestionario();
      break;
    default:
      html = renderHome();
  }

  viewContainer.innerHTML = html;
  
  // Re-initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Bind view-specific event handlers
  bindViewEvents();
}

// VIEW: HOME

function renderHome() {
  return `
    <div class="view-section">
      <section class="hero">
        <div class="hero-content">
          <span class="badge badge-green">Oltre 500 canili partner in tutta Italia</span>
          <h1>Trova il tuo migliore amico</h1>
          <p>Il nostro sistema di matching intelligente analizza il tuo stile di vita e le tue necessità per connetterti solo con i cani più compatibili. Un percorso sicuro, guidato ed empatico.</p>
          <div class="hero-actions-container">
            <button class="btn btn-primary" onclick="navigateTo('#questionario')">Inizia il questionario</button>
            <button class="btn btn-outline" onclick="navigateTo('#razze')">Scopri le razze</button>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <div class="hero-image">
            <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800" alt="Cane Felice Fidog" />
          </div>
          <div class="hero-floating-card">
            <div class="floating-card-icon">
              <i data-lucide="check-circle-2"></i>
            </div>
            <div class="floating-card-text">
              <h4>Match sicuro al 100%</h4>
              <p>Algoritmo validato da esperti cinofili</p>
            </div>
          </div>
        </div>
      </section>

      <section class="steps-section" id="steps-section">
        <div class="section-title-container">
          <h2>A passo di zampa</h2>
          <p>Quattro semplici passi per accogliere un nuovo membro nella tua famiglia in totale serenità.</p>
        </div>
        <div class="steps-grid">
          <div class="step-card">
            <div class="step-icon-wrapper color-1">
              <i data-lucide="clipboard-list"></i>
            </div>
            <h3>Questionario</h3>
            <p>Raccontaci chi sei, le tue abitudini e lo spazio che hai a disposizione per il tuo futuro cane.</p>
          </div>
          <div class="step-card">
            <div class="step-icon-wrapper color-2">
              <i data-lucide="users"></i>
            </div>
            <h3>Match</h3>
            <p>Il nostro sistema trova i profili che meglio si adattano alle tue risposte tra centinaia di canili.</p>
          </div>
          <div class="step-card">
            <div class="step-icon-wrapper color-3">
              <i data-lucide="paw-print"></i>
            </div>
            <h3>Incontro</h3>
            <p>Organizziamo il primo incontro conoscitivo presso la struttura ospitante con il supporto di esperti.</p>
          </div>
          <div class="step-card">
            <div class="step-icon-wrapper color-4">
              <i data-lucide="home"></i>
            </div>
            <h3>Adozione</h3>
            <p>Ti seguiamo in tutta la fase burocratica e nell'inserimento del cane nella sua nuova casa.</p>
          </div>
        </div>
      </section>

      <section class="popular-section">
        <div class="popular-section-header">
          <div class="header-titles">
            <h2>Le razze più popolari</h2>
            <p>Scopri le caratteristiche, il temperamento e i consigli per la cura delle razze più amate.</p>
          </div>
          <a href="#razze" class="explore-link">Esplora tutto l'elenco <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="popular-grid">
          <div class="popular-card" onclick="navigateTo('#dettaglio/border-collie')">
            <div class="popular-image-container">
              <img src="https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?auto=format&fit=crop&q=80&w=800" alt="Border Collie" />
            </div>
            <div class="popular-info">
              <span class="popular-tag badge-energico">Energico</span>
              <h3>Border Collie</h3>
              <p>Ideale per famiglie attive</p>
              <div class="popular-card-footer">
                <i data-lucide="more-horizontal"></i>
              </div>
            </div>
          </div>

          <div class="popular-card" onclick="navigateTo('#dettaglio/labrador-retriever')">
            <div class="popular-image-container">
              <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800" alt="Labrador Retriever" />
            </div>
            <div class="popular-info">
              <span class="popular-tag badge-affettuoso">Affettuoso</span>
              <h3>Labrador Retriever</h3>
              <p>Il compagno perfetto per i bambini</p>
              <div class="popular-card-footer">
                <i data-lucide="more-horizontal"></i>
              </div>
            </div>
          </div>

          <div class="popular-card" onclick="navigateTo('#dettaglio/french-bulldog')">
            <div class="popular-image-container">
              <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800" alt="Bulldog Francese" />
            </div>
            <div class="popular-info">
              <span class="popular-tag badge-appartamento">Da Appartamento</span>
              <h3>Bulldog Francese</h3>
              <p>Adatto alla vita di città</p>
              <div class="popular-card-footer">
                <i data-lucide="more-horizontal"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="green-cta-banner">
        <div class="green-cta-content">
          <div class="green-cta-paw-icon">
            <i data-lucide="paw-print"></i>
          </div>
          <h2>Pronto a incontrare il tuo nuovo amico?</h2>
          <p>Il primo passo verso un'amicizia che durerà per sempre. Compila il nostro form guidato per scoprire quali cani aspettano proprio te.</p>
          <div class="green-cta-actions">
            <button class="btn btn-white" onclick="navigateTo('#questionario')">COMPILA IL FORM</button>
            <span class="green-cta-note">Richiede solo 5 minuti • 100% Gratuito</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderDogCard(dog) {
  const isFav = state.favorites.includes(dog.id);
  const statusLabel = dog.status === "DISPONIBILE" ? "Disponibile" : dog.status === "ADOTTATO" ? "Adottato" : "In Corso";
  const badgeClass = dog.status === "DISPONIBILE" ? "badge-green" : dog.status === "ADOTTATO" ? "badge-orange" : "badge-yellow";
  
  return `
    <div class="dog-card" data-id="${dog.id}">
      <div class="dog-image-container">
        <img src="${dog.image}" alt="${dog.name}" />
        <div class="dog-card-badge-container">
          <span class="badge ${badgeClass}">${statusLabel}</span>
          <span class="badge badge-gray">${dog.age}</span>
        </div>
        <button class="dog-favorite-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${dog.id}', event)">
          <i data-lucide="heart" style="width:18px; height:18px;"></i>
        </button>
      </div>
      <div class="dog-info">
        <div class="dog-meta-top" style="display:flex; justify-content:space-between; align-items:center;">
          <span class="dog-name">${dog.name}</span>
          <span class="dog-card-location">
            <i data-lucide="map-pin"></i>
            ${dog.citta || dog.location.split(' ')[0]}
          </span>
        </div>
        <span class="dog-breed-label" style="display:block; margin-top:2px;">${dog.breedName}</span>
        <div class="dog-tags" style="margin-top: 8px;">
          ${dog.tags.map(t => `<span class="badge badge-gray" style="font-size: 10px; padding: 4px 10px; text-transform: uppercase;">${t}</span>`).join("")}
        </div>
        <p style="color:var(--dark-gray); font-size:14px; margin-top:12px; line-height:1.5;">
          ${dog.storia ? (dog.storia.length > 90 ? dog.storia.substring(0, 90) + '...' : dog.storia) : 'Un amico adorabile e affettuoso.'}
        </p>
        <div class="dog-card-shelter" style="margin-top: 12px;">
          <i data-lucide="home"></i>
          <span>${dog.nomeCanile || dog.nome_canile || "Canile Partner"}</span>
        </div>
        
        ${dog.status === "DISPONIBILE" ? `
          <button class="btn btn-primary dog-card-btn" style="width:100%; margin-top: 16px;" onclick="navigateTo('#cane/${dog.id}')">
            Conosci ${dog.name} <i data-lucide="arrow-right" style="width:16px; height:16px; margin-left:6px;"></i>
          </button>
        ` : `
          <button class="btn btn-disabled dog-card-btn" style="width:100%; margin-top: 16px;" disabled>
            ${dog.status === "ADOTTATO" ? "Adottato 🎉" : "Visita in corso ⌛"}
          </button>
        `}
      </div>
    </div>
  `;
}

// VIEW: RAZZE (BREEDS)

function renderRazze() {

  return `
    <div class="view-section">
      <div style="margin-bottom: 40px;">
        <span class="badge badge-green">Esplora il catalogo</span>
        <h1 style="font-family: var(--font-headings); font-size:42px; font-weight:800; margin-top:8px;">Catalogo razze</h1>
        <p style="color:var(--dark-gray); font-size:16px; margin-top:8px;">Esplora la nostra guida completa per trovare il compagno ideale. Ogni razza ha una storia, un carattere e bisogni unici.</p>
      </div>

      <div class="breeds-layout">
        <!-- Sidebar filters -->
        <aside class="filters-sidebar">
          <div class="filters-header">
            <h3>FILTRI</h3>
            <button id="reset-filters">Reset</button>
          </div>
          
          <!-- Location select -->
          <div class="filter-section">
            <label class="section-label">Seleziona:</label>
            <div class="select-wrapper">
              <i data-lucide="map-pin" class="select-icon"></i>
              <select id="filter-regione" class="form-control filter-select">
                <option value="">Scegli la Regione...</option>
              </select>
            </div>
            <div class="select-wrapper" style="margin-top: 12px;">
              <i data-lucide="map-pin" class="select-icon"></i>
              <select id="filter-provincia" class="form-control filter-select">
                <option value="">Scegli la Provincia...</option>
              </select>
            </div>
            <div class="select-wrapper" style="margin-top: 12px;">
              <i data-lucide="map-pin" class="select-icon"></i>
              <select id="filter-citta" class="form-control filter-select">
                <option value="">Scegli la Città...</option>
              </select>
            </div>
          </div>

          <!-- Taglia -->
          <div class="filter-section">
            <h4>Taglia</h4>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="taglia" value="Piccola" />
                <span>Piccola (1–10kg)</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="taglia" value="Media" />
                <span>Media (11–25kg)</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="taglia" value="Grande" />
                <span>Grande (26kg+)</span>
              </label>
            </div>
          </div>

          <!-- Età -->
          <div class="filter-section">
            <h4>Età</h4>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="eta" value="cucciolo" />
                <span>0–12 Mesi</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="eta" value="giovane" />
                <span>1–3 Anni</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="eta" value="adulto" />
                <span>4–7 Anni</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="eta" value="senior" />
                <span>8–12 Anni</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="eta" value="anziano" />
                <span>+ Anni</span>
              </label>
            </div>
          </div>

          <!-- Razza -->
          <div class="filter-section">
            <h4>Razza</h4>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="tipo-razza" value="pura" />
                <span class="checkbox-text-with-action">
                  Pura
                  <span id="select-breed-trigger" style="margin-left: 8px; font-size: 11px; font-weight: 700; color: var(--secondary); cursor: pointer;">
                    Seleziona una razza &gt;
                  </span>
                </span>
              </label>
              
              <!-- Hidden select that opens under "Pura" when triggered or checked -->
              <div id="breed-subselect-wrapper" class="hidden" style="margin-top: 8px; margin-left: 28px;">
                <select id="filter-breed-name" class="form-control filter-select" style="font-size: 13px; padding: 6px 12px; height: auto;">
                  <option value="">Tutte le razze pure</option>
                  ${state.breeds.filter(b => b.id !== "meticcio").map(b => `<option value="${b.id}">${b.name}</option>`).join("")}
                </select>
              </div>

              <label class="checkbox-label">
                <input type="checkbox" name="tipo-razza" value="meticcia" />
                <span>Meticcia</span>
              </label>
            </div>
          </div>

          <!-- Sesso -->
          <div class="filter-section">
            <h4>Sesso</h4>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="sesso" value="Maschio" />
                <span>Maschio</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="sesso" value="Femmina" />
                <span>Femmina</span>
              </label>
            </div>
          </div>

          <!-- Addestrato -->
          <div class="filter-section">
            <h4>Addestrato</h4>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="addestrato" value="si" />
                <span>Sì</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="addestrato" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>

          <!-- Stato Veterinario -->
          <div class="filter-section">
            <h4>Stato Veterinario</h4>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" name="medical" value="Castrato" />
                <span>Castrato</span>
              </label>
              <label class="checkbox-label">
                <input type="checkbox" name="medical" value="Sterilizzato" />
                <span>Sterilizzato</span>
              </label>
            </div>
          </div>

          <!-- Attributes (Traits) -->
          <div class="filter-section">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
              <h4 style="margin:0;">Seleziona:</h4>
              <span class="sub-link-btn" id="toggle-traits-dropdown-btn" style="font-size: 11px; font-weight: 700; color: var(--secondary); cursor: pointer;">
                Seleziona Attributi &gt;
              </span>
            </div>
            
            <!-- Traits sub-dropdown -->
            <div id="traits-options-dropdown" class="hidden" style="margin-bottom: 12px; padding: 12px; background: #F7FAFC; border: 1px solid var(--light-gray); border-radius: var(--radius-md);">
              <div class="checkbox-group" style="gap: 8px;">
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Calmo" />
                  <span>Calmo</span>
                </label>
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Fedele" />
                  <span>Fedele</span>
                </label>
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Intelligente" />
                  <span>Intelligente</span>
                </label>
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Protettivo" />
                  <span>Protettivo</span>
                </label>
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Socievole" />
                  <span>Socievole</span>
                </label>
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Affettuoso" />
                  <span>Affettuoso</span>
                </label>
                <label class="checkbox-label" style="font-size: 13px;">
                  <input type="checkbox" name="trait-opt" value="Giocherellone" />
                  <span>Giocherellone</span>
                </label>
              </div>
            </div>

            <!-- Active Traits Pills Container -->
            <div class="traits-pills-container" id="active-traits-pills">
              <!-- Rendered dynamically or initially -->
            </div>
          </div>
        </aside>

        <!-- Breeds grid and Pagination container -->
        <div class="breeds-container">
          <div class="breeds-grid" id="breeds-list-grid">
            <!-- Populated dynamically -->
          </div>

          <!-- Pagination -->
          <div id="breeds-pagination" class="pagination-container">
            <!-- Populated dynamically -->
          </div>
        </div>
      </div>

      <!-- Questionnaire CTA Banner -->
      <section class="cta-banner" style="margin-top:60px; margin-bottom:40px;">
        <div class="cta-banner-content">
          <h2>Non sai quale razza scegliere?</h2>
          <p>Partecipa al nostro test di compatibilità. Analizzeremo il tuo stile di vita e le tue preferenze per suggerirti il cane perfetto per te.</p>
        </div>
        <button class="btn" onclick="navigateTo('#questionario')">Inizia il questionario</button>
      </section>
    </div>
  `;
}

// VIEW: BREED DETAIL

function renderDettaglio() {
  const breed = state.breeds.find(b => b.id === state.selectedBreedId) || state.breeds[0];
  
  // Find available dogs of this breed
  const availableDogs = state.partnerDogs.filter(dog => {
    return dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
  });

  const availableDogsHtml = availableDogs.length > 0
    ? `<div class="dogs-grid" style="margin-top: 20px;">
         ${availableDogs.map(dog => renderDogCard(dog)).join("")}
       </div>`
    : `<p style="color:var(--dark-gray); font-style:italic; margin-top:20px;">Al momento non ci sono cani di questa razza disponibili per l'adozione. Contatta i nostri canili partner per maggiori informazioni.</p>`;

  const floatingBadgeText = breed.name.toLowerCase().includes("golden") ? "N.1 PER FAMIGLIE" : breed.name.toLowerCase().includes("border") ? "N.1 PER ADDESTRAMENTO" : "N.1 COMPAGNIA";

  return `
    <div class="view-section">
      <!-- Back button -->
      <button class="btn btn-secondary" onclick="window.history.back()" style="margin-bottom:30px; padding:8px 16px;">
        <i data-lucide="arrow-left" style="width:16px; height:16px;"></i> Indietro
      </button>

      <div class="breed-detail-layout">
        <div class="breed-detail-image animate-fade-in" style="position: relative; overflow: visible;">
          <img src="${breed.image}" alt="${breed.name}" style="border-radius: var(--radius-lg); width: 100%; height: 100%; object-fit: cover;" />
          <span class="breed-badge-floating">${floatingBadgeText}</span>
        </div>
        
        <div class="breed-detail-content">
          <div class="animate-fade-in delay-1">
            <span class="badge badge-green">Scheda Razza</span>
            <h1>${breed.name}</h1>
            <p class="subtitle">"${breed.subtitle}"</p>
          </div>
          
          <p class="animate-fade-in delay-2" style="color:var(--dark-gray); font-size:16px; line-height:1.6;">${breed.description}</p>
          
          <div class="breed-specs-grid-figma animate-fade-in delay-3">
            <div class="spec-item-figma">
              <label style="display:flex; align-items:center; gap:6px; margin:0;"><i data-lucide="scale" style="width:14px; height:14px;"></i> Taglia</label>
              <span>${breed.size}</span>
            </div>
            <div class="spec-item-figma">
              <label style="display:flex; align-items:center; gap:6px; margin:0;"><i data-lucide="hourglass" style="width:14px; height:14px;"></i> Aspettativa</label>
              <span>${breed.life}</span>
            </div>
            <div class="spec-item-figma full-width">
              <label style="display:flex; align-items:center; gap:6px; margin:0;"><i data-lucide="heart" style="width:14px; height:14px;"></i> Temperamento</label>
              <span>${breed.temperament}</span>
            </div>
          </div>

          <div class="lo-sapevi-card animate-fade-in delay-4">
            <i data-lucide="info" style="width:24px; height:24px; flex-shrink:0;"></i>
            <div>
              <h4 style="color: white; font-weight:800; font-size:16px; margin:0 0 4px 0;">Lo sapevi?</h4>
              <p style="color: white; font-size:14px; margin:0; opacity:0.95; line-height:1.5;">${breed.funFact}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Available Dogs section -->
      <section style="margin-top:60px; margin-bottom:40px; border-top: 1px solid var(--light-gray); padding-top:40px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:20px; margin-bottom:30px;">
          <div>
            <h2 style="font-family: var(--font-headings); font-size:28px; font-weight:800; color:var(--primary); margin:0;">Cani disponibili per il matching</h2>
            <p style="color:var(--dark-gray); font-size:16px; margin:6px 0 0 0;">Trova il tuo nuovo migliore amico tra le strutture certificate FIDOG.</p>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
            <span class="badge" style="background-color:var(--secondary); color:white; padding:8px 16px; font-size:13px; font-weight:700; text-transform:none; cursor:pointer; border-radius: var(--radius-full);">
              Tutta Italia
            </span>
            <span class="badge" style="background-color:var(--secondary); color:white; padding:8px 16px; font-size:13px; font-weight:700; text-transform:none; cursor:pointer; border-radius: var(--radius-full);">
              Adatto a bambini
            </span>
            <span class="badge" style="background-color:var(--secondary); color:white; padding:8px 16px; font-size:13px; font-weight:700; text-transform:none; cursor:pointer; display:inline-flex; align-items:center; gap:6px; border-radius: var(--radius-full);">
              <i data-lucide="sliders-horizontal" style="width:14px; height:14px;"></i> Filtri
            </span>
          </div>
        </div>
        ${availableDogsHtml}
      </section>

      <section class="breed-quiz-banner">
        <div class="breed-quiz-banner-content">
          <h2>Sei pronto a conoscere il tuo ${breed.name}?</h2>
          <p>Completa il nostro questionario di compatibilità intelligente. Ti aiuteremo a capire se sei il match perfetto per uno dei nostri ${breed.name}.</p>
          <div class="breed-quiz-banner-actions">
            <button class="btn btn-white" onclick="navigateTo('#questionario')">Inizia il questionario ora</button>
            <button class="btn btn-outline-white" onclick="scrollToSteps()">Come funziona FIDOG?</button>
          </div>
        </div>
        <div class="breed-quiz-banner-graphic">
          <div class="tilted-white-card">
            <img src="img/logo.png" alt="FIDOG" style="width:100px; opacity:0.8;" />
          </div>
        </div>
      </section>
    </div>
  `;
}

// VIEW: DOG DETAIL

function renderCaneDetail() {
  const dog = state.partnerDogs.find(d => String(d.id) === String(state.selectedDogId));
  if (!dog) {
    return `
      <div class="view-section" style="text-align:center; padding: 80px 20px;">
        <h2>Cane non trovato</h2>
        <p style="color:var(--dark-gray); margin-top:12px;">Il cane cercato potrebbe non essere più disponibile o l'indirizzo potrebbe essere errato.</p>
        <button class="btn btn-primary" onclick="navigateTo('#razze')" style="margin-top:24px;">Torna al catalogo</button>
      </div>
    `;
  }

  const isFav = state.favorites.includes(dog.id);
  const badgeClass = dog.status === "DISPONIBILE" ? "badge-green" : "badge-orange";
  
  // Find breed info if available
  const breed = state.breeds.find(b => b.id === dog.breedId || b.name.toLowerCase() === dog.breedName.toLowerCase());

  return `
    <div class="view-section">
      <!-- Back button -->
      <button class="btn btn-secondary" onclick="window.history.back()" style="margin-bottom:30px; padding:8px 16px;">
        <i data-lucide="arrow-left" style="width:16px; height:16px;"></i> Indietro
      </button>

      <div class="breed-detail-layout">
        <div class="breed-detail-image animate-fade-in">
          <img src="${dog.image}" alt="${dog.name}" />
        </div>
        
        <div class="breed-detail-content">
          <div class="animate-fade-in delay-1">
            <span class="badge ${badgeClass}">${dog.status}</span>
            <h1 style="margin-top: 10px;">${dog.name}</h1>
            <p class="subtitle" style="font-weight: 600; color: var(--primary); font-size: 18px;">
              ${dog.breedName} • ${dog.gender}
            </p>
          </div>
          
          <div class="breed-specs-grid animate-fade-in delay-2" style="margin-top:20px; margin-bottom:20px;">
            <div class="spec-item">
              <label>Età</label>
              <span>${dog.age}</span>
            </div>
            <div class="spec-item">
              <label>Sesso</label>
              <span>${dog.gender}</span>
            </div>
            <div class="spec-item">
              <label>Canile / Struttura</label>
              <span>${dog.nomeCanile || dog.nome_canile || "Struttura Partner Fidog"}</span>
            </div>
            <div class="spec-item">
              <label>Località</label>
              <span>${dog.location}</span>
            </div>
            ${dog.regione ? `
            <div class="spec-item">
              <label>Regione</label>
              <span>${dog.regione}</span>
            </div>
            ` : ''}
          </div>

          <div class="animate-fade-in delay-3" style="margin-bottom:25px;">
            <h3 style="font-family: var(--font-headings); font-size:20px; font-weight:800; margin-bottom:10px;">La mia storia</h3>
            <p style="color:var(--dark-gray); font-size:16px; line-height:1.6;">${dog.storia || "Non abbiamo ancora inserito la storia completa di questo cagnolino, contatta il canile ospitante per fargli visita di persona!"}</p>
          </div>

          <div class="animate-fade-in delay-4" style="margin-bottom:25px;">
            <h3 style="font-family: var(--font-headings); font-size:20px; font-weight:800; margin-bottom:10px;">Caratteristiche e Salute</h3>
            <ul style="color:var(--dark-gray); font-size:15px; padding-left:20px; line-height:1.6; margin-bottom:15px;">
              <li>Stato Veterinario: <strong>${dog.medical || 'Controlli regolari effettuati'}</strong></li>
              <li>Addestrato: <strong>${dog.trained ? 'Sì, risponde ai comandi base' : 'No (in addestramento)'}</strong></li>
            </ul>
            <div class="dog-tags" style="display:flex; flex-wrap:wrap; gap:8px;">
              ${dog.tags.map(t => `<span class="badge badge-gray">${t}</span>`).join("")}
            </div>
          </div>

          ${breed ? `
          <div class="lo-sapevi-card animate-fade-in delay-4" style="margin-top: 25px;">
            <i data-lucide="help-circle" style="width:24px; height:24px;"></i>
            <div>
              <h4>Vuoi scoprire di più sulla mia razza?</h4>
              <p>${breed.description.substring(0, 120)}...</p>
              <a href="#dettaglio/${breed.id}" style="font-weight: 700; color: var(--primary); text-decoration: none; display: inline-block; margin-top: 8px;">
                Vai alla scheda tecnica della razza &gt;
              </a>
            </div>
          </div>
          ` : ''}

          <!-- CTA Buttons -->
          <div class="animate-fade-in delay-5" style="display:flex; flex-wrap:wrap; gap:16px; margin-top:30px;">
            <button class="btn btn-primary" onclick="openAdoptionModal('${dog.id}')" style="padding: 12px 28px;">
              Contatta per l'adozione
            </button>
            <button class="btn btn-secondary ${isFav ? 'active' : ''}" onclick="toggleFavorite('${dog.id}', event); renderCurrentView();" style="padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="heart" style="width:18px; height:18px;"></i>
              ${isFav ? 'Rimuovi dai Preferiti' : 'Salva nei Preferiti'}
            </button>
          </div>

        </div>
      </div>
    </div>
  `;
}

// VIEW: CHI SIAMO (ABOUT US)

function renderChiSiamo() {
  return `
    <div class="view-section">
      <!-- Hero About -->
      <section class="about-hero">
        <div class="about-hero-content">
          <span class="badge badge-orange">La nostra storia</span>
          <h1>Connettiamo cuori e code, con professionalità.</h1>
          <p>FIDOG non è solo una piattaforma, è un impegno quotidiano verso il benessere animale e la sicurezza di chi sceglie di accogliere un nuovo membro in famiglia.</p>
        </div>
        <div class="about-hero-image">
          <img src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&q=80&w=800" alt="Storie di Fidog" />
        </div>
      </section>

      <!-- Why Born Restructured -->
      <section class="why-born-section-new">
        <div class="why-born-card">
          <h2>Perché siamo nati</h2>
          <p>Tutto è iniziato dalla constatazione di un vuoto: il divario tra la volontà di adottare e la complessità nel trovare il compagno ideale in modo sicuro e certificato. Vedevamo canili pieni di anime meravigliose e famiglie desiderose di amore, ma mancava il ponte tecnologico che garantisse trasparenza.</p>
          <p>FIDOG nasce per eliminare le incertezze. Attraverso protocolli rigorosi e una rete capillare di canili partner e province, rendiamo l'adozione un percorso guidato, etico e gioioso. La nostra missione è garantire che ogni cane trovi la casa giusta e ogni famiglia trovi il cane perfetto per il proprio stile di vita.</p>
          
          <div class="why-bullet-row">
            <div class="why-bullet">
              <div class="why-bullet-icon">
                <i data-lucide="shield-check"></i>
              </div>
              <div class="why-bullet-text">
                <h4>Sicurezza Totale</h4>
                <p>Controlli rigorosi su ogni struttura partner.</p>
              </div>
            </div>
            <div class="why-bullet">
              <div class="why-bullet-icon">
                <i data-lucide="heart"></i>
              </div>
              <div class="why-bullet-text">
                <h4>Benessere Prima di Tutto</h4>
                <p>Salute e felicità animale al centro di ogni scelta.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="why-born-image-card">
          <img src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&q=80&w=800" alt="Volontari e Cani" />
        </div>
      </section>

      <!-- Stats Banner (Green Style) -->
      <section class="stats-banner-new">
        <div class="stat-box-new">
          <h3>5k+</h3>
          <p>Adozioni completate</p>
        </div>
        <div class="stat-box-new">
          <h3>500+</h3>
          <p>Canili certificati</p>
        </div>
        <div class="stat-box-new">
          <h3>118</h3>
          <p>Province coinvolte</p>
        </div>
        <div class="stat-box-new">
          <h3>100%</h3>
          <p>Amore e Dedizione</p>
        </div>
      </section>

      <!-- Team Section: Le persone dietro FIDOG -->
      <section class="team-section">
        <div class="team-header">
          <h2>Le persone dietro FIDOG</h2>
          <p>Un team multidisciplinare unito dalla passione per i cani e dall'eccellenza tecnologica.</p>
        </div>
        <div class="team-grid">
          <!-- Chiara Torri -->
          <div class="team-card">
            <div class="team-image-container">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="Chiara Torri" />
            </div>
            <div class="team-info">
              <h3>Chiara Torri</h3>
              <span class="team-role">PRESIDENTE</span>
            </div>
          </div>
          <!-- John Lionello -->
          <div class="team-card">
            <div class="team-image-container">
              <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" alt="John Lionello" />
            </div>
            <div class="team-info">
              <h3>John Lionello</h3>
              <span class="team-role">VETERINARIO</span>
            </div>
          </div>
          <!-- Elisa Faustini -->
          <div class="team-card">
            <div class="team-image-container">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" alt="Elisa Faustini" />
            </div>
            <div class="team-info">
              <h3>Elisa Faustini</h3>
              <span class="team-role">AMMINISTRAZIONE</span>
            </div>
          </div>
          <!-- Daniele Sarioli -->
          <div class="team-card">
            <div class="team-image-container">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" alt="Daniele Sarioli" />
            </div>
            <div class="team-info">
              <h3>Daniele Sarioli</h3>
              <span class="team-role">IT</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Pill Badges Row -->
      <section class="value-badges-section">
        <div class="value-badges-container">
          <div class="value-badge-pill">
            <i data-lucide="shield-check"></i>
            <span>Sostenibilità sociale</span>
          </div>
          <div class="value-badge-pill">
            <i data-lucide="paw-print"></i>
            <span>Etica animale</span>
          </div>
          <div class="value-badge-pill">
            <i data-lucide="users"></i>
            <span>Integrazione comunitaria</span>
          </div>
          <div class="value-badge-pill">
            <i data-lucide="lightbulb"></i>
            <span>Innovazione continua</span>
          </div>
        </div>
      </section>
    </div>
  `;
}

// VIEW: PARTNER

function renderPartner() {
  const dashboardHtml = renderDashboard();

  return `
    <div class="view-section">
      <!-- Partner Hero -->
      <section class="partner-hero">
        <div class="partner-hero-content">
          <span class="badge badge-green">Network Professionale</span>
          <h1>Uniamoci per il loro bene</h1>
          <p>Entra a far parte dell'ecosistema digitale FIDOG. Offriamo a canili, rifugi e allevatori certificati gli strumenti più avanzati per gestire, promuovere e monitorare le adozioni responsabili in tutta Italia.</p>
          <div class="partner-hero-buttons">
            <a href="javascript:void(0)" onclick="scrollToPartnerForm()" class="text-link-arrow">Diventa Partner <i data-lucide="arrow-right"></i></a>
            <button class="btn btn-outline" onclick="scrollToDashboard()">Esplora la Dashboard</button>
          </div>
        </div>
        <div class="partner-hero-image">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" alt="Veterinaria e Cane" />
        </div>
      </section>

      <!-- Perché collaborare con noi (Value Proposition Grid) -->
      <section class="value-prop-section">
        <div class="value-prop-header">
          <h2>Perché collaborare con noi</h2>
          <p>Soluzioni digitali pensate per chi vive quotidianamente il mondo cinofilo.</p>
        </div>
        <div class="value-prop-grid">
          <div class="value-prop-card card-wide card-light">
            <div class="card-content">
              <div class="value-prop-icon-wrapper eye-wrapper">
                <i data-lucide="eye"></i>
              </div>
              <h3>Massima Visibilità</h3>
              <p>Raggiungi migliaia di potenziali adottanti profilati ogni mese. Il nostro algoritmo suggerisce i tuoi cani agli utenti più compatibili in base alle loro abitudini e spazi.</p>
            </div>
            <div class="card-graphic">
              <div class="card-graphic-placeholder"></div>
            </div>
          </div>

          <div class="value-prop-card card-narrow solid-orange">
            <div class="value-prop-icon-wrapper white-bg">
              <i data-lucide="shield-check" class="orange-icon"></i>
            </div>
            <h3>Matching Certificato</h3>
            <p>Riduci i rientri in struttura grazie a un sistema di pre-qualifica degli adottanti basato su questionari psicometrici validati.</p>
            <a href="#" class="solid-card-link">Saperne di più &gt;</a>
          </div>

          <div class="value-prop-card card-narrow solid-green card-centered">
            <div class="value-prop-icon-wrapper white-bg">
              <i data-lucide="list" class="green-icon"></i>
            </div>
            <h3>Dati Semplificati</h3>
            <p>Addio registri cartacei. Gestisci anamnesi, cartelle cliniche e stati comportamentali con un click dal tuo smartphone o PC.</p>
          </div>

          <div class="value-prop-card card-wide card-light card-row-reverse">
            <div class="card-graphic">
              <div class="card-graphic-placeholder"></div>
            </div>
            <div class="card-content">
              <h3>Network Provinciale</h3>
              <p>Collabora con le autorità locali e altre strutture della tua zona. FIDOG facilita lo scambio di informazioni tra canili rifugio e sanitari.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Dashboard -->
      <section id="partner-dashboard-anchor" style="padding-top:40px; border-top:1px solid var(--light-gray); margin-bottom:60px;">
        <div class="dashboard-intro">
          <h2>Dashboard Gestionale</h2>
          <p>Una panoramica dell'interfaccia riservata ai partner. Potente, intuitiva e sempre a portata di mano.</p>
        </div>
        
        <div class="partner-dashboard">
          <aside class="dashboard-sidebar">
            <ul class="dashboard-menu">
              <li style="font-family: var(--font-headings); font-size: 20px; font-weight: 800; color: var(--secondary); margin-bottom: 20px; padding: 0 16px; list-style: none;">FIDOG Hub</li>
              <li class="dashboard-menu-item active" style="background-color: var(--secondary); color: white; cursor: default;">
                <i data-lucide="layout-dashboard"></i> Dashboard
              </li>
              <li class="dashboard-menu-item" style="cursor: default;">
                <i data-lucide="paw-print"></i> Cani
              </li>
              <li class="dashboard-menu-item" style="cursor: default;">
                <i data-lucide="home"></i> Canili
              </li>
              <li class="dashboard-menu-item" style="cursor: default;">
                <i data-lucide="file-text"></i> Questionari
              </li>
            </ul>
            <div class="dashboard-menu-footer" style="cursor: default;">
              <i data-lucide="settings"></i> Impostazioni
            </div>
          </aside>
          
          <div class="dashboard-content">
            <div class="dashboard-content-header">
              <h3>Gestione Canile "Oasi Serena"</h3>
              <button class="btn" style="background-color: var(--secondary); color: white; display: inline-flex; align-items: center; gap: 8px; font-weight: 700; border-radius: var(--radius-sm); border: none; padding: 10px 18px; cursor: default;">
                <i data-lucide="plus"></i> Nuovo Cane
              </button>
            </div>
            
            <div class="dashboard-stats-grid">
              <div class="dashboard-stat-card">
                <label>Cani Ospitati</label>
                <span>42</span>
              </div>
              <div class="dashboard-stat-card">
                <label>Adozioni questo mese</label>
                <span>8</span>
              </div>
              <div class="dashboard-stat-card">
                <label>In attesa matching</label>
                <span>15</span>
              </div>
            </div>
            
            <div class="dashboard-table-container">
              <table class="dashboard-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Provenienza</th>
                    <th>Stato</th>
                    <th style="text-align: right;">Azioni</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="table-dog-name">
                        <div class="table-dog-avatar" style="background-color: #CBD5E0;"></div>
                        Rex
                      </div>
                    </td>
                    <td>Roma (RM)</td>
                    <td>
                      <span class="badge" style="background-color: #DEF7EC; color: #03543F; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); font-size: 11px;">DISPONIBILE</span>
                    </td>
                    <td style="text-align: right;">
                      <div class="table-actions" style="justify-content: flex-end;">
                        <button class="table-action-btn table-action-btn-edit" style="cursor: default;">
                          <i data-lucide="edit-3"></i>
                        </button>
                        <button class="table-action-btn table-action-btn-delete" style="cursor: default;">
                          <i data-lucide="trash-2"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="table-dog-name">
                        <div class="table-dog-avatar" style="background-color: #CBD5E0;"></div>
                        Luna
                      </div>
                    </td>
                    <td>Milano (MI)</td>
                    <td>
                      <span class="badge" style="background-color: #FEF3C7; color: #92400E; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); font-size: 11px;">IN CORSO</span>
                    </td>
                    <td style="text-align: right;">
                      <div class="table-actions" style="justify-content: flex-end;">
                        <button class="table-action-btn table-action-btn-edit" style="cursor: default;">
                          <i data-lucide="edit-3"></i>
                        </button>
                        <button class="table-action-btn table-action-btn-delete" style="cursor: default;">
                          <i data-lucide="trash-2"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- Partners Logo Banner -->
      <section class="partners-logo-banner">
        <div class="partners-logos-container">
          <span class="partner-logo-item"><i data-lucide="shield"></i> LAV</span>
          <span class="partner-logo-item"><i data-lucide="heart-handshake"></i> OIPA</span>
          <span class="partner-logo-item"><i data-lucide="building"></i> PROVINCIA MI</span>
          <span class="partner-logo-item"><i data-lucide="stethoscope"></i> VETERINARI.IT</span>
          <span class="partner-logo-item"><i data-lucide="home"></i> RIFUGIO BAU</span>
        </div>
      </section>

      <!-- Partnership Request Form -->
      <section id="partner-form-anchor" class="partnership-form-section" style="border-top:1px solid var(--light-gray); padding-top:60px;">
        <div class="partnership-form-info">
          <h2>Inizia la collaborazione</h2>
          <p>Compila il modulo per richiedere l'accesso al network FIDOG. Il nostro team verificherà la tua struttura e ti ricontatterà entro 48 ore per configurare la tua dashboard personalizzata.</p>
          
          <div class="form-bullets">
            <div class="form-bullet">
              <div class="form-bullet-icon">
                <i data-lucide="check" style="width:14px; height:14px;"></i>
              </div>
              <span>Setup iniziale gratuito assistito</span>
            </div>
            <div class="form-bullet">
              <div class="form-bullet-icon">
                <i data-lucide="check" style="width:14px; height:14px;"></i>
              </div>
              <span>Importazione dati da database esistenti</span>
            </div>
            <div class="form-bullet">
              <div class="form-bullet-icon">
                <i data-lucide="check" style="width:14px; height:14px;"></i>
              </div>
              <span>Formazione gratuita per lo staff</span>
            </div>
          </div>
        </div>

        <div class="partnership-form-box">
          <form id="partnership-request-form" onsubmit="handlePartnershipSubmit(event)">
            <div class="form-group">
              <label for="form-struttura">Nome della Struttura / Canile</label>
              <input type="text" id="form-struttura" class="form-control" placeholder="es. Rifugio del Sole" required />
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="form-tipo">Tipo di Attività</label>
                <select id="form-tipo" class="form-control" required>
                  <option value="Canile Comunale">Canile Comunale</option>
                  <option value="Associazione Privata/Rifugio">Associazione Privata / Rifugio</option>
                  <option value="Allevatore Certificato">Allevatore Certificato</option>
                </select>
              </div>
              <div class="form-group">
                <label for="form-citta">Città / Provincia</label>
                <input type="text" id="form-citta" class="form-control" placeholder="es. Milano" required />
              </div>
            </div>

            <div class="form-group">
              <label for="form-referente">Nome Referente</label>
              <input type="text" id="form-referente" class="form-control" placeholder="es. Mario Rossi" required />
            </div>

            <div class="form-group">
              <label for="form-email">Email di Contatto</label>
              <input type="email" id="form-email" class="form-control" placeholder="es. info@esempio.it" required />
            </div>

            <div class="form-group">
              <label for="form-messaggio">Messaggio (Opzionale)</label>
              <textarea id="form-messaggio" class="form-control" rows="4" placeholder="Raccontaci brevemente la tua realtà..."></textarea>
            </div>

            <div class="checkbox-row">
              <label class="checkbox-label">
                <input type="checkbox" id="form-privacy" required />
                <span style="font-size:12px;">Accetto l'informativa sulla privacy per il trattamento dei dati professionali.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%;">Invia Richiesta di Partnership</button>
          </form>
        </div>
      </section>
    </div>
  `;
}

function renderDashboard() {
  return `
    <aside class="dashboard-sidebar" style="cursor: default; user-select: none;">
      <ul class="dashboard-menu">
        <li style="font-family: var(--font-headings); font-size: 20px; font-weight: 800; color: var(--secondary); margin-bottom: 20px; padding: 0 16px; list-style: none;">FIDOG Hub</li>
        <li class="dashboard-menu-item active" style="background-color: var(--secondary); color: white; cursor: default;">
          <i data-lucide="layout-dashboard"></i> Dashboard
        </li>
        <li class="dashboard-menu-item" style="cursor: default; opacity: 0.7;">
          <i data-lucide="paw-print"></i> Cani
        </li>
        <li class="dashboard-menu-item" style="cursor: default; opacity: 0.7;">
          <i data-lucide="home"></i> Canili
        </li>
        <li class="dashboard-menu-item" style="cursor: default; opacity: 0.7;">
          <i data-lucide="file-text"></i> Questionari
        </li>
      </ul>
      <div class="dashboard-menu-footer" style="cursor: default; opacity: 0.7;">
        <i data-lucide="settings"></i> Impostazioni
      </div>
    </aside>

    <div class="dashboard-content" style="cursor: default; user-select: none;">
      <div class="dashboard-content-header">
        <h3>Gestione Canile "Oasi Serena"</h3>
        <button class="btn" style="background-color: var(--secondary); color: white; display: inline-flex; align-items: center; gap: 8px; font-weight: 700; border-radius: var(--radius-sm); border: none; padding: 10px 18px; cursor: default; pointer-events: none;">
          <i data-lucide="plus"></i> Nuovo Cane
        </button>
      </div>

      <div class="dashboard-stats-grid">
        <div class="dashboard-stat-card">
          <label>Cani Ospitati</label>
          <span>42</span>
        </div>
        <div class="dashboard-stat-card">
          <label>Adozioni questo mese</label>
          <span>8</span>
        </div>
        <div class="dashboard-stat-card">
          <label>In attesa matching</label>
          <span>15</span>
        </div>
      </div>

      <div class="dashboard-table-container">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Provenienza</th>
              <th>Stato</th>
              <th>Azioni</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="table-dog-name">
                  <div class="table-dog-avatar" style="background-color: #cbd5e1; display: inline-flex; align-items: center; justify-content: center; color: white;">
                    <i data-lucide="dog" style="width: 16px; height: 16px;"></i>
                  </div>
                  <span>Rex</span>
                </div>
              </td>
              <td>Roma (RM)</td>
              <td>
                <span class="badge badge-green">DISPONIBILE</span>
              </td>
              <td>
                <div class="table-actions" style="pointer-events: none;">
                  <button class="table-action-btn table-action-btn-edit" style="cursor: default;"><i data-lucide="edit" style="width:16px; height:16px;"></i></button>
                  <button class="table-action-btn table-action-btn-delete" style="cursor: default;"><i data-lucide="trash-2" style="width:16px; height:16px;"></i></button>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="table-dog-name">
                  <div class="table-dog-avatar" style="background-color: #cbd5e1; display: inline-flex; align-items: center; justify-content: center; color: white;">
                    <i data-lucide="dog" style="width: 16px; height: 16px;"></i>
                  </div>
                  <span>Luna</span>
                </div>
              </td>
              <td>Milano (MI)</td>
              <td>
                <span class="badge" style="background-color: #ffedd5; color: #ea580c;">IN CORSO</span>
              </td>
              <td>
                <div class="table-actions" style="pointer-events: none;">
                  <button class="table-action-btn table-action-btn-edit" style="cursor: default;"><i data-lucide="edit" style="width:16px; height:16px;"></i></button>
                  <button class="table-action-btn table-action-btn-delete" style="cursor: default;"><i data-lucide="trash-2" style="width:16px; height:16px;"></i></button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}


function changeDashboardTab(tab) {
  state.dashboardTab = tab;
  renderCurrentView();
}

function scrollToDashboard() {
  document.getElementById("partner-dashboard-anchor").scrollIntoView({ behavior: "smooth" });
}

function scrollToPartnerForm() {
  const formElement = document.getElementById("partner-form-anchor");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToSteps() {
  if (window.location.hash === '#home' || window.location.hash === '') {
    const el = document.getElementById("steps-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  } else {
    navigateTo('#home');
    setTimeout(() => {
      const el = document.getElementById("steps-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  }
}

// VIEW: ACCOUNT

function renderLogin() {
  return `
    <div class="view-section" style="display: flex; align-items: center; justify-content: center; min-height: 60vh;">
      <div class="login-container" style="width: 100%; max-width: 480px; padding: 40px; background-color: var(--card-bg); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); text-align: center; border: 1px solid var(--light-gray);">
        <div style="background-color: var(--secondary-light); width: 64px; height: 64px; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; color: var(--secondary);">
          <i data-lucide="lock" style="width: 32px; height: 32px;"></i>
        </div>
        <h2 style="font-family: var(--font-headings); font-size: 28px; font-weight: 800; margin-bottom: 8px; color: var(--dark);">Accedi a FIDOG</h2>
        <p style="color: var(--dark-gray); margin-bottom: 32px; font-size: 15px;">Inserisci le tue credenziali per accedere al tuo profilo e gestire le adozioni.</p>
        
        <div id="login-error" style="display: none; align-items: center; gap: 10px; background-color: #FEF2F2; border: 1px solid #FCA5A5; color: #991B1B; padding: 12px 16px; border-radius: var(--radius-md); margin-bottom: 24px; font-size: 14px; text-align: left; font-weight: 500;">
          <i data-lucide="alert-circle" style="width: 20px; height: 20px; color: #DC2626; flex-shrink: 0;"></i>
          <span id="login-error-text"></span>
        </div>

        <form id="login-form" onsubmit="handleLoginSubmit(event)" style="text-align: left;">
          <div class="form-group">
            <label for="login-email">Indirizzo Email</label>
            <input type="email" id="login-email" class="form-control" placeholder="es. dani@esempio.it" required />
          </div>
          <div class="form-group" style="margin-bottom: 24px;">
            <label for="login-password">Password</label>
            <input type="password" id="login-password" class="form-control" placeholder="••••••••" required />
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 16px; padding: 14px 24px;">
            <i data-lucide="log-in"></i> Accedi
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderAccount() {
  if (!state.isLoggedIn) {
    return renderLogin();
  }

  const savedDogs = state.partnerDogs.filter(dog => state.favorites.includes(dog.id));
  
  const savedDogsHtml = savedDogs.length > 0
    ? `<div class="dogs-grid" style="grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));">
         ${savedDogs.map(dog => renderDogCard(dog)).join("")}
       </div>`
    : `<div style="background-color: white; border-radius: var(--radius-lg); padding: 40px; text-align: center; border: 1px dashed var(--light-gray); color:var(--dark-gray);">
         <i data-lucide="heart" style="width:36px; height:36px; color:var(--light-gray); margin-bottom:12px;"></i>
         <p>Non hai ancora salvato nessun ospite nella tua lista desideri.</p>
       </div>`;

  const stepIndex = state.adoptionStatus.stepIndex;
  const stepperNodes = [
    { name: "Richiesta", completed: stepIndex >= 0, active: stepIndex === 0 },
    { name: "Intervista", completed: stepIndex >= 1, active: stepIndex === 1 },
    { name: "Visita a canile", completed: stepIndex >= 2, active: stepIndex === 2 },
    { name: "Affido", completed: stepIndex >= 3, active: stepIndex === 3 }
  ];

  const stepperHtml = stepperNodes.map((step, idx) => {
    let classes = "";
    if (step.completed) classes += " completed";
    if (step.active) classes += " active";
    
    return `
      <div class="step-node ${classes}">
        <div class="step-circle">
          ${step.completed && !step.active ? '<i data-lucide="check" style="width:14px; height:14px;"></i>' : idx+1}
        </div>
        <span class="step-label">${step.name}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="view-section">
      <div class="account-layout">
        <!-- Main profile panel -->
        <div class="account-main">
          <!-- Profile header -->
          <div class="account-header">
            <div class="account-profile-info">
              <div class="account-avatar">
                <img src="${state.userProfile.avatar}" alt="${state.userProfile.name}" />
              </div>
              <div class="account-name-box">
                <h2>Ciao, ${state.userProfile.name}! 👋</h2>
                <div class="account-location">
                  <i data-lucide="map-pin" style="width:14px; height:14px;"></i>
                  <span>${state.userProfile.location}</span>
                </div>
              </div>
            </div>
            
            <div class="account-profile-actions">
              <button class="btn btn-secondary" onclick="openProfileModal(event)">
                <i data-lucide="edit"></i> Modifica Profilo
              </button>
              <button class="btn btn-danger" onclick="handleLogout(event)">
                <i data-lucide="log-out"></i> Esci
              </button>
              <button class="btn btn-icon">
                <i data-lucide="settings"></i>
              </button>
            </div>
          </div>

          <!-- Stepper adozione -->
          <div class="adoption-status-card">
            <div class="adoption-card-title">
              <h3>Stato adozione di ${state.adoptionStatus.dogName}</h3>
              <span class="badge badge-green">IN CORSO</span>
            </div>
            
            <div class="stepper-container">
              <div class="stepper-line"></div>
              <div class="stepper-line-progress" style="width: ${stepIndex * 33.33}%;"></div>
              ${stepperHtml}
            </div>

            <div class="adoption-appointment-card">
              <div class="appointment-icon">
                <i data-lucide="calendar" style="width:24px; height:24px;"></i>
              </div>
              <div class="appointment-details">
                <h4>Prossimo Appuntamento</h4>
                <p>${state.adoptionStatus.appointment}</p>
              </div>
            </div>
          </div>

          <!-- Saved Dogs -->
          <section id="favorites-section" style="margin-top: 40px; scroll-margin-top: 100px;">
            <h3 style="font-family:var(--font-headings); font-size:24px; font-weight:800; margin-bottom:20px;">La tua lista desideri</h3>
            <p style="color:var(--dark-gray); font-size:14px; margin-top:-16px; margin-bottom:24px;">Hai salvato questi cani per tenerli d'occhio.</p>
            ${savedDogsHtml}
          </section>
        </div>

        <!-- Sidebar Widgets -->
        <aside class="account-sidebar">
          <div class="sidebar-card-widget" onclick="navigateTo('#questionario')">
            <div class="sidebar-widget-left">
              <div class="sidebar-widget-icon sidebar-widget-orange">
                <i data-lucide="clipboard-list"></i>
              </div>
              <div class="sidebar-widget-info">
                <h4>Rifai il Test</h4>
                <p>Aggiorna le tue preferenze</p>
              </div>
            </div>
            <i data-lucide="chevron-right" style="color:var(--dark-gray);"></i>
          </div>

          <div class="sidebar-card-widget" onclick="document.getElementById('favorites-section').scrollIntoView({ behavior: 'smooth' })" style="cursor: pointer;">
            <div class="sidebar-widget-left">
              <div class="sidebar-widget-icon sidebar-widget-blue">
                <i data-lucide="heart"></i>
              </div>
              <div class="sidebar-widget-info">
                <h4>Lista Desideri</h4>
                <p>${state.favorites.length} cani salvati</p>
              </div>
            </div>
            <i data-lucide="chevron-right" style="color:var(--dark-gray);"></i>
          </div>
        </aside>
      </div>
    </div>
  `;
}

// VIEW: QUESTIONARIO (QUIZ)

function renderQuestionario() {
  const step = state.questionnaire.step;
  const answers = state.questionnaire.answers;
  
  if (step > 3) {
    return renderQuestionarioResults();
  }

  const activeClass = (key, val) => answers[key] === val ? "selected" : "";
  const progressPercent = (step / 3) * 100;
  
  let stepContent = "";

  if (step === 1) {
    stepContent = `
      <div class="quiz-question-container">
        <h2>Dove vivrà il tuo nuovo amico?</h2>
        <p class="subtitle">Tipologia di casa</p>
        
        <div class="choice-cards">
          <div class="choice-card ${activeClass('casa', 'appartamento')}" onclick="selectQuizAnswer('casa', 'appartamento', this)">
            <i data-lucide="building-2" style="width:36px; height:36px;"></i>
            <span>Appartamento</span>
          </div>
          <div class="choice-card ${activeClass('casa', 'indipendente')}" onclick="selectQuizAnswer('casa', 'indipendente', this)">
            <i data-lucide="home" style="width:36px; height:36px;"></i>
            <span>Casa indipendente</span>
          </div>
        </div>
      </div>
    `;
  } else if (step === 2) {
    stepContent = `
      <div class="quiz-question-container">
        <h2>Hai un giardino?</h2>
        <p class="subtitle">Spazi esterni</p>
        
        <div class="choice-cards">
          <div class="choice-card ${activeClass('giardino', 'no')}" onclick="selectQuizAnswer('giardino', 'no', this)">
            <i data-lucide="slash" style="width:36px; height:36px;"></i>
            <span>No</span>
          </div>
          <div class="choice-card ${activeClass('giardino', 'piccolo')}" onclick="selectQuizAnswer('giardino', 'piccolo', this)">
            <i data-lucide="flower" style="width:36px; height:36px;"></i>
            <span>Piccolo / Terrazzo</span>
          </div>
          <div class="choice-card ${activeClass('giardino', 'ampio')}" onclick="selectQuizAnswer('giardino', 'ampio', this)">
            <i data-lucide="trees" style="width:36px; height:36px;"></i>
            <span>Ampio</span>
          </div>
        </div>
      </div>
    `;
  } else if (step === 3) {
    stepContent = `
      <div class="quiz-question-container">
        <h2>Quanto tempo puoi dedicargli ogni giorno?</h2>
        <p class="subtitle">Tempo e Attività</p>
        
        <div class="choice-cards">
          <div class="choice-card ${activeClass('tempo', 'poco')}" onclick="selectQuizAnswer('tempo', 'poco', this)">
            <i data-lucide="clock-1" style="width:36px; height:36px;"></i>
            <span>Meno di 1 ora</span>
          </div>
          <div class="choice-card ${activeClass('tempo', 'medio')}" onclick="selectQuizAnswer('tempo', 'medio', this)">
            <i data-lucide="clock-5" style="width:36px; height:36px;"></i>
            <span>Da 1 a 3 ore</span>
          </div>
          <div class="choice-card ${activeClass('tempo', 'molto')}" onclick="selectQuizAnswer('tempo', 'molto', this)">
            <i data-lucide="clock-10" style="width:36px; height:36px;"></i>
            <span>Più di 3 ore</span>
          </div>
        </div>
      </div>
    `;
  }

  const backButtonDisabled = step === 1 ? "disabled style='opacity:0.3; cursor:not-allowed;'" : "";
  const nextButtonText = step === 3 ? "Completa" : "Avanti";
  
  const currentKey = step === 1 ? 'casa' : step === 2 ? 'giardino' : 'tempo';
  const nextButtonDisabled = !answers[currentKey] ? "disabled style='opacity:0.5; cursor:not-allowed;'" : "";

  return `
    <div class="view-section">
      <div class="quiz-layout">
        <!-- Sidebar context card -->
        <aside class="quiz-sidebar-card">
          <div class="quiz-sidebar-icon">
            <i data-lucide="sparkles" style="width:24px; height:24px;"></i>
          </div>
          <h3>Sapevi che?</h3>
          <p>Il matching considera anche il tuo livello di attività quotidiana. Un cane felice è un cane che condivide il ritmo dei suoi umani!</p>
        </aside>

        <!-- Main questionnaire box -->
        <div class="quiz-box">
          <div class="quiz-progress-container">
            <div class="quiz-step-label">
              <span>Step ${step} di 3</span>
              <span>${step === 1 ? 'Il tuo ambiente' : step === 2 ? 'Il tuo ambiente' : 'Il tuo tempo'}</span>
            </div>
            <div class="quiz-progress-bar-bg">
              <div class="quiz-progress-bar-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>

          ${stepContent}

          <div class="quiz-actions">
            <button class="btn btn-secondary" onclick="prevQuizStep()" ${backButtonDisabled}>Indietro</button>
            <button class="btn btn-primary" onclick="nextQuizStep()" ${nextButtonDisabled}>${nextButtonText} <i data-lucide="arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function selectQuizAnswer(key, val, el) {
  state.questionnaire.answers[key] = val;
  
  if (el) {
    // Toggle active state in DOM without full re-render
    const container = el.closest(".choice-cards");
    if (container) {
      container.querySelectorAll(".choice-card").forEach(card => {
        card.classList.remove("selected");
      });
    }
    el.classList.add("selected");

    // Enable next step button in DOM
    const quizBox = el.closest(".quiz-box");
    if (quizBox) {
      const nextBtn = quizBox.querySelector(".quiz-actions .btn-primary");
      if (nextBtn) {
        nextBtn.removeAttribute("disabled");
        nextBtn.removeAttribute("style");
      }
    }
  } else {
    renderCurrentView();
  }
}

function prevQuizStep() {
  if (state.questionnaire.step > 1) {
    state.questionnaire.step--;
    renderCurrentView();
    window.scrollTo(0, 0);
  }
}

function nextQuizStep() {
  const currentKey = state.questionnaire.step === 1 ? 'casa' : state.questionnaire.step === 2 ? 'giardino' : 'tempo';
  if (!state.questionnaire.answers[currentKey]) return;

  if (state.questionnaire.step < 3) {
    state.questionnaire.step++;
    renderCurrentView();
    window.scrollTo(0, 0);
  } else {
    state.questionnaire.step = 4;
    renderCurrentView();
    triggerConfetti();
    window.scrollTo(0, 0);
  }
}

function renderQuestionarioResults() {
  const answers = state.questionnaire.answers;
  let matchedBreedId = "meticcio";
  
  if (answers.casa === "appartamento") {
    if (answers.giardino === "no" && answers.tempo === "poco") {
      matchedBreedId = "french-bulldog";
    } else if (answers.tempo === "molto") {
      matchedBreedId = "cocker-spaniel";
    } else {
      matchedBreedId = "meticcio";
    }
  } else if (answers.casa === "indipendente") {
    if (answers.giardino === "ampio" && answers.tempo === "molto") {
      matchedBreedId = "border-collie";
    } else if (answers.tempo === "poco") {
      matchedBreedId = "french-bulldog";
    } else {
      matchedBreedId = "golden-retriever";
    }
  }

  let breed = state.breeds.find(b => {
    const id = String(b.id);
    if (matchedBreedId === "french-bulldog") {
      return id === "65" || b.name.toLowerCase().includes("bulldog francese");
    }
    if (matchedBreedId === "cocker-spaniel") {
      return id === "121" || id === "120" || b.name.toLowerCase().includes("cocker");
    }
    if (matchedBreedId === "border-collie") {
      return id === "20" || b.name.toLowerCase().includes("border collie");
    }
    if (matchedBreedId === "golden-retriever") {
      return id === "176" || b.name.toLowerCase().includes("golden retriever");
    }
    if (matchedBreedId === "meticcio") {
      return id === "357" || b.name.toLowerCase().includes("meticcio") || b.name.toLowerCase().includes("no razza");
    }
    return id === matchedBreedId;
  });

  if (!breed) {
    breed = state.breeds.find(b => String(b.id) === "357" || b.name.toLowerCase().includes("no razza") || b.name.toLowerCase().includes("meticcio")) || state.breeds[0];
  }

  return `
    <div class="view-section" style="max-width:800px; margin:0 auto; padding-bottom:60px;">
      <div class="quiz-result-container">
        <div class="quiz-result-success-badge">
          <i data-lucide="party-popper" style="width:40px; height:40px;"></i>
        </div>
        
        <h2>Abbiamo trovato il tuo Match Perfetto!</h2>
        <p style="color:var(--dark-gray); font-size:16px; margin-top:-16px;">Sulla base delle tue risposte, ecco la razza ideale per il tuo stile di vita.</p>

        <div class="quiz-result-card">
          <img src="${breed.image}" alt="${breed.name}" />
          <h3>${breed.name}</h3>
          <p>${breed.subtitle}</p>
          <div class="breed-badges" style="justify-content:center;">
            <span class="badge badge-green">Energia: ${breed.energy}</span>
            <span class="badge badge-orange">Taglia: ${breed.size}</span>
          </div>
        </div>

        <div style="display:flex; gap:16px;">
          <button class="btn btn-secondary" onclick="resetQuiz()">Rifai il Test</button>
          <button class="btn btn-primary" onclick="navigateTo('#dettaglio/${breed.id}')">Scopri Dettagli Razza</button>
        </div>
      </div>
    </div>
  `;
}

function resetQuiz() {
  state.questionnaire.step = 1;
  state.questionnaire.answers = { casa: null, giardino: null, tempo: null };
  renderCurrentView();
}

function triggerConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38A169', '#E55B3C', '#F6AD55']
    });
  }
}

// 5. EVENT BINDINGS & HANDLERS

function bindViewEvents() {
  if (state.currentView === "razze") {
    state.breedsPage = 1;
    state.filteredBreeds = [...state.breeds];
    renderBreedsList();
    initLocationDropdowns();
    const regSelect = document.getElementById("filter-regione");
    if (regSelect) {
      regSelect.addEventListener("change", updateProvinceDropdownOptions);
    }
    const provSelect = document.getElementById("filter-provincia");
    if (provSelect) {
      provSelect.addEventListener("change", updateCityDropdownOptions);
    }
  }

  const homeSearchBtn = document.getElementById("home-search-btn");
  if (homeSearchBtn) {
    homeSearchBtn.addEventListener("click", handleHomeSearch);
  }

  const resetFiltersBtn = document.getElementById("reset-filters");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", handleResetFilters);
    
    // Bind all inputs in the filters sidebar to trigger filtering on change
    document.querySelectorAll(".filters-sidebar input[type='checkbox'], .filters-sidebar select").forEach(el => {
      el.addEventListener("change", handleBreedFiltersChange);
    });

    // Custom toggle for Breed selection when Pura is checked
    const selectBreedTrigger = document.getElementById("select-breed-trigger");
    if (selectBreedTrigger) {
      selectBreedTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const puraCheckbox = document.querySelector("input[name='tipo-razza'][value='pura']");
        if (puraCheckbox) {
          puraCheckbox.checked = true;
          // Trigger change event to sync and filter
          puraCheckbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const wrapper = document.getElementById("breed-subselect-wrapper");
        if (wrapper) {
          wrapper.classList.remove("hidden");
        }
      });
    }

    const puraCheckbox = document.querySelector("input[name='tipo-razza'][value='pura']");
    if (puraCheckbox) {
      puraCheckbox.addEventListener("change", () => {
        const wrapper = document.getElementById("breed-subselect-wrapper");
        if (wrapper) {
          if (puraCheckbox.checked) {
            wrapper.classList.remove("hidden");
          } else {
            wrapper.classList.add("hidden");
            const breedSelect = document.getElementById("filter-breed-name");
            if (breedSelect) {
              breedSelect.value = "";
              breedSelect.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }
        }
      });
    }

    // Custom toggle for Traits dropdown
    const toggleTraitsBtn = document.getElementById("toggle-traits-dropdown-btn");
    if (toggleTraitsBtn) {
      toggleTraitsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById("traits-options-dropdown");
        if (dropdown) {
          dropdown.classList.toggle("hidden");
        }
      });
    }
  }
}

function handleHomeSearch() {
  const provincia = document.getElementById("search-provincia").value;
  const breedId = document.getElementById("search-razza").value;
  const age = document.getElementById("search-eta").value;

  let filtered = [...state.partnerDogs];

  if (provincia) {
    filtered = filtered.filter(dog => dog.location.includes(provincia));
  }
  if (breedId) {
    filtered = filtered.filter(dog => dog.breedId === breedId);
  }
  if (age) {
    if (age === "cucciolo") {
      filtered = filtered.filter(dog => dog.age.includes("Mesi") || dog.age.includes("Mese") || dog.age === "1 Anno");
    } else if (age === "adulto") {
      filtered = filtered.filter(dog => !dog.age.includes("Mesi") && !dog.age.includes("Mese") && dog.age !== "1 Anno");
    }
  }

  const grid = document.getElementById("home-dogs-grid");
  if (grid) {
    grid.innerHTML = filtered.map(dog => renderDogCard(dog)).join("");
    if (window.lucide) window.lucide.createIcons();
    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: span 3; text-align:center; padding:40px; color:var(--dark-gray);">Nessun cane corrisponde ai filtri di ricerca selezionati. Prova a cambiarli!</div>`;
    }
  }
}

function removeTraitFilter(trait) {
  const checkbox = document.querySelector(`.filters-sidebar input[name='trait-opt'][value='${trait}']`);
  if (checkbox) {
    checkbox.checked = false;
    checkbox.dispatchEvent(new Event('change', { bubbles: true }));
  }
}
window.removeTraitFilter = removeTraitFilter;

function handleBreedFiltersChange() {
  const regione = document.getElementById("filter-regione") ? document.getElementById("filter-regione").value : "";
  const provincia = document.getElementById("filter-provincia") ? document.getElementById("filter-provincia").value : "";
  const citta = document.getElementById("filter-citta") ? document.getElementById("filter-citta").value : "";

  const selectedSizes = Array.from(document.querySelectorAll("input[name='taglia']:checked")).map(el => el.value);
  const selectedAges = Array.from(document.querySelectorAll("input[name='eta']:checked")).map(el => el.value);
  const selectedTypes = Array.from(document.querySelectorAll("input[name='tipo-razza']:checked")).map(el => el.value);
  const selectedGenders = Array.from(document.querySelectorAll("input[name='sesso']:checked")).map(el => el.value);
  const selectedTrained = Array.from(document.querySelectorAll("input[name='addestrato']:checked")).map(el => el.value);
  const selectedMedical = Array.from(document.querySelectorAll("input[name='medical']:checked")).map(el => el.value);
  const selectedTraits = Array.from(document.querySelectorAll("input[name='trait-opt']:checked")).map(el => el.value);
  const selectedBreedName = document.getElementById("filter-breed-name") ? document.getElementById("filter-breed-name").value : "";

  // Update active traits pills in UI
  const activeTraitsContainer = document.getElementById("active-traits-pills");
  if (activeTraitsContainer) {
    activeTraitsContainer.innerHTML = selectedTraits.map(t => `
      <span class="trait-badge-pill" data-trait="${t}">${t} <span class="remove-trait" onclick="removeTraitFilter('${t}')">&times;</span></span>
    `).join("");
  }

  let filtered = [...state.breeds];

  // 1. Taglia (Size)
  if (selectedSizes.length > 0) {
    filtered = filtered.filter(breed => selectedSizes.includes(breed.size));
  }

  // 2. Location (Regione, Provincia & Città)
  if (regione || provincia || citta) {
    filtered = filtered.filter(breed => {
      return state.partnerDogs.some(dog => {
        const breedMatch = dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
        let locMatch = true;
        if (regione) {
          locMatch = locMatch && (dog.regione && dog.regione.toLowerCase() === regione.toLowerCase());
        }
        if (provincia) {
          locMatch = locMatch && (dog.provSigla && dog.provSigla.toLowerCase() === provincia.toLowerCase());
        }
        if (citta) {
          locMatch = locMatch && (dog.citta && dog.citta.toLowerCase() === citta.toLowerCase());
        }
        return breedMatch && locMatch;
      });
    });
  }

  // 3. Età (Age)
  if (selectedAges.length > 0) {
    filtered = filtered.filter(breed => {
      return state.partnerDogs.some(dog => {
        const breedMatch = dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
        if (!breedMatch) return false;
        
        const ageStr = dog.age.toLowerCase();
        let ageGroup = "";
        if (ageStr.includes("mese") || ageStr.includes("mesi")) {
          const months = parseInt(ageStr);
          if (months <= 12) ageGroup = "cucciolo";
        } else if (ageStr.includes("anno") || ageStr.includes("anni")) {
          const years = parseInt(ageStr);
          if (years === 1) {
            ageGroup = "cucciolo";
          } else if (years <= 3) {
            ageGroup = "giovane";
          } else if (years <= 7) {
            ageGroup = "adulto";
          } else if (years <= 12) {
            ageGroup = "senior";
          } else {
            ageGroup = "anziano";
          }
        }
        return selectedAges.includes(ageGroup) || (ageStr === "1 anno" && selectedAges.includes("cucciolo"));
      });
    });
  }

  // 4. Razza type (Pura / Meticcia) and Sub-breed name
  if (selectedTypes.length > 0) {
    filtered = filtered.filter(breed => {
      const isMeticcia = breed.id === "meticcio";
      const matchesPura = selectedTypes.includes("pura") && !isMeticcia;
      const matchesMeticcia = selectedTypes.includes("meticcia") && isMeticcia;
      
      let finalBreedMatch = matchesPura || matchesMeticcia;
      
      if (selectedBreedName && matchesPura) {
        finalBreedMatch = finalBreedMatch && breed.id === selectedBreedName;
      }
      
      return finalBreedMatch;
    });
  }

  // 5. Sesso (Gender)
  if (selectedGenders.length > 0) {
    filtered = filtered.filter(breed => {
      return state.partnerDogs.some(dog => {
        const breedMatch = dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
        return breedMatch && selectedGenders.includes(dog.gender);
      });
    });
  }

  // 6. Addestrato (Trained)
  if (selectedTrained.length > 0) {
    filtered = filtered.filter(breed => {
      return state.partnerDogs.some(dog => {
        const breedMatch = dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
        const isTrained = dog.trained ? "si" : "no";
        return breedMatch && selectedTrained.includes(isTrained);
      });
    });
  }

  // 7. Stato Veterinario (Medical)
  if (selectedMedical.length > 0) {
    filtered = filtered.filter(breed => {
      return state.partnerDogs.some(dog => {
        const breedMatch = dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
        return breedMatch && selectedMedical.includes(dog.medical);
      });
    });
  }

  // 8. Attributi (Traits)
  if (selectedTraits.length > 0) {
    filtered = filtered.filter(breed => {
      const breedTemp = breed.temperament.toLowerCase();
      const breedMatches = selectedTraits.every(t => breedTemp.includes(t.toLowerCase()));
      
      const dogMatches = state.partnerDogs.some(dog => {
        const breedMatch = dog.breedId === breed.id || dog.breedName.toLowerCase().includes(breed.name.toLowerCase());
        if (!breedMatch) return false;
        const dogTags = dog.tags.map(tag => tag.toLowerCase());
        return selectedTraits.every(t => dogTags.includes(t.toLowerCase()));
      });
      
      return breedMatches || dogMatches;
    });
  }

  state.filteredBreeds = filtered;
  state.breedsPage = 1;
  renderBreedsList();
}

function handleResetFilters() {
  if (document.getElementById("filter-regione")) {
    document.getElementById("filter-regione").value = "";
  }
  if (document.getElementById("filter-provincia")) {
    document.getElementById("filter-provincia").value = "";
  }
  if (document.getElementById("filter-citta")) {
    document.getElementById("filter-citta").value = "";
  }
  updateProvinceDropdownOptions();
  if (document.getElementById("filter-breed-name")) {
    document.getElementById("filter-breed-name").value = "";
  }
  
  const breedWrapper = document.getElementById("breed-subselect-wrapper");
  if (breedWrapper) breedWrapper.classList.add("hidden");

  const traitsDropdown = document.getElementById("traits-options-dropdown");
  if (traitsDropdown) traitsDropdown.classList.add("hidden");

  document.querySelectorAll(".filters-sidebar input[type='checkbox']").forEach(el => {
    el.checked = false;
  });

  handleBreedFiltersChange();
}

function toggleFavorite(id, event) {
  event.stopPropagation();
  const index = state.favorites.indexOf(id);
  if (index > -1) {
    state.favorites.splice(index, 1);
  } else {
    state.favorites.push(id);
  }
  
  storage.saveFavorites();
  
  const btn = event.currentTarget;
  if (btn.classList.contains("active")) {
    btn.classList.remove("active");
  } else {
    btn.classList.add("active");
  }
  
  if (state.currentView === "account") {
    renderCurrentView();
  }
}

// 6. CRUD FOR SHELTER DOGS (DASHBOARD)

function openAddDogModal(event) {
  event.preventDefault();
  state.editingDogId = null;
  
  document.getElementById("crud-modal-title").innerText = "Aggiungi Nuovo Cane";
  document.getElementById("crud-dog-name").value = "";
  document.getElementById("crud-dog-provenienza").value = "Roma (RM)";
  document.getElementById("crud-dog-stato").value = "DISPONIBILE";
  document.getElementById("crud-dog-eta").value = "2 Anni";
  document.getElementById("crud-dog-sesso").value = "Maschio";
  document.getElementById("crud-dog-tag").value = "Giocherellone";
  document.getElementById("crud-dog-breed").value = "golden-retriever";

  openModal("crud-modal");
}

function openEditDogModal(id, event) {
  event.preventDefault();
  state.editingDogId = id;
  const dog = state.partnerDogs.find(d => d.id === id);
  if (!dog) return;

  document.getElementById("crud-modal-title").innerText = `Modifica Profilo di ${dog.name}`;
  document.getElementById("crud-dog-name").value = dog.name;
  document.getElementById("crud-dog-provenienza").value = dog.location;
  document.getElementById("crud-dog-stato").value = dog.status;
  document.getElementById("crud-dog-eta").value = dog.age;
  document.getElementById("crud-dog-sesso").value = dog.gender;
  document.getElementById("crud-dog-tag").value = dog.tags[0] || "Affettuoso";
  document.getElementById("crud-dog-breed").value = dog.breedId || "meticcio";

  openModal("crud-modal");
}

async function handleCrudSubmit(event) {
  event.preventDefault();

  const name      = document.getElementById("crud-dog-name").value.trim();
  const location  = document.getElementById("crud-dog-provenienza").value;
  const status    = document.getElementById("crud-dog-stato").value;
  const age       = document.getElementById("crud-dog-eta").value;
  const gender    = document.getElementById("crud-dog-sesso").value;
  const tag       = document.getElementById("crud-dog-tag").value;
  const breedId   = document.getElementById("crud-dog-breed").value;

  if (!name) return;

  const payload = {
    nome: name,
    sesso: gender === "Maschio" ? "M" : "F",
    eta: age,
    storia: "Un dolce ospite del nostro canile.",
    razza_id: isNaN(breedId) ? breedId : parseInt(breedId, 10),
    canile_id: 58, // Oasi Serena
    stato: status.toLowerCase(),
    tag: tag
  };

  if (state.editingDogId) {
    payload.id = state.editingDogId;
  }

  try {
    const res = await fetch(API_BASE + "cani.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      credentials: "include"
    });
    const result = await res.json();
    if (res.ok && result.success) {
      closeModal("crud-modal");
      // Ricarica la lista aggiornata dal database
      await loadDatabaseData();
      renderCurrentView();
    } else {
      alert("Errore nel salvataggio: " + (result.error || "Riprova"));
    }
  } catch (error) {
    console.error("Errore durante l'operazione CRUD:", error);
    alert("Impossibile connettersi al server per completare l'operazione.");
  }
}

async function handleDeleteDog(id, event) {
  event.preventDefault();
  if (confirm("Sei sicuro di voler eliminare questo cane dal database?")) {
    try {
      const res = await fetch(API_BASE + `cani.php?id=${id}`, {
        method: "DELETE",
        credentials: "include"
      });
      const result = await res.json();
      if (res.ok && result.success) {
        // Ricarica la lista dal database
        await loadDatabaseData();
        renderCurrentView();
      } else {
        alert("Errore nell'eliminazione: " + (result.error || "Riprova"));
      }
    } catch (error) {
      console.error("Errore durante l'eliminazione:", error);
      alert("Impossibile eliminare l'elemento sul server.");
    }
  }
}

// 7. USER PROFILE & MODALS

function openProfileModal(event) {
  event.preventDefault();
  document.getElementById("profile-name").value = state.userProfile.name;
  document.getElementById("profile-location").value = state.userProfile.location;
  openModal("profile-modal");
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("profile-name").value.trim();
  const location = document.getElementById("profile-location").value.trim();

  if (name) state.userProfile.name = name;
  if (location) state.userProfile.location = location;

  storage.saveProfile();
  closeModal("profile-modal");
  
  updateAuthUI();

  renderCurrentView();
}

function updateAuthUI() {
  const welcomeBtn = document.getElementById("header-welcome-btn");
  const loginBtn = document.getElementById("header-login-btn");
  const mobileWelcomeBtn = document.getElementById("mobile-welcome-btn");
  const mobileLoginBtn = document.getElementById("mobile-login-btn");

  if (state.isLoggedIn) {
    if (welcomeBtn) {
      welcomeBtn.style.display = "inline-flex";
      welcomeBtn.innerHTML = `<i data-lucide="user"></i> ${state.userProfile.name}`;
    }
    if (loginBtn) loginBtn.style.display = "none";
    if (mobileWelcomeBtn) {
      mobileWelcomeBtn.style.display = "inline-flex";
      mobileWelcomeBtn.innerHTML = `<i data-lucide="user"></i> ${state.userProfile.name}`;
    }
    if (mobileLoginBtn) mobileLoginBtn.style.display = "none";
  } else {
    if (welcomeBtn) welcomeBtn.style.display = "none";
    if (loginBtn) loginBtn.style.display = "inline-flex";
    if (mobileWelcomeBtn) mobileWelcomeBtn.style.display = "none";
    if (mobileLoginBtn) mobileLoginBtn.style.display = "inline-flex";
  }
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function handleLogout(event) {
  if (event) event.preventDefault();
  state.isLoggedIn = false;
  storage.saveLoginState();
  updateAuthUI();
  navigateTo("#home");
}

async function handleLoginSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const errorContainer = document.getElementById("login-error");
  const errorText = document.getElementById("login-error-text");

  if (errorContainer) {
    errorContainer.style.display = "none";
  }

  try {
    const response = await fetch("api/auth.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "login",
        username: username,
        password: password
      })
    });

    const result = await response.json();
    
    if (response.ok && result.success) {
      state.isLoggedIn = true;
      state.userProfile.name = result.user.first_name + " " + result.user.last_name;
      state.userProfile.email = result.user.email;
      
      storage.saveProfile();
      storage.saveLoginState();
      updateAuthUI();
      renderCurrentView();
    } else {
      const errMsg = result.error || "Credenziali errate o account disattivato.";
      if (errorContainer && errorText) {
        errorText.textContent = errMsg;
        errorContainer.style.display = "flex";
        if (window.lucide) window.lucide.createIcons();
      } else {
        alert("Errore di accesso: " + errMsg);
      }
    }
  } catch (error) {
    console.error("Errore durante il login con il database:", error);
    const connectionErrMsg = "Impossibile connettersi al server di autenticazione. Verifica le impostazioni del database o riprova più tardi.";
    if (errorContainer && errorText) {
      errorText.textContent = connectionErrMsg;
      errorContainer.style.display = "flex";
      if (window.lucide) window.lucide.createIcons();
    } else {
      alert("Errore di connessione: " + connectionErrMsg);
    }
  }
}

function mapDbDogToFrontend(dbDog) {
  let status = "DISPONIBILE";
  if (dbDog.stato) {
    const s = dbDog.stato.toLowerCase();
    if (s === "disponibile") status = "DISPONIBILE";
    else if (s === "in prova") status = "IN PROVA";
    else if (s === "adottato") status = "ADOTTATO";
  }
  
  const tags = dbDog.attributi && dbDog.attributi.length > 0 ? dbDog.attributi : ["Affettuoso"];
  const trained = tags.some(t => t.toLowerCase().includes("addestrat"));
  
  let medical = "Nessuno";
  if (tags.some(t => t.toLowerCase().includes("castrat"))) {
    medical = "Castrato";
  } else if (tags.some(t => t.toLowerCase().includes("sterilizzat"))) {
    medical = "Sterilizzato";
  }

  let location = "Italia";
  if (dbDog.citta) {
    location = dbDog.citta;
    if (dbDog.prov_sigla) {
      location += ` (${dbDog.prov_sigla})`;
    }
  }

  let image = dbDog.image;
  if (!image) {
    image = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500";
  }

  return {
    id: dbDog.id,
    name: dbDog.nome || "Senza Nome",
    breedId: dbDog.razza_id,
    breedName: dbDog.nome_razza || "Meticcio",
    nomeCanile: dbDog.nome_canile || "",
    age: dbDog.eta || "Età sconosciuta",
    gender: dbDog.sesso === "M" ? "Maschio" : "Femmina",
    location: location,
    citta: dbDog.citta || "",
    provincia: dbDog.provincia || "",
    provSigla: dbDog.prov_sigla || "",
    regione: dbDog.regione || "",
    status: status,
    trained: trained,
    medical: medical,
    tags: tags,
    image: image
  };
}

async function loadDatabaseData() {
  try {
    const breedsRes = await fetch("api/razze.php");
    if (breedsRes.ok) {
      const dbBreeds = await breedsRes.json();
      state.breeds = dbBreeds.map(dbBreed => {
        const staticBreed = BREEDS_DB.find(b => b.name.toLowerCase() === dbBreed.nome.toLowerCase() || b.id === dbBreed.id);
        
        let size = "Media";
        if (dbBreed.taglia) {
          size = dbBreed.taglia.charAt(0).toUpperCase() + dbBreed.taglia.slice(1);
        }

        return {
          id: dbBreed.id,
          name: dbBreed.nome,
          subtitle: staticBreed ? staticBreed.subtitle : "Un compagno unico e leale",
          description: staticBreed ? staticBreed.description : "Una razza affascinante ed amabile, pronta a farsi voler bene.",
          energy: staticBreed ? staticBreed.energy : "Energia media",
          size: size,
          life: staticBreed ? staticBreed.life : "10-15 anni",
          temperament: staticBreed ? staticBreed.temperament : "Affettuoso, leale, socievole",
          image: dbBreed.image || (staticBreed ? staticBreed.image : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=500"),
          funFact: staticBreed ? staticBreed.funFact : "Ogni esemplare ha caratteristiche speciali tutte da scoprire!"
        };
      });
    }

    const dogsRes = await fetch("api/cani.php");
    if (dogsRes.ok) {
      const dbDogs = await dogsRes.json();
      state.partnerDogs = dbDogs.map(mapDbDogToFrontend);
    }

    const crudBreedSelect = document.getElementById("crud-dog-breed");
    if (crudBreedSelect) {
      crudBreedSelect.innerHTML = state.breeds.map(b => `<option value="${b.id}">${b.name}</option>`).join("");
    }

  } catch (error) {
    console.error("Errore durante il caricamento dei dati dal database:", error);
  }
}

function generatePaginationHTML(currentPage, totalPages) {
  if (totalPages <= 1) return "";

  let html = "";
  html += `
    <button class="pagination-arrow-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changeBreedsPage('prev')" aria-label="Pagina precedente">
      <i data-lucide="chevron-left"></i>
    </button>
  `;

  const range = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
  } else {
    range.push(1);
    if (currentPage > 4) {
      range.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    let adjustedStart = start;
    let adjustedEnd = end;
    if (currentPage <= 4) {
      adjustedEnd = 5;
    } else if (currentPage >= totalPages - 3) {
      adjustedStart = totalPages - 4;
    }

    for (let i = adjustedStart; i <= adjustedEnd; i++) {
      range.push(i);
    }

    if (currentPage < totalPages - 3) {
      range.push("...");
    }

    range.push(totalPages);
  }

  range.forEach(item => {
    if (item === "...") {
      html += `<span class="pagination-dots">...</span>`;
    } else {
      html += `
        <button class="pagination-number ${item === currentPage ? 'active' : ''}" onclick="changeBreedsPage(${item})">
          ${item}
        </button>
      `;
    }
  });

  html += `
    <button class="pagination-arrow-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changeBreedsPage('next')" aria-label="Pagina successiva">
      <i data-lucide="chevron-right"></i>
    </button>
  `;

  return html;
}

function renderBreedsList() {
  const grid = document.getElementById("breeds-list-grid");
  const pagination = document.getElementById("breeds-pagination");
  if (!grid || !pagination) return;

  const total = state.filteredBreeds.length;
  if (total === 0) {
    grid.innerHTML = `<div style="grid-column: span 3; text-align:center; padding:40px; color:var(--dark-gray);">Nessuna razza corrisponde ai filtri selezionati. Prova a modificarli!</div>`;
    pagination.innerHTML = "";
    return;
  }

  const totalPages = Math.ceil(total / state.breedsPerPage);
  if (state.breedsPage > totalPages) state.breedsPage = totalPages;
  if (state.breedsPage < 1) state.breedsPage = 1;

  const start = (state.breedsPage - 1) * state.breedsPerPage;
  const end = start + state.breedsPerPage;
  const pageBreeds = state.filteredBreeds.slice(start, end);

  grid.innerHTML = pageBreeds.map(breed => {
    const energyClass = breed.energy ? breed.energy.toLowerCase().replace(/\s+/g, '-') : 'energia-media';
    return `
      <div class="breed-card" onclick="navigateTo('#dettaglio/${breed.id}')">
        <div class="breed-image-container" style="position: relative;">
          <span class="breed-energy-badge-overlay energy-${energyClass}">${breed.energy || 'Energia media'}</span>
          <img src="${breed.image}" alt="${breed.name}" loading="lazy" />
        </div>
        <div class="breed-info">
          <h3 class="breed-name">${breed.name}</h3>
          <p class="breed-description">${breed.description}</p>
          <div class="breed-badges">
            <span class="badge badge-gray">${breed.size}</span>
            <span class="badge badge-gray">${breed.life}</span>
          </div>
          <div class="breed-card-footer-action">
            <span class="breed-discover-btn">Scopri di più <i data-lucide="arrow-right"></i></span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  pagination.innerHTML = generatePaginationHTML(state.breedsPage, totalPages);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function changeBreedsPage(target) {
  const total = state.filteredBreeds.length;
  const totalPages = Math.ceil(total / state.breedsPerPage);

  if (target === 'prev') {
    state.breedsPage = Math.max(1, state.breedsPage - 1);
  } else if (target === 'next') {
    state.breedsPage = Math.min(totalPages, state.breedsPage + 1);
  } else {
    const pageNum = parseInt(target, 10);
    if (!isNaN(pageNum)) {
      state.breedsPage = Math.max(1, Math.min(totalPages, pageNum));
    }
  }

  renderBreedsList();

  const targetElement = document.querySelector(".breeds-layout");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function initLocationDropdowns() {
  const regSelect = document.getElementById("filter-regione");
  if (!regSelect) return;

  const regions = new Set();
  state.partnerDogs.forEach(dog => {
    if (dog.regione) {
      regions.add(dog.regione.trim());
    }
  });

  const uniqueRegions = Array.from(regions).sort();
  if (uniqueRegions.length === 0) {
    uniqueRegions.push("Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia Romagna", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Toscana", "Umbria", "Valle d'Aosta", "Veneto");
  }

  regSelect.innerHTML = `<option value="">Scegli la Regione...</option>` +
    uniqueRegions.map(r => `<option value="${r}">${r}</option>`).join("");

  updateProvinceDropdownOptions();
}

function updateProvinceDropdownOptions() {
  const regSelect = document.getElementById("filter-regione");
  const provSelect = document.getElementById("filter-provincia");
  if (!provSelect) return;

  const selectedRegion = regSelect ? regSelect.value : "";
  const provMap = new Map();

  state.partnerDogs.forEach(dog => {
    const matchesRegion = !selectedRegion || (dog.regione && dog.regione.toLowerCase() === selectedRegion.toLowerCase());
    if (matchesRegion) {
      if (dog.provSigla && dog.provincia) {
        provMap.set(dog.provSigla.trim(), `${dog.provincia.trim()} (${dog.provSigla.trim()})`);
      } else {
        const match = dog.location ? dog.location.match(/^(.+?)\s*\((.+?)\)$/) : null;
        if (match) {
          const sigla = match[2].trim();
          let provName = sigla === "MI" ? "Milano" : sigla === "RM" ? "Roma" : sigla;
          provMap.set(sigla, `${provName} (${sigla})`);
        }
      }
    }
  });

  const uniqueProvs = Array.from(provMap.entries()).map(([sigla, label]) => ({ sigla, label }));
  uniqueProvs.sort((a, b) => a.label.localeCompare(b.label));

  const previousSelectedProv = provSelect.value;
  provSelect.innerHTML = `<option value="">Scegli la Provincia...</option>` +
    uniqueProvs.map(p => `<option value="${p.sigla}">${p.label}</option>`).join("");

  if (uniqueProvs.some(p => p.sigla === previousSelectedProv)) {
    provSelect.value = previousSelectedProv;
  } else {
    provSelect.value = "";
  }

  updateCityDropdownOptions();
}

function updateCityDropdownOptions() {
  const regSelect = document.getElementById("filter-regione");
  const provSelect = document.getElementById("filter-provincia");
  const citySelect = document.getElementById("filter-citta");
  if (!citySelect) return;

  const selectedRegion = regSelect ? regSelect.value : "";
  const selectedProvSigla = provSelect ? provSelect.value : "";

  let filteredCities = [];
  state.partnerDogs.forEach(dog => {
    const matchesRegion = !selectedRegion || (dog.regione && dog.regione.toLowerCase() === selectedRegion.toLowerCase());
    const matchesProv = !selectedProvSigla || (dog.provSigla && dog.provSigla.toLowerCase() === selectedProvSigla.toLowerCase());

    if (matchesRegion && matchesProv) {
      if (dog.citta) {
        filteredCities.push(dog.citta.trim());
      } else {
        const match = dog.location ? dog.location.match(/^(.+?)\s*\((.+?)\)$/) : null;
        if (match) {
          filteredCities.push(match[1].trim());
        }
      }
    }
  });

  filteredCities = [...new Set(filteredCities)].sort();

  const previousSelectedCity = citySelect.value;
  citySelect.innerHTML = `<option value="">Scegli la Città...</option>` +
    filteredCities.map(c => `<option value="${c}">${c}</option>`).join("");

  if (filteredCities.includes(previousSelectedCity)) {
    citySelect.value = previousSelectedCity;
  } else {
    citySelect.value = "";
  }
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("open");
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("open");
  }
}

function handlePartnershipSubmit(event) {
  event.preventDefault();
  const str = document.getElementById("form-struttura").value;
  const ref = document.getElementById("form-referente").value;
  
  alert(`Grazie ${ref}! La richiesta per la struttura "${str}" è stata inviata con successo. Verrai ricontattato entro 48 ore.`);
  event.target.reset();
}

function openAdoptionModal(dogId) {
  const dog = state.partnerDogs.find(d => String(d.id) === String(dogId));
  if (!dog) return;

  document.getElementById("adoption-dog-id").value = dog.id;
  document.getElementById("adoption-dog-name").value = `${dog.name} (${dog.breedName}) - ${dog.nomeCanile}`;
  
  if (state.isLoggedIn && state.userProfile) {
    document.getElementById("adoption-user-name").value = state.userProfile.name || "";
    document.getElementById("adoption-user-email").value = state.userProfile.email || "";
  } else {
    document.getElementById("adoption-user-name").value = "";
    document.getElementById("adoption-user-email").value = "";
  }
  
  document.getElementById("adoption-user-phone").value = "";
  document.getElementById("adoption-message").value = `Ciao! Vorrei ricevere maggiori informazioni su ${dog.name} per una possibile adozione. Sarei felice di organizzare un incontro conoscitivo. Grazie!`;

  openModal("adoption-modal");
}

function handleAdoptionSubmit(event) {
  event.preventDefault();
  const dogId = document.getElementById("adoption-dog-id").value;
  const dog = state.partnerDogs.find(d => String(d.id) === String(dogId));
  const dogName = dog ? dog.name : "questo ospite";
  
  const userName = document.getElementById("adoption-user-name").value;
  const userPhone = document.getElementById("adoption-user-phone").value;
  const userEmail = document.getElementById("adoption-user-email").value;

  alert(`Grazie ${userName}! La tua richiesta d'adozione per ${dogName} è stata inviata con successo.\nIl canile ospitante (${dog ? dog.nomeCanile : 'la struttura'}) riceverà i tuoi dati e ti contatterà al numero ${userPhone} o via email all'indirizzo ${userEmail} entro 48 ore.`);
  
  if (dog) {
    state.adoptionStatus = {
      dogName: dog.name,
      stepIndex: 0,
      appointment: "In attesa di essere contattato da: " + dog.nomeCanile
    };
  }

  event.target.reset();
  closeModal("adoption-modal");

  if (state.currentView === "account") {
    renderCurrentView();
  }
}

// 8. INITIALIZATION & SETUP

window.navigateTo = navigateTo;
window.toggleFavorite = toggleFavorite;
window.changeDashboardTab = changeDashboardTab;
window.scrollToDashboard = scrollToDashboard;
window.scrollToPartnerForm = scrollToPartnerForm;
window.scrollToSteps = scrollToSteps;
window.openAddDogModal = openAddDogModal;
window.openEditDogModal = openEditDogModal;
window.handleDeleteDog = handleDeleteDog;
window.handleCrudSubmit = handleCrudSubmit;
window.openProfileModal = openProfileModal;
window.handleProfileSubmit = handleProfileSubmit;
window.closeModal = closeModal;
window.handlePartnershipSubmit = handlePartnershipSubmit;
window.openAdoptionModal = openAdoptionModal;
window.handleAdoptionSubmit = handleAdoptionSubmit;
window.selectQuizAnswer = selectQuizAnswer;
window.prevQuizStep = prevQuizStep;
window.nextQuizStep = nextQuizStep;
window.resetQuiz = resetQuiz;
window.handleLogout = handleLogout;
window.handleLoginSubmit = handleLoginSubmit;
window.changeBreedsPage = changeBreedsPage;

document.addEventListener("DOMContentLoaded", async () => {
  storage.loadFavorites();
  storage.loadProfile();
  storage.loadPartnerDogs();
  storage.loadLoginState();

  updateAuthUI();

  // Carica i dati reali dal database
  await loadDatabaseData();

  window.addEventListener("hashchange", handleRouting);
  handleRouting();

  document.querySelectorAll(".modal-close-btn, .btn-close-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-overlay");
      if (modal) modal.classList.remove("open");
    });
  });
});


