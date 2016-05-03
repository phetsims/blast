// Copyright 2013-2016, University of Colorado Boulder

/**
 * Particle model.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  /**
   * @constructor
   */
  function Particle() {

    // @public
    PropertySet.call( this, {
      x: 50,
      velocity: 5
    } );

    this.y = 50; // @public y does not change
  }

  blast.register( 'Particle', Particle );

  return inherit( PropertySet, Particle, {

    // @public Test for memory leaks, see phetsims/tasks#546.
    step: function( dt ) {
      this.x = this.x + this.velocity;
      if ( this.x > 1024 ) {
        this.velocity = -Math.abs( this.velocity );
      }
      else if ( this.x < 0 ) {
        this.velocity = +Math.abs( this.velocity );
      }
    }
  } );
} );