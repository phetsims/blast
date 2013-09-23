// Copyright 2002-2013, University of Colorado Boulder

require( [ 'JOIST/SimLauncher', 'JOIST/Sim', 'SCENERY/nodes/Rectangle', 'model/BlastModel', 'view/BlastView'],
  function( SimLauncher, Sim, Rectangle, BlastModel, BlastView ) {
    'use strict';

    SimLauncher.launch( {imageNames: []}, function( images ) {
      new Sim( 'Blast', [
        {
          name: 'Blast',
          icon: new Rectangle( 0, 0, 10, 10, {fill: 'red'} ),
          createModel: function() {return new BlastModel();},
          createView: function( model ) {return new BlastView( model );}
        }
      ] ).start();
    } );
  } );
