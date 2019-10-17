// Copyright 2016-2019, University of Colorado Boulder

/**
 * The 'Blast' screen.
 *
 * @author John Blanco
 */
define( require => {
  'use strict';

  // modules
  const blast = require( 'BLAST/blast' );
  const BlastModel = require( 'BLAST/blast/model/BlastModel' );
  const BlastScreenView = require( 'BLAST/blast/view/BlastScreenView' );
  const inherit = require( 'PHET_CORE/inherit' );
  const merge = require( 'PHET_CORE/merge' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const Screen = require( 'JOIST/Screen' );

  /**
   * @param {Tandem} tandem
   * @param {Object} [options]
   * @constructor
   */
  function BlastScreen( tandem, options ) {

    options = merge( {
      particleColor: 'black',
      tandem: tandem
    }, options );

    assert && assert( !options.homeScreenIcon );
    options.homeScreenIcon = Rectangle.rect( 0, 0, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.width, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.height, {
      fill: options.backgroundColor
    } );

    Screen.call( this,
      function() { return new BlastModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new BlastScreenView( model, options.particleColor, tandem.createTandem( 'view' ) ); },
      options );
  }

  blast.register( 'BlastScreen', BlastScreen );

  return inherit( Screen, BlastScreen );
} );
