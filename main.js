
// Team Member

const team = document.querySelector(".team");


let myMemberTeam = "";

teamMembers.forEach((item, index) => {
    myMemberTeam += `
    <div class="team-member">
        <img src="${item.photo}" alt="">
        <h2>${item.name}</h2>
        <p>${item.skill}</p>
    </div>
    `;
});

team.innerHTML = myMemberTeam;



// Student List

const student = document.querySelector(".student");


let studentslist = "";

students.forEach((item, index) => {
    studentslist += `
    <div class="student-list">
        <img src="${item.photo}" alt="">
        <h2>${item.name}</h2>
        <p>${item.class}</p>
        <p>${item.roll}</p>
    </div>
    `;
});

student.innerHTML = studentslist;

