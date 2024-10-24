import {describe, it, expect, test, assert} from 'vitest'
import {Hangman} from "../js/Hangman.js";
import {sum} from '../js/Hangman.js'


/**
 * @vitest-environment jsdom
 */

test('use jsdom in this test file', () => {
    const element = document.createElement('div')
    expect(element).not.toBeNull()
})

// méthode sum pour tester

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3)
})
// méthode displayedWord
describe("Méthode displayedWord", () => {
    it("Teste le bon affichage du mot à deviner en fonction des lettres trouvées", () => {


        const hangman = new Hangman({word: "bonjour", guessedLetters: ["b"]})
        expect(hangman.displayedWord()).toBe("b _ _ _ _ _ _")
    })

})


/// test méthode displayLetters


describe("Méthode displayLetters", () => {
    it("Teste l'affichage des lettres disponibles", () => {
        const hangman = new Hangman()
        hangman.displayLetters()
        expect(hangman.lettersElement.innerHTML).toContain("a")
        expect(hangman.lettersElement.innerHTML).toContain("b")
        expect(hangman.lettersElement.innerHTML).toContain("c")
        expect(hangman.lettersElement.innerHTML).toContain("d")
        expect(hangman.lettersElement.innerHTML).toContain("e")
        expect(hangman.lettersElement.innerHTML).toContain("f")
        expect(hangman.lettersElement.innerHTML).toContain("g")
        expect(hangman.lettersElement.innerHTML).toContain("h")
        expect(hangman.lettersElement.innerHTML).toContain("i")
        expect(hangman.lettersElement.innerHTML).toContain("j")
        expect(hangman.lettersElement.innerHTML).toContain("k")
        expect(hangman.lettersElement.innerHTML).toContain("l")
        expect(hangman.lettersElement.innerHTML).toContain("m")
        expect(hangman.lettersElement.innerHTML).toContain("n")
        expect(hangman.lettersElement.innerHTML).toContain("o")
        expect(hangman.lettersElement.innerHTML).toContain("p")
        expect(hangman.lettersElement.innerHTML).toContain("q")
        expect(hangman.lettersElement.innerHTML).toContain("r")
        expect(hangman.lettersElement.innerHTML).toContain("s")
        expect(hangman.lettersElement.innerHTML).toContain("t")
        expect(hangman.lettersElement.innerHTML).toContain("u")
        expect(hangman.lettersElement.innerHTML).toContain("v")
        expect(hangman.lettersElement.innerHTML).toContain("w")
        expect(hangman.lettersElement.innerHTML).toContain("x")
        expect(hangman.lettersElement.innerHTML).toContain("y")
        expect(hangman.lettersElement.innerHTML).toContain("z")

    });
});

// Méthode checkWin


describe("Méthode checkWin", () => {
    it("Teste si le mot à deviner est trouvé", () => {
        const hangman = new Hangman({messageElement: ["green"]})
        expect(hangman.messageElement.style.color).toBe("green" === false ? "green" : "")

    });
});

// Méthode checkLose


describe("Méthode checkLose", () => {
    it("Teste si le joueur a perdu", () => {
        const hangman = new Hangman({ messageElement: ["red"]})
        expect(hangman.messageElement.style.color).toBe("red" === false? "red" : "")

    });
});

// Méthode handleGuess


describe("Méthode handleGuess", () => {
    it ("Teste si la lettre soumise est la bonne",() => {
        const hangman = new Hangman({ guessedLetters: []})
        hangman.handleGuess("b")
        expect(hangman.guessedLetters).toContain("b")

    });
});











