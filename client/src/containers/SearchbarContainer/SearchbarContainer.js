import React, { useRef } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';

import { fetchUserTweets, fetchContentTweets } from '../../https';

const SearchbarContainer = (props) => {
    const inputRef = useRef(null);

    const formatSearchByUser = (word) => {
        return word.trim().replace(' ', '').toLowerCase();
    }

    const handleSearchByContent = () => {
        if(!inputRef.current.value) return;

        fetchContentTweets(inputRef.current.value)
        .then(res => {
          props.search(res, props.searchTypes.CONTENT); //Pass in the search results
        })
        .catch(error => console.log("Search by user Error", error));
    }

    const handleSearchByUser = () => {
        if(!inputRef.current.value) return;

        fetchUserTweets(formatSearchByUser(inputRef.current.value))
        .then(res => {
          props.search(res, props.searchTypes.USER); //Pass in the search results
        })
        .catch(error => console.log("Search by content Error", error));
    }
    return (
        <Searchbar
            reference={inputRef}
            userSearch={handleSearchByUser}
            contentSearch={handleSearchByContent} />
    );
};

export default SearchbarContainer;