

function calculateAge(userInput){
  userInput>=18? console.log("You are old enough to drive") : console.log("You are left with " + (18 - userInput) + " years to drive.")
}

const exercise01 = () =>{
  let UserInput1 = prompt('Enter your age: ')
  calculateAge(UserInput1)

  let UserInput2 = prompt('Enter your age: ')
  calculateAge(UserInput2)
}

const exercise02 = () =>{
  let userInput = prompt('What day is today?');
  userInput.toLowerCase()
  switch(userInput){
    case 'sunday':
      console.log(userInput + " is a weekend")
      break;
    case 'monday':
      console.log(userInput + " is a working day")
      break;
    case 'tuesday':
      console.log(userInput + " is a working day")
      break;
    case 'wednesday':
      console.log(userInput + " is a working day")
      break;
    case 'thursday':
      console.log(userInput + " is a working day")
      break;
    case 'friday':
      console.log(userInput + " is a working day")
      break;    
    case 'saturday':
      console.log(userInput + " is a weekend")
      break; 
    default:
      console.log("Its not any day")

  }
}

const exercise03 = () =>{
  let userInput = prompt('Enter a month');
  userInput.toLowerCase()
  switch(userInput){
    case 'january':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    case 'february':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 28 days");
      break;
    case 'march':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    case 'april':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 30 days");
      break;
    case 'may':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    case 'june':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    case 'july':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 30 days");
      break;
    case 'august':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    case 'september':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 30 days");
      break;
    case 'october':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    case 'november':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 30 days");
      break;
    case 'december':
      console.log(userInput.charAt(0).toUpperCase() + userInput.slice(1) + " has 31 days");
      break;
    default:
      console.log("You have entered a wrong month")
  
  }
  
}

const exercise04 = () =>{
  const dog = {
    name: "Lucky", 
    legs: 4, 
    color: "Black", 
    age: 10,
    bark: true
  }
  console.log(dog)
  console.log("Name of dog is " + dog.name 
  + " and it has " + dog.legs
  + " legs. It is " + dog.color
  + " in color. It is " + dog.age + " years old"
  )
  dog.breed = "German Sheperd"
  dog.getDogInfo = () =>{ 
    console.log("Name of dog after adding properties is " + dog.name 
  + " and it has " + dog.legs
  + " legs. It is " + dog.color
  + " in color. It is " + dog.age + " years old of breed: "
  + dog.breed
  )}
  console.log(dog.getDogInfo());
}

const exercise05 = () =>{
  
  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  console.log(users["Alex"].skills)

  // Find the person with the most skills
  const personWithMostSkills = Object.entries(users).reduce((maxSkillsPerson, [name, user]) => {
    if (user.skills.length > maxSkillsPerson.skills.length) {
      return { name, skills: user.skills };
    } else {
      return maxSkillsPerson;
    }
  }, { name: '', skills: [] });

  console.log('Person with most skills:', personWithMostSkills);

  // Count logged-in users
  const loggedInUsersCount = Object.values(users).filter(user => user.isLoggedIn).length;
  console.log('Logged-in users count:', loggedInUsersCount);

  // Count users having greater than or equal to 50 points
  const usersWith50PlusPointsCount = Object.values(users).filter(user => user.points >= 50).length;
  console.log('Users with 50+ points count:', usersWith50PlusPointsCount);
  // Find MERN stack developers
  const mernStackDevelopers = Object.entries(users)
  .filter(([name, user]) => user.skills.includes('MongoDB') && user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node'))
  .map(([name, user]) => ({ name, skills: user.skills }));

  console.log('MERN stack developers:', mernStackDevelopers);

  // Set your name in the users object without modifying the original object
  const yourName = 'YourName';
  const usersWithYourName = { ...users, [yourName]: { skills: ['YourSkills'] } };

  console.log('Users with your name:', usersWithYourName);

  // Get all keys or properties of the users object
  const userKeys = Object.keys(users);
  console.log('Keys of the users object:', userKeys);

  // Get all values of the users object
  const userValues = Object.values(users);
  console.log('Values of the users object:', userValues);

  // Countries object
  const countries = {
  USA: {
    capital: 'Washington, D.C.',
    population: 331002651,
    languages: ['English']
  },
  India: {
    capital: 'New Delhi',
    population: 1380004385,
    languages: ['Hindi', 'English']
  },
  China: {
    capital: 'Beijing',
    population: 1444216107,
    languages: ['Mandarin']
  }
  };

  // Print country name, capital, populations, and languages
  Object.entries(countries).forEach(([country, data]) => {
  console.log(`Country: ${country}, Capital: ${data.capital}, Population: ${data.population}, Languages: ${data.languages.join(', ')}`);
  });
}

const exercise06 = () =>{

  const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]
  // Object literal called personAccount
  const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
    totalIncome: 0,
    totalExpense: 0,

    // Method to get account information
    accountInfo: function () {
      console.log(`
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Total Income: ${this.totalIncome}
        Total Expense: ${this.totalExpense}
        Account Balance: ${this.totalIncome - this.totalExpense}
      `);
    },

    // Method to add income
    addIncome: function (description, amount) {
      this.incomes.push({ description, amount });
      this.totalIncome += amount;
      console.log(`Income added: ${description} - $${amount}`);
      this.accountInfo();
    },

    // Method to add expense
    addExpense: function (description, amount) {
      this.expenses.push({ description, amount });
      this.totalExpense += amount;
      console.log(`Expense added: ${description} - $${amount}`);
      this.accountInfo();
    },

    // Method to get account balance
    accountBalance: function () {
      return this.totalIncome - this.totalExpense;
    },
  };

  // Questions 2 and 3
  const signUp = (user) => {
    const existingUser = users.find((u) => u.email === user.email);
    if (existingUser) {
      console.log('User already has an account.');
    } else {
      users.push(user);
      console.log('User added successfully.');
    }
  };

  const signIn = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      user.isLoggedIn = true;
      console.log('User signed in successfully.');
    } else {
      console.log('Invalid email or password.');
    }
  };

  // Questions 4a and 4b
  const rateProduct = (productId, userId, rating) => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      product.ratings.push({ userId, rate: rating });
      console.log('Product rated successfully.');
    } else {
      console.log('Product not found.');
    }
  };

  const averageRating = (productId) => {
    const product = products.find((p) => p._id === productId);
    if (product && product.ratings.length > 0) {
      const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
      const average = totalRating / product.ratings.length;
      console.log(`Average rating for ${product.name}: ${average}`);
      return average;
    } else {
      console.log('Product not found or no ratings available.');
      return null;
    }
  };

  // Question 5
  const likeProduct = (productId, userId) => {
    const product = products.find((p) => p._id === productId);
    if (product) {
      const likedIndex = product.likes.indexOf(userId);
      if (likedIndex === -1) {
        product.likes.push(userId);
        console.log('Product liked.');
      } else {
        product.likes.splice(likedIndex, 1);
        console.log('Like removed.');
      }
    } else {
      console.log('Product not found.');
    }
  };

  // Example usage
  signUp({
    _id: 'newUserId',
    username: 'NewUser',
    email: 'newuser@example.com',
    password: 'password123',
    createdAt: '08/01/2022 11:00 AM',
    isLoggedIn: false,
  });

  signIn('newuser@example.com', 'password123');

  rateProduct('eedfcf', 'newUserId', 4);
  averageRating('eedfcf');

  likeProduct('aegfal', 'newUserId');
  likeProduct('aegfal', 'newUserId');

  
}

const exercise07 = () =>{
  
  //  1
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  //  2
  function addNumbers(num1, num2) {
    return num1 + num2;
  }

  //  3
  function areaOfCircle(radius) {
    const pi = Math.PI;
    return pi * radius * radius;
  }

  //  4
  function convertCelciusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  //  5
  function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Convert height to meters
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi;
  }

  function checkBMIStatus(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  //  6
  function checkSeason(month) {
    switch (month.toLowerCase()) {
      case 'december':
      case 'january':
      case 'february':
        return 'Winter';
      case 'march':
      case 'april':
      case 'may':
        return 'Spring';
      case 'june':
      case 'july':
      case 'august':
        return 'Summer';
      case 'september':
      case 'october':
      case 'november':
        return 'Autumn';
      default:
        return 'Invalid month';
    }
  }

  console.log(fullName('John', 'Doe'));
  console.log(addNumbers(5, 10));
  console.log(areaOfCircle(5));
  console.log(convertCelciusToFahrenheit(20));
  const bmi = calculateBMI(70, 175);
  console.log(`BMI: ${bmi}, Status: ${checkBMIStatus(bmi)}`);
  console.log(checkSeason('December'));

}

const exercise08 = () =>{
  //  1
  function solveQuadratic(a = 0, b = 0, c = 0) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { x1, x2 };
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      return { x };
    } else {
      return { };
    }
  }

  //  2
  function printArray(arr) {
    arr.forEach(value => console.log(value));
  }

  //  3
  function showDateTime() {
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    console.log(formattedDate);
  }

  //  4
  function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;
    console.log(`x => ${x}, y => ${y}`);
  }

  //  5
  function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }

  //  6
  function capitalizeArray(arr) {
    return arr.map(value => value.toUpperCase());
  }

  //  7
  function addItem(arr, item) {
    return [...arr, item];
  }

  //  8
  function removeItem(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  //  9
  function evensAndOdds(num) {
    let evens = 0;
    let odds = 0;
    const numStr = num.toString();
    for (let digit of numStr) {
      if (parseInt(digit) % 2 === 0) {
        evens++;
      } else {
        odds++;
      }
    }
    console.log(`The number of odds are ${odds}.`);
    console.log(`The number of evens are ${evens}.`);
  }

  //  10
  function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
  }

  //  11
  function userIdGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let userId = '';
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      userId += characters[randomIndex];
    }
    return userId;
  }

  console.log(solveQuadratic());
  console.log(solveQuadratic(1, 4, 4));
  console.log(solveQuadratic(1, -1, -2));
  console.log(solveQuadratic(1, 7, 12));
  console.log(solveQuadratic(1, 0, -4));
  console.log(solveQuadratic(1, -1, 0));
  printArray([1, 2, 3, 4, 5]);
  showDateTime();
  swapValues(3, 4);
  console.log(reverseArray([1, 2, 3, 4, 5]));
  console.log(capitalizeArray(['a', 'b', 'c']));
  console.log(addItem([1, 2, 3], 4));
  console.log(removeItem([1, 2, 3, 4], 2));
  evensAndOdds(100);
  console.log(sum(1, 2, 3));
  console.log(userIdGenerator());

  
}

const exercise09 = () =>{
  //  1
  function userIdGeneratedByUser() {
    const numberOfCharacters = parseInt(prompt('Enter the number of characters:'));
    const numberOfIds = parseInt(prompt('Enter the number of ids:'));
    let generatedIds = '';
    for (let i = 0; i < numberOfIds; i++) {
      let userId = '';
      for (let j = 0; j < numberOfCharacters; j++) {
        const randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26));
        userId += Math.random() < 0.5 ? randomChar : randomChar.toUpperCase();
      }
      generatedIds += userId + '\n';
    }
    console.log(generatedIds);
  }

  // Example usage
  userIdGeneratedByUser();

  //  2
  function generateColors(type, count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
      if (type === 'hexa') {
        const hexColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        colors.push(hexColor);
      } else if (type === 'rgb') {
        const rgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        colors.push(rgbColor);
      }
    }
    return count === 1 ? colors[0] : colors;
  }

  // Usage
  console.log(generateColors('hexa', 3));
  console.log(generateColors('hexa', 1));
  console.log(generateColors('rgb', 3));
  console.log(generateColors('rgb', 1));

  //  3
  function shuffleArray(arr) {
    const shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  //  4
  function factorial(num) {
    if (num < 0) {
      return 'Factorial is not defined for negative numbers.';
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  //  5
  function isEmpty(param) {
    return param === undefined || param === null || param === '';
  }

  //  6
  function average(arr) {
    if (arr.length === 0) {
      return 'Array is empty. Cannot calculate average.';
    }
    const nonNumberItems = arr.filter(item => typeof item !== 'number');
    if (nonNumberItems.length > 0) {
      return 'Array contains non-number items. Cannot calculate average.';
    }
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum / arr.length;
  }

  // Usage
  console.log(shuffleArray([1, 2, 3, 4, 5]));
  console.log(factorial(5));
  console.log(isEmpty(''));
  console.log(average([1, 2, 3, 'four', 5])); // Returns feedback about non-number items

}