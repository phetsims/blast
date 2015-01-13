// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var
    SimLauncher = require( 'JOIST/SimLauncher' ),
    Sim = require( 'JOIST/Sim' ),
    Screen = require( 'JOIST/Screen' ),
    Rectangle = require( 'SCENERY/nodes/Rectangle' ),
    BlastModel = require( 'BLAST/model/BlastModel' ),
    BlastView = require( 'BLAST/view/BlastView' );

  SimLauncher.launch( function() {
    new Sim( 'Blast', [
      new Screen( 'Blast',
        new Rectangle( 0, 0, 10, 10, { fill: 'red' } ),
        function() {return new BlastModel();},
        function( model ) {return new BlastView( model );}
      )
    ] ).start();
  } );
} );
