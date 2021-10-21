# App.js file
 customKebab = (kebab) => () => {} 
 - Onclick methods changes the state of position
 - Add ingredient to the current kebab array
 - Playing with state and variable position to display screen for next step

 validKebab() {}
 - Add the currentKebab to checkout
 - Add variable countCheckout to handle button display
 - Set new state position to be able to remake another kebab
 - Remove all the ingredient in the current kebab array

 deleteKebab = (index) => () => {}
 - Simply delete kebab in checkout

 remakeKebab()
 - Remove all the ingredient in the current kebab array
 - Go to state position 0, choosing ingredient 

 orderKebab() {}
 - Go to state position 5, finishing the order 

# Work TODO

# DONE
- Proposer le choix du pain: pain, galette ou baguette.

# DONE
- Proposer le choix de la viande: viande ou tofu

# CAN ONLY CHOOSE ONE OF THEM / Work arround the customKebab method
- Proposer d’ajouter de la salade et / ou des tomates et / ou des oignons

# CAN ONLY CHOOSE ONE OF THEM / Work arround the customKebab method
- Proposer d’ajouter une ou deux sauces (mais pas trois) parmi une sélection de 6 sauces
(au choix)

# DONE
- Une fois qu’un kébab est dans le panier, on affiche celui-ci avec un bouton commander

# DONE
- L’utilisateur peut supprimer un kébab du panier

# NOT DONE YET
- L’utilisateur peut changer la quantité d’un kébab dans le panier

# NOT DONE YET / Work arround the selectionKebab method
- Proposer quelques kébab tout fait (le classique = pain / viande / complet / blanche, le
vege = pain / tofu / blanche, le bbq = pain / viande / complet / bbq)

# Bonus 

# DONE
- Un bouton « annuler » qui annule la configuration en cours et retourne à la première
étape.