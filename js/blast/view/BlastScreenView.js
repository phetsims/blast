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
  var Node = require( 'SCENERY/nodes/Node' );

  /**
   * @param {BlastModel} model
   * @param {Color|string} particleColor
   * @constructor
   */
  function BlastScreenView( model, particleColor ) {
    ScreenView.call( this, { cssTransform: true } );

    for ( var i = 0; i < 6; i++ ) {
      var container = new Node( { x: i * 20 } );
      this.addChild( container );
      container.addChild( new ParticleNode( model.particle, null, { y: 100, renderer: 'svg' } ) );
      container.addChild( new ParticleNode( model.particle, null, { y: 200, renderer: 'canvas' } ) );
      container.addChild( new ParticleNode( model.particle, particleColor, { y: 400, renderer: 'dom' } ) );
      container.addChild( new ParticleNode( model.particle, particleColor, { y: 300, renderer: 'webgl' } ) );
      container.addChild( new ParticleNode( model.particle, particleColor, { y: 400, renderer: 'svg' } ) );
      container.addChild( new ParticleNode( model.particle, particleColor, { y: 500, renderer: 'canvas' } ) );
    }
  }

  blast.register( 'BlastScreenView', BlastScreenView );

  return inherit( ScreenView, BlastScreenView );
} );
