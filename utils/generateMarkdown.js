// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![javascript](https://img.shields.io/badge/javascript-100%25-blue)

  # ${data.title}

  ## Table Of Contents
  - [Description](#Description)  
  - [Installation](#installation)  
  - [Usage](#Usage)  
  - [License](#License)  
  - [Questions](#Questions)  

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ![Demo gif]{demo.gif}

  ## License
  ${data.license}

  ## Questions
  For any questions please reach me by Github or by email.  

  GitHub: http://www.github.com/${data.username}  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
