const t = document.getElementById('cbt');
const b = document.getElementById('cb');

if (t && b) {
    t.addEventListener('click', () => {
        b.classList.toggle('min');
    });
}

const i = document.getElementById('i');
const s = document.getElementById('s');
const m = document.getElementById('m');

function f() {
    const v = i.value.trim();
    if (v === "") return;

    const u = document.createElement("div");
    u.className = "fs-mu";
    u.textContent = v;
    m.appendChild(u);

    const a = document.createElement("div");
    a.className = "fs-ma";
    a.textContent = "Processing philosophical query...";
    m.appendChild(a);

    i.value = "";
    m.scrollTop = m.scrollHeight;
}

if (s && i && m) {
    s.addEventListener("click", f);
    i.addEventListener("keypress", (e) => {
        if (e.key === "Enter") f();
    });
}