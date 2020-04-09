import './styles/elements.scss';
import './styles/scaffold.scss';
import './styles/fonts.scss';
import { handleFormSubmit } from './js/handleFormSubmit'
import { buildUi } from './js/buildUI';
import { insertDepartureDate } from './js/buildUI';
import { calculateDaysAway } from './js/buildUI';
require("regenerator-runtime/runtime");

export {
    handleFormSubmit,
    buildUi,
    insertDepartureDate,
    calculateDaysAway
}
