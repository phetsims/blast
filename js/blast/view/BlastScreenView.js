// Copyright 2013-2016, University of Colorado Boulder

/**
 * View for the 'Blast' screen.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var ScreenView = require( 'JOIST/ScreenView' );
  var ParticleNode = require( 'BLAST/blast/view/ParticleNode' );
  var inherit = require( 'PHET_CORE/inherit' );

  /**
   * @param {BlastModel} model
   * @param {Color|string} particleColor
   * @constructor
   */
  function BlastScreenView( model, particleColor ) {
    ScreenView.call( this, { rendererOptions: { cssTransform: true } } );
    this.addChild( new ParticleNode( model.particle, particleColor ) );
  }

  blast.register( 'BlastScreenView', BlastScreenView );

  return inherit( ScreenView, BlastScreenView );
} );
