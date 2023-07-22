import projects from './projects.js'

// Function to generate project cards
function generateProjectCards() {
  const projectCardsContainer = document.getElementById('projectCards')

  projects.forEach((project) => {
    const projectCard = document.createElement('div')
    projectCard.classList.add('project-card')

    const projectName = document.createElement('h3')
    projectName.textContent = project.name

    const projectLink = document.createElement('a')

    projectLink.textContent = 'Live Demo'
    projectLink.href = `https://yousifabozid.github.io/50-Projects-In-50-Days/${project.link}`

    projectCard.appendChild(projectName)
    projectCard.appendChild(projectLink)

    projectCardsContainer.appendChild(projectCard)
  })
}

// Call the function to generate project cards when the page is loaded
document.addEventListener('DOMContentLoaded', generateProjectCards)
