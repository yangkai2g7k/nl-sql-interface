import React, { Component } from 'react';
import './Main.css';
import Header from "./components/Header";
import Schema from "./components/Schema";
import PageNumber from "./components/PageNumber";
import Form from "./components/Form";
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Grid, Row, Col, Pagination } from 'react-bootstrap';
import axios from './Axios'

export class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            currentPage:2,
            totalPage:10
        };
        this.renderform = this.renderform.bind(this);
    }


    renderform(index,arr){
        return (<div>{index} {arr[index]}{ arr[index]}</div>);
    }
    render() {
        return (
            <div>
                <Header />
                <Grid >
                    <Row className = "show-grid" >
                        <Col xs = { 12 } md = { 6 } >
                            <Form />
                            <PageNumber currentPage={this.state.currentPage} totalPage={this.state.totalPage}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = { 12 } md = { 6 } >
                            <Schema />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}





export default Main;