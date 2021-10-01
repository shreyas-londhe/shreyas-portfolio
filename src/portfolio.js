const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shryasss.github.io/shreyas-portfolio',
  title: 'SL.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shreyas Londhe',
  role: 'Web3 Developer',
  description:
    'My passion for software lies with dreaming up ideas and making them come true with elegant interfaces.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/shreyas-londhe-999983192/',
    github: 'https://github.com/shryasss',
    twitter: 'https://twitter.com/shryasss',
    instagram: 'https://www.instagram.com/shryasss/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Crypto-Twitter',
    description:
      'A decentralized Twitter built using Solidity as backend and React as frontend.',
    stack: ['Solidity', 'JavaScript', 'React', 'Web3Js'],
    sourceCode: 'https://github.com/shryasss/crypto-twitter-backend',
    livePreview: 'https://github.com',
  },
  {
    name: 'My-Epic-NFT',
    description: 'A Web3 app to mint your own unique NFTs',
    stack: ['Solidity', 'JavaScript', 'React', 'Web3Js'],
    sourceCode: 'https://github.com/shryasss/my-epic-nft',
    livePreview: 'https://github.com',
  },

  {
    name: 'Wave-Portal',
    description:
      'My first Web3 app which registers 👋s from various users on the blockchain',
    stack: ['Solidity', 'JavaScript', 'React', 'Web3Js'],
    sourceCode: 'https://github.com/shryasss/wave-portal',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Solidity',
  'Truffle',
  'Web3Js',
  'React',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'shreyas_londhe@outlook.com',
}

export { header, about, projects, skills, contact }
