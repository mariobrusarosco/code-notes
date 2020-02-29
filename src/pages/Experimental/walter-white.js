const WW = require('walter-white')

const { Curry, Pipe, Compose } = WW.Utils
const { newBatch, cook, expect } = WW.Science

// Walter White Examples
newBatch(`Crazy-8's Batch`, () => {
  cook('wait 2 seconds and return 10 pounds of the little blue', async () => {
    const testPromise = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(10)
        }, 2000)
      })

    const product = await testPromise()

    expect(product).toBeAsPureAs(20)
  })

  cook('10 pounds of the little blue', () => {
    expect(10).toBeAsPureAs(11)
  })
  // cook('20 pounds of the little blue', () => {
  //   expect(10).toBeAsPureAs(10)
  // })
  // cook('30 pounds of the little blue', () => {
  //   expect('Heisenberg').toBeMadeOf(10)
  // })
  // cook('40 pounds of the little blue', () => {
  //   expect('Heisenberg').toBeMadeOf('bergasdas')
  // })
  // cook('50 pounds of the little blue', () => {
  //   expect('Heisenberg').toBeMadeOf('berg')
  // })
  // cook('60 pounds of the little blue', () => {
  //   expect('Heisenberg').toBeMadeOf(/berg/gim)
  // })
})

// Functional Utils
const makeFullName = Curry(
  (firstName, middleName, lastName) => `${firstName} ${middleName} ${lastName}`
)

const fullName = makeFullName('Mario', 'Brusarosco', 'de Almeida')
console.log(fullName)
