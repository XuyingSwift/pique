import styled from 'styled-components';
import CustomButton from '../customButton/CustomButtom.component'

export const UserDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 50px;
    right: 40px;
    z-index: 3;
`

export const CheckoutButton = styled(CustomButton)`
    margin-top: auto;
`

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const HeaderMenu = styled.div`
  position: fixted;
  padding: 13px;
  left: 12px;
  background-color: #EEEDE7;
  margin-bottom: 20px;
  z-index: 1;
  &:hover {
    cursor: pointer;
  }
`

export const boxShadow = styled.div`
   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
`

export const Dropdown = styled.div`
    position: absolute;
    top: 54px;
    right: -16px;
    width: 220px;
    height: auto;
    z-index: 1;
    background-color: #fff;
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: all .3s;
    ${boxShadow}

`

export const DropdownList = styled.div`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

export const DropdownListItem = styled.div`
  padding: 12px 24px;
    color: $color-abbey;
    text-transform: capitalize;

    &:hover {
      background-color: rgba(0,0,0, .1);
    }
`
export const MenuIcon = styled.span`
  color: black;
`

export const MenuTitle = styled.span`
  margin-left: 10px;
`
