// Copyright 2016, University of Colorado Boulder

/**
 * The 'Blast' screen.
 *
 * Author: John Blanco
 */

define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var BlastModel = require( 'BLAST/blast/model/BlastModel' );
  var BlastView = require( 'BLAST/blast/view/BlastView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var Screen = require( 'JOIST/Screen' );

  /**
   * @param {String} title
   * @param {String | Color} blockColor
   * @constructor
   */
  function BlastScreen( title, blockColor, backgroundColor ) {
    Screen.call(
      this,
      title,
      Rectangle.rect( 0, 0, Screen.HOME_SCREEN_ICON_SIZE.width, Screen.HOME_SCREEN_ICON_SIZE.height, { fill: blockColor } ),
      function() {
        return new BlastModel();
      },
      function( model ) {
        return new BlastView( model, blockColor );
      },
      //{ backgroundColor: 'rgb( 151, 208, 255 )' }
      { backgroundColor: backgroundColor }
    );
  }

  blast.register( 'BlastScreen', BlastScreen );

  return inherit( Screen, BlastScreen );
} );
