import React, { Component } from 'react';

//Used to take user input.
class SearchBar extends Component {

    constructor(props) {
        super(props);
    }

    //https://getbootstrap.com/docs/5.0/forms/input-group/
    //https://mdbootstrap.com/docs/standard/forms/search/
    render() {
        return <div class="input-group">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <button type="button" class="btn btn-outline-primary">search</button>
        </div>
    }
}

export { SearchBar }