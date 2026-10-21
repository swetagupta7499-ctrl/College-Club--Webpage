/* ==========================================================
   Function: showClub(clubName)
   Purpose: Dynamically populates and displays the modal popup 
   with detailed descriptions, schedules, and activities when 
   a specific club card is clicked on club.html.
   ========================================================== */
function showClub(clubName) {
    var tag = document.getElementById("club-tag");
    var title = document.getElementById("club-title");
    var desc = document.getElementById("club-description");
    var schedule = document.getElementById("club-schedule");
    var activities = document.getElementById("club-activities");
    var popup = document.getElementById("popup-box");

    // Conditional statements to assign rich content based on clicked club
    if (clubName === "music") {
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

    // Make the modal visible by setting display flex
    popup.style.display = "flex";
}

/* ==========================================================
   Function: closePopup()
   Purpose: Hides the modal popup box when the close button is clicked.
   ========================================================== */
function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}

/* ==========================================================
   Window Event: Click outside modal to close
   Purpose: Automatically closes the popup if the user clicks 
   on the dark backdrop outside the modal card.
   ========================================================== */
window.onclick = function(event) {
    var popup = document.getElementById("popup-box");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};