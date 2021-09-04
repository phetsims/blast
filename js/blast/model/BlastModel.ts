// Copyright 2013-2021, University of Colorado Boulder
/**
 * Model for the 'Blast' screen.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import blast from '../../blast.js';
import Particle from './Particle.js';

const x: number = 'hello';
console.log( x );

class BlastModel {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {
    this.particle = new Particle( tandem ); // @public
  }

  // @public
  reset() {
    this.particle.reset();
  }

  // @public animate the particle
  step( dt ) {
    this.particle.step( dt );
  }
}

blast.register( 'BlastModel', BlastModel );
export default BlastModel;