// Copyright 2016-2021, University of Colorado Boulder

/**
 * Particle view.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

import Rectangle from '../../../../scenery/js/nodes/Rectangle.js';
import blast from '../../blast.js';

// constants
const PARTICLE_SIZE = 10;

class ParticleNode extends Rectangle {

  /**
   * @param {Particle} particle
   * @param {String|color} color
   * @param {Tandem} tandem
   */
  constructor( particle, color, tandem ) {

    super( -PARTICLE_SIZE / 2, 0, PARTICLE_SIZE, PARTICLE_SIZE, {
      x: particle.x,
      y: particle.y,
      fill: color,
      tandem: tandem
    } );

    particle.xProperty.link( x => {
      this.x = x;
    } );
  }
}

blast.register( 'ParticleNode', ParticleNode );
export default ParticleNode;