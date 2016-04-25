// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Sim = require( 'JOIST/Sim' );
  var BlastScreen = require( 'BLAST/blast/BlastScreen' );

  // strings
  var blastTitleString = require( 'string!BLAST/blast.title' );

  SimLauncher.launch( function() {
    new Sim( blastTitleString, [
      new BlastScreen( 'Blast 1', 'red', 'rgb( 151, 208, 255 )' ),
      new BlastScreen( 'Blast 2', 'green', 'rgb( 255, 227, 204 )' )
    ] ).start();
  } );
} );
