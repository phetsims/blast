// Copyright 2016-2017, University of Colorado Boulder

/**
 * Particle view.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );

  // constants
  var PARTICLE_SIZE = 10;

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

    var self = this;
    particle.xProperty.link( function( x ) {
      self.x = x;
    } );
  }

  blast.register( 'ParticleNode', ParticleNode );

  return inherit( Rectangle, ParticleNode );
} );