const experienceData = [
  {
    company: 'Turing School of Software and Design',
    position: 'Front-End Engineering Student',
    location: 'Remote',
    tenure: 'June 2020 - March 2021',
    description: 'Invested over 1,500 hours in a fully immersive, project-oriented front-end focused program. Built, tested and deployed over 15 dynamic web applications using a variety of tools and technologies. A Student Leadership Committee representative, and won 1st place in the school-wide Demo Competition.'
  },
  {
    company: 'Thesis',
    position: 'Conversion Rate Optimization Specialist',
    location: 'Brooklyn, NY',
    tenure: 'June 2018 - February 2020',
    description: 'Managed landing page conversion rate optimization for eight clients. Partnered with Thesis’ design and engineering teams to ensure smooth implementation of landing pages and features built to drive conversion. Worked with lead front-end engineers to develop a company-wide QA process for new landing pages and features.'
  },
  {
    company: 'Jackson Hole Mountain Resort',
    position: 'Rental Shop Manager',
    location: 'Jackson, WY',
    tenure: 'November 2015 - March 2018',
    description: 'Directed the operations and business of three retail and rental ski shops that each had a seasonal revenue of approximately $500,000. Hired, trained, scheduled and supervised a staff of 20 full-time and part-time employees.'
  }
]

const educationData = [
  {
    school: 'St. Lawrence University',
    location: 'Canton, NY',
    degree: 'B.A. with majors in English and Environmental Studies',
    tenure: 'August 2011 - May 2015'
  }
]

const projectData = [
  {
    name: 'Pack Smart',
    repository: 'https://github.com/Pack-Smart/pack-smart-fe',
    link: 'https://packsmart.herokuapp.com/',
    description: 'Customizable and interactive packing lists generated from user quiz submissions relevant to their upcoming trips. Users can save, view, edit, and delete past packing lists. Built with a backend team, and JavaScript, React, Redux, SCSS and tested using Cypress and Jest.'
  },
  {
    name: 'National Parkfinder',
    repository: 'https://github.com/jaypeasee/national-parkfinder',
    link: 'https://national-parkfinder.herokuapp.com/',
    description: 'A library for all U.S. National Parks with the functionality to add to/manage a bucket list and visited list. Built with the NPS API, TypeScript, React, and SCSS and tested using Jest.'
  },
  {
    name: 'Sorting Hat Quiz',
    repository: 'https://github.com/jaypeasee/sorting-hat-quiz',
    link: 'https://pure-everglades-20792.herokuapp.com/',
    description: 'A personality quiz to evaluate which Hogwarts House you belong in. Built with a Harry Potter API, JavaScript, React, SCSS and tested using Jest.'
  }
]

const skillsData = {
  programmingLanguages: [
    'JavaScript,',
    'TypeScript,',
    'SCSS & CSS,',
    'HTML'
  ],
  frameworksLibraries: [
    'React,',
    'Hooks,',
    'Router,',
    'Redux,',
    'Cypress,',
    'React Testing Library,',
    'Jest,',
    'Mocha,',
    'Chai'
  ],
  otherSkills: [
    'API network requests,',
    'Git version control,',
    'Github,',
    'Heroku,',
    'Travis CI,',
    'Google Analytics'
  ]
}

export { experienceData, educationData, projectData, skillsData }