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
    'titleStringProperty': TReadOnlyProperty<string>;
  }
};

const BlastStrings = getStringModule( 'BLAST' ) as StringsType;

blast.register( 'BlastStrings', BlastStrings );

export default BlastStrings;
