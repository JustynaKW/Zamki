const castle_add = document.querySelector(".castle_add");

castle_add.hidden=true

const castle_list__button = document.querySelector(".castle_list__button");

castle_list__button.forEach(el => {
    el.addEventListener("click", e => {
        el.hidden(false);
    });
});
const titleCastle = document.querySelector("#nazwa_text");
const dataCastle= document.querySelector(".add-input-two");
const descriptionCastle = document.querySelector(".add-input-three");
const dodaj = document.querySelector("#add_btn")
const saveCastleBtn = document.querySelector(".add_exit");
const addCastle = document.querySelector(".castle_list__button");

const newCastle = {
    key: "",
    title: "",
    data: "",
    description: "",
};

saveCastleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    newCastle.title = titleCastle.value;
    newCastle.data = dataCastle;
    newCastle.description = descriptionCastle.value;
    newCastle.key = "castle";
    saveCastleToLocalStorage(newCastle);
    console .log( "Zapisano: " , newCastle);
    dodaj.classList.remove("dodaj")
    addCastle.classList.add("dodaj-przepis");
});


function saveCastleToLocalStorage(newObject) {
    const dataFromLocalStorage = [];
    if (titleCastle.value === "" || dataCastle === [] || descriptionCastle.value === "") {
        alert("Uzupełnij dane")
    } else if (localStorage.getItem("castle") != null) {
        let dataFromLocalStorage = JSON.parse(localStorage.getItem("castle"));
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("castle", JSON.stringify(dataFromLocalStorage));
    } else {
        dataFromLocalStorage.push(newObject);
        localStorage.setItem("castle", JSON.stringify(dataFromLocalStorage));
    }
}


console .log(localStorage.getItem("castle"));