const treeShakingExample = () => {
  console.log(`
        This is just a function that must be called to prove that Tree Shaking is working. 
        Because It is defined at the same file where another function is declared, but not called. 
        So, because this function gets called it's not supposed to be removed from the bundle. 
        The other  one is declared but does not get called.
        So, it must be removed from the bundle`)
}

const deadCodeFunction = () => {
  console.log('This is just a dead code function: #2')
}

export { treeShakingExample, deadCodeFunction }
