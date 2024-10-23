import words from "./words.js";


export const Hangman = class {
    constructor({maxAttempts, guessedLetters, wrongAttempts, word} = {}) {
        document.body.innerHTML += `
            <div id="word"></div>
            <div id="message"></div>
            <div id="letters"></div>
            <div id="hangman"></div>
            <button id="reset">Reset Game</button>
        `
        this.wordElement = document.getElementById('word');
        this.messageElement = document.getElementById('message');
        this.lettersElement = document.getElementById('letters');
        this.hangmanElement = document.getElementById('hangman');
        this.resetButton = document.getElementById('reset');

        this.init({maxAttempts, guessedLetters, wrongAttempts, word})

        this.handleKeyPress();

        this.resetButton.addEventListener("click", () => this.reset())
    }

    init({
             maxAttempts = 6,
             guessedLetters = [],
             wrongAttempts = 0,
             word = words[Math.floor(Math.random() * words.length)]
    } = {}) {
        this.maxAttempts = maxAttempts
        this.guessedLetters = guessedLetters
        this.wrongAttempts = wrongAttempts
        this.word = word;

        this.displayWord();
        this.displayLetters();

        this.messageElement.textContent = '';
        this.hangmanElement.textContent = '';
    }

    displayWord() {
        this.wordElement.textContent = this.displayedWord()
    }

    displayedWord() {
        return this.word.split('').map(letter => (this.guessedLetters.includes(letter) ? letter : '_')).join(' ');
    }

    displayLetters() {
        this.lettersElement.innerHTML = '';
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.dataset.letter = letter
            button.addEventListener('click', () => this.handleGuess(letter));
            button.disabled = this.guessedLetters.includes(letter);
            this.lettersElement.appendChild(button);
        });
    }

    handleKeyPress() {
        document.addEventListener("keypress", e => {
            if (/[a-z]/i.test(e.key)) {
                this.handleGuess(e.key)
            }
        })
    }

    handleGuess(letter) {
        if (this.guessedLetters.includes(letter)) {
            return
        }

        this.guessedLetters.push(letter);

        if (this.word.includes(letter)) {
            this.displayWord();
            this.checkWin();
        } else {
            this.wrongAttempts++;
            this.hangmanElement.textContent = `Wrong attempts: ${this.wrongAttempts}/${this.maxAttempts}`;
            this.checkLose();
        }
    }

    checkWin() {
        if (!this.displayedWord().includes('_')) {
            this.messageElement.style.color = "green";
            this.messageElement.textContent = 'You Win!';
            this.disableAllButtons();
        }
    }

    // Check if the player has lost
    checkLose() {
        if (this.wrongAttempts >= this.maxAttempts) {
            this.messageElement.style.color = "red";
            this.messageElement.textContent = `You Lose! The word was "${this.word}".`;
            this.disableAllButtons();
        }
    }

    disableAllButtons() {
        const buttons = document.querySelectorAll('#letters button');
        buttons.forEach(button => button.disabled = true);
    }

    reset() {
        this.init()
    }

}// sum.js
export function sum(a, b) {
    return a + b
}

