import './styles/elements.scss';
import './styles/scaffold.scss';
import './styles/fonts.scss';
import {handleFormSubmit} from './js/handleFormSubmit'
import {buildUi} from './js/buildUI';
import {insertDepartureDate} from './js/buildUI';
import {calculateDaysAway} from './js/buildUI';

require("regenerator-runtime/runtime");

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

export {
    handleFormSubmit,
    buildUi,
    insertDepartureDate,
    calculateDaysAway
}
