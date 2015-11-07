// Copyright 2013-2014, University of Colorado Boulder

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
