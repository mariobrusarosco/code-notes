// @ts-check
// USING JS WITH TYPESCRIPT BEHAVIOR

/**
 * @function greetUser
 * @param {string} username
 * @return {string}
 */

function greetUser(username) {
  return username
}

const UserWelcomeDisplay = () => {
  return <div>Hello, {greetUser('John Doe')}</div>
}

export default UserWelcomeDisplay
