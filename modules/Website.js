/**
 * Website application module providing singleton access to core site functionality.
 * @module Website
 */

import { Carousel } from './Carousel.js'

/**
 * Singleton class managing the website application.
 * Handles initialization of components and provides global access to the application instance.
 */
export class Website {
  /**
   * Singleton instance of the Website.
   * @static @private @type {Website}
   */
  static #the = null

  /**
   * The hero carousel instance for the main page carousel
   * @private @type {Carousel}
   */
  #heroCarousel = new Carousel('#hero-carousel')

  /**
   * Initializes the website components.
   * @private
   */
  #init() {
    try {
      this.#heroCarousel.init()
    } catch (err) {
      console.error(err)
    }
    document.body.style.opacity = '1'
  }

  /**
   * Get the singleton instance of the Website.
   * @static @returns {Website} The singleton Website instance
   * @throws {Error} If bootstrap() has not been called first
   */
  static get the() {
    if (!Website.#the) throw new Error('bootstrap() must be completed first!')
    return Website.#the
  }

  /**
   * Boots up the website application and sets up DOM event listeners.
   * Can only be called once; subsequent calls will log an error.
   */
  static bootstrap() {
    if (Website.#the) console.error('bootstrap() already completed!')
    Website.#the = new Website()
    self.addEventListener('DOMContentLoaded', () => Website.the.#init())
  }
}
