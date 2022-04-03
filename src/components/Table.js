import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";

const TableContainer = styled.div`
    width: 1000px;
`;

const TotalDiv = styled.div`
    margin-top: 20px;
`;

const PhotoTable = styled.div`
    display:flex;
    flex-wrap: wrap;
`;
const Table = ({ totalNum, urlChanged, photos }) => {
    const [isCompleted, setIsCompleted] = useState(null);
    useEffect(() => {
        setIsCompleted(JSON.parse(window.localStorage.getItem("completed")));
    }, [urlChanged]);
    return (
        <TableContainer>
            <TotalDiv >
                전체 {totalNum.toLocaleString('ko-KR')}개
            </TotalDiv >
            <PhotoTable>
                {isCompleted?
                    photos.map((data) => {
                        return (
                            <PhotoCard key={data.id} id={data.id} photoUrl={data.photoUrl} createdAt={data.createdAt} labels={data.labels} completed={isCompleted[data.id]} />
                        )
                    }):null
                }
            </PhotoTable>

        </TableContainer>)
}

export default Table;