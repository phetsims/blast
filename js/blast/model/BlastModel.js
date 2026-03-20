// Copyright 2013-2026, University of Colorado Boulder
/**
 * Model for the 'Blast' screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Particle from './Particle.js';

class BlastModel {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    // @public
    this.particle = new Particle( tandem );
  }

  /**
   * Reset the model.
   * @public
   */
  reset() {
    this.particle.reset();
  }

  /**
   * Move forward in time by the specified amount.
   * @param {number} dt
   * @public
   */
  step( dt ) {
    this.particle.step( dt );
  }
}

export default BlastModel;
