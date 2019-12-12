import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalListComponent from './criminals/CriminalList.js';
import { getOfficers } from './officers/OfficerProvider.js';
import OfficerListComponent from './officers/OfficerList.js';
import { getConvictions } from './convictions/ConvictionsDataProvider.js';
import ConvictionSelect from './convictions/ConvictionSelect.js';
import NoteFormComponent from './notes/note.js';
import NoteFormBuilder from './notes/noteForm.js';
import { getNotes } from './notes/noteDataProvider.js';
import NoteCardPrinter from './notes/noteList.js';
import NoteCardHider from './notes/noteHide.js';
import interviewAssociates from './interview/interviewList.js';
import interviewHider from './interview/interviewHide.js';
import { getWitnesses, useWitnesses } from './witnesses/witnessProvider.js';
import showWitnesses from './witnesses/witnesslist.js';

getCriminals().then(
    CriminalListComponent)


getConvictions().then(
    ConvictionSelect
)

getOfficers().then(
    OfficerListComponent
)

NoteFormComponent()

NoteFormBuilder()


getNotes().then(
    NoteCardPrinter
)

NoteCardHider()

getCriminals().then(
    interviewAssociates
)

interviewHider()

getWitnesses().then(
    console.log(
        useWitnesses()

    )
)

showWitnesses()