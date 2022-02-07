// collegare variabile ad un contenitore in html e selezioniamo il container
const container = document.getElementById("container_griglia");  
console.log(container);

//creare loop che stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    const quadrato = document.createElement("div");
    container.append(quadrato);
    quadrato.classList.add("quadrato");

    if (i % 3 == 0 && i % 5 == 0){                         //selezionare i numeri che sono sia multipli di 3 che multipli di 5
        quadrato.classList.add("FizzBuzz");
        const FIZZBUZZ = "FizzBuzz";
        quadrato.append(FIZZBUZZ);
    }
}       
        
//selezionare multipli di 3
//selezionare multipli di 5




