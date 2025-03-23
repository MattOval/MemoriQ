// Flashcard System
let flashcards = [];

function addFlashcard() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;

    if (question && answer) {
        flashcards.push({ question, answer });
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        displayFlashcards();
    }
}

function displayFlashcards() {
    let container = document.getElementById("flashcard-container");
    container.innerHTML = "";

    flashcards.forEach((card, index) => {
        let flashcard = document.createElement("div");
        flashcard.className = "flashcard";
        flashcard.innerHTML = `<p>${card.question}</p>`;
        flashcard.onclick = () => {
            flashcard.innerHTML = flashcard.innerHTML === `<p>${card.question}</p>` 
                ? `<p>${card.answer}</p>` 
                : `<p>${card.question}</p>`;
        };
        container.appendChild(flashcard);
    });
}

// Notes System
function saveNote() {
    let noteText = document.getElementById("note-text").value;
    if (noteText) {
        let savedNotes = document.getElementById("saved-notes");
        let note = document.createElement("p");
        note.textContent = noteText;
        savedNotes.appendChild(note);
        document.getElementById("note-text").value = "";
    }
}

// Feedback System
function submitFeedback() {
    let feedback = document.getElementById("feedback-text").value;
    if (feedback) {
        alert("Thank you for your feedback!");
        document.getElementById("feedback-text").value = "";
    }
}
