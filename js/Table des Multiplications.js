'use strict';   // Mode strict du JavaScript

var iHoriz; // variable pour index des abscisses
var iVertic; // variable pour index des ordonnées
var saisie; // variable pour nombre saisi par utilisateur
var couleurCellule; // variable pour colorier nombre saisi par utilisateur


document.write("<table border='5px'>");

// pop-up acceptant nombres entiers
saisie = parseInt(window.prompt('Saisir un chiffre'));

// boucle incrementant abscisses, limitée à 10
for(iHoriz = 1; iHoriz <= saisie; iHoriz++) 
{
	// afficher dans ligne du tableau d'une hauteur de 50px
	document.write("<tr style='height:50px;'>");

// boucle incrementant ordonnées, limitée à 10
	for(iVertic = 1; iVertic <= saisie; iVertic++) 
	{
		// je colorie la première ligne et la première colonne
		if((iVertic == 1) || (iHoriz == 1))
        {
            couleurCellule = "#34a853";
        }
		// colorier cellules de multiples d'eux-mêmes
		else if (iHoriz == iVertic) 
        {
			couleurCellule = "#2894d1";
        }
		// colorier toutes les autres cellules en blanc
        else 
        {
            couleurCellule = "#ffffff";
        }

	/* afficher résultat de la multiplication du vertical et de l'horizontal 
	dans cellule du tableau d'une largeur de 50px avec texte centré et avec background color 
	correspondant au if/else plus haut puis saut de cellule*/
    document.write("<td style='text-align:center;width:50px;background-color:" 
    	+ couleurCellule + "'>" + (iHoriz*iVertic) + "</td>");
}
	// afficher résultats dans une ligne du tableau
	document.write("</tr>");
}
// afficher tableau final
document.write("</table>");