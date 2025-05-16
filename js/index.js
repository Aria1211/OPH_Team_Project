document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.getElementById("conanCarousel");
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    pause: false,
  });

  carouselElement.addEventListener("mouseenter", () => {
    carousel.pause();
  });
  carouselElement.addEventListener("mouseleave", () => {
    carousel.cycle();
  });

  const cards = document.querySelectorAll(".character-card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      this.classList.toggle("is-flipped");
    });
  });
});

const movies = [
  {
    id: 28,
    title: "Detective Conan: One-eyed Flashback",
    image: "assets/Movies/m28.webp",
    shortDescription: "Release date: April 18, 2025",
    mainCharacter: "Main character(s): Kogoro Mori",
    fullDescription:
      "The 28th Detective Conan film features familiar characters and new elements. It explores the connection between a past case and the present, with the Black Organization continuing to play a significant role. The story weaves together elements of espionage, danger, and mystery, pushing Conan to uncover hidden truths and confront powerful adversaries.",
  },
  {
    id: 27,
    title: "Detective Conan: The Million-dollar Pentagram",
    image: "assets/Movies/m27.webp",
    shortDescription: "Release date: April 12, 2024",
    mainCharacter: "Main character(s): Kaito Kid",
    fullDescription:
      "The film revolves around a precious diamond known as the 'Million-dollar Pentagram.' When a series of thefts and murders occur in connection with the diamond, Conan must use his deductive skills to solve the case. Along the way, he encounters Kaito Kid, who also has his sights set on the diamond. The investigation becomes more complicated as it's revealed that the diamond is linked to a past incident involving the Black Organization.",
  },
  {
    id: 26,
    title: "Detective Conan: Black Iron Submarine",
    image: "assets/Movies/m26.jpg",
    shortDescription: "Release date: April 14, 2023",
    mainCharacter: "Main character(s): Ai Haibara",
    fullDescription:
      "The story begins with a confrontation between the Black Organization and a mysterious submarine. As the investigation unfolds, Conan discovers that the submarine is connected to a past case involving the FBI. He must work with Shuichi Akai and others to uncover the truth and prevent a potential disaster. Along the way, he faces off against Kaito Kid, who has his own agenda.",
  },
  {
    id: 25,
    title: "Detective Conan: The Bride of Halloween",
    image: "assets/Movies/m25.jpg",
    shortDescription: "Release date: April 15, 2022",
    mainCharacter: "Main character(s): Shuichi Akai",
    fullDescription:
      "On Halloween night, a mysterious wedding ceremony is about to take place. When Conan and the Junior Detective League investigate a case related to the wedding, they uncover a conspiracy involving the Black Organization. As the investigation deepens, Conan faces unprecedented challenges, and the truth may be more dangerous than anyone imagined.",
  },
  {
    id: 24,
    title: "Detective Conan: The Scarlet Bullet",
    image: "assets/Movies/m24.jpg",
    shortDescription: "Release date: April 16, 2021",
    mainCharacter: "Main character(s): Shuichi Akai",
    fullDescription:
      "During the Tokyo Olympics, a meticulously planned crime is taking place. When an important figure is murdered and evidence points to an unlikely suspect, Conan must race against time to uncover the truth. In this process, he collaborates with FBI agent Shuichi Akai to combat a dangerous criminal organization.",
  },
  {
    id: 23,
    title: "Detective Conan: The Fist of Blue Sapphire",
    image: "assets/Movies/m23.jpg",
    shortDescription: "Release date: April 12, 2019",
    mainCharacter: "Main character(s): Kaito Kid",
    fullDescription:
      "In Singapore, a world-class karate tournament is about to begin. When Conan and the Junior Detective League are invited to the competition, they discover a greater conspiracy lurking in the shadows. As the tournament progresses, a plan involving an international criminal organization gradually comes to light, and Conan must race against time in this unfamiliar city to prevent a crime that could cause massive destruction.",
  },
  {
    id: 22,
    title: "Detective Conan: Zero the Enforcer",
    image: "assets/Movies/m22.jpg",
    shortDescription: "Release date: April 13, 2018",
    mainCharacter: "Main character(s): Shuichi Akai",
    fullDescription:
      "A mysterious explosion at a police facility sets off a chain of events that leads to a complex investigation. Rei Furuya, also known as Bourbon, finds himself at the center of the case. As Conan and the police work to uncover the truth, they discover that the incident may be connected to a larger conspiracy involving the Black Organization.",
  },
  {
    id: 21,
    title: "Detective Conan: Crimson Love Letter",
    image: "assets/Movies/m21.webp",
    shortDescription: "Release date: April 15, 2017",
    mainCharacter: "Main character(s): Heiji Hattori, Kazuha Toyama",
    fullDescription:
      "During a high school karate tournament in Kyoto, a love letter becomes the key to solving a murder case. Conan and Heiji Hattori must work together to unravel the mystery while dealing with their own complicated relationships. The case takes an unexpected turn when it's revealed that the incident may be connected to a famous historical figure.",
  },
  {
    id: 20,
    title: "Detective Conan: The Darkest Nightmare",
    image: "assets/Movies/m20.webp",
    shortDescription: "Release date: April 16, 2016",
    mainCharacter: "Main character(s): Gin, Vermouth",
    fullDescription:
      "A mysterious organization's plan threatens to expose the identities of those who have been living in hiding. Conan and his allies must work together to prevent a massive data breach that could reveal the true identities of undercover agents and those who have been transformed by the APTX-4869 drug. The stakes are higher than ever as the Black Organization's true intentions come to light.",
  },
  {
    id: 19,
    title: "Detective Conan: Sunflowers of Inferno",
    image: "assets/Movies/m19.jpg",
    shortDescription: "Release date: April 18, 2015",
    mainCharacter: "Main character(s): Kaito Kid",
    fullDescription:
      "When a case involving Vincent van Gogh's Sunflowers comes to light, Conan finds himself in the middle of a dangerous treasure hunt. The investigation takes him to various locations as he tries to solve the mystery behind the painting's connection to a series of crimes. Along the way, he must protect the painting from those who would use it for nefarious purposes.",
  },
  {
    id: 18,
    title: "Detective Conan: Dimensional Sniper",
    image: "assets/Movies/m18.jpg",
    shortDescription: "Release date: April 19, 2014",
    mainCharacter: "Main character(s): Shuichi Akai, Mary Sera",
    fullDescription:
      "When a sniper's bullet is fired from an impossible angle, Conan must use all his deductive skills to solve the case. The investigation becomes more complicated when it's revealed that the sniper may be connected to a past case that involved the FBI. As the truth unfolds, Conan must protect those around him while trying to prevent further incidents.",
  },
  {
    id: 17,
    title: "Detective Conan: Private Eye in the Distant Sea",
    image: "assets/Movies/m17.jpg",
    shortDescription: "Release date: April 20, 2013",
    mainCharacter: "Main character(s): Kogoro Mori, Ran Mori",
    fullDescription:
      "On a luxury cruise ship, a private detective's investigation leads to a series of mysterious events. Conan must navigate through the complex relationships between the passengers while trying to solve the case. The situation becomes more dangerous when it's revealed that the ship's course has been altered, putting everyone on board at risk.",
  },
  {
    id: 16,
    title: "Detective Conan: The Eleventh Striker",
    image: "assets/Movies/m16.jpg",
    shortDescription: "Release date: April 18, 2012",
    mainCharacter: "Main character(s): The Junior Detective League",
    fullDescription:
      "During a major soccer match, a case involving explosives puts thousands of lives at risk. Conan must work with the police to prevent a disaster while trying to understand the motives behind the threat. The investigation becomes personal when it's revealed that the case may be connected to a past incident involving the soccer team.",
  },
  {
    id: 15,
    title: "Detective Conan: Quarter of Silence",
    image: "assets/Movies/m15.jpg",
    shortDescription: "Release date: April 16, 2011",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "When a deadly virus is released in Tokyo, Conan must race against time to find the antidote. The case becomes more complicated when it's revealed that the virus is connected to a music box and a tragic incident from the past. As the city faces a potential disaster, Conan must solve the mystery while protecting those he cares about.",
  },
  {
    id: 14,
    title: "Detective Conan: The Last Ship in the Sky",
    image: "assets/Movies/m14.jpg",
    shortDescription: "Release date: April 17, 2010",
    mainCharacter: "Main character(s): Kaito Kid",
    fullDescription:
      "On a luxury airship, a case involving a legendary treasure leads to a series of mysterious events. Conan must navigate through the complex relationships between the passengers while trying to solve the case. The situation becomes more dangerous when it's revealed that the airship's course has been altered, putting everyone on board at risk.",
  },
  {
    id: 13,
    title: "Detective Conan: The Raven Chaser",
    image: "assets/Movies/m13.jpg",
    shortDescription: "Release date: April 18, 2009",
    mainCharacter: "Main character: Gin",
    fullDescription:
      "When the Black Organization's activities in Tokyo come to light, Conan finds himself in the middle of a dangerous chase. The investigation becomes more complicated when it's revealed that the organization's plans may involve a massive terrorist attack. As the truth unfolds, Conan must protect those around him while trying to prevent the attack.",
  },
  {
    id: 12,
    title: "Detective Conan: Full Score of Fear",
    image: "assets/Movies/m12.jpg",
    shortDescription: "Release date: April 16, 2008",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "During a prestigious music competition, a series of mysterious incidents occur. Conan must use his deductive skills to solve the case while dealing with the complex relationships between the competitors. The investigation takes an unexpected turn when it's revealed that the incidents may be connected to a past tragedy.",
  },
  {
    id: 11,
    title: "Detective Conan: Jolly Roger in the Deep Azure",
    image: "assets/Movies/m11.jpg",
    shortDescription: "Release date: April 17, 2007",
    mainCharacter: "Main character(s): Ran Mori, Sonoko Suzuki",
    fullDescription:
      "When a treasure hunt in the ocean leads to a dangerous encounter with modern-day pirates, Conan must use all his skills to protect his friends and solve the mystery. The investigation becomes more complicated when it's revealed that the treasure may be connected to a historical figure and a series of unsolved crimes.",
  },
  {
    id: 10,
    title: "Detective Conan: The Private Eyes' Requiem",
    image: "assets/Movies/m10.jpg",
    shortDescription: "Release date: April 15, 2006",
    mainCharacter: "Main character: Heiji Hattori",
    fullDescription:
      "During a gathering of private detectives, a mysterious case unfolds that puts everyone's lives at risk. Conan must work with other detectives to solve the case while dealing with their conflicting methods and personalities. The investigation becomes more dangerous when it's revealed that the case may be connected to a past incident involving the police.",
  },
  {
    id: 9,
    title: "Detective Conan: Strategy Above the Depths",
    image: "assets/Movies/m9.jpg",
    shortDescription: "Release date: April 9, 2005",
    mainCharacter: "Main character(s): Kogoro Mori, Ran Mori",
    fullDescription:
      "On a luxury cruise ship, a case involving a mysterious organization leads to a series of dangerous events. Conan must navigate through the complex relationships between the passengers while trying to solve the case. The situation becomes more dangerous when it's revealed that the ship's course has been altered, putting everyone on board at risk.",
  },
  {
    id: 8,
    title: "Detective Conan: Countdown to Heaven",
    image: "assets/Movies/m8.jpg",
    shortDescription: "Release date: April 21, 2004",
    mainCharacter: "Main character(s): Kaito Kid",
    fullDescription:
      "When a mysterious countdown appears in a skyscraper, Conan must race against time to prevent a disaster. The investigation becomes more complicated when it's revealed that the countdown may be connected to a past incident involving the building's construction. As the truth unfolds, Conan must protect those around him while trying to stop the countdown.",
  },
  {
    id: 7,
    title: "Detective Conan: The Last Wizard of the Century",
    image: "assets/Movies/m7.jpg",
    shortDescription: "Release date: April 17, 2003",
    mainCharacter: "Main character(s): Heiji Hattori, Kazuha Toyama",
    fullDescription:
      "When a case involving a legendary magician and a mysterious treasure comes to light, Conan finds himself in the middle of a dangerous investigation. The case becomes more complicated when it's revealed that the treasure may be connected to a series of unsolved crimes. As the truth unfolds, Conan must protect those around him while trying to solve the mystery.",
  },
  {
    id: 6,
    title: "Detective Conan: The Fourteenth Target",
    image: "assets/Movies/m6.jpg",
    shortDescription: "Release date: April 18, 2002",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "When a series of targeted attacks occur, each marked with a mysterious number, Conan must solve the case before the next victim is chosen. The investigation becomes more personal when it's revealed that the attacks may be connected to a past incident involving the police. As the truth unfolds, Conan must protect those around him while trying to prevent further attacks.",
  },
  {
    id: 5,
    title: "Detective Conan: The Time Bombed Skyscraper",
    image: "assets/Movies/m5.jpg",
    shortDescription: "Release date: April 19, 2001",
    mainCharacter: "Main character: Ai Haibara",
    fullDescription:
      "When a series of mysterious bombings occur in a skyscraper, Conan must race against time to prevent a disaster. The investigation becomes more complicated when it's revealed that the bombings may be connected to a past incident involving the building's construction. As the truth unfolds, Conan must protect those around him while trying to stop the bombings.",
  },
  {
    id: 4,
    title: "Detective Conan: The Phantom of Baker Street",
    image: "assets/Movies/m4.jpg",
    shortDescription: "Release date: April 20, 2000",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "When a case involving a virtual reality game and a mysterious AI comes to light, Conan finds himself trapped in a dangerous game. The investigation becomes more complicated when it's revealed that the game may be connected to a series of real-world crimes. As the truth unfolds, Conan must solve the case while trying to escape the game.",
  },
  {
    id: 3,
    title: "Detective Conan: Captured in Her Eyes",
    image: "assets/Movies/m3.jpg",
    shortDescription: "Release date: April 22, 1999",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "When a police officer is involved in a mysterious shooting, Conan must solve the case while dealing with the complex relationships between the police and the victims. The investigation becomes more complicated when it's revealed that the shooting may be connected to a past incident. As the truth unfolds, Conan must protect those around him while trying to solve the mystery.",
  },
  {
    id: 2,
    title: "Detective Conan: The Fourteenth Target",
    image: "assets/Movies/m2.jpg",
    shortDescription: "Release date: April 18, 1998",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "When a series of targeted attacks occur, each marked with a mysterious number, Conan must solve the case before the next victim is chosen. The investigation becomes more personal when it's revealed that the attacks may be connected to a past incident involving the police. As the truth unfolds, Conan must protect those around him while trying to prevent further attacks.",
  },
  {
    id: 1,
    title: "Detective Conan: The Time Bombed Skyscraper",
    image: "assets/Movies/m1.webp",
    shortDescription: "Release date: April 19, 1997",
    mainCharacter: "Main character: Ran Mori",
    fullDescription:
      "When a series of mysterious bombings occur in a skyscraper, Conan must race against time to prevent a disaster. The investigation becomes more complicated when it's revealed that the bombings may be connected to a past incident involving the building's construction. As the truth unfolds, Conan must protect those around him while trying to stop the bombings.",
  },
];

function renderMovies(moviesToRender = movies) {
  const movieList = document.getElementById("movieList");
  movieList.innerHTML = "";

  moviesToRender.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
      <div class="movie-content">
        <img src="${movie.image}" alt="${movie.title}" class="movie-image">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p class="movie-description">${movie.shortDescription}<br>${movie.mainCharacter}</p>
        </div>
        <div class="movie-details">
          <h3>${movie.title}</h3>
          <p>${movie.fullDescription}</p>
        </div>
      </div>
    `;

    movieCard.addEventListener("click", () => {
      movieCard.classList.toggle("show-details");
    });

    movieList.appendChild(movieCard);
  });
}

function setupSearch() {
  const searchInput = document.getElementById("movieSearch");

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredMovies = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.shortDescription.toLowerCase().includes(searchTerm) ||
        movie.mainCharacter.toLowerCase().includes(searchTerm)
    );

    renderMovies(filteredMovies);
  });
}

function setupMovieScroll() {
  const movieList = document.getElementById("movieList");
  const scrollAmount = 300;

  const leftArrow = document.createElement("button");
  const rightArrow = document.createElement("button");

  leftArrow.className = "movie-scroll-btn movie-scroll-left";
  rightArrow.className = "movie-scroll-btn movie-scroll-right";

  leftArrow.innerHTML = "❮";
  rightArrow.innerHTML = "❯";

  const movieContainer = document.querySelector(".movie-container");
  movieContainer.appendChild(leftArrow);
  movieContainer.appendChild(rightArrow);

  leftArrow.addEventListener("click", () => {
    movieList.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  rightArrow.addEventListener("click", () => {
    movieList.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  movieList.addEventListener("scroll", () => {
    leftArrow.style.opacity = movieList.scrollLeft > 0 ? "1" : "0";

    const maxScroll = movieList.scrollWidth - movieList.clientWidth;
    rightArrow.style.opacity = movieList.scrollLeft < maxScroll ? "1" : "0";
  });

  leftArrow.style.opacity = "0";
}

document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  setupSearch();
  setupMovieScroll();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const genderInputs = form.querySelectorAll('input[name="gender"]');
  const genderError = document.getElementById("genderError");

  form.querySelectorAll(".form-control").forEach((input) => {
    input.addEventListener("focus", function () {
      this.classList.add("input-focus");
    });
    input.addEventListener("blur", function () {
      this.classList.remove("input-focus");
    });
  });

  genderInputs.forEach((input) => {
    input.addEventListener("change", function () {
      genderError.style.display = "none";
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = form.elements["name"];
    const nameEmptyError = document.getElementById("nameEmptyError");
    const nameInvalidError = document.getElementById("nameInvalidError");
    const nameValue = name?.value.trim();

    nameEmptyError.style.display = "none";
    nameInvalidError.style.display = "none";

    if (!nameValue) {
      name.classList.add("is-invalid");
      nameEmptyError.style.display = "block";
      valid = false;
    } else if (!/^[A-Za-z_]+$/.test(nameValue)) {
      name.classList.add("is-invalid");
      nameInvalidError.style.display = "block";
      valid = false;
    } else {
      name.classList.remove("is-invalid");
    }

    const age = form.age;
    if (!age.value || age.value < 1 || age.value > 120) {
      age.classList.add("is-invalid");
      valid = false;
    } else {
      age.classList.remove("is-invalid");
    }

    const dob = form.dob;
    if (!dob.value) {
      dob.classList.add("is-invalid");
      valid = false;
    } else {
      dob.classList.remove("is-invalid");
    }

    let genderChecked = false;
    genderInputs.forEach((input) => {
      if (input.checked) genderChecked = true;
    });
    if (!genderChecked) {
      genderError.style.display = "block";
      valid = false;
    } else {
      genderError.style.display = "none";
    }

    const email = form.email;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    const comments = form.comments;
    if (!comments.value.trim()) {
      comments.classList.add("is-invalid");
      valid = false;
    } else {
      comments.classList.remove("is-invalid");
    }

    if (valid) {
      alert("Registration successful!");
      form.reset();
      form
        .querySelectorAll(".is-invalid")
        .forEach((el) => el.classList.remove("is-invalid"));
    }
  });

  form.querySelectorAll(".form-control").forEach((input) => {
    input.addEventListener("input", function () {
      if (this.classList.contains("is-invalid")) {
        this.classList.remove("is-invalid");
      }
    });
  });
});

const { createApp } = Vue;

createApp({
  data() {
    return {
      traits: [
        { name: "Genius-Level Intelligent", matches: [0, 1, 5, 7] },
        { name: "Observant to Tiny Details", matches: [0, 1, 5, 7] },
        { name: "Playfully Mischievous", matches: [7, 8] },
        { name: "Cold but Protective", matches: [2, 4] },
        { name: "Romantic & Idealistic", matches: [3, 6] },
        { name: "Hot-Headed but Loyal", matches: [5, 6] },
        { name: "Sarcastic & Witty", matches: [2, 7] },
        { name: "Tech-Savvy Inventor", matches: [2] },
        { name: "Brave to a Fault", matches: [0, 1, 4, 5] },
        { name: "Master of Disguise", matches: [7, 8] },
        { name: "Justice-Driven", matches: [0, 1, 4] },
        { name: "Emotionally Reserved", matches: [2, 4] },
        { name: "Energetic & Cheerful", matches: [3] },
        { name: "Strategically Deceptive", matches: [7, 8] },
        { name: "Stubbornly Persistent", matches: [0, 1, 5] },
      ],
      characters: [
        {
          name: "Conan Edogawa",
          image: "assets/kenan/adace1504e4eddb48070450497fa44f.jpg",
          priority: 1,
        },
        {
          name: "Shinichi Kudo",
          image: "assets/kenan/9cd743f228b3d76dad051de05bacc28.jpg",
          priority: 2,
        },
        {
          name: "Ai Haibara",
          image: "assets/kenan/be28862629b848b1d9e50d63b85f154.jpg",
          priority: 3,
        },
        {
          name: "Ran Mouri",
          image: "assets/kenan/ce54202016706a8113bba42f08ba165.jpg",
          priority: 4,
        },
        {
          name: "Shuichi Akai",
          image: "assets/kenan/500141f080517f92b42c2d037798e9b.jpg",
          priority: 5,
        },
        {
          name: "Toru_Amuro",
          image: "assets/kenan/eb3f912b66f42a31a50bce86fd8fcad.jpg",
          priority: 6,
        },
        {
          name: "Heiji Hattori",
          image: "assets/kenan/e18aced39868be2609566cc6c40160a.jpg",
          priority: 7,
        },
        {
          name: "Kaito Kid",
          image: "assets/kenan/8cb8d8e8b1667406c5ec0b5193b5f67.jpg",
          priority: 8,
        },
      ],
      selectedTraits: [],
      maxSelections: 3,
      showResult: false,
      matchedCharacter: null,
      showTraits: false,
    };
  },
  methods: {
    toggleTrait(index) {
      const position = this.selectedTraits.indexOf(index);
      if (position === -1) {
        if (this.selectedTraits.length < this.maxSelections) {
          this.selectedTraits.push(index);
        } else {
          this.showToast("最多选择3个特征");
        }
      } else {
        this.selectedTraits.splice(position, 1);
      }

      if (this.showResult) {
        this.showResult = false;
        this.matchedCharacter = null;
      }
    },
    generatePriority() {
      if (this.selectedTraits.length === 0) {
        this.showToast("请至少选择1个特征");
        return;
      }

      const scores = this.characters.map((_, index) => ({
        index,
        score: this.selectedTraits.reduce(
          (acc, traitIndex) =>
            acc + (this.traits[traitIndex].matches.includes(index) ? 1 : 0),
          0
        ),
      }));

      const maxScore = Math.max(...scores.map((s) => s.score));
      const candidates = scores.filter((s) => s.score === maxScore);

      this.matchedCharacter = this.characters[candidates[0].index];

      this.showResult = true;
    },
    showToast(message) {
      const toast = document.createElement("div");
      toast.className = "toast-message";
      toast.textContent = message;

      document.body.appendChild(toast);

      setTimeout(() => {
        toast.classList.add("show");
      }, 100);

      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 3000);
    },
  },
}).mount("#app");

const merchandise = [
  {
    id: 1,
    name: "Kaitou Kid Badge Pin(Movie Limited)",
    price: 5,
    image: "assets/goods/g1.png",
  },
  {
    id: 2,
    name: "Shinichi Kudo Badge Pin",
    price: 5,
    image: "assets/goods/g2.png",
  },
  {
    id: 3,
    name: "Conan Edogawa Pin Badge",
    price: 5,
    image: "assets/goods/g3.png",
  },
  {
    id: 4,
    name: "Porcelain Mug(Movie Limited)",
    price: 10,
    image: "assets/goods/g4.png",
  },
  {
    id: 5,
    name: "Acrylic Charm(Movie Limited)",
    price: 7,
    image: "assets/goods/g5.png",
  },
  {
    id: 6,
    name: "Kaitou Kid Acrylic Charm",
    price: 8,
    image: "assets/goods/g6.png",
  },
  {
    id: 7,
    name: "Ai Haibara Acrylic Charm",
    price: 8,
    image: "assets/goods/g7.png",
  },
  {
    id: 8,
    name: "Ai Haibara Acrylic Charm",
    price: 8,
    image: "assets/goods/g8.png",
  },
  {
    id: 9,
    name: "Folder (Conan style)",
    price: 7,
    image: "assets/goods/g9.jpg",
  },
  {
    id: 10,
    name: "Folder (Ai style)",
    price: 7,
    image: "assets/goods/g10.jpg",
  },
  {
    id: 11,
    name: "Conan backpack",
    price: 20,
    image: "assets/goods/g11.jpg",
  },
  {
    id: 12,
    name: "Conan Charm",
    price: 10,
    image: "assets/goods/g12.jpg",
  },
    {
    id: 13,
    name: "Clay figurine (style 1)",
    price: 7,
    image: "assets/goods/g13.jpg",
  },
  {
    id: 14,
    name: "Clay figurine (style 2)",
    price: 7,
    image: "assets/goods/g14.jpg",
  },
  {
    id: 15,
    name: "Clay figurine (style 3)",
    price: 7,
    image: "assets/goods/g15.jpg",
  },
  {
    id: 16,
    name: "Clay figurine (style 4)",
    price: 7,
    image: "assets/goods/g16.jpg",
  },
  {
    id: 17,
    name: "2025 Tottori Limited Edition Plate",
    price: 10,
    image: "assets/goods/g17.jpg",
  },
  {
    id: 18,
    name: "2025 Tottori Limited Edition Pendant",
    price: 8,
    image: "assets/goods/g18.jpg",
  },
  {
    id: 19,
    name: "Conan Knitted Handbag (Style 1)",
    price: 8,
    image: "assets/goods/g19.jpg",
  },
  {
    id: 20,
    name: "Conan Knitted Handbag (Style 1)",
    price: 8,
    image: "assets/goods/g20.jpg",
  },
  {
    id: 21,
    name: "Concert Limited Badge (Zero)",
    price: 6,
    image: "assets/goods/g21.jpg",
  },
  {
    id: 22,
    name: "Concert Limited Badge (Ran)",
    price: 6,
    image: "assets/goods/g22.jpg",
  },
  {
    id: 23,
    name: "Concert Limited Badge (Ai)",
    price: 6,
    image: "assets/goods/g23.jpg",
  },
  {
    id: 24,
    name: "Concert Limited Badge (Kid)",
    price: 6,
    image: "assets/goods/g24.jpg",
  },
    {
    id: 25,
    name: "2025 Limited Edition Pendant(Kid)",
    price: 7,
    image: "assets/goods/g25.jpg",
  },
  {
    id: 26,
    name: "2025 Limited Edition Pendant(Conan)",
    price: 7,
    image: "assets/goods/g26.jpg",
  },
  {
    id: 27,
    name: "2025 Limited Edition Pendant(Ai)",
    price: 7,
    image: "assets/goods/g27.jpg",
  },
  {
    id: 28,
    name: "2025 Limited Knitted Bag",
    price: 9,
    image: "assets/goods/g28.jpg",
  },
];

function setupMerchSearch() {
  const searchInput = document.getElementById("merchSearch");

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredMerch =
      searchTerm === ""
        ? merchandise
        : merchandise.filter(
            (item) =>
              item.name.toLowerCase().includes(searchTerm) ||
              item.price.toString().includes(searchTerm)
          );

    initMerchGrid(filteredMerch);
  });
}

setupMerchSearch();

let cart = [];

const merchGrid = document.getElementById("merchGrid");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const orderTotal = document.getElementById("orderTotal");
const orderItems = document.getElementById("orderItems");
const cartButton = document.getElementById("cartButton");
const cartBadge = document.getElementById("cartBadge");

const merchListView = document.getElementById("merchList");
const cartView = document.getElementById("cartView");
const checkoutFormView = document.getElementById("checkoutForm");
const confirmationView = document.getElementById("confirmation");

document
  .getElementById("backToList")
  .addEventListener("click", () => showView("merchList"));
document
  .getElementById("backToCart")
  .addEventListener("click", () => showView("cartView"));
document.getElementById("backToStore").addEventListener("click", () => {
  cart = [];
  updateCart();
  showView("merchList");
});

cartButton.addEventListener("click", () => showView("cartView"));

document
  .getElementById("proceedToCheckout")
  .addEventListener("click", () => showView("checkoutForm"));

document.querySelectorAll('input[name="payment"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    const cardDetails = document.getElementById("cardDetails");
    cardDetails.classList.toggle("active", this.value === "credit");
  });
});

document
  .getElementById("checkoutFormElement")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      showView("confirmation");
      displayOrderSummary();
    }
  });

// function initMerchGrid() {
//   merchGrid.innerHTML = "";
//   merchandise.forEach((item) => {
//     const merchItem = document.createElement("div");
//     merchItem.className = "merch-item";
//     merchItem.innerHTML = `
//               <img src="${item.image}" alt="${item.name}">
//               <div class="info">
//                   <h3>${item.name}</h3>
//                   <div class="price">$${item.price.toFixed(2)}</div>
//                   <button class="add-to-cart" data-id="${
//                     item.id
//                   }">Add to Cart</button>
//               </div>
//           `;
//     merchGrid.appendChild(merchItem);
//   });

//   document.querySelectorAll(".add-to-cart").forEach((button) => {
//     button.addEventListener("click", function () {
//       const itemId = parseInt(this.getAttribute("data-id"));
//       addToCart(itemId);
//     });
//   });
// }

// ... existing code ...

function initMerchGrid(filteredMerch = merchandise) {
  merchGrid.innerHTML = "";

  filteredMerch.forEach((item) => {
    const merchItem = createMerchItemElement(item);
    merchGrid.appendChild(merchItem);
  });
}

function createMerchItemElement(item) {
  const element = document.createElement("div");
  element.className = "merch-item";
  element.innerHTML = `
    <img src="${item.image}" alt="${item.name}" loading="lazy">
    <div class="info">
      <h3>${item.name}</h3>
      <div class="price">$${item.price.toFixed(2)}</div>
      <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
    </div>
  `;

  element.querySelector("button").addEventListener("click", () => {
    addToCart(item.id);
  });

  return element;
}

function addToCart(itemId) {
  const item = merchandise.find((i) => i.id === itemId);
  const existingItem = cart.find((i) => i.id === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
  }

  updateCart();

  cartButton.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartButton.style.transform = "scale(1)";
  }, 300);
}

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <div class="details">
                  <div class="name">${item.name}</div>
                  <div class="price">$${item.price.toFixed(2)}</div>
              </div>
              <div class="quantity">
                  <button class="decrease" data-id="${item.id}">-</button>
                  <span>${item.quantity}</span>
                  <button class="increase" data-id="${item.id}">+</button>
              </div>
              <button class="remove" data-id="${item.id}">×</button>
          `;
    cartItems.appendChild(cartItem);
  });

  document.querySelectorAll(".decrease").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = parseInt(this.getAttribute("data-id"));
      updateQuantity(itemId, -1);
    });
  });

  document.querySelectorAll(".increase").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = parseInt(this.getAttribute("data-id"));
      updateQuantity(itemId, 1);
    });
  });

  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = parseInt(this.getAttribute("data-id"));
      removeFromCart(itemId);
    });
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;

  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  cartBadge.textContent = itemCount;

  cartButton.style.display = itemCount > 0 ? "flex" : "none";
}

function updateQuantity(itemId, change) {
  const itemIndex = cart.findIndex((i) => i.id === itemId);
  if (itemIndex !== -1) {
    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    updateCart();
  }
}

function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  updateCart();
}

function showView(viewName) {
  merchListView.classList.remove("active");
  cartView.classList.remove("active");
  checkoutFormView.classList.remove("active");
  confirmationView.classList.remove("active");

  switch (viewName) {
    case "merchList":
      merchListView.classList.add("active");
      break;
    case "cartView":
      cartView.classList.add("active");
      break;
    case "checkoutForm":
      checkoutFormView.classList.add("active");
      break;
    case "confirmation":
      confirmationView.classList.add("active");
      break;
  }
}

function validateForm() {
  let isValid = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const cardNumber = document.getElementById("cardNumber");
  const cvv = document.getElementById("cvv");

  document
    .querySelectorAll(".error-message")
    .forEach((el) => el.classList.remove("show"));
  document
    .querySelectorAll("input")
    .forEach((el) => el.classList.remove("error"));

  if (!name.value.trim()) {
    document.getElementById("nameError").classList.add("show");
    name.classList.add("error");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").classList.add("show");
    email.classList.add("error");
    isValid = false;
  }

  if (!address.value.trim()) {
    document.getElementById("addressError").classList.add("show");
    address.classList.add("error");
    isValid = false;
  }

  if (
    document.querySelector('input[name="payment"]:checked').value === "credit"
  ) {
    if (cardNumber.value.replace(/\s/g, "").length < 16) {
      document.getElementById("cardError").classList.add("show");
      cardNumber.classList.add("error");
      isValid = false;
    }

    if (cvv.value.length < 3) {
      document.getElementById("cvvError").classList.add("show");
      cvv.classList.add("error");
      isValid = false;
    }
  }

  return isValid;
}

function displayOrderSummary() {
  orderItems.innerHTML = "";
  cart.forEach((item) => {
    const orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
              <div>${item.name} × ${item.quantity}</div>
              <div>$${(item.price * item.quantity).toFixed(2)}</div>
          `;
    orderItems.appendChild(orderItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderTotal.textContent = `$${total.toFixed(2)}`;
}

function init() {
  initMerchGrid();
  updateCart();
  showView("merchList");
}

window.addEventListener("DOMContentLoaded", init);
