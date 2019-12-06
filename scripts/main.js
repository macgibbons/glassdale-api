import {
    getCriminals
} from './criminals/CriminalDataProvider.js'
import CriminalListComponent from './criminals/CriminalList.js';
import {
    getOfficers
} from './officers/OfficerProvider.js';
import OfficerListComponent from './officers/OfficerList.js';
import {
    getConvictions
} from './convictions/ConvictionsDataProvider.js';
import ConvictionSelect from './convictions/ConvictionSelect.js';

getCriminals().then(
    CriminalListComponent)


getConvictions().then(
    ConvictionSelect
)

getOfficers().then(
    OfficerListComponent
)