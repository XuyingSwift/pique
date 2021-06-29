import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectRiskLevel } from '../../redux/piquetreeform/piquetreeform.selector';
import { setRiskLevel } from '../../redux/piquetreeform/piquetreefrom.actions';
import {connect} from 'react-redux'

const RiskLevelSelect = ({options, riskLevel, setRiskLevel}) => {
    return (
       
            <select value={riskLevel} onChange={e => setRiskLevel(e.target.value)}>
                <option value="" hidden>
                    Risk Level
                </option>
                {options.map((option, i) => <option key={i} value={option.value}> {option.label}</option>)}
            </select>
    
    )
}

const mapStateToProps = createStructuredSelector({
    riskLevel: selectRiskLevel
})

const mapDispatchToProps = dispatch => ({
    setRiskLevel: (level) => dispatch(setRiskLevel(level))
})
export default connect(mapStateToProps, mapDispatchToProps)(RiskLevelSelect);