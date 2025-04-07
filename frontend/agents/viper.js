const skills = {
    'C': {
        title: 'Snake Bite',
        desc: 'Menembakkan proyektil beracun yang menciptakan zona beracun.',
        video: '../videos/viper_c.mp4'
    },
    'Q': {
        title: 'Poison Cloud',
        desc: 'Melemparkan granat gas yang dapat diaktifkan untuk membuat asap beracun.',
        video: '../videos/viper_q.mp4'
    },
    'E': {
        title: 'Toxic Screen',
        desc: 'Melepaskan dinding gas beracun yang bisa diaktifkan ulang.',
        video: '../videos/viper_e.mp4'
    },
    'X': {
        title: 'Viper’s Pit',
        desc: 'Menciptakan area besar yang penuh gas beracun, mengurangi visibilitas dan HP musuh.',
        video: '../videos/viper_x.mp4'
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