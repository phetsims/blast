// Copyright 2013-2016, University of Colorado Boulder

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
  var RadialGradient = require( 'SCENERY/util/RadialGradient' );
  var Color = require( 'SCENERY/util/Color' );

  // constants
  var PARTICLE_SIZE = 10;

  /**
   * @param {Particle} particle
   * @param {String|color} color
   * @param {Object} [options]
   * @constructor
   */
  function ParticleNode( particle, color, options ) {
    var gradient = new RadialGradient( 0, 0, 0, 0, 0, PARTICLE_SIZE * 5 );

    var numStops = 15;
    for ( var i = 0; i < numStops; i++ ) {
      gradient.addColorStop( i / ( numStops - 1 ), new Color( Math.random() * 255, Math.random() * 255, Math.random() * 255 ) );
    }

    Rectangle.call( this, -PARTICLE_SIZE / 2, 0, PARTICLE_SIZE, PARTICLE_SIZE * 10, {
      x: particle.x,
      y: particle.y,
      fill: color || gradient
    } );

    var self = this;
    particle.xProperty.link( function( x ) {
      self.x = x;
    } );

    this.mutate( options );
  }

  blast.register( 'ParticleNode', ParticleNode );

  return inherit( Rectangle, ParticleNode );
} );