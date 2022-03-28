const inquirer = require('inquirer');
const fs = require('fs');
const generateDoc = require('./doc-template');

const promptUser = projectData => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions for your project:'
        },
        {
            type: 'input',
            name: 'usage',
            messsage: 'Enter the usage information for your project:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidelines for your project:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions for your project:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter the URL for your GitHub:'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Select the appropriate license:',
            choices: ['Badge 1', 'Badge 2']
        }

    ])
    .then(projectData => {
        theDoc = generateDoc(projectData);

        fs.writeFile('README.md', theDoc,  err => 
            {
                if (err) {
                  console.log(err);
                  return;
                }
                console.log('README.md created successfully.');

              })
        }
    )
    .catch()
};

promptUser();
