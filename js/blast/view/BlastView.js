// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var ItemView = require( 'BLAST/blast/view/ItemView' );
  var inherit = require( 'PHET_CORE/inherit' );

  function BlastView( model, blockColor ) {
    this.model = model;
    ScreenView.call( this, { rendererOptions: { cssTransform: true } } );
    this.addChild( new ItemView( model.rectangle, blockColor ) );
  }

  blast.register( 'BlastView', BlastView );

  return inherit( ScreenView, BlastView );
} );
