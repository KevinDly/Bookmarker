import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { BookmarkContainer } from './BookmarkContainer'
//Contains the BookmarkContainer and SearchBar, and transfers data between the too.
class FilterableBookmarkTable extends Component {

    constructor(props){ 
        super(props)
    }
 
    render(){
        return <div> 
            <SearchBar />
            <BookmarkContainer info = { ["hi", "how", "are", "you", "i", "am", "calling", "on", "my", "phone"] } width = {4} />
        </div>
    }
}

export {FilterableBookmarkTable}