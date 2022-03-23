import React from "react";
import styled from 'styled-components';

import {IMAGE_BASE_URL} from '../../constants'
import { primaryColor } from '../../colors'

export default function MovieItem ({ movie, genres }) {
  return (
    // TODO: Complete the MovieItem component
    <MovieItemWrapper>
        <LeftCont>
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
        </LeftCont>
        <RightCont>
            <TitleCont>
                <Title>{movie.title}</Title>
                <VoteAverage>{movie.vote_average}</VoteAverage>
            </TitleCont>
            <Genres>{genres}</Genres>
            <Overview>{movie.overview}</Overview>
            <ReleaseDate>{movie.release_date}</ReleaseDate>
        </RightCont>
    </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
border: 1px solid red;
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  max-height: 205px;
  display: flex;
  flex-direction: row;
  .wrapbox { width: 10em; margin: 0.5em; white-space: normal; vertical-align: top; display: inline-block; }
.auto { line-break: auto; }
`

const Wrapper = styled.div`
  
`

const LeftCont = styled(Wrapper)`
  img{
    max-height: 200px;
    object-fit: cover;
  }
`

const RightCont = styled(Wrapper)`
  padding: 0px 20px 20px 20px ;
`

const Overview = styled(Wrapper)`
  font-size: 15px
`

const ReleaseDate = styled.h5`
  display: inline-block;
  color:${primaryColor};
  margin-bottom: auto;
  font-size:12px;
  font-weight: 300;
`

const VoteAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:${primaryColor};
  border-radius: 4px;
  color: white;
  width: 30px;
  height: 25px;
  font-size:13px;
  font-weight: 600;
  text-align: center;
  margin-left: auto;
  margin-right: 20px;
`
const Genres = styled(Wrapper)`
  color:${primaryColor};
  font-size:13px;
  font-weight: 600;

`

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin:0px;
  padding:0px;
`;

const TitleCont = styled(Wrapper)`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
