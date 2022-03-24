import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import * as colors from "../../colors";

import { getPopularMovies, getAllGenres, searchAllMovies } from "../../fetcher";
import useDebounce  from '../../debounce';

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

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

    const debouncedKeyword = useDebounce(keyword, 1000);
    useEffect(
        () => {
            if (debouncedKeyword) {
                setIsSearching(true);

                if(debouncedKeyword !== ''){
                    async function fetchDebouncedResults(){
                        let data = await searchAllMovies(debouncedKeyword);
                        setIsSearching(false);
                        setResults(data);
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

        const genreOptions = await getAllGenres()
        setGenreOptions(genreOptions)
    }
    initialFetch()
  }, [])

    const searchKeyword = async (keywordValue) => {
        setKeyword(keywordValue)
        if(keywordValue){
            const searchResults = await searchAllMovies(keywordValue, year)
            setResults(searchResults)
            console.log(searchResults, keywordValue)
        }
    }
    const searchYear = async (yearValue) => {
        setYear(yearValue)
        if(yearValue && keyword){
            const searchResults = await searchAllMovies(keyword, yearValue)
            setResults(searchResults)
            console.log(searchResults, yearValue)
        }
    }



  // TODO: Preload and set the popular movies and movie genres when page loads

  // TODO: Update search results based on the keyword and year inputs


  return (
    <DiscoverWrapper>
      <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
      <TotalCount>{totalCount} results</TotalCount>
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
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;
`

const TotalCount = styled.strong`
  display: block;
`
