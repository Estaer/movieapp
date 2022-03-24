import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import * as colors from "../../colors";

import { getMovieCount, getPopularMovies, getAllGenres, searchAllMovies } from "../../fetcher";
import useDebounce  from '../../debounce';

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";
import {devices} from '../../devices';

const ratings = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }]

const languages =  [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' }
]

const Discover = () => {
    const [keyword, setKeyword] = useState('');
    const [year, setYear] = useState(0);
    const [results, setResults] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [genreOptions, setGenreOptions] = useState([]);
    const [ratingOptions, setRatingOptions] = useState(ratings);
    const [languageOptions, setLanguageOptions] = useState(languages);
    const [isSearching, setIsSearching] = useState(false);

    const debouncedKeyword = useDebounce(keyword, 800);
    useEffect(
        () => {
            if (debouncedKeyword) {
                setIsSearching(true);

                if(debouncedKeyword !== ''){
                    async function fetchDebouncedResults(){
                        let data = await searchAllMovies(debouncedKeyword);
                        setIsSearching(false);
                        setResults(data.results);
                        setTotalCount(data.total_results);
                    }
                    fetchDebouncedResults();
                }
            } else{
                getPopularMovies();
            }
        },
        [debouncedKeyword]
    );

  useEffect(() => {
    const initialFetch = async () => {
        const results = await getPopularMovies()
        setResults(results)

        const count = await getMovieCount()
        setTotalCount(count)

        const genreOptions = await getAllGenres()
        setGenreOptions(genreOptions)
    }
    initialFetch()
  }, [])

    const searchKeyword = async (keywordValue) => {
        setKeyword(keywordValue)
        if(keywordValue){
            const searchResults = await searchAllMovies(keywordValue, year)
            setResults(searchResults.results)
            setTotalCount(searchResults.total_count)
        }
    }
    const searchYear = async (yearValue) => {
        setYear(yearValue)
        if(yearValue && keyword){
            const searchResults = await searchAllMovies(keyword, yearValue)
            setResults(searchResults.results)
        }
    }

  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
        {!isSearching &&
            <TotalCount>{totalCount} results</TotalCount>
        }
      <MovieFilters>
        <SearchFilters
          genres={genreOptions}
          ratings={ratingOptions}
          languages={languageOptions}
          searchKeyword={(keyword) => searchKeyword(keyword)}
          keyword = {keyword}
          searchYear={(year)=> searchYear(year)}
          year={year}
        />
      </MovieFilters>
      <MovieResults>
        <MovieList
          movies={results || []}
          genres={genreOptions || []}
        />
      </MovieResults>
    </DiscoverWrapper>
  )
}

export default Discover;

const DiscoverWrapper = styled.main`
  padding: 35px;
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);

  @media ${devices.mobileL}{
    width: 100%;
  }
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;

  @media ${devices.mobileL}{
    float: left;
  }
`

const MobilePageTitle = styled.h1`
  display: none;
`

const TotalCount = styled.strong`
  display: block;
`
