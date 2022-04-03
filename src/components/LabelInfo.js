import React, { useEffect, useState } from "react";
import styled from "styled-components";

const LabelInfoContainer = styled.div`
    border: 1px solid #DFE3E9;
    margin: 20px 0px;
    padding: 10px;
    box-shadow: 0px 2px #EDEEF0;
    border-radius: 10px;
`;
const Header = styled.div`
    color: #434959;
    font-size: 20px;
    font-weight: 800;
`;

const InfoContatiner = styled.div`
    display: flex;
`;
const TitleContainer = styled.div`
    color: #494F5F;
    font-weight: 600;
    div{
        width: 45px;
        margin: 10px 20px 10px 0px; 
    }
`;
const BodyContainer = styled.div`
    color: #727682;
    div{
        margin: 10px 0px;
    }
`;

const LabelInfo = ({ idx, labelInfo, description }) => {
    return (
        <LabelInfoContainer>
            <Header> 라벨 #{idx + 1} </Header>
            <InfoContatiner>
                <TitleContainer>
                    <div>유형 </div>
                    <div>설명 </div>
                </TitleContainer>
                <BodyContainer>
                    <div>{labelInfo.title}</div>
                    <div>{description}</div>
                </BodyContainer>
            </InfoContatiner>

        </LabelInfoContainer>


    );
}

export default LabelInfo;