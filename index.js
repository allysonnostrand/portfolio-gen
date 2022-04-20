const fs = require('fs')
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
    let content = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${answers.userName}</h1>
    <h2>${answers.location}</h2>
    <h3>${answers.bio}</h3>
    <h4>${answers.linkedIn}</h4>
    <h5>${answers.gitHub}</h5>
    
</body>
</html>`

    fs.writeFile('portfolio.html',(content),(err,data)=>{
        if(err){
            throw err
        }
    })
  });