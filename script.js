/* ============================================================
   PROJECTS — data-driven. Add a new project by pushing another
   object into this array (copy an existing one as a template).
   accent: "amber" or "teal" (alternates the color treatment)
   metrics: optional array of {num, lab} — omit the key entirely
            if a project has no metrics to show.
   ============================================================ */
const projects = [
  {
    accent: "amber",
    title: "Credit Risk Analysis",
    desc: "End-to-end credit risk system generating probability-based loan risk assessments from 20K+ loan records and 11 borrower/loan features.",
    points: [
      "Benchmarked Logistic Regression, XGBoost and LightGBM; deployed LightGBM as the final model.",
      "Applied probability calibration and a tuned decision threshold of 0.3516 for risk classification.",
      "Productionized real-time inference with FastAPI and Pydantic, with an interactive frontend."
    ],
    metrics: [
      { num: "94%", lab: "accuracy" },
      { num: "93%", lab: "precision" },
      { num: "0.84", lab: "F1-score" },
      { num: "0.3516", lab: "decision threshold" }
    ],
    tags: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "FastAPI"],
    github: "https://github.com/SarveshPandey7/Credit-Risk-Analyzer",
    live: "https://credit-risk-analyzer-frontend.onrender.com/"
  },
  {
    accent: "teal",
    title: "Emotion Intelligent System",
    desc: "Multi-label NLP classifier on the GoEmotions dataset, predicting 28 emotion categories across 54K+ samples.",
    points: [
      "Full pipeline: data cleaning, leakage detection, EDA, class-imbalance analysis, tokenization.",
      "Benchmarked TF-IDF + Logistic Regression, BiLSTM, and DistilBERT with weighted loss and threshold optimization.",
      "Shipped with FastAPI, Pydantic, Streamlit, Docker/Docker Compose, deployed on Render and Streamlit Cloud."
    ],
    metrics: [
      { num: "0.52", lab: "macro F1" },
      { num: "0.57", lab: "micro F1" },
      { num: "28", lab: "emotion classes" },
      { num: "54K+", lab: "samples" }
    ],
    tags: ["Python", "PyTorch", "DistilBERT", "FastAPI", "Streamlit", "Docker"],
    github: "https://github.com/SarveshPandey7/Emotion-Intelligent-System",
    live: "https://emotion-intelligent-system-tappa9vznbstjufdmnhfwyy.streamlit.app/"
  }

  // --- template for a new project (uncomment & fill in) ---
  // ,{
  //   accent: "amber", // or "teal"
  //   title: "Project Name",
  //   desc: "One or two sentence summary.",
  //   points: ["Detail 1", "Detail 2"],
  //   metrics: [{ num: "0.9", lab: "some metric" }], // omit if none
  //   tags: ["Tech", "Stack"],
  //   github: "https://github.com/...",
  //   live: "https://..." // omit if there's no live demo
  // }
];

const arrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M7 17 17 7M8 7h9v9"/></svg>`;

function renderProjects(){
  const list = document.getElementById('projectList');
  list.innerHTML = projects.map(p => `
    <div class="proj-card" data-accent="${p.accent}">
      <div class="proj-tab"><span class="dot"></span>${p.title.toLowerCase().replace(/\s+/g,'_')}.py</div>
      <div class="proj-body">
        <h3>${p.title}</h3>
        <p class="desc">${p.desc}</p>
        <ul>${p.points.map(pt => `<li>${pt}</li>`).join('')}</ul>
        ${p.metrics ? `<div class="metric-row">${p.metrics.map(m => `
          <div class="metric"><div class="num">${m.num}</div><div class="lab">${m.lab}</div></div>
        `).join('')}</div>` : ''}
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="proj-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">${arrowIcon} GitHub</a>` : ''}
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">${arrowIcon} Live app</a>` : ''}
        </div>
      </div>
    </div>
  `).join('') + `
    <div class="more-projects">More projects on <a href="https://github.com/SarveshPandey7" target="_blank" rel="noopener">github.com/SarveshPandey7</a> </div>
  `;
}
renderProjects();

/* ---- skills ---- */
const skillGroups = [
  { label: "Languages & Data", items: ["Python", "C++", "SQL", "MySQL", "Pandas", "NumPy"] },
  { label: "Machine Learning", items: ["Scikit-learn", "Regression", "Classification", "Clustering", "Ensemble Methods", "Feature Engineering"] },
  { label: "Deep Learning & NLP", items: ["TensorFlow", "Keras", "PyTorch", "CNN", "RNN", "LSTM", "Transformers"] },
  { label: "Tools & Deployment", items: ["FastAPI", "Streamlit", "Docker", "Git", "GitHub", "Power BI", "Jupyter"] }
];
document.getElementById('skillGroups').innerHTML = skillGroups.map(g => `
  <div class="skill-group">
    <div class="glab">${g.label}</div>
    <div class="chips">${g.items.map(i => `<span class="chip">${i}</span>`).join('')}</div>
  </div>
`).join('');

/* ---- certificates ---- */
const certs = [
  { name: "Python (Basic)", issuer: "HackerRank Certificate", url: "https://www.hackerrank.com/certificates/50149147e9fc" },
  { name: "SQL (Basic)", issuer: "HackerRank Certificate", url: "https://www.hackerrank.com/certificates/bfa43f95579a" },
  { name: "SQL (Intermediate)", issuer: "HackerRank Certificate", url: "https://www.hackerrank.com/certificates/24a9358388a9" },
  { name: "5-Star Gold Badge in SQL", issuer: "HackerRank Profile", url: "https://www.hackerrank.com/profile/psarvesh991" },
  { name: "200+ DSA Problems", issuer: "TakeUForward Profile", url: "https://takeuforward.org/profile/sarvesh7" }
];
document.getElementById('certList').innerHTML = certs.map(c => `
  <a class="cert-row" href="${c.url}" target="_blank" rel="noopener">
    <div>
      <div class="name">${c.name}</div>
      <div class="issuer">${c.issuer}</div>
    </div>
    ${arrowIcon}
  </a>
`).join('');

/* ---- hero role typing effect (single orchestrated load moment) ---- */
const roleWords = ["Machine Learning", "NLP"];
const target = document.getElementById('typeTarget');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
  target.textContent = "· Machine Learning · NLP";
} else {
  let wi = 0, ci = 0, deleting = false;
  function tick(){
    const full = " · " + roleWords[wi];
    if (!deleting){
      ci++;
      target.textContent = full.slice(0, ci);
      if (ci === full.length){ deleting = true; setTimeout(tick, 1400); return; }
    } else {
      ci--;
      target.textContent = full.slice(0, ci);
      if (ci <= 3){ deleting = false; wi = (wi + 1) % roleWords.length; }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}

/* ---- scroll-spy nav ---- */
const sections = ['about','projects','skills','certs','contact'];
const dotLinks = document.querySelectorAll('#dotNav a');
const topLinks = document.querySelectorAll('#topNav a');
function onScroll(){
  let current = sections[0];
  for (const id of sections){
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top - window.innerHeight * 0.5 < 0) current = id;
  }
  dotLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  topLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- cursor-follow glow: tracks the pointer across the whole page
   with light easing for a smooth trail, and shifts color to match
   whichever project accent (amber/teal) you're hovering. ---- */
if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  const glow = document.querySelector('.glow');
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 3;
  let curX = mouseX, curY = mouseY, seeded = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!seeded) { curX = mouseX; curY = mouseY; seeded = true; } // no drift-in on first move
  }, { passive: true });

  function followGlow() {
    curX += (mouseX - curX) * 0.14;
    curY += (mouseY - curY) * 0.14;
    glow.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(followGlow);
  }
  requestAnimationFrame(followGlow);

  const amberGlow = 'rgba(227,178,60,0.11)';
  const tealGlow = 'rgba(79,176,164,0.11)';
  document.querySelectorAll('.proj-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      glow.style.setProperty('--glow-color', card.dataset.accent === 'teal' ? tealGlow : amberGlow);
    });
    card.addEventListener('mouseleave', () => {
      glow.style.setProperty('--glow-color', amberGlow);
    });
  });
} else {
  document.querySelector('.glow').style.display = 'none';
}
