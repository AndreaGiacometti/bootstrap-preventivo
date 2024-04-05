// abilitare ascolto clic sul bottone
const formElement = document.getElementById('quote-form');
    
formElement.addEventListener('submit', function (event) {
    // impedire che il form venga effettivamente inviato e la pagina si ricarichi
    event.preventDefault();
    
    // recuperare l'opzione selezionata dal dropdown menu
    const workType = document.getElementById('work-type');
    const selectedValue = workType.value; // stringa

    if (isNaN(selectedValue)) {
        alert('Si prega di selezionare un\'opzione dal menu a discesa.');
    } else {
    
        //recuperare l'input' dello sconto
        const discountImputElement = document.getElementById('discount-code')
        const discountCode = discountImputElement.value //stringa
        
        // creare una costante per le ore di lavoro standard da svolgere
        const workHours = 10; //number
        
        // calcolare il prezzo del lavoro senza sconti
        if (selectedValue === "1") {
            price = 20.50 * workHours ; //number
        } else if (selectedValue === "2") {
            price = 15.30 * workHours; //number
        } else if (selectedValue === "3") {
            price = 33.60 * workHours; //number
        }
        
        // calcolare l'importo dello sconto
        if (discountCode === '') {
            discount = 0 //number
        } else if (discountCode === 'YHDNU32' || discountCode === "JANJC63" || discountCode === 'PWKCN25' || discountCode === 'SJDPO96' || discountCode === 'POCIE24') {
            discount = price * 0.25 //number
        } else {
            alert('Il codice inserito è errato')
        }
        
        // stampare il prezzo del biglietto sulla viewport tramite collegamento all'elemento HTML
        
        // Trovare l'elemento HTML per il prezzo
        const priceElement = document.getElementById('price');

        // Formattare la parte intera del prezzo
        const integerPart = Math.floor(price - discount).toLocaleString('it-IT');

        // Ottenere la parte decimale del prezzo
        const decimalPart = ((price - discount) - Math.floor(price - discount)).toFixed(2).slice(1).replace('.', ',');

        // Impostare il contenuto dell'elemento HTML con il simbolo dell'euro
        priceElement.innerHTML = '<strong>&euro;' + integerPart + '</strong><span class="text-muted">' + decimalPart + '</span>';
        
        // reimpostare il form o parte di esso ai valori predefiniti?

        // const formDiscount = document.getElementById('discount-code')
        // formDiscount.value = ""

        //formElement.reset()

        // document.getElementById("privacy-checkbox").checked = false;
    }
})

