import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectRiskLevel } from '../../../redux/piquetreeform/piquetreeform.selector';
import { setRiskLevel } from '../../../redux/piquetreeform/piquetreefrom.actions';
import {connect} from 'react-redux'
import {Select} from './RiskLevelSelect.styles'
const RiskLevelSelect = ({riskLevel, setRiskLevel, riskLevelOptions}) => {
    return (
            <Select value={riskLevel} onChange={e => setRiskLevel(e.target.value)}>
                <option value="" hidden>
                    Risk Level
                </option>
                {riskLevelOptions.map((option, i) => <option key={i} value={option.value}> {option.label}</option>)}
            </Select>
    )
}

const mapStateToProps = createStructuredSelector({
    riskLevel: selectRiskLevel
})

const mapDispatchToProps = dispatch => ({
    setRiskLevel: (level) => dispatch(setRiskLevel(level))
})
export default connect(mapStateToProps, mapDispatchToProps)(RiskLevelSelect);