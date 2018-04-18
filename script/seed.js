/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db')
const {Project} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!
  let imgPath = '../../public/images/'
  const projects = await Promise.all([
    Project.create({title: 'Chat-Random',
      stack: ['Node.js', 'JavaScript', 'React-Redux', 'HTML5', 'SCSS', 'Socket.io'],
      images: [`${imgPath}PortfolioSitePic.jpg`, `${imgPath}ChatRandomHome.jpg`, `${imgPath}ChatRandomChatting.jpg`],
      summary: "Chat with a stranger online! Chat Random is a messenger that leverages " +
        "the application's state to manage sessions, uses, and messages. Upon entering " +
        "a username, users are paired with other available users and they are able to chat away"}),
    Project.create({title: 'toDo',
      stack: ['Node.js', 'JavaScript', 'React-Redux', 'HTML5', 'SCSS', 'PostgreSQL', 'Express', 'D3.js'],
      images: [],
      summary: "Track your daily list of to do's with a simple and clean design. " +
          "Also, includes descriptive statistics on your productivity."}),
    Project.create({title: 'IdeaStorm',
      stack: ['Node.js', 'JavaScript', 'React-Redux', 'HTML5', 'SCSS', 'PostgreSQL, Express, D3.js'],
      images: [],
      summary: "A real-time collaboration tool that simplifies and facilitates brainstorming " +
          "sessions across team members. Users are able to remotely share, categorize, and vote" +
          "on their deas through virtual whiteboard sessions."})
  ])
  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${projects.length} projects`)
  console.log(`seeded successfully`)
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
