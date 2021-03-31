import React from "react";
import { Paper } from '@material-ui/core'

class Bookmark extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return <React.Fragment>
            <Paper>{this.props.title}</Paper>
        </React.Fragment>;
    }
}

export { Bookmark } 