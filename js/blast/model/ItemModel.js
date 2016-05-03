// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  function ItemModel() {
    PropertySet.call( this, { x: 50, y: 50, velocity: 5 } );
  }

  blast.register( 'ItemModel', ItemModel );

  return inherit( PropertySet, ItemModel, {

    // Test for memory leak issues, see phetsims/tasks#546.
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