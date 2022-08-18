import styled from '@emotion/styled';

export const TrackListItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    height: 50px;
    width: 100%;
    border-bottom: .5px solid #504f4f;
    gap: 0;

    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width:900px) {
        font-size: .8rem;
    }

    @media screen and (max-width:768px) {
         height: 60px;
    }

    @media screen and (max-width:320px) {
        font-size: .6rem;
    }    
   
`;

export const TrackImage = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 5%;
background: transparent;


    & img {
        width: 40px;
        height: 40px;
        background: lightblue;
        cursor: pointer;

        @media screen and (max-width: 900px) {
        width: 35px;
        height: 35px; 
        }

        @media screen and (max-width: 768px) {
        width: 35px;
        height: 35px;  
        }

        @media screen and (max-width: 480px) {
        width: 35px;
        height: 35px;            
        }

        @media screen and (max-width: 900px) {
            
        }
    }
`;

export const TrackName = styled.div`
width: 35%;
/* background: lightblue; */

        @media screen and (max-width: 900px) {
   
        }

        @media screen and (max-width: 768px) {
            width:30%;
        }

        @media screen and (max-width: 480px) {
            width:25%;   
             margin-left: 1rem;
        }

        @media screen and (max-width: 320px) {


        }

 & span {
     &:hover{
    text-decoration: underline;
    cursor: pointer;
    background: transparent;

 }
 }   

`;

export const TrackArtist = styled.div`
width: 35%;
/* background: lightcoral; */

 & span {
     &:hover{
    text-decoration: underline;
    cursor: pointer;
    background: transparent;
        
 }
 }  
`;

export const TrackAlbum = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 20%;
font-size: .9rem;
/* background: lightgreen; */

    @media screen and (max-width: 768px) {
            width:15%;
            font-size:.7rem;
    }

    @media screen and (max-width: 480px) {
            display: none;
    }

 & span {
     &:hover{
    text-decoration: underline;
    cursor: pointer;
    background: transparent;

 }
 }  
`;
