import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { BookmarkContainer } from './BookmarkContainer'
import { Paper } from '@material-ui/core'
//Contains the BookmarkContainer and SearchBar, and transfers data between the too.
class FilterableBookmarkTable extends Component {

    constructor(props){ 
        super(props)
    }
 
    //TODO: Move style somewhere else to proper css sheet.
    //TODO: Put SearchBar into a NavBar similar to the original bookmarks page
    //TODO: 
    render(){
        return <div > 
            <SearchBar />

            <div id={"container"} style={ {"box-sizing":"border-box", 
            "width":"60%",
            "margin-right":"auto",
            "margin-left":"auto",
            "padding-top":"1%"} }>
                <BookmarkContainer info = { ["hi", "how", "are", "you", "i", "am", "calling", "on", "my", "phone"] } width = {4} />
            </div>
            
        </div>
    }
}

export {FilterableBookmarkTable}