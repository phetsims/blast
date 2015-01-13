// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var PropertySet = require( 'AXON/PropertySet' );

  function ItemModel() {
    PropertySet.call( this, { x: 50, y: 50, velocity: 5 } );
  }

  return inherit( PropertySet, ItemModel, {
    step: function( dt ) {
      this.x = this.x + this.velocity;
      if ( this.x > 768 ) {
        this.velocity = -Math.abs( this.velocity );
      }
      else if ( this.x < 0 ) {
        this.velocity = +Math.abs( this.velocity );
      }
    }
  } );
} );