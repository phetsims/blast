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
   * @param {String} title
   * @param {String | Color} particleColor
   * @param {String | Color} screenBackgroundColor
   * @constructor
   */
  function BlastScreen( title, particleColor, screenBackgroundColor ) {
    Screen.call(
      this,
      title,
      Rectangle.rect( 0, 0, Screen.HOME_SCREEN_ICON_SIZE.width, Screen.HOME_SCREEN_ICON_SIZE.height, { 
        fill: screenBackgroundColor
      } ),
      function() {
        return new BlastModel();
      },
      function( model ) {
        return new BlastScreenView( model, particleColor );
      },
      { backgroundColor: screenBackgroundColor }
    );
  }

  blast.register( 'BlastScreen', BlastScreen );

  return inherit( Screen, BlastScreen );
} );
