import { init } from "./main.js";

export function ujAdat(lista) {
    /* sorBeszur(lista) -> ujLista - ha a "submit" gombra kattintunk akkor fut le
		az urlap adatokat átalakítjuk objektummá és hozzáadjuk a listához (push) */

    const submitELEM = $("#submit")
    submitELEM.on("click", function(event) {
        /* leszedjük az alapértelmezett eseménykezelőt */
        event.preventDefault()

        const adat = {
            nev: $("#nev").val(),
            kor: $("#kor").val(),
            nem: $("input[name='nem']:checked").val()==="ferfi"? true : false
        }
        console.log($(".valid-feefback").eq(0).css("display"));
        if ($(".valid-feefback").eq(0).css("display")==="block" && $(".valid-feefback").eq(1).css("display")) {
            lista.push(adat);
            console.log(lista);
            init(lista); 
        }
        else {
            console.log("Hibás adatok!");
        }
    });
}