/**
 * NEXUS_ROOT // INTEGRATED CYBER-ENGINE
 * Menangani Security Gate, Matrix Rain, UI interaktif, dan Blueprint Fallback.
 */

const $ = s => document.querySelector(s);

/* ---------- 1. Background Matrix Rain ---------- */
function initMatrix() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrixCanvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  const cols = Math.floor(w / 20);
  const ypos = Array(cols).fill(0);
  const chars = "01ABCDEF".split('');

  function draw() {
    ctx.fillStyle = "rgba(2,4,8,0.08)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#00f0ff";
    ctx.font = "15px JetBrains Mono";
    for (let i = 0; i < cols; i++) {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * 20, ypos[i] * 20);
      if (ypos[i] * 20 > h && Math.random() > 0.975) ypos[i] = 0;
      else ypos[i]++;
    }
  }
  setInterval(draw, 45);
}

/* ---------- 2. Security Gate (FR-01) ---------- */
function initGate() {
  const gate = $('#gate');
  const puzzleEl = $('#puzzle');
  const options = $('#options');
  const result = $('#result');
  const btnEnter = $('#btn-enter');

  const puzzles = [
    { prompt: "Ubah 1010 (biner) menjadi desimal, lalu tambahkan 5. Hasilnya?", options: ["15", "12", "9", "20"], correct: "15" },
    { prompt: "Jika (A && B) = true dan A = true, nilai B?", options: ["true", "false", "null", "undefined"], correct: "true" }
  ];
  const p = puzzles[Math.floor(Math.random() * puzzles.length)];
  puzzleEl.textContent = p.prompt;

  p.options.forEach(opt => {
    const li = document.createElement('li');
    li.className = "gate-option-btn";
    li.textContent = opt;
    li.onclick = () => {
      if(opt === p.correct) {
        result.textContent = "ACCESS GRANTED";
        result.className = "gate-status-msg success mt-4";
        btnEnter.disabled = false;
      } else {
        result.textContent = "WRONG CODE - SYSTEM LOCK";
        result.className = "gate-status-msg error mt-4";
      }
    };
    options.appendChild(li);
  });

  btnEnter.onclick = () => {
    gate.style.display = "none";
    sessionStorage.setItem("gateStatus", "solved");
  };
}

/* ---------- 3. Project Blueprint Fallback (FR-05) ---------- */
function initProjects() {
  const projList = $('#projList');
  const projs = [
    { title: "System Bank Jago", img: "images/projects/bank-jago.png", desc: "Sistem perbankan real-time.", tech: ["Laravel", "React"] },
    { title: "System Klinik", img: "images/projects/klinik.png", desc: "Manajemen klinik efisien.", tech: ["Next.js", "PostgreSQL"] }
  ];

  projs.forEach(p => {
    const card = document.createElement('div');
    card.className = "cyber-card project-card";
    
    let imgHtml = `<img src="${p.img}" alt="${p.title}">`;
    if (!p.img) {
      imgHtml = `<div class="project-blueprint">
                   <div style="font-size:2rem">SYS-001</div>
                   <div>${p.title}</div>
                 </div>`;
    }

    card.innerHTML = `
      <div class="project-img-box">${imgHtml}</div>
      <h3 class="text-neon">${p.title}</h3>
      <p class="text-secondary mt-2">${p.desc}</p>
      <div class="tech-badge-container">
        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
    `;
    projList.appendChild(card);
  });
}

/* ---------- 4. Initializer ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initMatrix();
  const page = document.body.dataset.page;
  
  if (page === 'index') {
    if (!sessionStorage.getItem("gateStatus")) initGate();
    else $('#gate').style.display = 'none';
  }
  if (page === 'karya') initProjects();
  
  // Replay Gate
  const replayBtn = $('#btn-replay');
  if (replayBtn) replayBtn.onclick = () => { sessionStorage.removeItem("gateStatus"); location.reload(); };
});
