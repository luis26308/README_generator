// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## License
  ${data.license}

  ## Test
  ${data.license}
`
 ` ## Questions
  GitHub: @${data.username}`

  `Email: ${data.email}`


;
}

module.exports = generateMarkdown;
