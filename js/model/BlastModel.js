// Copyright 2002-2013, University of Colorado Boulder

define( function( require ) {
  'use strict';

  var ItemModel = require( 'BLAST/model/ItemModel' );

  function BlastModel() {
    this.rectangle = new ItemModel();
  }

  BlastModel.prototype.step = function( dt ) {
    this.rectangle.step( dt );
  };
  return BlastModel;
} );
