const getBadge = (projectData) => {
    if (projectData.license === 'MIT') {
        return '![MIT](https://shields.io/badge/license-MIT-green)';
    }
    else if (projectData.license === 'GPL') {
        return '![GPL](https://img.shields.io/badge/license-GPL-blue)';
    }
    else if (projectData.license === 'BSD') {
        return '![BSD](https://shields.io/badge/license-BSD-green)';
    }
    else {
        return '';
    };
};

const getLicense = (projectData) => {
    if (projectData.license === 'MIT') {
        return 'This application is covered under the MIT license. [Read More Here](https://choosealicense.com/licenses/mit/)';
    }
    else if (projectData.license === 'GPL') {
        return 'This application is covered under the GNU GPL license. [Read More Here](https://choosealicense.com/licenses/gpl-3.0/)';
    }
    else if (projectData.license === 'BSD') {
        return 'This application is covered under the BSD license. [Read More Here](https://choosealicense.com/licenses/bsd-2-clause/)';
    }
    else {
        return 'There is no license available for this application. [Read More Here](https://choosealicense.com/no-permission/)';
    };
};

module.exports = (projectData) => {
return `
# **${projectData.title}**

${getBadge(projectData)}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## **Description**
${projectData.description}
## **Installation**
${projectData.installation}
## **Usage**
${projectData.usage}
## **Contributing**
${projectData.contributing}
## **Tests**
${projectData.test}
## **License**
${getLicense(projectData)}
## **Questions**
If you have additional questions, find me at
[this Github link.](${projectData.questions})


`;
};