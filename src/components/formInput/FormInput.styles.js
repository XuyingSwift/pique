import styled, {css} from 'styled-components';

const shrinkLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: white;
`
export const FormInputContainer = styled.div`
    position: relative;
    margin: 30px;
    padding: 0;
    width: 300px;
    input[type='password'] {
        letter-spacing: 0.3em;
  }
`

export const InputContainer = styled.input`
    background: none;
    background-color: white;
    color: #B9B7BD;
    font-size: 18px;
    padding: 5px 5px 5px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0;
    margin: 15px 0;
    &:focus {
        outline: none;
    }
    &:focus ~ label {
        ${shrinkLabelStyles}
    }
`

export const InputLabel = styled.label`
    color: #B9B7BD;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 300ms ease all;
    &.shrink {
        ${shrinkLabelStyles}
    }
`