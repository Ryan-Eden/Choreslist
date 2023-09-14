const choresInput = document.getElementById("chores-input");
const addChoreBtn = document.getElementById("add-chore-btn");
const deleteChoreBtn = document.getElementById("remove-chore-btn");

const choresContainer = document.getElementById("chores");

let choresArray = [];
let choreStyles = "chore"

let choresFromLocalStorage = JSON.parse(localStorage.getItem("chores"));

if(choresFromLocalStorage) {
    choresArray = choresFromLocalStorage;
    renderChores();
}

function addChore() {
    const chore = choresInput.value
    if(chore && !choresArray.includes(chore)) {
        choresArray.push(chore);
        localStorage.setItem("chores", JSON.stringify(choresArray));
        clearChoreInput();
    }
    renderChores();
}


function renderChores() {
    let choresHTML = "";
    for(let i = 0; i < choresArray.length; i++) {
        choresHTML += `<li class="${choreStyles}">${choresArray[i]}</li>`;
    }
    choresContainer.innerHTML = choresHTML;
}


function clearChoreInput() {
    choresInput.value = "";
}


function deleteAllChores() {
    choresArray = [];
    localStorage.clear();
    clearChoreInput();
    renderChores();
}
addChoreBtn.addEventListener("click", addChore);
deleteChoreBtn.addEventListener("click", deleteAllChores);
