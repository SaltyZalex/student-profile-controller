const profileCard = document.getElementById("profileCard");
const profileName = document.getElementById("profileName");
const profileProgram = document.getElementById("profileProgram");
const profileYear = document.getElementById("profileYear");
const profileStatus = document.getElementById("profileStatus");

const nameInput = document.getElementById("nameInput");
const programInput = document.getElementById("programInput");
const yearInput = document.getElementById("yearInput");
const statusInput = document.getElementById("statusInput");

const updateBtn = document.getElementById("updateBtn");
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const themeBtn = document.getElementById("themeBtn");
const resetBtn = document.getElementById("resetBtn");

const detailsPanel = document.getElementById("detailsPanel");
const studentIdDisplay = document.getElementById("studentIdDisplay");
const formMessage = document.getElementById("formMessage");

const body = document.querySelector("body");

const initialProfile = {
    name: "Maria Santos",
    program: "BS Information Technology",
    year: "3rd Year",
    status: "active"
};


function isValidStudentName(name) {
    return name.trim().length >= 2;
}


function formatStudentStatus(status) {
    if (status === "active") {
        return "Active";
    }

    if (status === "inactive") {
        return "Inactive";
    }

    return "";
}



function setStatus(status) {

    profileCard.dataset.status = status;

    profileStatus.textContent = formatStudentStatus(status);

    profileCard.classList.remove("active");
    profileCard.classList.remove("inactive");

    if (status === "active") {
        profileCard.classList.add("active");
    }

    if (status === "inactive") {
        profileCard.classList.add("inactive");
    }
}



function updateProfile() {

    const name = nameInput.value.trim();
    const program = programInput.value;
    const year = yearInput.value;
    const status = statusInput.value;

    if (!isValidStudentName(name)) {

        formMessage.textContent = "Student name is required";

        return;
    }

   
    profileName.textContent = name;
    profileProgram.textContent = program;
    profileYear.textContent = year;

    setStatus(status);

    formMessage.textContent = "Profile updated successfully.";
}


function toggleDetails() {

    detailsPanel.classList.toggle("hidden");
}


function toggleTheme() {

    body.classList.toggle("dark-theme");
}



function resetProfile() {

    profileName.textContent = initialProfile.name;
    profileProgram.textContent = initialProfile.program;
    profileYear.textContent = initialProfile.year;

    nameInput.value = "";
    programInput.value = initialProfile.program;
    yearInput.value = initialProfile.year;
    statusInput.value = initialProfile.status;

    setStatus(initialProfile.status);

    const studentId = profileCard.dataset.studentId;
    studentIdDisplay.textContent = "Student ID: " + studentId;

   
    detailsPanel.classList.remove("hidden");

    
    formMessage.textContent = "";

    
    body.classList.remove("dark-theme");
}



updateBtn.addEventListener("click", updateProfile);

toggleDetailsBtn.addEventListener("click", toggleDetails);

themeBtn.addEventListener("click", toggleTheme);

resetBtn.addEventListener("click", resetProfile);


const studentId = profileCard.dataset.studentId;

studentIdDisplay.textContent = "Student ID: " + studentId;

setStatus(profileCard.dataset.status);