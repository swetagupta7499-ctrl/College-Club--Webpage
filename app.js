// Function to show detailed popup modal when a club card is clicked
function showClub(clubName) {
    var tag = document.getElementById("club-tag");
    var title = document.getElementById("club-title");
    var desc = document.getElementById("club-description");
    var schedule = document.getElementById("club-schedule");
    var activities = document.getElementById("club-activities");
    var popup = document.getElementById("popup-box");

    if (clubName === "ai") {
        tag.innerText = "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING";
        title.innerText = "🤖 AI Club";
        desc.innerText = "The AI Club is dedicated to exploring Artificial Intelligence, Machine Learning, Deep Learning, Linear Algebra for Data Science, and Generative AI. Students work together on real datasets, build intelligent web apps, and publish research projects.";
        schedule.innerText = "📅 Weekly Meet: Every Wednesday @ 4:30 PM | 📍 Venue: AI & Data Science Lab | 👨‍🏫 Coordinator: Aryan Gupta";
        activities.innerText = "✔ Hands-on Python, Pandas, Scikit-Learn & Neural Network Bootcamps\n✔ Building AI Chatbots, Image Recognition & Smart Campus Tools\n✔ Kaggle Data Science Competitions & AI Hackathon Mentorship\n✔ Beginner-friendly sessions—no prior AI experience required!";
    } 
    else if (clubName === "music") {
        tag.innerText = "VOCALS, INSTRUMENTS & LIVE BAND";
        title.innerText = "🎸 Music Club";
        desc.innerText = "The Music Club is the soulful heart of our campus, bringing together vocalists, guitarists, keyboard players, drummers, and music composers. Whether you sing classical melodies, Bollywood hits, or rock anthems, this is your stage.";
        schedule.innerText = "📅 Weekly Meet: Every Saturday @ 3:00 PM | 📍 Venue: Music & Jamming Room (SAC) | 👨‍🏫 Coordinator: Rohan Mehta";
        activities.innerText = "✔ Weekly Acoustic Jamming Sessions & Open Mic Evenings\n✔ Peer Training in Guitar, Keyboard, Drums, Harmonium & Vocals\n✔ Live Band Performances at Annual College Cultural Fests\n✔ Audio Recording, Music Production & Songwriting Collaborations";
    } 
    else if (clubName === "drama") {
        tag.innerText = "THEATER ARTS, ACTING & SCRIPTWRITING";
        title.innerText = "🎭 Drama Club";
        desc.innerText = "The Drama Club is the powerhouse of expressive storytelling and performing arts. From high-energy Nukkad Natak (street plays) on social causes to full-length auditorium stage plays, mime, and improv comedy, we train students to command the stage.";
        schedule.innerText = "📅 Weekly Meet: Every Thursday @ 5:00 PM | 📍 Venue: Main Auditorium Hall | 👨‍🏫 Coordinator: Priya Verma";
        activities.innerText = "✔ Full-Length Stage Plays & Nukkad Natak (Street Play) Productions\n✔ Acting, Facial Expression, Voice Modulation & Stage Confidence Labs\n✔ Scriptwriting, Stage Direction, Lighting & Sound Management\n✔ Representing the University at National Cultural Festivals";
    } 
    else if (clubName === "sports") {
        tag.innerText = "ATHLETICS, FITNESS & TOURNAMENTS";
        title.innerText = "⚽ Sports Club";
        desc.innerText = "The Sports Club promotes physical fitness, endurance, discipline, and team spirit across campus. We provide regular training and equipment for both outdoor field games and indoor strategy sports, preparing teams for inter-university championships.";
        schedule.innerText = "📅 Practice: Daily @ 5:30 PM | 📍 Venue: College Sports Complex & Courts | 👨‍🏫 Coordinator: Rohit Singh";
        activities.innerText = "✔ Outdoor Sports: Cricket, Football, Basketball, Volleyball & Athletics\n✔ Indoor Sports: Badminton, Table Tennis, Carrom & Chess Leagues\n✔ Annual Intra-College Sports Meet & Inter-University Tournaments\n✔ Morning Fitness, Stretching & Stamina Conditioning Sessions";
    } 
    else if (clubName === "debate") {
        tag.innerText = "ORATORY, CRITICAL THINKING & MUN";
        title.innerText = "🎙️ Debate Club";
        desc.innerText = "The Debate Club empowers thinkers, speakers, and future leaders. We help students overcome stage fear, structure logical arguments, discuss current global and technological affairs, and excel in interviews and public speaking.";
        schedule.innerText = "📅 Weekly Meet: Every Tuesday @ 4:00 PM | 📍 Venue: Seminar Hall 2 | 👨‍🏫 Coordinator: Ananya Sharma";
        activities.innerText = "✔ Asian & British Parliamentary Debate Practice Sessions\n✔ Annual Sitare Model United Nations (MUN) & Youth Parliament\n✔ Extempore Speaking, Elocution & Placement Group Discussions (GD)\n✔ Anchoring, Hosting & Public Communication Workshops";
    } 
    else if (clubName === "art") {
        tag.innerText = "FINE ARTS, PAINTING & CREATIVE DESIGN";
        title.innerText = "🎨 Art & Craft Club";
        desc.innerText = "The Art & Craft Club is our vibrant campus creative studio. We welcome everyone who loves colors, sketching, painting, origami, paper crafts, clay modeling, and transforming the college campus with artistic murals and backdrops during festivals.";
        schedule.innerText = "📅 Weekly Meet: Every Saturday @ 2:00 PM | 📍 Venue: Creative Studio (Ground Floor) | 👨‍🏫 Coordinator: Sneha Kapoor";
        activities.innerText = "✔ Pencil Sketching, Acrylic, Watercolor & Canvas Painting Workshops\n✔ Origami, DIY Paper Crafts, Pottery & Best-Out-Of-Waste Creations\n✔ Calligraphy, Poster Making, Rangoli & Digital Illustration\n✔ Annual Campus Art Exhibition & Cultural Fest Stage Designing";
    }

    // Display the modal box
    popup.style.display = "flex";
}

// Function to close the popup modal
function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}

// Close the popup if the user clicks outside the modal box
window.onclick = function(event) {
    var popup = document.getElementById("popup-box");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};