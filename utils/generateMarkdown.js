// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![javascript](https://img.shields.io/badge/javascript-100%25-blue)
  ![License]https://img.shields.io/badge/License-MIT-blue)

  # ${data.title}

  ## Table Of Contents
  [Description](#Description)\
  [installation](#installation)\
  [License](#License)\
  [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Questions

  GitHub: @${data.username}\
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
