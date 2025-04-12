const fromText = document.querySelector(".from-text"),
  toText = document.querySelector(".to-text"),
  exchangeIcon = document.querySelector(".exchange"),
  selectTag = document.querySelectorAll("select"),
  icons = document.querySelectorAll(".row i"),
  translateBtn= document.querySelector("button");
selectTag.forEach((tag, id) => {
  for (let country_code in countries) {
    let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "ur-PK" ? "selected" : "" ;
    let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});
exchangeIcon.addEventListener("click", () => {
	let tempText = fromText.value,
		tempLang = selectTag[0].value;
	fromText.value = toText.value;
	toText.value = tempText;
	selectTag[0].value = selectTag[1].value;
	selectTag[1].value = tempLang;
});
fromText.addEventListener("keyup", () => {
	if (!fromText.value) {
		toText.value = "";
	}
});

translateBtn.addEventListener("click", () => {
	let text = fromText.value.trim(),
		translateFrom = selectTag[0].value,
		translateTo = selectTag[1].value;
	if (!text) return;
	toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
	fetch(apiUrl).then(res => res.json()).then(data => {
		toText.value = data.responseData.translatedText;
		data.matches.forEach(data => {
			if (data.id === 0) {
				toText.value = data.translation;
			}
		});
		toText.setAttribute("placeholder", "Translation");
	});
});
icons.forEach(icon => {
	icon.addEventListener("click", ({ target }) => {
		if (!fromText.value || !toText.value) return;
		if (target.classList.contains("fa-copy")) {
			if (target.id == "from") {
				navigator.clipboard.writeText(fromText.value);
			} else {
				navigator.clipboard.writeText(toText.value);
			}
		} else {
			let utterance;
			if (target.id == "from") {
				utterance = new SpeechSynthesisUtterance(fromText.value);
				utterance.lang = selectTag[0].value;
			} else {
				utterance = new SpeechSynthesisUtterance(toText.value);
				utterance.lang = selectTag[1].value;
			}
			speechSynthesis.speak(utterance);
		}
	});
});
document.addEventListener("DOMContentLoaded", function() {
    const developerCard = document.getElementById("developer-card");
  
    // Developer GitHub usernames
    const developers = [
      { username: "amanxsyed"},
      { username: "umarabdullah-991" }
    ];
  
    // Fetch GitHub data for each developer
    developers.forEach((developer, index) => {
      fetch(`https://api.github.com/users/${developer.username}`)
        .then(response => response.json())
        .then(data => {
          document.getElementById(`developer-${index + 1}-photo`).src = data.avatar_url;
          document.getElementById(`developer-${index + 1}-link`).href = data.html_url;
          document.getElementById(`developer-${index + 1}-link`).textContent = `${data.name || developer.username}`;
        })
        .catch(error => console.error('Error fetching GitHub data:', error));
    });
  
    // Show the card after 1 second
    setTimeout(function() {
      developerCard.classList.add("visible");
      
      // Hide the card after 5 seconds
      setTimeout(function() {
        developerCard.classList.remove("visible");
      }, 5000);
    }, 1000); // 1 second delay before showing the card
  });
  
  