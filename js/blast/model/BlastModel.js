// Copyright 2013-2019, University of Colorado Boulder

/**
 * Model for the 'Blast' screen.
 *
 * @author Sam Reid
 */

import inherit from '../../../../phet-core/js/inherit.js';
import blast from '../../blast.js';
import Particle from './Particle.js';

/**
 * @param {Tandem} tandem
 * @constructor
 */
function BlastModel( tandem ) {
  this.particle = new Particle( tandem ); // @public
}

blast.register( 'BlastModel', BlastModel );

export default inherit( Object, BlastModel, {

  // @public
  reset: function() {
    this.particle.reset();
  },

  // @public animate the particle
  step: function( dt ) {
    this.particle.step( dt );
  }
} );