import _ from 'lodash'

import './scss/style.scss'
import './css/main.css'
import './libs/jquery-ui-1.12.1/jquery-ui.css'

$(document).ready(function () {
    // Handler for .ready() called.
    $('button').on('click', function () {
        console.log('test')
    })
    jQuery("#datepicker").datepicker();
}); 