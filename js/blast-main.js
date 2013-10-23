// Copyright 2002-2013, University of Colorado Boulder

require( [ 'JOIST/SimLauncher', 'JOIST/Sim', 'JOIST/Screen', 'SCENERY/nodes/Rectangle', 'model/BlastModel', 'view/BlastView'],
  function( SimLauncher, Sim, Screen, Rectangle, BlastModel, BlastView ) {
    'use strict';

    SimLauncher.launch( function() {
      new Sim( 'Blast', [
        new Screen( 'Blast',
          new Rectangle( 0, 0, 10, 10, {fill: 'red'} ),
          function() {return new BlastModel();},
          function( model ) {return new BlastView( model );}
        )
      ] ).start();
    } );
  } );