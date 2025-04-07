// Data skill Sova
const skills = {
    'C': {
        title: 'Owl Drone',
        desc: 'Mengeluarkan drone terbang yang dapat dikendalikan untuk menandai musuh dengan dart.',
        video: '../videos/sova_c.mp4'
    },
    'Q': {
        title: 'Shock Bolt',
        desc: 'Menembakkan panah listrik yang meledak saat terkena permukaan, memberikan damage ke musuh di area.',
        video: '../videos/sova_q.mp4'
    },
    'E': {
        title: 'Recon Bolt',
        desc: 'Menembakkan panah pengintai yang mengungkap posisi musuh di area deteksinya beberapa kali.',
        video: '../videos/sova_e.mp4'
    },
    'X': {
        title: 'Hunter’s Fury',
        desc: 'Menembakkan hingga tiga ledakan energi global lurus yang bisa menembus tembok dan memberikan damage serta reveal musuh.',
        video: '../videos/sova_x.mp4'
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