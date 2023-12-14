// List of all school classes
const schoolClasses = [
  {
    title: "Karate",
    description: "Karate is a Japanese martial art whose physical aspects seek the development of defensive and counterattacking body movements. The themes of traditional karate training are fighting and self-defense, though its mental and moral aspects target the overall improvement of the individual.",
    time: "wensday 14:00-15:00",
    teacher: "Max golan",
    image: "./dist/images/karate_small.png",
  },
  {
    title: "hip hop",
    description: "Hip-hop is a genre of music most often characterized by a strong, rhythmic beat and a rapping vocal track. The genre originated in New York City in the 1970s as a cultural exchange among Black, Latino, and Caribbean youth and has grown into one of the most consumed genres of music in the United States.",
    time: "wensday 15:00-16:00",
    teacher: "Nava binyamini",
    image: "./dist/images/hiphop_small.png",
  },
  {
    title: "ballroom",
    description: "Ballroom dancing is a partnership dance where couples, using step-patterns, move rhythmically, expressing the characteristics of music. Ballroom dancing consists of two styles: the Smooth, or Standard, and the Rhythm, or Latin. The Smooth, Standard style focuses on the elegance, grace and fluidity of movement.",
    time: "monday 17:00-18:00",
    teacher: "Yelena Hayat",
    image: "./dist/images/ballroom_small.png",
  },
  {
    title: "violin",
    description: "The Individual violin Lesson is attended by both the student and the parent. At first, most of the time will be devoted to instrumental instruction for the parent. Gradually, as the child matures, gains in physical strength and coordination, and develops greater concentration and a longer attention span, he or she will absorb more and more of the lesson time. Ultimately, the parent relinquishes all but a few minutes at the end of the lesson. This time is saved for consultation with the teacher on practice suggestions and goals for the at-home work.",
    time: "friday 10:00-11:00",
    teacher: "Sofia Tailor",
    image: "./dist/images/violin_small.png",
  },
  {
    title: "singing",
    description: "Individual vocal problems will be assessed and exercises will be given to strengthen muscle coordination and improve the voice.Repertoire will be assigned by the teacher to reinforce vocal development andserve various performance and audition goals.",
    time: "monday 18:00-19:00",
    teacher: "Anna zack",
    image: "./dist/images/singing_small.png",
  },
  {
    title: "theater",
    description: "Children's theater is a wonderful and enriching hobby that involves the participation of young individuals in various aspects of theatrical performance.",
    time: "sunday 18:00-19:00",
    teacher: "Vin Diesel",
    image: "./dist/images/teater_small.png",
  },
  ];
  
  const element = document.getElementById('time') as HTMLElement | null;
  if (element) {
    element.style.lineHeight = '2';
  }
  else {
      console.error('Element with ID "yourElementId" not found.');
  }

  //  Output school class card for each class inside their container
  const classesContainer = document.querySelector("#schoolClassesContainer");
  
  if(classesContainer){
  schoolClasses.forEach((schoolClass) => {
    classesContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="image school-class" data-title="${schoolClass.title}">
        <img src="${schoolClass.image}" alt="${schoolClass.title}">
        <div class="details">
            <h2>${schoolClass.title}</h2>
            <div class="more">
                <a href="#" class="read-more">Read<span>More</span></a>
            </div>
        </div>
      </div>`
    );
  });
}

  /**
   * Popup (Modal) functionality
   */
  
  const popup = document.querySelector('#popup');
  const popupText = document.querySelector <HTMLDivElement> ('#popup_text');
  
  // Display the popup after user clicks on a school class
  if(classesContainer){
    classesContainer.addEventListener('click', function(event) {
      const selectedSchoolClass = hasClassInAncestors(event.target as HTMLElement, 'school-class');
      if (!selectedSchoolClass) {
        return;
      }
      const schoolClassObj = schoolClasses.find(schoolClass => schoolClass.title === selectedSchoolClass);
      if (schoolClassObj) {
        showPopup(schoolClassObj.description, schoolClassObj.time, schoolClassObj.teacher);
      }
    });
  }
  // Hide the popup if user clicks outside the popup or on the cancel button
  if(popup){
  popup.addEventListener('click', function (event) {
    const target = event.target as HTMLElement; 
    if (target.classList.contains('popup') || target.id === 'exit_popup') {
      hidePopup();
      return;
    }
  });
}
  /**
   * Hide the popup
   */
  function hidePopup(): void {
    const popup: HTMLElement | null = document.getElementById('popup'); // Adjust the selector as needed
  
    if (popup) {
      popup.style.display = 'none';
    }
  }
  
  /**
   * Show the popup with the description, time, and teacher 
   * @param {string} description 
   * @param {string} time 
   * @param {string} teacher
   */
  
  function showPopup(description: string, time: string, teacher: string): void {
    const popup: HTMLElement | null = document.getElementById('popup'); // Adjust the selector as needed
    const popupText: HTMLElement | null = document.getElementById('popup_text'); // Adjust the selector as needed
  
    if (popup && popupText) {
      popup.style.display = 'flex';
      popupText.innerHTML = `
        <p>${description}</p>
        <p>${time}</p>
        <p>${teacher}</p>
      `;
    }
  }
  
  /**
   * Find if class is exists on the element or in his ancestors
   * @param {*} element 
   * @param {string} className 
   * @returns 
   */
  function hasClassInAncestors(element: HTMLElement, className: string): string | false {
    let currentElement: HTMLElement | null = element;
    while (currentElement !== null && currentElement !== document.body) {
      if (currentElement.classList.contains(className)) {
        return currentElement.dataset.title || '';
      }
      currentElement = currentElement.parentElement;
    }
    return false;
  }