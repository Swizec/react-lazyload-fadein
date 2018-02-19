import React, { Component } from "react";
import FadeIn from "../../src";
import * as d3 from "d3";
import chroma from "chroma-js";

class PopulationChart extends Component {
    state = {
        data: [],
        error: null
    };

    componentDidMount() {
        d3.csv(
            "https://raw.githubusercontent.com/Swizec/react-lazyload-fadein/master/demo/src/population.csv",
            d => ({
                country: d.ISO,
                noc: d.NOC,
                name: d["Country name"],
                population: Number(d["pop.2010"].replace(/\./g, ""))
            }),
            (error, data) => {
                this.setState({
                    data: data.filter(d => d.population > 0),
                    error
                });
                this.props.onLoad();
            }
        );
    }

    render() {
        const { error, data } = this.state;

        const height = d3
            .scaleLog()
            .domain(d3.extent(data, d => d.population))
            .range([0, 600]);
        const width = d3
            .scaleBand()
            .domain(d3.range(data.length))
            .range([0, 600]);
        const color = chroma.scale(["yellow", "hotpink", "navy"]);

        if (error) {
            return <h2>Error loading data</h2>;
        } else {
            return (
                <React.Fragment>
                    <h2>Loaded {data.length} population datapoints</h2>
                    <svg height="600" width="600">
                        {data.map((d, i) => (
                            <rect
                                x={width(i)}
                                y={600 - height(d.population)}
                                height={height(d.population)}
                                width={width.step()}
                                key={d.country}
                                fill={color(i / data.length)}
                            />
                        ))}
                    </svg>
                </React.Fragment>
            );
        }
    }
}

const Placeholder = () => <h2>Loading data ...</h2>;

export const Dataviz = () => (
    <div>
        <FadeIn height={600}>
            {onload => <PopulationChart onLoad={onload} />}
        </FadeIn>
    </div>
);
