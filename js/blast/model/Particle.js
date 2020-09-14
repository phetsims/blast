// Copyright 2013-2020, University of Colorado Boulder

/**
 * Particle model.
 *
 * @author Sam Reid
 */

import NumberProperty from '../../../../axon/js/NumberProperty.js';
import blast from '../../blast.js';

class Particle {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    // @public
    this.xProperty = new NumberProperty( 50, {
      tandem: tandem.createTandem( 'xProperty' )
    } );
    this.velocityProperty = new NumberProperty( 5, {
      tandem: tandem.createTandem( 'velocityProperty' )
    } );

    // @public (read-only) y is constant
    this.y = 50;
  }

  // @public
  reset() {
    this.xProperty.reset();
    this.velocityProperty.reset();
  }

  // @public animate particle, changing direction at min/max x
  step( dt ) {
    this.xProperty.value = this.xProperty.value + this.velocityProperty.value;
    if ( this.xProperty.value > 1024 ) {
      this.velocityProperty.value = -Math.abs( this.velocityProperty.value );
    }
    else if ( this.xProperty.value < 0 ) {
      this.velocityProperty.value = +Math.abs( this.velocityProperty.value );
    }
  }
}

blast.register( 'Particle', Particle );
export default Particle;