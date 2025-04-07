// Data skill Brimstone
const skills = {
    'C': {
        title: 'Incendiary',
        desc: 'Menembakkan granat api yang membakar area dan mencegah musuh masuk atau bertahan di tempat tertentu.',
        video: '../videos/brimstone_c.mp4'
    },
    'Q': {
        title: 'Stim Beacon',
        desc: 'Menjatuhkan suar yang memberi kecepatan tembak tambahan untuk rekan satu tim di area efek.',
        video: '../videos/brimstone_q.mp4'
    },
    'E': {
        title: 'Sky Smoke',
        desc: 'Menandai area untuk menjatuhkan asap tebal yang memblokir penglihatan musuh.',
        video: '../videos/brimstone_e.mp4'
    },
    'X': {
        title: 'Orbital Strike',
        desc: 'Memanggil serangan laser dari langit yang memberikan damage besar di area target.',
        video: '../videos/brimstone_x.mp4'
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