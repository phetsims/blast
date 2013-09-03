// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var ScreenView = require( 'JOIST/ScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  function BlastView( model ) {
    this.model = model;
    ScreenView.call( this, { renderer: 'svg' } );
    this.addChild( new Rectangle( 0, 0, 10, 10, {fill: 'red'} ) );
  }

  return inherit( ScreenView, BlastView );
} );