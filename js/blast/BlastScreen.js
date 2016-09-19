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
   * @param {Object} [options]
   * @constructor
   */
  function BlastScreen( options ) {

    options = _.extend( {
      particleColor: 'black'
    }, options );

    assert && assert( !options.homeScreenIcon );
    options.homeScreenIcon = Rectangle.rect( 0, 0, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.width, Screen.MINIMUM_HOME_SCREEN_ICON_SIZE.height, {
      fill: options.backgroundColor
    } );

    Screen.call( this,
      function() { return new BlastModel(); },
      function( model ) { return new BlastScreenView( model, options.particleColor ); },
      options );
  }

  blast.register( 'BlastScreen', BlastScreen );

  return inherit( Screen, BlastScreen );
} );
