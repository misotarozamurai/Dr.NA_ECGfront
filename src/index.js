'use strict'

import 'core-js'
import 'regenerator-runtime/runtime'
import _ from 'lodash'
import 'style'
import {startSocket, startTop} from 'app'

startSocket('ws://localhost:8080');

(() => {
    startTop();
})();