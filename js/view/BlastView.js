// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var ScreenView = require( 'JOIST/ScreenView' );
  var ItemView = require( 'BLAST/view/ItemView' );
  var inherit = require( 'PHET_CORE/inherit' );

  function BlastView( model ) {
    this.model = model;
    ScreenView.call( this, { renderer: 'svg', rendererOptions: { cssTransform: true } } );
    this.addChild( new ItemView( model.rectangle ) );
  }

  return inherit( ScreenView, BlastView );
} );
