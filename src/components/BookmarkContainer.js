import { Button } from 'bootstrap';
import React, { Component } from 'react';
import Bookmark from './Bookmark'
import { Grid } from '@material-ui/core'


function GridRow(props){
    var row = new Array(props.length)
    for(var i = 0; i < row.length; i++) {
        row[i] = <Grid item xs={12/props.length}>
            hello
        </Grid>
    }

    return row;
}

function GridColumn(props){
    var column = new Array(props.height)
    for(var i = 0; i < column.length; i++) {
        column[i] = <Grid container item xs = {12} spacing = {3}>
            <GridRow length = {props.length}/>
        </Grid>
    }

    return column
}

class BookmarkContainer extends Component {
    constructor(props) {
        super(props)
    }

    //TODO: Ensure the props that are pushed give the following information:
    //info should be mapped to a list of objects that have the information on the bookmark
    //width should be how many tables we have in total.
    createTable() {
        
        var height = Math.ceil(this.props.info.length/this.props.width);

        return <Grid container spacing={1}> 
            <GridColumn height = {height} length = {4}/> 
        </Grid>
    }


    render() {
        console.log(this.props)
        return <div>
            {this.createTable()}
        </div>
    }
}

export { BookmarkContainer }