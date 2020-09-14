// Copyright 2013-2020, University of Colorado Boulder

/**
 * Model for the 'Blast' screen.
 *
 * @author Sam Reid
 */

import blast from '../../blast.js';
import Particle from './Particle.js';

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