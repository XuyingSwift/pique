
const INITIAL_STATE = {
    projectName: ['CERL C# Pique Model', 'Pique Binary Model'],
    riskLevel: ['Dark Red', 'Red', 'Yellow', 'Green'],
    qaulityAspect: '',
    projectFactor: ''
}

const PiquetreeFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default PiquetreeFormReducer;