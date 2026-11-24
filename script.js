function updateClock() {
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    document.getElementById('hours').textContent = String(h).padStart(2, '0');
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
    document.getElementById('ampm').textContent = ampm;
    document.getElementById('date').textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();