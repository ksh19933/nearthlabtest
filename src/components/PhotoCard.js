import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PhotoContainer = styled.div`
    width: 180px;
    height: 180px;
    margin: 10px 20px 20px 0px;
    cursor: pointer;
    position: relative;
    img{
        height: 140px;
        width: 100%;
        border: 2px solid #DFE3E9;
    }
`;

const IsCompleted = styled.div`
    position: absolute;
    padding: 5px;
    right: 10px;
    top: 10px;
    border-radius: 10px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    background-color: ${(props)=> props.color};
`;

const BottomContainer = styled.div`
    width: 180px;    
    height: 40px;
    position: relative;
    top: -6px;
    border: 2px solid #DFE3E9;
    background-color: white;
    text-aline: center;
    display:flex;
    justify-content: space-between;
    align-items: center;
    span{
        margin: 5px;
        font-size: 12px;
    }
`;
const Label = styled.div`
    height: 20px;
    padding: 0px 4px;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    background-color: #e9eef1;
    border-radius: 10px;
    color: #2A67E2;
`;
const PhotoCard = ({ id, photoUrl, createdAt, labels, completed }) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/${id}`)
    }
    // console.log(photoUrl.split("/")[3].split(".")[0]);
    return (
        <PhotoContainer onClick={onClick}>
            <IsCompleted color={completed? "#6ADC95": "#E6C066"}> {completed ? "완료" : "미완료"} </IsCompleted>
            <img src={photoUrl} />
            <BottomContainer>
                <span> {photoUrl.split("/")[3].split(".")[0]} </span>
                <Label> 라벨 {labels.length}개</Label>
            </BottomContainer>
        </PhotoContainer>
    )
}


export default PhotoCard;