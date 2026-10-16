// Detailed descriptions for AI, Music, Drama, Sports, Debate, and Art & Craft Clubs
const clubData = {
    ai: {
        tag: "ARTIFICIAL INTELLIGENCE & ML",
        title: "🤖 AI Club",
        desc: "The AI Club explores the cutting-edge world of Artificial Intelligence, Machine Learning, Linear Algebra for Data Science, and Generative AI. Students collaborate on smart automation projects and research.",
        highlights: [
            "🧠 Hands-on Python, Machine Learning & Neural Network Workshops",
            "🤖 Building AI Chatbots, Computer Vision & Smart Prototypes",
            "📊 Kaggle Competitions & AI Hackathon Mentorship"
        ]
    },
    music: {
        tag: "VOCALS, INSTRUMENTS & BAND",
        title: "🎸 Music Club",
        desc: "The Music Club brings together singers, instrumentalists, and music producers across campus. From classical melodies to rock bands and acoustic jamming nights, we create magic through sound.",
        highlights: [
            "🎤 Weekly Acoustic Jamming & Open Mic Evenings",
            "🎹 Guitar, Keyboard, Drums & Vocal Training Sessions",
            "🎶 Live Band Performances at Annual College Festivals"
        ]
    },
    drama: {
        tag: "THEATER, ACTING & SCRIPT",
        title: "🎭 Drama Club",
        desc: "The Drama Club is the powerhouse of storytelling and expressive arts. Whether you love stage acting, street plays for social awareness, direction, or scriptwriting, the stage is yours!",
        highlights: [
            "🎬 Street Plays & Full-Length Stage Theater Productions",
            "✍️ Scriptwriting, Voice Modulation & Acting Improv Workshops",
            "🏆 Participation in Inter-University Cultural Festivals"
        ]
    },
    sports: {
        tag: "ATHLETICS & TEAM SPIRIT",
        title: "⚽ Sports Club",
        desc: "Stay fit, build discipline, and represent our college at state and national tournaments. Whether you play outdoor field games or indoor strategy games, there is a team waiting for you.",
        highlights: [
            "🏅 Inter-College Cricket, Football, Volleyball & Basketball Leagues",
            "♟️ Indoor Chess, Table Tennis & Badminton Championships",
            "💪 Daily Evening Practice & Fitness Conditioning"
        ]
    },
    debate: {
        tag: "ORATORY, LOGIC & MUN",
        title: "🎙️ Debate Club",
        desc: "The Debate Club is a platform for thinkers, speakers, and leaders. We host parliamentary debates, Youth Parliaments, Model United Nations (MUN), extempore speeches, and group discussions on global issues.",
        highlights: [
            "🗣️ Weekly British & Asian Parliamentary Debate Sessions",
            "🌍 Annual College Model United Nations (MUN) Conference",
            "🏆 Public Speaking, Pitching & Interview Communication Workshops"
        ]
    },
    art: {
        tag: "FINE ARTS, DIY & DESIGN",
        title: "🎨 Art & Craft Club",
        desc: "The Art & Craft Club is our campus creative studio. We celebrate visual expression through sketching, acrylic & watercolor painting, calligraphy, origami, clay modeling, and campus fest decorations.",
        highlights: [
            "🖌️ Canvas Painting, Sketching & Digital Illustration Workshops",
            "🏮 DIY Craft, Origami, Pottery & Eco-Friendly Art Sessions",
            "🖼️ Annual Campus Art Exhibition & Fest Backdrop Designing"
        ]
    }
};

function openClubModal(key) {
    const modal = document.getElementById('club-modal');
    if (!modal) return;

    const data = clubData[key];
    if (data) {
        document.getElementById('modal-tag').innerText = data.tag;
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-highlights').innerHTML = data.highlights
            .map(item => `<div class="highlight-item">${item}</div>`)
            .join('');
        modal.style.display = 'flex';
    }
}

function closeClubModal() {
    const modal = document.getElementById('club-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside the modal box
window.addEventListener('click', function(event) {
    const modal = document.getElementById('club-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});