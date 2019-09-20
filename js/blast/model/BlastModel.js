// Copyright 2013-2019, University of Colorado Boulder

/**
 * Model for the 'Blast' screen.
 *
 * @author Sam Reid
 */
define( require => {
  'use strict';

  // modules
  const blast = require( 'BLAST/blast' );
  const inherit = require( 'PHET_CORE/inherit' );
  const Particle = require( 'BLAST/blast/model/Particle' );

  /**
   * @param {Tandem} tandem
   * @constructor
   */
  function BlastModel( tandem ) {
    this.particle = new Particle( tandem ); // @public
  }

  blast.register( 'BlastModel', BlastModel );

  return inherit( Object, BlastModel, {

    // @public
    reset: function() {
      this.particle.reset();
    },

    // @public animate the particle
    step: function( dt ) {
      this.particle.step( dt );
    }
  } );
} );
