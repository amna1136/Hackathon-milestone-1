const toggleSkillsButton = document.getElementById('toggle-skills');
const skillsList = document.getElementById('skills-list');

toggleSkillsButton.addEventListener('click', () => {
    skillsList.classList.toggle('hidden');
});

class Resume {
    private skillsVisible: boolean;

    constructor() {
        this.skillsVisible = true;
    }

    toggleSkills() {
        this.skillsVisible = !this.skillsVisible;
        skillsList.classList.toggle('hidden');
    }
}

const resume = new Resume();


styles.css (add the following rule)

.hidden {
    display: none;
}


 


