// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var ScreenView = require( 'JOIST/ScreenView' );
  var Node = require( 'SCENERY/nodes/Node' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  function ItemView( itemModel ) {
    var itemView = this;
    this.itemModel = itemModel;
    Rectangle.call( this, 0, 0, 10, 10, {x: itemModel.x, y: itemModel.y, fill: 'red'} );
    this.itemModel.xProperty.link( function( x ) {
      itemView.x = x;
    } );
  }

  return inherit( Rectangle, ItemView );
} );