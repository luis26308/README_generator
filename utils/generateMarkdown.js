// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![javascript](https://img.shields.io/badge/javascript-100%25-blue)

  # ${data.title}

  ## Table Of Contents
  - [Description](#Description)  
  - [installation](#installation)  
  - [License](#License)  
  - [Questions](#Questions)  

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  <iframe src="https://drive.google.com/file/d/1IYYtLGar98Tm6i_D5X8hj_qkcAByLpjz/preview" width="640" height="480"></iframe>

  ## License
  ${data.license}

  ## Questions
  For any questions please reach me by Github or by email.  

  GitHub: http://www.github.com/${data.username}  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
