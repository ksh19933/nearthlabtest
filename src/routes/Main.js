import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Table from "../components/Table";

const MainContainer = styled.div`
    width: 984px;
`;

const Main = () => {
    const [url, setUrl] = useState({});
    const [urlChanged, setUrlChanged] = useState(false);
    const [isData, setIsData] = useState(null);

    const getData = async () => {
        // console.log(url);
        let labelUrl = '';
        Object.entries(url).map((data, idx)=>{
            if(data[1]){
                labelUrl = labelUrl + "labelTypeIds[]=" + data[0]+ "&";
            }
        })
        const requestResult = await axios.get(`https://tester-api.nearthlab.com/v1/photos?${labelUrl}&per=500`);
        console.log(requestResult.data);
        const isCompleted = JSON.parse(window.localStorage.getItem("completed")) || {};
        requestResult.data.photos.map((data) => {
            if(isCompleted[data.id] === undefined){
                isCompleted[data.id] = data.completed;
            }
        })
        window.localStorage.setItem("completed", JSON.stringify(isCompleted));
        setUrlChanged(prev=> !prev);
        setIsData(requestResult.data);
        return requestResult;
    }
    useEffect(() => {
        getData();
    }, [url]);


    return (
        <MainContainer>
            <Header setUrl={setUrl} />
            {isData ? <Table totalNum={isData.meta.total} urlChanged={urlChanged} photos={isData?.photos} /> : null}
        </MainContainer>
    )
}

export default Main;