import React, { Component } from 'react';
import { Progress } from 'reactstrap';

export class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state = { value: 20};
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 100);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return(
            <Progress animated value={this.state.value} />
        );
    }

    tick() {
        this.setState(prevState => ({ value: prevState.value + 10 }));
    }
}
