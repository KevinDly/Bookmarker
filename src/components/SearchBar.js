import React, { Component } from 'react';

//Used to take user input.
class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    //https://getbootstrap.com/docs/5.0/forms/input-group/
    //https://mdbootstrap.com/docs/standard/forms/search/
    //TODO: Move styles to proper css sheet.
    render() {
        return <div class="input-group" style={{
            "display":"flex",
            "justify-content":"center",
        }}>
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" style={{
                    "width":"50%",
                    "height":"50px",
                    "font-size":"100%",
                    "text-align":"center"
                }}/>
            <button type="button" class="btn btn-outline-primary">search</button>
        </div>
    }
}

export { SearchBar }