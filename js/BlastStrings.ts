// Copyright 2020-2023, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
/* @formatter:off */
import getStringModule from '../../chipper/js/getStringModule.js';
import type LocalizedStringProperty from '../../chipper/js/LocalizedStringProperty.js';
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
