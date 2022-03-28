const inquirer = require('inquirer');
const fs = require('fs');
const generateDoc = require('./src/doc-template');

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
            message: 'Enter the usage information for your project:'
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
            message: 'Enter the URL for your GitHub (include https://):'
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'Select the appropriate license:',
            choices: ['MIT', 'GPL', 'BSD']
        }

    ])
    .then(projectData => {
        theDoc = generateDoc(projectData);

        fs.writeFile('./dist/README.md', theDoc,  err => 
            {
                if (err) {
                  console.log(err);
                  return;
                }
                console.log(`
███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗███████╗██╗
██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝██║
███████╗██║   ██║██║     ██║     █████╗  ███████╗███████╗██║
╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║╚════██║╚═╝
███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║███████║██╗
............................................................
Your readme file has been generated successfully!
Find your file at: ./dist/README.md
                `);

              })
        }
    )
    .catch(err => {
        console.log(err);
      });
};

console.log(`
██████  ███████  █████  ██████  ███    ███ ███████                           
██   ██ ██      ██   ██ ██   ██ ████  ████ ██                                
██████  █████   ███████ ██   ██ ██ ████ ██ █████                             
██   ██ ██      ██   ██ ██   ██ ██  ██  ██ ██                                
██   ██ ███████ ██   ██ ██████  ██      ██ ███████                           
                                                                             
                                                                             
 ██████  ███████ ███    ██ ███████ ██████   █████  ████████  ██████  ██████  
██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██    ██ ██   ██ 
██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    ██    ██ ██████  
██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██    ██ ██   ██ 
 ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██     ██████  ██   ██ 
  
 
`);


promptUser();
