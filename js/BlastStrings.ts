// Copyright 2020-2024, University of Colorado Boulder

/* eslint-disable */
/* @formatter:off */

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */

import getStringModule from '../../chipper/js/browser/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/browser/LocalizedStringProperty.js';
import blast from './blast.js';

type StringsType = {
  'blast': {
    'title': string;
    'titleStringProperty': LocalizedStringProperty;
  };
  'screen': {
    'blast1': string;
    'blast1StringProperty': LocalizedStringProperty;
    'blast2': string;
    'blast2StringProperty': LocalizedStringProperty;
  }
};

const BlastStrings = getStringModule( 'BLAST' ) as StringsType;

blast.register( 'BlastStrings', BlastStrings );

export default BlastStrings;
