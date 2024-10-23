Nom : Méthode displayedWord - Teste le bon affichage du mot à deviner en fonction des lettres trouvées
ID : T1
Objectif : Tester le bon affichage du mot à deviner en fonction des lettres trouvées
Étapes de test :
- Instanciation d'un jeu du pendu avec comme mot à deviner `bonjour` et avec comme scénario le fait d'avoir déjà trouvé la lettre `b`
Résultat attendu :
- Le mot affiché devrait être `b _ _ _ _ _ _`

------------------

Nom : Méthode displayLetters - Teste le bon affichage des lettres en fonction des lettres choisit
ID : T2
Objectif : Tester le bon affichage des Lettres en fonction des lettres choisit
Étapes de test :
- Instanciation d'un jeu du pendu avec comme Lettre 'abcdef...ect'
Résultats attendu : La lettre doit faire partie de l'alphabet donné par le constructeur
- Le tableau de string devrait retourner tous les id des lettres de l'alphabet

--------------

Nom : Méthode checkWin - Teste si le bon mot est trouvé
ID : T3
Objectif : Tester si le messageElement est en vert c'est gagné
- Instanciation d'un messageElement en vert et demande si c'est false
Résultat attendu : si le message n'est pas en vert retourne ""
- Si le message n'est pas en vert, pas gagné

------------

Nom : Méthode handleGuess -Teste si la lettre soumise est la bonne
ID : T4
Objectif : Tester si guessedLetters