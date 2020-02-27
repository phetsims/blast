// Copyright 2013-2019, University of Colorado Boulder

/**
 * View for the 'Blast' screen.
 *
 * @author Sam Reid
 */

import ScreenView from '../../../../joist/js/ScreenView.js';
import inherit from '../../../../phet-core/js/inherit.js';
import blast from '../../blast.js';
import ParticleNode from './ParticleNode.js';

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

inherit( ScreenView, BlastScreenView );
export default BlastScreenView;