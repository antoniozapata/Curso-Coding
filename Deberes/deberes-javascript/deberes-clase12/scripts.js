// Beginning with this array, print a pyramid of asterisks like so
//               **
//              ****
//             ******
//            ********
//           **********
//          ************
//         **************
//        ****************
//       ******************
//      ********************
//     **********************
//    ************************
//   **************************
//  ****************************
// ******************************
const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

// Insert an emoji of your choice between each one of the words of this sentence, generating a new String with it.
const sentence = 'I am <Write your name here> and I love to code at MFR'

// Using padEnd, transform all these verbs to its infinitive form
const verbs = ['play', 'stream', 'read', 'learn', 'watch']

verbs.forEach((verbsName) => {
  console.log(verbsName.padEnd(9,"ing  "))
});

// Count the words of this tongue twister
const tongueTwister = "¿Por qué a la cama se le llama cama y a la cómoda cómoda, siendo la cómoda menos cómoda que la cama y la cama más cómoda que la cómoda?"

const cantidad = tongueTwister.split (" ");
console.log(cantidad.length);


// Trim this sentence so the resulting string is 'I want to be alone'
const untrimmedWord = '1             I want to be alone         1'

const patron = /1/g,
      nuevoValor = " ",
      nuevaCadena = untrimmedWord.replace(patron, nuevoValor);

console.log(nuevaCadena.trim());

// BONUS: hide the sensitive part of your email with asterisks, leaving the domain part visible
// Example: my-personal-email@gmail.com --> *****************@gmail.com
const email = 'my-personal-email@gmail.com'

const division = email.split("@");
const transformado = division[0].replace(/./g,"*");
 
const emailSeguro = transformado + "@" + division[1];
console.log(emailSeguro);
