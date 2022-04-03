import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import LabelInfo from "../components/LabelInfo";
import ToggleButton from "../components/ToggleButton";

const Header = styled.div`
    width: 740px;
    display: flex;
    justify-content: space-between;
    color: #434959;
    font-weight: 700;
    font-size: 18px;
    padding: 10px 0px;
    border-bottom: solid 2px #DFE3E9;

    .backBtn{
        background-color: #2A67E2;
        color: white;
        border-radius: 10px;
        font-size: 14px;
        padding: 5px;
        align-items: center;
        cursor: pointer;
    }
`;

const FileInfoContatiner = styled.div`
    display: flex;
    width: 760px;
    justify-content: space-between;
`;

const InfoContatiner = styled.div`
    margin: 20px 0px;
`;
const ImageContainer = styled.div`
    width: 250px;
    img{
        width:100%;
    }
    border: 2px solid #DFE3E9;
`;
const TextContainer = styled.div`
    display: flex;
    margin-top: 15px;
`;
const TitleContainer = styled.div`
    color: #494F5F;
    font-weight: 600;
    div{
        margin: 10px 10px 10px 0px; 
    }
`;
const BodyContainer = styled.div`
    color: #727682;
    div{
        margin: 10px 0px;
    }
`;
const LabelContainer = styled.div`
    width: 400px;
    margin: 20px;
    .title{
        font-size: 18px;
        font-weight: 700;
        color: #727682;   
    }
`;

const FileInfo = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isData, setIsData] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [date, setDate] = useState(null);
    const [labelData, setLabelData] = useState(null);

    const getData = async () => {
        const requestResult = await axios.get(`https://tester-api.nearthlab.com/v1/photos/${params.id}`);
        const labelResult = await axios.get(`https://tester-api.nearthlab.com/v1/labelTypes`);
        setPhotoUrl(requestResult.data.photoUrl);
        setIsData(requestResult.data);
        setLabelData(labelResult.data);
        const photoTakenAt = requestResult.data.photoTakenAt.split("T");
        console.log(photoTakenAt);
        if (photoTakenAt[1].slice(0, 2) >= 12) {
            setDate(photoTakenAt[0].replaceAll("-", '.').split('T') + " 오후 " + photoTakenAt[1].substring(0, 8));
        } else {
            setDate(photoTakenAt[0].replaceAll("-", '.').split('T') + " 오전 " + photoTakenAt[1].substring(0, 8))
        }
    };
    useEffect(() => {
        getData();
    }, []);

    const onClickHandler = () => {
        navigate('/');
    }


    return (
        <>
            <Header> <div> 파일 상세 정보 </div> <div className="backBtn" onClick={onClickHandler}> 나가기 </div></Header>
            {isData && labelData ?
                <FileInfoContatiner>
                    <InfoContatiner>
                        <ImageContainer>
                            <img src={photoUrl} />
                        </ImageContainer>
                        <TextContainer>
                            <TitleContainer>
                                <div> 파일명  </div>
                                <div> 촬영시간 </div>
                                <div> 등록일 </div>
                            </TitleContainer>
                            <BodyContainer>
                                <div>{photoUrl.split("/")[3]}</div>
                                <div>{date}</div>
                                <div>{isData.createdAt.substring(0, 10).replaceAll("-", ".")}</div>
                            </BodyContainer>
                        </TextContainer>

                    </InfoContatiner>
                    <LabelContainer>
                        <div className="title"> 라벨 정보 </div>
                        {isData.labels.map((label, i) => {
                            const labelInfo = labelData[label.typeId - 1];
                            return <LabelInfo key={label.id} idx={i} labelInfo={labelInfo} description={label.description} />
                        })}
                        <ToggleButton id={isData?.id} />
                    </LabelContainer>

                </FileInfoContatiner>
                : null}

        </>

    );
}

export default FileInfo;