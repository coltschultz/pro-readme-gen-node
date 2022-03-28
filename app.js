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

        fs.writeFile('README.md', theDoc,  err => 
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
`);

              })
        }
    )
    .catch(err => {
        console.log(err);
      });
};

console.log(`
8888888b.                  888     .d888         888 d8b                     
888   Y88b                 888    d88P"          888 Y8P                     
888    888                 888    888            888                         
888   d88P .d88b.  888d888 888888 888888 .d88b.  888 888  .d88b.             
8888888P" d88""88b 888P"   888    888   d88""88b 888 888 d88""88b            
888       888  888 888     888    888   888  888 888 888 888  888            
888       Y88..88P 888     Y88b.  888   Y88..88P 888 888 Y88..88P            
888        "Y88P"  888      "Y888 888    "Y88P"  888 888  "Y88P"             
                                                                             
                                                                             
                                                                             
 .d8888b.                                             888                    
d88P  Y88b                                            888                    
888    888                                            888                    
888         .d88b.  88888b.   .d88b.  888d888 8888b.  888888 .d88b.  888d888 
888  88888 d8P  Y8b 888 "88b d8P  Y8b 888P"      "88b 888   d88""88b 888P"   
888    888 88888888 888  888 88888888 888    .d888888 888   888  888 888     
Y88b  d88P Y8b.     888  888 Y8b.     888    888  888 Y88b. Y88..88P 888     
 "Y8888P88  "Y8888  888  888  "Y8888  888    "Y888888  "Y888 "Y88P"  888                                                                                   
`);


promptUser();
