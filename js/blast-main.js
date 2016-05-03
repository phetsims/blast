// Copyright 2013-2016, University of Colorado Boulder

/**
 * Main entry point.
 */
define( function( require ) {
  'use strict';

  // modules
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Sim = require( 'JOIST/Sim' );
  var BlastScreen = require( 'BLAST/blast/BlastScreen' );

  // strings
  var blastTitleString = require( 'string!BLAST/blast.title' );

  SimLauncher.launch( function() {

    // add 2 instances of the same screen for memory leak testing, see phetsims/tasks#546.
    var screens = [
      new BlastScreen( 'Blast 1', { particleColor: 'red', screenBackgroundColor: 'white' } ),
      new BlastScreen( 'Blast 2', { particleColor: 'green', screenBackgroundColor: 'rgb( 255, 227, 204 )' } )
    ];

    new Sim( blastTitleString, screens ).start();
  } );
} );
