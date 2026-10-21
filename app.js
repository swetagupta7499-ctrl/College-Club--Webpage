// Function to show popup modal with club details when a club card is clicked
function showClub(clubName) {
    var title = document.getElementById("club-title");
    var desc = document.getElementById("club-description");
    var activities = document.getElementById("club-activities");
    var popup = document.getElementById("popup-box");

    if (clubName === "ai") {
        title.innerText = "🤖 AI Club";
        desc.innerText = "The AI Club explores Artificial Intelligence, Machine Learning, Data Science, and Python programming to build smart models.";
        activities.innerText = "Key Activities: Python & ML Workshops, AI Chatbot Projects, and Kaggle Competitions.";
    } 
    else if (clubName === "music") {
        title.innerText = "🎸 Music Club";
        desc.innerText = "The Music Club brings together singers and instrumentalists across campus for acoustic nights and band performances.";
        activities.innerText = "Key Activities: Weekly Jamming Sessions, Vocal & Instrument Training, and College Fest Concerts.";
    } 
    else if (clubName === "drama") {
        title.innerText = "🎭 Drama Club";
        desc.innerText = "The Drama Club is the hub of theater arts, stage acting, street plays (Nukkad Natak), and scriptwriting.";
        activities.innerText = "Key Activities: Stage Plays, Street Plays for Social Awareness, and Acting Workshops.";
    } 
    else if (clubName === "sports") {
        title.innerText = "⚽ Sports Club";
        desc.innerText = "The Sports Club promotes physical fitness, teamwork, and represents our college in inter-university tournaments.";
        activities.innerText = "Key Activities: Cricket, Football, Basketball, Badminton, Chess, and Daily Fitness Training.";
    } 
    else if (clubName === "debate") {
        title.innerText = "🎙️ Debate Club";
        desc.innerText = "The Debate Club helps students build public speaking confidence, logical thinking, and leadership skills.";
        activities.innerText = "Key Activities: Parliamentary Debates, Model United Nations (MUN), and Group Discussions.";
    } 
    else if (clubName === "art") {
        title.innerText = "🎨 Art & Craft Club";
        desc.innerText = "The Art & Craft Club celebrates visual creativity through painting, sketching, origami, and DIY campus crafts.";
        activities.innerText = "Key Activities: Canvas Painting, Sketching Workshops, DIY Crafts, and Annual Art Exhibitions.";
    }

    // Show the popup box
    popup.style.display = "flex";
}

// Function to close the popup modal
function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}