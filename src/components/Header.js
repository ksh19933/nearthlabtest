import React from "react";
import styled from 'styled-components'

const HeaderContainer = styled.div`
    border-bottom: solid 2px #DFE3E9;
`;
const HeaderText = styled.div`
    color: #434959;
    font-weight: 700;
    font-size: 18px;
    margin: 20px 0px;
`
const CheckBox = styled.div`
    label{
        position: relative;
        color: grey;
        font-size: 14px;
        top: -1.5px;
    }
`

const Header = ({ setUrl }) => {
    const onChangeHandler = (e) => {
        const {
            target: { checked, name },
        } = e;
        setUrl(prev => ({...prev, [name]: checked}));
    }
    return (
        <HeaderContainer>
            <HeaderText>
                라벨 종류 선택
            </HeaderText>
            <CheckBox>
                <input name="1" onChange={onChangeHandler} type="checkbox" />
                <label> 단순 손상 </label>
                <input name="2" onChange={onChangeHandler} type="checkbox" />
                <label> 페인트 벗겨짐 </label>
                <input name="3" onChange={onChangeHandler} type="checkbox" />
                <label> 긴급 수리 필요 </label>
                <input name="4" onChange={onChangeHandler} type="checkbox" />
                <label> 전문가 의뢰 </label>
            </CheckBox>
            <p />
        </HeaderContainer>
    );

}

export default Header;