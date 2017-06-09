// Copyright 2013-2016, University of Colorado Boulder

/**
 * Model for the 'Blast' screen.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var Particle = require( 'BLAST/blast/model/Particle' );
  var inherit = require( 'PHET_CORE/inherit' );

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
