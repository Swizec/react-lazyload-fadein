import React, { Component } from "react";
import FadeIn from "../../src";
import * as d3 from "d3";

class PopulationChart extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        d3
            .csv(
                "./population.csv",
                d => (
                    console.log(d),
                    {
                        country: d.ISO,
                        noc: d.NOC,
                        name: d["Country name"],
                        population: Number(d["pop.2010"].replace(/\./g, ""))
                    }
                )
            )
            .then(data => {
                console.log(error, data);
                this.setState({
                    data
                });
                this.props.onLoad();
            });
    }

    render() {
        const { data } = this.state;

        return (
            <React.Fragment>
                <h2>hai</h2>
            </React.Fragment>
        );
    }
}

export const Dataviz = () => (
    <div>
        <FadeIn height={600}>
            {onload => <PopulationChart onLoad={onload} />}
        </FadeIn>
    </div>
);
