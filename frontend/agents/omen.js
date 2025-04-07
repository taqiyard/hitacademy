// Data skill Omen
const skills = {
    'C': {
        title: 'Shrouded Step',
        desc: 'Teleportasi jarak pendek ke lokasi yang terlihat. Cocok untuk reposition mendadak atau mengecoh musuh.',
        video: '../videos/omen_c.mp4'
    },
    'Q': {
        title: 'Paranoia',
        desc: 'Melempar proyektil bayangan ke depan yang menembus dinding dan membutakan semua musuh yang terkena.',
        video: '../videos/omen_q.mp4'
    },
    'E': {
        title: 'Dark Cover',
        desc: 'Lemparkan orb asap dengan kontrol jarak dan tinggi, menciptakan area gelap yang menghalangi pandangan.',
        video: '../videos/omen_e.mp4'
    },
    'X': {
        title: 'From the Shadows',
        desc: 'Teleportasi ke lokasi mana pun di map. Jika terbunuh selama channeling, Omen kembali ke tempat semula.',
        video: '../videos/omen_x.mp4'
    }
};

// Fungsi untuk mengganti konten skill
function changeSkill(skill) {
    document.getElementById('skill-name').innerText = skills[skill].title;
    document.getElementById('skill-desc').innerText = skills[skill].desc;

    let videoElement = document.getElementById('skill-video');
    videoElement.src = skills[skill].video;
    videoElement.load(); // Pastikan video di-refresh
}