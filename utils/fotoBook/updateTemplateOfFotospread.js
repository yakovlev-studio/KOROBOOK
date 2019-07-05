import fotoSpreadTemplates from 'korobook/static/fotoSpreadTemplates'

export default ({ fotoSpreads=[], activeFotoTemplate=0, activeFotoSpread=0 }) => {
const updatedActiveFotoTemplate = activeFotoTemplate + 1
fotoSpreads[activeFotoSpread].fotoSpreadTemplate = fotoSpreadTemplates[updatedActiveFotoTemplate]

    return {
        updatedActiveFotoTemplate,
        updatedFotoSpreads: fotoSpreads
    }
}
