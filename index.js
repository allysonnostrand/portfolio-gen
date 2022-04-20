var inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Hello! What is your name?',
      name: 'userName'

    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    
    },
    {
      type: 'input',
      message: 'What would you like to say in your bio?',
      name: 'bio',

    },
    {
      type: 'input',
      message: 'What is your LinkedIn Url?',
      name: 'linkedIn',

    },
    {
      type: 'input',
      message: 'What is your GitHub Url?',
      name: 'gitHub',

    },
  
  ])
  .then((answers) => {
    console.log(answers)
    fs.writeFile("user.json",JSON.stringify(answers),(err,data)=>{
        if(err){
            throw err
        }
    })
  });