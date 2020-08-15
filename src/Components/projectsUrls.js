export const imgPath = 'https://antably.s3.eu-west-3.amazonaws.com/portfolio'

export const projectsUrls = [
  {
    name: "Guest-book",
    url: "https://guest-book.netlify.app/",
    code: "https://github.com/MostafaFarag14/Guest-book",
    image: `${imgPath}/guest-book.png`,
    tools: [
      `${imgPath}/react.png`,
      `${imgPath}/nodejs.png`,
      `${imgPath}/mongoDb.png`,
      `${imgPath}/bootstrap-solid.svg`
    ],
    description: `A full stack app with React,
     NodeJs and MongoDB that enables users 
     to register and login to write a message , 
     reply to others messages ,
     edit or delete their own messages
    `
  },
  {
    name: "smart-brain",
    url: "https://idiot-brain.netlify.app/",
    code: "https://github.com/MostafaFarag14/smart-brain",
    image: `${imgPath}/smart_brain.png`,
    tools: [
      `${imgPath}/react.png`,
      `${imgPath}/nodejs.png`,
      `${imgPath}/postgres.png`,
      `${imgPath}/bootstrap-solid.svg`,
      `${imgPath}/wide_Clarifai_Logo_FC.png`
    ],
    description: `A full stack app with React, NodeJs and PostgreSQL that enables users to register and login to detect faces in their photos using
    Clarifai API by getting faces positions in the submitted image , then creates list of empty divs with borders to contain these faces
    `
  },
  {
    name: "Movie-App",
    url: "https://ree-action.netlify.com/",
    code: "https://github.com/MostafaFarag14/Movie-App.git",
    image: `${imgPath}/reeaction.png`,
    tools: [
      `${imgPath}/react.png`,
      `${imgPath}/bootstrap-solid.svg`
    ],
    description: `A movie browser react app that interacts with The Movie DB API to get trending,
     top rated, popular and upcoming movies. also it has a live search for a certain movie. 
     every movie has a details such as rating and trailer that can be viewed by clicking it. 
     a movie overview can be shown by hovering the movie. Also there is a pagination to view different pages.
    `
  },
  {
    name: "Jammming",
    url: "https://jammming-hits.netlify.com/",
    code: "https://github.com/MostafaFarag14/Jammming-react-app.git",
    image: `${imgPath}/jamming.png`,
    tools: [
      `${imgPath}/react.png`,
      `${imgPath}/css.png`

    ],
    description: `A react app that interacts with Spotify API to allow users to search the Spotify library,
     create a custom playlist by adding songs from the search results, then save it to their Spotify account.`
  },
  {
    name: "ShooterGame",
    url: "https://mostafafarag14.github.io/shooter-game/",
    code: "https://github.com/MostafaFarag14/shooter-game.git",
    image: `${imgPath}/shooter.png`,
    tools: [
      `${imgPath}/javascript.png`,
      `${imgPath}/html.png`,
      `${imgPath}/css.png`
    ],
    description: `It's a shooting game that allows the user to select 3 levels and 3 characters.
    each level has a different environment and spawning frequency of 2 different kinds enemies.
    Player has score and health and must reach the end to win`
  },
  {
    name: "Calculator",
    url: "https://mostafafarag14.github.io/calculator/",
    code: "https://github.com/MostafaFarag14/calculator.git",
    image: `${imgPath}/calculator.png`,
    tools: [
      `${imgPath}/react.png`,
      `${imgPath}/bootstrap-solid.svg`
    ],
    description: `A simple calculator using React`
  }
  ,
  {
    name: "PianoPlayer",
    url: "https://mostafafarag14.github.io/Piano-player/",
    code: "https://github.com/MostafaFarag14/Piano-player.git",
    image: `${imgPath}/piano.png`,
    tools: [
      `${imgPath}/javascript.png`
    ],
    description: `A piano player app which i have added functionality to it using javascript and made it 
    playable using mouse or keyboard keys by mapping each key or mouse click to certain audio`
  },
  {
    name: "ChoreDoor",
    url: "https://mostafafarag14.github.io/Chore-Door/",
    code: "https://github.com/MostafaFarag14/Chore-Door.git",
    image: `${imgPath}/choreDoor.png`,
    tools: [
      `${imgPath}/javascript.png`,
      `${imgPath}/html.png`,
      `${imgPath}/css.png`
    ],
    description: `A game using html and javascript. There is a Bot hiding behind one of 3 doors,
    Your mission is to open two Consecutive doors without running into the ChoreBot to win.
    See if you can score a winning streak!`
  },
  {
    name: "Memory Allocation",
    code: "https://github.com/MostafaFarag14/Memory-allocation.git",
    image: `${imgPath}/allocation.png`,
    description: `A Desktop App built using c# and winForms to simulate allocating of proccesses algorithms`,
    tools: [
      `${imgPath}/cSharp.png`,
      `${imgPath}/wide_winform.png`
    ]
  },
  {
    name: "DES Function",
    code: "https://github.com/MostafaFarag14/DES-Function.git",
    image: `${imgPath}/round_function.jpg`,
    description: `A Console App with C++ to implement DES Function`,
    tools: [
      `${imgPath}/cplpl.png`,
    ]
  },
  {
    name: "Scanner And Parser",
    code: "https://github.com/MostafaFarag14/Parser.git",
    image: `${imgPath}/parser.jpg`,
    description: `Scanner read the input from a file containing sample TINY code,
    then identifies the tokens and passes that list of tokens to the parser to get 
    Recognized structures and saves it to a text file` ,
    tools: [
      `${imgPath}/cplpl.png`,
    ]
  },
  {
    name: "Job scheduler",
    code: "https://github.com/MostafaFarag14/Job-scheduler.git",
    image: `${imgPath}/Job scheduler.png`,
    description: `A Console c++ app implements scheduling algorithms like FCFS, higher priority first , SJF and round robin`,
    tools: [
      `${imgPath}/cplpl.png`,
    ]

  }


]