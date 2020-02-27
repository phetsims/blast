// Copyright 2016-2019, University of Colorado Boulder

/**
 * Particle view.
 *
 * @author Sam Reid
 */

import inherit from '../../../../phet-core/js/inherit.js';
import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import blast from '../../blast.js';

// constants
const PARTICLE_SIZE = 10;

/**
 * @param {Particle} particle
 * @param {String|color} color
 * @param {Tandem} tandem
 * @constructor
 */
function ParticleNode( particle, color, tandem ) {

  Rectangle.call( this, -PARTICLE_SIZE / 2, 0, PARTICLE_SIZE, PARTICLE_SIZE, {
    x: particle.x,
    y: particle.y,
    fill: color,
    tandem: tandem
  } );

  const self = this;
  particle.xProperty.link( function( x ) {
    self.x = x;
  } );
}

blast.register( 'ParticleNode', ParticleNode );

inherit( Rectangle, ParticleNode );
export default ParticleNode;