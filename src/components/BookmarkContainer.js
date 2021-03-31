import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Bookmark } from './Bookmark'
import { Grid } from '@material-ui/core'


function GridRow(props){
    var row = new Array(props.width)
    for(var i = 0; i < row.length; i++) {
        var arrayIndex = props.row * props.width + i;
        if(arrayIndex < props.info.length) {
            //If we are still within the bounds of the array
            //TODO: Use Bookmark component to display
            row[i] = <Grid item xs={12/props.width}>
                <Bookmark title = {props.info[arrayIndex]}/>
            </Grid>
        }
        else {
            //If we don't have any information left, leave a placeholder.
            row[i] = <Grid item xs={12/props.width}>
            </Grid>
        }

    }

    return row;
}

function GridColumn(props){
    var column = new Array(props.height)
    for(var i = 0; i < column.length; i++) {
        //TODO: Change spacing to correspond with width?
        column[i] = <Grid container item xs = {12} spacing = {3}>
            <GridRow info = {props.info} row = {i} width = {props.width}/>
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
            <GridColumn info = {this.props.info} height = {height} width = {this.props.width}/> 
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