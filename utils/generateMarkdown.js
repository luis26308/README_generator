// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![javascript](https://img.shields.io/badge/javascript-100%25-blue)
  ![license](https://shields.io/category/license-${data.license})

  # ${data.title}

  ## Table Of Contents
  [Description](#Description)
  [installation](#installation)
  [License](#License)
  [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Test
  ${data.license}

  ## Questions

  ### GitHub: @${data.username}
  
  ### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
