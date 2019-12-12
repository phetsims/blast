// Copyright 2013-2019, University of Colorado Boulder

/**
 * Main entry point.
 *
 * @author Sam Reid
 */
define( require => {
  'use strict';

  // modules
  const BlastScreen = require( 'BLAST/blast/BlastScreen' );
  const Property = require( 'AXON/Property' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const blastTitleString = require( 'string!BLAST/blast.title' );

  SimLauncher.launch( function() {

    const tandem = Tandem.ROOT;

    // add 2 instances of the same screen for memory leak testing, see phetsims/tasks#546.
    const screens = [
      new BlastScreen( tandem.createTandem( 'blast1Screen' ),
        {
          name: 'Blast 1',
          backgroundColorProperty: new Property( 'white' ),
          particleColor: 'red'
        }
      ),
      new BlastScreen( tandem.createTandem( 'blast2Screen' ),
        {
          name: 'Blast 2',
          backgroundColorProperty: new Property( 'rgb( 255, 227, 204 )' ),
          particleColor: 'green'
        } )
    ];

    new Sim( blastTitleString, screens ).start();
  } );
} );
