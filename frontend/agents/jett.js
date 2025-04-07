// Data skill Jett
const skills = {
    'C': {
        title: 'Cloudburst',
        desc: 'Lemparkan smoke yang meledak saat terkena permukaan, menutupi pandangan lawan dan memudahkan entry atau escape.',
        video: '../videos/jett_c.mp4'
    },
    'Q': {
        title: 'Updraft',
        desc: 'Meluncur ke udara dengan cepat, memungkinkan Jett mengakses area tinggi atau menghindari tembakan.',
        video: '../videos/jett_q.mp4'
    },
    'E': {
        title: 'Tailwind',
        desc: 'Dash ke arah gerakan saat ini, sangat berguna untuk reposition cepat setelah duel atau entry.',
        video: '../videos/jett_e.mp4'
    },
    'X': {
        title: 'Blade Storm',
        desc: 'Aktifkan pisau lempar yang sangat akurat dan mematikan. Mengisi ulang saat mendapatkan kill.',
        video: '../videos/jett_x.mp4'
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