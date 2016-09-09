// Copyright 2013-2016, University of Colorado Boulder

/**
 * Main entry point.
 *
 * @author Sam Reid
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
      new BlastScreen( {
        name: 'Blast 1',
        backgroundColor: 'white',
        particleColor: 'red'
      } ),
      new BlastScreen( {
        name: 'Blast 2',
        backgroundColor: 'rgb( 255, 227, 204 )',
        particleColor: 'green'
      } )
    ];

    new Sim( blastTitleString, screens ).start();
  } );
} );
