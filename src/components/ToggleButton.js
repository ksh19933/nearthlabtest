import React, { useEffect, useState } from "react";
import styled from "styled-components";


const ToggleContainer = styled.div`
    position: relative;
    left: 100%;
    transform: translateX(-100%);
    width: 90px;
    height: 30px;
    cursor: pointer;
`;
const Track = styled.div`
    display: flex;
    background-color: ${(props) => props.completed ? "#2A67E2" : "grey"};
    border-radius: 20px;
    height: 100%;
    align-items: center;
    span{
        color: white;
        position: relative;
        top: 1px;
        font-size: 14px;
        font-weight: 600;
        left: ${(props) => props.completed ? "-10px" : "10px"};
    }
`;
const Thumb = styled.div`
    position: relative;
    left: ${(props) => props.completed ? "55px" : "5px"};
    width: 30px;
    height: 25px;
    border-radius: 15px;
    background-color: white;
`;

const ToggleButton = ({ id }) => {
    const [isCompleted, setIsCompleted] = useState(null);
    useEffect(() => {
        setIsCompleted(JSON.parse(window.localStorage.getItem("completed")));
    }, [])
    useEffect(() => {
        window.localStorage.setItem("completed", JSON.stringify(isCompleted));
    }, [isCompleted])
    const onClick = () => {
        // console.log(id);
        // console.log(isCompleted);
        const updatedData = { [id]: !isCompleted[id] };
        setIsCompleted({ ...isCompleted, ...updatedData });
    }
    return (
        <ToggleContainer onClick={onClick}>
            {isCompleted ?
                <Track completed={isCompleted[id]}>
                    <Thumb completed={isCompleted[id]} />
                    <span>{isCompleted[id] ? "완료" : "미완료"}</span>
                </Track>
                : null}
        </ToggleContainer>
    );
}

export default ToggleButton;