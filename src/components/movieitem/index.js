import React from "react";
import styled from 'styled-components';

import {IMAGE_BASE_URL} from '../../constants'
import { primaryColor } from '../../colors'
import {devices} from '../../devices';

export default function MovieItem ({ movie, genres }) {

    const getGenreNames = (ids) =>{
        const namesArray = ids.map(id=>{
            return genres.filter(genre=>genre.id===id)[0]?.name
        })
        return namesArray.join(" | ")
    }

  return (
      <MovieItemWrapper>
          <LeftCont>
              <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
          </LeftCont>
          <RightCont>
              <TitleCont>
                  <Title>{movie.title}</Title>
                  <VoteAverage>{movie.vote_average}</VoteAverage>
              </TitleCont>
              <Genres>{getGenreNames(movie.genre_ids)}</Genres>
              <Overview>{movie.overview}</Overview>
              <ReleaseDate>{movie.release_date}</ReleaseDate>
          </RightCont>
      </MovieItemWrapper>
  )
}

const MovieItemWrapper = styled.div`
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

  @media ${devices.mobileL}{
    width: 100%;
  }
`

const LeftCont = styled.div`
  img{
    max-height: 200px;
    object-fit: cover;
  }
`

const RightCont = styled.div`
  padding: 0px 0px 20px 20px ;
`

const Overview = styled.div`
  font-size: 15px
`

const ReleaseDate = styled.h5`
  display: inline-block;
  color:${primaryColor};
  position: absolute;
  bottom: 0;
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
`
const Genres = styled.div`
  color:${primaryColor};
  font-size:13px;
  font-weight: 600;
  padding-top: 5px ;
  padding-bottom: 5px ;

`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
  margin:0px;
  padding:0px;
`;

const TitleCont = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`
