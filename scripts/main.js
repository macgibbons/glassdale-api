import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalListComponent from './criminals/CriminalList.js';
import { useOfficers, getOfficers } from './officers/OfficerProvider.js';
import OfficerListComponent from './officers/OfficerList.js';
import { getConvictions, useConvictions } from './convictions/ConvictionsDataProvider.js';
import ConvictionSelect from './convictions/ConvictionSelect.js';

getCriminals().then(
    CriminalListComponent)


getOfficers().then(
    OfficerListComponent
    )

getConvictions().then(
    ConvictionSelect
)
