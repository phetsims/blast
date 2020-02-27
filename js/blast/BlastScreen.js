// Copyright 2016-2019, University of Colorado Boulder

/**
 * The 'Blast' screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import Rectangle from '../../../scenery/js/nodes/Rectangle.js';
import blast from '../blast.js';
import BlastModel from './model/BlastModel.js';
import BlastScreenView from './view/BlastScreenView.js';

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

inherit( Screen, BlastScreen );
export default BlastScreen;