import React, { Component } from "react";
import axios from "axios";
import Chart from "react-google-charts";

class ToDos extends Component {
    state = {
        toDos: []
    };

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/todos").then(response => {

            let data = response.data;
            let completeAll = [];
            let incompleteAll = [];
            let toDos = [];

            data.forEach(element => {
                if (element.completed) {
                    completeAll.push(element);
                } else {
                    incompleteAll.push(element);
                }
            });

            toDos.push(["Status", "%"]);
            toDos.push(["Complete \n (" + completeAll.length + " activities)", (completeAll.length * 100) / data.length]);
            toDos.push(["Incomplete \n (" + incompleteAll.length + " activities)",
            (incompleteAll.length * 100) / data.length]);

            this.setState({
                toDos: toDos
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>To Dos</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Chart
                                width={"600px"}
                                height={"450px"}
                                chartType="PieChart"
                                loader={<div>Loading Chart</div>}
                                data={this.state.toDos}
                                options={{
                                    chartArea: { width: "100%" }
                                  }}
                                rootProps={{ "data-testid": "1" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDos;