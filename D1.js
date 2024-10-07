/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//TIPO STRINGA. Concatenazione di caratteri
//Insiemi di caratteri che formano una parola o una frase
let string = 'Ciao, io sono una stringa!'
console.log(string)
//TIPO NUMERICO. Tutti i tipi di numeri. Es: interi, reali, etc. 
let number = 50
console.log(number, 'è un dato di tipo numerico')
//TIPO BOOLEANO. Questo tipo di dati può avere solo due valori possibili, true o false.
//ESEMPIO: Il risultato di un confronto tra due numeri è un dato di tipo booleano.
// 5 è maggiore di 10? false 
console.log('Sono un dato booleano ', 5 > 10)
//TIPO UNDEFINED. Quando dichiaro una variabile e non gli assegno alcun valore, essa sarà di tipo undefined
let variabileUndefined
console.log('Sono un dato di tipo ', variabileUndefined)
//TIPO NULL. Posso assegnare a una variabile il valore null.
//Dopo aver dichiarato una variabile le assegno il valore 'null'.
//In questo modo sto esplicitamente assegnando il 'vuoto', il 'nulla', il NIENTE come valore di quella variabile
let variabileNull = null
console.log('Sono un dato di tipo ', variabileNull)

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = 'Umberto'
console.log('Il mio nome è ', myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12
let number2 = 20
let sum = number1 + number2
console.log ('La somma tra ', number1, ' e ', number2, ' è: ', sum)
//Oppure
let newSum = 12 + 20 
console.log('La somma tra 12 e 20 è: ', newSum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = 'Tramontano'
//Da questo punto la variabile myName avrà un nuovo valore, non più 'Umberto' ma 'Tramontano'
console.log(myName)
//Quello che ho appena fatto con la variabile myName non potrò farlo con una variabile dichiarata con il costrutto const
const MY_NAME = 'Umberto'
console.log(MY_NAME)
// MY_NAME = 'Giovanni' 
//Decommentando la riga di codice 75 sulla console del browser mi comparirà un messaggio di ERRORE.
//Non posso assegnare un nuovo valore a una variabile che ho dichiarato come costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sub = 4 - x
console.log('Il risultato della sottrazione tra, ', 4, ' e ', x, ' è: ', sub)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = 'john'
let name2 = 'John'
const COMPARATION = name1 === name2
console.log(name1, ' è uguale a ', name2, '?', COMPARATION) // In console sul browser mi apparirà 'false'
/* SCRIVI QUI LA TUA RISPOSTA */

const SECOND_COMPARATION = name1 === name2.toLowerCase()
console.log(name1, ' è uguale a ', name2, '?', SECOND_COMPARATION)
//Sulla console ora mi apparirà true come risultato della comparazione tra name1 e name2