// Compte à rebours vers le 12 juin 2026 à 00:00
const target = new Date('2026-06-12T00:00:00');

function update() {
  const now  = new Date();
  const diff = target - now;

  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML =
      '<p style="font-family:Cormorant Garamond,serif;font-size:2rem;font-style:italic;">C\'est le grand jour ! 🎉</p>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent    = String(days).padStart(2, '0');
  document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

update();
setInterval(update, 1000);

// Upload photo
const input    = document.getElementById('photoUpload');
const preview  = document.getElementById('uploadedPhoto');
const label    = document.querySelector('.upload-label');

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  preview.src = url;
  preview.style.display = 'block';
  label.style.display   = 'none';
});
