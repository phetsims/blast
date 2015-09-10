// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Sim = require( 'JOIST/Sim' );
  var Screen = require( 'JOIST/Screen' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var BlastModel = require( 'BLAST/model/BlastModel' );
  var BlastView = require( 'BLAST/view/BlastView' );
  var title = require( 'string!BLAST/blast.title' );

  SimLauncher.launch( function() {
    new Sim( title, [
      new Screen( 'Blast',
        new Rectangle( 0, 0, 10, 10, { fill: 'red' } ),
        function() {return new BlastModel();},
        function( model ) {return new BlastView( model );}
      )
    ] ).start();
  } );
} );
