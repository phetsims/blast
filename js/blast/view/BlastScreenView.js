// Copyright 2013-2019, University of Colorado Boulder

/**
 * View for the 'Blast' screen.
 *
 * @author Sam Reid
 */
define( require => {
  'use strict';

  // modules
  const blast = require( 'BLAST/blast' );
  const inherit = require( 'PHET_CORE/inherit' );
  const ParticleNode = require( 'BLAST/blast/view/ParticleNode' );
  const ScreenView = require( 'JOIST/ScreenView' );

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
