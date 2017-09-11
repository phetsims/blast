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
  var inherit = require( 'PHET_CORE/inherit' );
  var ParticleNode = require( 'BLAST/blast/view/ParticleNode' );
  var ScreenView = require( 'JOIST/ScreenView' );

  /**
   * @param {BlastModel} model
   * @param {Color|string} particleColor
   * @param {Tandem} tandem
   * @constructor
   */
  function BlastScreenView( model, particleColor, tandem ) {
    ScreenView.call( this, { cssTransform: true, tandem: tandem } );
    this.addChild( new ParticleNode( model.particle, particleColor, tandem.createTandem( 'particleNode' ) ) );
  }

  blast.register( 'BlastScreenView', BlastScreenView );

  return inherit( ScreenView, BlastScreenView );
} );
