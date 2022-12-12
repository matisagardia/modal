// Variable declarations for html elements

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

// For loop to handle the buttons

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener("click", () => {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

// Function to avoid repeating on the eventListener

function hideModal() {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
}

// Event listeners

btnCloseModal.addEventListener("click", hideModal);

overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
        if(!modal.classList.contains("hidden")){
        hideModal();
        }
    }
});