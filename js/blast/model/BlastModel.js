// Copyright 2013-2016, University of Colorado Boulder

/**
 * Model for the 'Blast' screen.
 */
define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var Particle = require( 'BLAST/blast/model/Particle' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @constructor
   */
  function BlastModel() {
    this.particle = new Particle(); // @public
  }

  blast.register( 'BlastModel', BlastModel );

  return inherit( Object, BlastModel, {

    // @public animate the particle
    step: function( dt ) {
      this.particle.step( dt );
    }
  } );
} );
