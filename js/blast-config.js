// Copyright 2002-2013, University of Colorado Boulder

require.config( {

  deps: [ 'blast-main' ],

  paths: {

    // plugins
    image: '../../chipper/js/requirejs-plugins/image',
    audio: '../../chipper/js/requirejs-plugins/audio',
    string: '../../chipper/js/requirejs-plugins/string',

    text: '../../sherpa/text-2.0.12',

    // PhET libs, uppercase names to identify them in require.js imports
    AXON: '../../axon/js',
    DOT: '../../dot/js',
    JOIST: '../../joist/js',
    KITE: '../../kite/js',
    PHET_CORE: '../../phet-core/js',
    BRAND: '../../brand/js',
    PHETCOMMON: '../../phetcommon/js',
    REPOSITORY: '..',
    SCENERY: '../../scenery/js',
    SCENERY_PHET: '../../scenery-phet/js',
    SUN: '../../sun/js',

    // this sim
    BLAST: '.'
  },

  // optional cache buster to make browser refresh load all included scripts, can be disabled with ?cacheBuster=false
  urlArgs: phet.chipper.getCacheBusterArgs()
} );
