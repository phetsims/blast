// Copyright 2016-2020, University of Colorado Boulder

/**
 * The 'Blast' screen.
 *
 * @author John Blanco
 */

import Screen from '../../../joist/js/Screen.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
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

  Screen.call( this,
    function() { return new BlastModel( tandem.createTandem( 'model' ) ); },
    function( model ) { return new BlastScreenView( model, options.particleColor, tandem.createTandem( 'view' ) ); },
    options );
}

blast.register( 'BlastScreen', BlastScreen );

inherit( Screen, BlastScreen );
export default BlastScreen;