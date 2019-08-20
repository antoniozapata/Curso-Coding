const  arr  = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 ]

const  arrTimes2  =  arr . mapa ( num  => {
     return num *  2
})

consola . log (arrTimes2) // [2, 4, 6, 8, 10, 12, 14]


const arr = [1, 2, 3, 4, 5, 6, 7]
const multiplyBy2 = (n) => n * 2

const arrTimes2 = arr.map(num => multiplyBy2(num))

console.log(arrTimes2) // [2, 4, 6, 8, 10, 12, 14]

// Dada la siguiente matriz, cree una segunda matriz con el resultado de obtener la potencia de cada número por sí mismo.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const mathPow = numbers.map (num => {
    return num**num
})

console.log(mathPow)

//Dada la siguiente matriz, cree una segunda matriz que use cada una de las palabras para formar las oraciones que se ven a continuación.

const foodList = ['Pizza', 'Ramen', 'Paella', 'Chuletón']
const site = ['Como soy italiano', 'Como soy japonés', 'Como soy de Valencia', 'Aunque Yo no como carne']

const prefers = foodList.map (food => {
    return "Me gusta la "+ food
})

console.log(prefers)

//Dada la siguiente matriz, cree una segunda matriz que forme oraciones usando las propiedades de los objetos:

const mfrStaff = [
    {
      name: 'Andrea',
      role: 'coordinator',
      hobbies: ['sing', 'watch movies']
    },
    {
      name: 'Xavi',
      role: 'teacher',
      hobbies: ['read', 'code']
    },
    {
      name: 'Ricardo',
      role: 'teacher',
      hobbies: ['read', 'garden']
    },
    {
      name: 'Rafa',
      role: 'teacher',
      hobbies: ['travel', 'watch series']
    },
    {
      name: 'Jordi',
      role: 'teacher',
      hobbies: ['travel', 'build robots']
    }
  ]

  const oraciones = mfrStaff.map (person => {
    return  person.name +" is a " + person.role +" and they like to " + person.hobbies[0] +" and " + person.hobbies[1]
})

console.log(oraciones)

// Let's return those words longer than 6 characters
const words = ['Hello', 'Javascript', 'Web development', 'CSS', 'HTML']

const longWords = words.filter(word => {
    return word.length > 6
})

console.log(longWords) // ['Javascript', 'Web development']

//Dada la siguiente matriz, cree una segunda matriz solo con los números pares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numPares = pares.filter(num => {
    return num.
})

// Expected result
// [2, 4, 6, 8, 10]


const foodList = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Beyond meat burguer',
      isVeggie: true
    },
    {
      name: 'Chuletón',
      isVeggie: false
    }
  ]

  const foodVeggie = foodList.filter(food => {
    return food
})

console.log(foodVeggie)
  
  // Write your code here!
  
  //Expected result:
  /* [
      'Nothing like a good tempeh for dinner!',
      'Nothing like a good Beyond meat burguer for dinner!'
     ]
  */

