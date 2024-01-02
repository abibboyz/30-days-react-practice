const runScript = () =>{
  // // syntax
  // const arr = Array()
  // // or
  // // let arr = new Array()
  // console.log(arr) // []

  // syntax
  // This the most recommended way to create an empty list
  const arr = []
  console.log(arr)

}

const arrayWithVariables = () =>{
  const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
  const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
  const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
  const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
  const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
  const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

  // Print the array and its length

  console.log('Numbers:', numbers)
  console.log('Number of numbers:', numbers.length)

  console.log('Fruits:', fruits)
  console.log('Number of fruits:', fruits.length)

  console.log('Vegetables:', vegetables)
  console.log('Number of vegetables:', vegetables.length)

  console.log('Animal products:', animalProducts)
  console.log('Number of animal products:', animalProducts.length)

  console.log('Web technologies:', webTechs)
  console.log('Number of web technologies:', webTechs.length)

  console.log('Countries:', countries)
  console.log('Number of countries:', countries.length)
}

const arrayUsingSplit = () =>{
  let js = 'JavaScript'
  console.log("Text --> " + js)
  const charsInJavaScript = js.split('')

  console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

  let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
  console.log("Text --> " + companiesString)
  const companies = companiesString.split(',')

  console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
  let txt =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log("Text --> " + txt)
    const words = txt.split(' ')

  console.log(words)
  // the text has special characters think how you can just get only the words
  // ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]
}

const accessArrayUsingIndex = () =>{
  const fruits = ['banana', 'orange', 'mango', 'lemon']
  let firstFruit = fruits[0] // we are accessing the first item using its index

  console.log(firstFruit) // banana

  secondFruit = fruits[1]
  console.log(secondFruit) // orange

  let lastFruit = fruits[3]
  console.log(lastFruit) // lemon
  // Last index can be calculated as follows

  let lastIndex = fruits.length - 1
  lastFruit = fruits[lastIndex]

  console.log(lastFruit) // lemon

  const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbers

  console.log(numbers.length) // => to know the size of the array, which is 6
  console.log(numbers) // -> [0, 3.14, 9.81, 37, 98.6, 100]
  console.log(numbers[0]) //  -> 0
  console.log(numbers[5]) //  -> 100

  lastIndex = numbers.length - 1
  console.log(numbers[lastIndex]) // -> 100

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ] // List of web technologies
  
  console.log(webTechs) // all the array items
  console.log(webTechs.length) // => to know the size of the array, which is 7
  console.log(webTechs[0]) //  -> HTML
  console.log(webTechs[6]) //  -> MongoDB
  
  lastIndex = webTechs.length - 1
  console.log(webTechs[lastIndex]) // -> MongoDB

}

const arrayOperations = () =>{
  const arr = Array(5);
  console.log(arr)
  arr.fill('A')
  console.log(arr)

  //other way
  const arr1 = Array(5).fill('B')
  console.log(arr1)
  
  //concat two arrays
  const concatArray = arr.concat(arr1)
  console.log("concatination of two arrays" + concatArray)

  //modify last element
  let lastIndex = concatArray.length - 1
  concatArray[lastIndex] = 'C'
  console.log("Replace last index element with C  --> " + concatArray)
  console.log("Find index of A, B, C ==> " + concatArray.indexOf('A') + ", " + concatArray.indexOf('B') + ", " + concatArray.indexOf('C'))
}

const listElement = () => {
  // let us check if a banana exist in the array

  const fruits = ['banana', 'orange', 'mango', 'lemon']
  console.log(fruits)
  let index = fruits.indexOf('banana') // 0
  console.log("The index of banana is --> " + index)

  if (index != -1) {
    console.log('This fruit does exist in the array')
  } else {
    console.log('This fruit does not exist in the array of index -1')
  }
  // This fruit does exist in the array

  // we can use also ternary here
  index != -1
    ? console.log('This fruit does exist in the array')
    : console.log('This fruit does not exist in the array')

  // let us check if a avocado exist in the array
  let indexOfAvocado = fruits.indexOf('avocado') // -1, if the element not found index is -1
  if (indexOfAvocado != -1) {
    console.log('This fruit does exist in the array')
  } else {
    console.log('This fruit does not exist in the array')
  }
  // This fruit does not exist in the array
}

const switchCondition =() => {
  let weather = 'cloudy'
  switch (weather) {
    case 'rainy':
      console.log('You need a rain coat.')
      break
    case 'cloudy':
      console.log('It might be cold, you need a jacket.')
      break
    case 'sunny':
      console.log('Go out freely.')
      break
    default:
      console.log(' No need for rain coat.')
  }

  // Switch More Examples
  let dayUserInput = prompt('What day is today ?')
  let day = dayUserInput.toLowerCase()

  switch (day) {
    case 'monday':
      console.log('Today is Monday')
      break
    case 'tuesday':
      console.log('Today is Tuesday')
      break
    case 'wednesday':
      console.log('Today is Wednesday')
      break
    case 'thursday':
      console.log('Today is Thursday')
      break
    case 'friday':
      console.log('Today is Friday')
      break
    case 'saturday':
      console.log('Today is Saturday')
      break
    case 'sunday':
      console.log('Today is Sunday')
      break
    default:
      console.log('It is not a week day.')
  }
}

const loops = () =>{
  const nums = [1, 2, 3, 4, 5]
  console.log(nums)
  console.log('The Code below can reverse an array.')
  const lastIndex = nums.length - 1
  const newArray = []
  for (let i = lastIndex; i >= 0; i--) {
    newArray.push(nums[i])
  }
  console.log(newArray)

  console.log("Using for Of loop---->")
  const numbers = [1, 2, 3, 4, 5]
  for (const number of numbers) {
    console.log(number)
  }

  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
  for (const country of countries) {
    console.log(country.toUpperCase())
  }
  console.log('----------------------')

  console.log('Using for each ------->')
  countries.forEach((country, i, arr) => {
    console.log(i, country.toLowerCase())
  })
  console.log('----------------------')

  console.log('Using for in ------->')
  const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }
  console.log('----------------------')
}


const objectDemo = () => {
  const rectangle = {
    length: 20,
    width: 20,
  }
  console.log(rectangle) // {length: 20, width: 20}
  
  let person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    isMarried: true,
  }
  console.log(person)


  person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    getFullName: function () {
      return `${this.firstName}${this.lastName}`
    },
    'phone number': '+3584545454545',
  }
  
  // accessing values using .
  console.log(person.firstName)
  console.log(person.lastName)
  console.log(person.age)
  console.log(person.location)
  
  // value can be accessed using square bracket and key name
  console.log(person['firstName'])
  console.log(person['lastName'])
  console.log(person['age'])
  console.log(person['age'])
  console.log(person['location']) //undefined for when not found
  
  // for instance to access the phone number we only use the square bracket method
  console.log(person['phone number'])
}