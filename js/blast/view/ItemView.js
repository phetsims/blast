// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  var BLOCK_SIZE = 10;

  function ItemView( itemModel, color ) {
    var itemView = this;
    this.itemModel = itemModel;
    Rectangle.call( this, -BLOCK_SIZE / 2, 0, BLOCK_SIZE, BLOCK_SIZE, { x: itemModel.x, y: itemModel.y, fill: color } );
    this.itemModel.xProperty.link( function( x ) {
      itemView.x = x;
    } );
  }

  blast.register( 'ItemView', ItemView );

  return inherit( Rectangle, ItemView );
} );