// Copyright 2013-2015, University of Colorado Boulder

define( function( require ) {
  'use strict';

  // modules
  var blast = require( 'BLAST/blast' );
  var ItemModel = require( 'BLAST/blast/model/ItemModel' );

  function BlastModel() {
    this.rectangle = new ItemModel();
  }

  blast.register( 'BlastModel', BlastModel );

  BlastModel.prototype.step = function( dt ) {
    this.rectangle.step( dt );
  };
  return BlastModel;
} );
