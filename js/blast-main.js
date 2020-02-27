// Copyright 2013-2019, University of Colorado Boulder

/**
 * Main entry point.
 *
 * @author Sam Reid
 */

import Property from '../../axon/js/Property.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import blastStrings from './blast-strings.js';
import BlastScreen from './blast/BlastScreen.js';

const blastTitleString = blastStrings.blast.title;

SimLauncher.launch( function() {

  const tandem = Tandem.ROOT;

  // add 2 instances of the same screen for memory leak testing, see phetsims/tasks#546.
  const screens = [
    new BlastScreen( tandem.createTandem( 'blast1Screen' ),
      {
        name: 'Blast 1',
        backgroundColorProperty: new Property( 'white' ),
        particleColor: 'red'
      }
    ),
    new BlastScreen( tandem.createTandem( 'blast2Screen' ),
      {
        name: 'Blast 2',
        backgroundColorProperty: new Property( 'rgb( 255, 227, 204 )' ),
        particleColor: 'green'
      } )
  ];

  new Sim( blastTitleString, screens ).start();
} );