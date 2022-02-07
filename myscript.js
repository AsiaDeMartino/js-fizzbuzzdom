// collegare variabile ad un contenitore in html e selezioniamo il container
const CONTAINER = document.getElementById("container_griglia");  
console.log(CONTAINER);

//creare loop che stampa numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    const QUADRATO = document.createElement("div");
    CONTAINER.append(QUADRATO);
    QUADRATO.classList.add("quadrato");

    if (i % 3 == 0 && i % 5 == 0){                         //selezionare i numeri che sono sia multipli di 3 che multipli di 5
        QUADRATO.classList.add("FizzBuzz");
        const FIZZBUZZ = "FizzBuzz";
        QUADRATO.append(FIZZBUZZ);
    } else if (i % 3 == 0) {                                //selezionare multipli di 3
        QUADRATO.classList.add("Fizz");
        const FIZZ = "Fizz"
        QUADRATO.append(FIZZ);
    } else if (i % 5 == 0) {                                //selezionare multipli di 5
        QUADRATO.classList.add("Buzz");
        const BUZZ = "Buzz"
        QUADRATO.append(BUZZ);
    }
}       
        




