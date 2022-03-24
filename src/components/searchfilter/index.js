import React from "react";
import styled, { css } from 'styled-components';

import * as colors from "../../colors";
import AccordionFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";
import {devices} from "../../devices";
import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({ genres, ratings, languages, keyword, searchKeyword, year, searchYear }) {
  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword_search_input"
          type="text"
          icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
          placeholder="Search for movies"
          onChange = {searchKeyword}
          value = {keyword}
        />
        <SearchBar
          id="year_search_input"
          type="number"
          icon={{ src: YearIcon, alt: 'Calendar icon' }}
          placeholder="Year of release"
          onChange = {searchYear}
          value = {year}
        />
      </SearchFiltersCont>
      <SearchFiltersCont className="movie_filter">
          <CategoryTitle>Movies</CategoryTitle>
          <AccordionFilter title="genre (s)" itemsList={genres} />
          <AccordionFilter title="min. vote" itemsList={ratings} />
          <AccordionFilter title="Language" itemsList={languages} />
      </SearchFiltersCont>
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  @media ${devices.mobileL}{
    width: 100%;
  }


  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
  &.movie_filter{
    @media ${devices.mobileL}{
      display: none;
    }
  }
`

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`
