window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.padding = "10px 0"; 
    navbar.style.backgroundColor = "rgba(152, 115, 172, 0.8)"; 
    document.getElementById("logo").style.fontSize = "25px"; 
  } else {
    navbar.style.padding = "20px 0"; 
    navbar.style.backgroundColor = "#9873AC"; 
    document.getElementById("logo").style.fontSize = "35px"; 
  }
}
function loadClubs() {
    return fetch('/data/clubs/clubs.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch clubs data');
        }
        return response.json();
      })
      .then(data => {
        return data.clubs;
      })
      .catch(error => {
        console.error('Error loading clubs:', error);
        return [];
      });
  }
  

  function renderClubs(clubs) {
    const container = document.getElementById('clubsContainer');
    clubs.forEach(club => {
        const tile = document.createElement('div');
        tile.className = 'club-tile';
        tile.innerHTML = `
            <h2>${club.name}</h2>
            <p><strong>Social:</strong> ${club.social}/10</p>
            <p><strong>Major:</strong> ${Array.isArray(club.major) ? club.major.join(', ') : club.major}</p>
            <p><strong>Time Commitment:</strong> ${club.timeCommitment}/10</p>
            <p><strong>Gender:</strong> ${club.gender}</p>
            <p><strong>Ethnicity:</strong> ${club.ethnicity}</p>
            <p><strong>Size:</strong> ${club.size} members</p>
            <p><strong>Meeting Frequency:</strong> ${club.meetingFrequency}</p>
            <p><strong>Focus:</strong> ${club.focus}</p>
            <p><strong>Founded:</strong> ${club.yearFounded}</p>
        `;
        container.appendChild(tile);
    });
}

function findClub(social, timeCommitment, major, meetingFrequency, gender, ethnicity, focus) {
    return loadClubs()
        .then(clubs => {
                let matchingClubs = [];
                for (let i = 0; i < clubs.length; i++) {
                    let club = clubs[i];
                    if (
                        club.social >= social &&
                        club.timeCommitment <= timeCommitment &&
                        (major === "Any" || (Array.isArray(club.major) ? club.major.includes(major) : club.major === major)) &&
                        club.meetingFrequency.toLowerCase() === meetingFrequency.toLowerCase() &&
                        (gender === "All" || club.gender === gender) &&
                        (ethnicity === "All" || club.ethnicity === ethnicity) &&
                        club.focus.toLowerCase() === focus.toLowerCase()
                    ) {
                        matchingClubs.push(club);
                    }
                }
    
                if (matchingClubs.length > 0) {
                    // Return a random club from the matching clubs
                    return matchingClubs[Math.floor(Math.random() * matchingClubs.length)];
                } else {
                    return null; // No matching club found
                }
            });

}

