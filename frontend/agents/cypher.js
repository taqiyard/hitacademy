// Data skill Cypher
const skills = {
    'C': {
        title: 'Trapwire',
        desc: 'Memasang jebakan untuk mendeteksi musuh.',
        video: '../videos/cypher_c.mp4'
    },
    'Q': {
        title: 'Cyber Cage',
        desc: 'Menghambat musuh dengan smoke yang bisa dipicu.',
        video: '../videos/cypher_q.mp4'
    },
    'E': {
        title: 'Spycam',
        desc: 'Kamera tersembunyi untuk melihat pergerakan lawan.',
        video: '../videos/cypher_e.mp4'
    },
    'X': {
        title: 'Neural Theft',
        desc: 'Mengambil informasi lokasi musuh yang sudah mati.',
        video: '../videos/cypher_x.mp4'
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