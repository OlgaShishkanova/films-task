// jest.polyfills.js
/**
 * @note The block below contains polyfills for Node.js globals
 * required for Jest to function when running JSDOM tests.
 *
 * Consider migrating to a more modern test runner if
 * you don't want to deal with this.
 */
 
const { TextDecoder, TextEncoder } = require('node:util')
 
Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
})