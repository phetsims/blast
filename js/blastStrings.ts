// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import blast from './blast.js';

type StringsType = {
  'blast': {
    'title': string;
    'titleProperty': TReadOnlyProperty<string>;
  }
};

const blastStrings = getStringModule( 'BLAST' ) as StringsType;

blast.register( 'blastStrings', blastStrings );

export default blastStrings;
