// Copyright 2016, University of Colorado Boulder

/**
 * The 'Blast' screen.
 *
 * @author John Blanco
 */
define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var BlastModel = require( 'BLAST/blast/model/BlastModel' );
  var BlastScreenView = require( 'BLAST/blast/view/BlastScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Screen = require( 'JOIST/Screen' );

  /**
   * @param {Tandem} tandem
   * @param {Object} [options]
   * @constructor
   */
  function BlastScreen( tandem, options ) {

    options = _.extend( {
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
