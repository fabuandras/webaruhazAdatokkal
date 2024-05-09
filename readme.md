# listakezelő függvények (gyakorlás)

## Specifikáció

Jelenítsük meg az adatainkat egy táblázatban az adatok divben. Az urlap div-ben legyen egy urlap, amivel ilyen adatokat tudunk a táblázatba beletenni. A táblázat fejlécére kattintva rendezzük a táblázatot név szerint. Tudjunk törölni a táblázatból egy sort. Legyen szűrőmező, ami segítségével név szerint tudjuk szűrni az adatokat.

## Függvények

1. tablazatLetrehoz(lista) -> txt - lista alapján készít html táblázat kódot, visszaadja az elkészült html szöveget, minden sor mellett egy törlés gombbal

2. megjelenit(txt) - megjeleníti a paraméterben kapott szöveget egy adott html elemben

3. rendez(lista) -> rendezettLista - megrendezi a listát egy adott paraméter szerint, a megrendezett listát újra megjeleníti, a megrendezett listát visszaadja, akkor fut le amikor rákattintunk a táblázat fejlécére

4. szures(lista, keresoSzoveg) -> szurtLista - akkor fog lefutni, ha a "szuro" mezőben változás történik - (keyup) - a listában a "nev" mezőben keres egyezéseket és ez alapján szűr filter

5. sorBeszur(lista) -> ujLista - ha a "submit" gombra kattintunk akkor fut le, az űrlap adatokat átalakítjuk objektummá és hozzáadjuk a listához (push)

6. torol(lista, index) - törli a lista adott sorát minden sor mellett lesz egy "töröl" gomb, amivel megkapjuk az adott sor indexét és meghívódik a "torol" fuggvény





## Függvények az oldalon

1. adat.js


export const keszletLISTA = [

    { gepkocsitipus: "Típus_1",
      evjarat: 2024,
      uzemanyag: true
    },
    { gepkocsitipus: "Típus_2",
      evjarat: 2024,
      uzemanyag: false 
    }
]





2. adatKezelo.js


*** export function rendez(lista, kulcs, rIrany) *** - <!-- ... -->

*** export function szures(lista, keresoSzoveg) *** - <!-- ... -->

*** export function torol(lista, index) *** - <!-- ... -->





3. fuggvenyek.js


*** export function kartyaLetrehoz(lista) *** - <!-- ... -->

*** export function megjelenit(txt) *** - <!-- ... -->

listaKezelo.js
*** function listaKiir() *** - ..