import { emberekLISTA } from "./adat.js";
import { megjelenit, tablazatLetrehoz } from "./fuggvenyek.js";
import { rendez, szures, torol } from "./adatKezelo.js";
import { ujAdat } from "./urlapKezelo.js";

    /*
    Jelenítsük meg az adatainkat egy táblázatban az adatok divben.
    Az urlap div-ben legyen egy urlap, amivel ilyen adatokat tudunk a táblázatba beletenni.
    A táblázat fejlécére kattintva rendezzük a táblázatot név szerint.
    Tudjunk törölni a táblázatból egy sort.
    Legyen szűrőmező, ami segítségével név szerint tudjuk szűrni az adatokat.
    
    Függvények:

    1. tablazatLetrehoz(lista) -> txt
	  - lista alapján készít html táblázat kódot, visszaadja az elkészült html szöveget,
      minden sor mellett egy törlés gombbal
		
    2. megjelenit(txt)
    - megjeleníti a paraméterben kapott szöveget egy adott html elemben
		
    3. rendez(lista) -> rendezettLista
    - megrendezi a listát egy adott paraméter szerint,
      a megrendezett listát újra megjeleníti,
      a megrendezett listát visszaadja
      akkor fut le amikor rákattintunk a táblázat fejlécére
		
    4. szures(lista, keresoSzoveg) -> szurtLista
    - akkor fog lefutni, ha a "szuro" mezőben változás történik - (keyup) -
      a listában a "nev" mezőben keres egyezéseket és ez alapján szűr
      filter
		
    5. sorBeszur(lista) -> ujLista
    - ha a "submit" gombra kattintunk akkor fut le
      az űrlap adatokat átalakítjuk objektummá és hozzáadjuk a listához (push)
		
    6. torol(lista, index)
    - törli a lista adott sorát
      minden sor mellett lesz egy "töröl" gomb,
      amivel megkapjuk az adott sor indexét és meghívódik a "torol" fuggvény

    */
	
    let rIrany = 1;
    init(emberekLISTA);
    szuresNevSzerint();
    ujAdat(emberekLISTA);

    export function init(lista){
        var txt = tablazatLetrehoz(lista);
        megjelenit(txt);
        rendezesEsemeny();
        torolEsemeny();
    }

    function szuresNevSzerint(){
        const szuroElem = $("#sznev");
        szuroElem.on("keyup", function(){
            let szoveg = szuroElem.val();
            init(szures(emberekLISTA, szoveg));
        });
    }

    /* szorgalmi: egyéb mezőkre szűrés */

    function rendezesEsemeny(){

        /* ha rákattintunk a táblázat fejlécében lévő név mezőre */
        const nevMezoElem = $(".adatok table th").eq(0);
        nevMezoElem.on("click", function(){
            const lista = rendez(emberekLISTA, "nev", rIrany);
            console.log(lista);
            init(lista);
            rIrany*=-1;
        })
    }

/* szorgalmi: tudjunk rendezni a többi mezőre is */

function torolEsemeny() {
    /* minden sor mellett lesz egy töröl gomb,
		amivel megkapjuk az adott sor indexét és meghívódik a töröl függvény */

    const torolELEM = $(".torol")
    torolELEM.on("click", function(event) {
        let index = event.target.id;
        /* az az elem, amelyik kiváltotta az eseményt event.target */
        const LISTA = torol(emberekLISTA, index)
        init(LISTA)
    });
}