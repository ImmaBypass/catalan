const $ = s => document.querySelector(s);
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

const topics = [...new Set(QUESTIONS.map(q => q.t))];
let selected = new Set(topics), count = 0;
let deck = [], idx = 0, score = 0, wrong = [], locked = false;

function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = $('#' + id);
  void el.offsetWidth;
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- Inici ---------- */
function buildTopics() {
  const box = $('#topics');
  box.innerHTML = '';
  topics.forEach(t => {
    const b = document.createElement('button');
    b.className = 'chip on';
    b.textContent = t;
    b.onclick = () => {
      selected.has(t) ? selected.delete(t) : selected.add(t);
      b.classList.toggle('on');
      $('#startBtn').disabled = selected.size === 0;
    };
    box.appendChild(b);
  });
}

document.querySelectorAll('#counts .chip').forEach(b => {
  b.onclick = () => {
    document.querySelectorAll('#counts .chip').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    count = +b.dataset.n;
  };
});

function start(pool) {
  let list = shuffle(pool);
  if (count && count < list.length && pool === null) list = list.slice(0, count);
  deck = list; idx = 0; score = 0; wrong = [];
  show('quiz');
  render();
}

$('#startBtn').onclick = () => {
  let pool = shuffle(QUESTIONS.filter(q => selected.has(q.t)));
  if (count && count < pool.length) pool = pool.slice(0, count);
  deck = pool; idx = 0; score = 0; wrong = [];
  show('quiz');
  render();
};

/* ---------- Pregunta ---------- */
function render() {
  locked = false;
  const q = deck[idx];
  $('#counter').textContent = `${idx + 1} / ${deck.length}`;
  $('#tag').textContent = q.t;
  $('#barFill').style.width = (idx / deck.length * 100) + '%';
  $('#question').textContent = q.q;
  $('#feedback').className = 'feedback';
  $('#nextBtn').classList.add('hidden');
  $('#nextBtn').textContent = idx === deck.length - 1 ? 'Veure resultats' : 'Següent';

  const box = $('#options');
  box.innerHTML = '';
  shuffle(q.o.map((text, k) => ({ text, ok: k === q.a }))).forEach((o, k) => {
    const b = document.createElement('button');
    b.className = 'opt';
    b.innerHTML = `<span class="k">${k + 1}</span><span></span>`;
    b.lastChild.textContent = o.text;
    b.dataset.ok = o.ok;
    b.onclick = () => answer(b, q);
    box.appendChild(b);
  });
}

function answer(btn, q) {
  if (locked) return;
  locked = true;
  const ok = btn.dataset.ok === 'true';
  document.querySelectorAll('.opt').forEach(o => {
    o.classList.add('locked');
    if (o.dataset.ok === 'true') o.classList.add('correct');
    else if (o !== btn) o.classList.add('dim');
  });
  if (ok) score++;
  else { btn.classList.add('wrong'); wrong.push(q); }

  const f = $('#feedback');
  f.innerHTML = `<b class="${ok ? 'good' : 'bad'}">${ok ? 'Correcte!' : 'Incorrecte'}</b>${q.e}`;
  requestAnimationFrame(() => f.classList.add('show'));
  $('#nextBtn').classList.remove('hidden');
}

function next() {
  if (!locked) return;
  idx++;
  if (idx >= deck.length) return finish();
  const card = $('#quiz');
  card.classList.remove('active'); void card.offsetWidth; card.classList.add('active');
  render();
}
$('#nextBtn').onclick = next;

document.addEventListener('keydown', e => {
  if (!$('#quiz').classList.contains('active')) return;
  if (e.key === 'Enter') return next();
  const n = parseInt(e.key);
  const opts = document.querySelectorAll('.opt');
  if (n >= 1 && n <= opts.length) opts[n - 1].click();
});

/* ---------- Resultats ---------- */
function finish() {
  $('#barFill').style.width = '100%';
  show('result');
  const pct = Math.round(score / deck.length * 100);
  $('#resTitle').textContent = pct >= 90 ? 'Excel·lent!' : pct >= 70 ? 'Molt bé!' : pct >= 50 ? 'Vas pel bon camí' : 'Cal repassar';
  $('#resSub').textContent = `${score} de ${deck.length} encertades`;

  const ring = $('#ringFg');
  ring.style.strokeDashoffset = 326.7;
  setTimeout(() => ring.style.strokeDashoffset = 326.7 * (1 - pct / 100), 80);

  let n = 0;
  const t = setInterval(() => {
    n += Math.max(1, Math.round(pct / 40));
    if (n >= pct) { n = pct; clearInterval(t); }
    $('#pct').textContent = n + '%';
  }, 30);

  const list = $('#wrongList');
  list.innerHTML = '';
  wrong.forEach((q, i) => {
    const d = document.createElement('div');
    d.className = 'wrong-item';
    d.style.animationDelay = (i * 0.06) + 's';
    d.innerHTML = `<b></b><span></span>`;
    d.firstChild.textContent = q.q;
    d.lastChild.textContent = '✓ ' + q.o[q.a];
    list.appendChild(d);
  });
  $('#retryWrong').style.display = wrong.length ? '' : 'none';
}

$('#retryWrong').onclick = () => {
  deck = shuffle(wrong); idx = 0; score = 0; wrong = [];
  show('quiz'); render();
};
$('#restart').onclick = () => show('start');

buildTopics();
