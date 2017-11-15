// Copyright 2013-2017, University of Colorado Boulder

/**
 * Main entry point.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  // modules
  var BlastScreen = require( 'BLAST/blast/BlastScreen' );
  var Property = require( 'AXON/Property' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Tandem = require( 'TANDEM/Tandem' );

  // strings
  var blastTitleString = require( 'string!BLAST/blast.title' );

  SimLauncher.launch( function() {

    var tandem = Tandem.createRootTandem();

    // add 2 instances of the same screen for memory leak testing, see phetsims/tasks#546.
    var screens = [
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
