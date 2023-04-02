import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

class Globe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            geoJson: null,
            angle: 0
        };
        this.svgRef = React.createRef();
    }

    componentDidMount() {
        // Load and process geographic data
        d3.json('https://codepen.io/frontendcharts/pen/JBprpp.js', (err, json) => {
            if (err) throw err;
            let geoJson = topojson.feature(json, json.objects.ne_110m_admin_0_countries);
            this.setState({ geoJson });
        });

        // Start animation loop
        d3.timer(this.rotate.bind(this));
    }

    rotate(elapsed) {
        // Update rotation angle based on elapsed time
        let angle = this.state.angle + elapsed * 0.01;
        this.setState({ angle });
    }

    render() {
        // Create D3 projection function
        let projection = d3.geoOrthographic()
            .scale(this.props.size / 2)
            .translate([this.props.size / 2, this.props.size / 2])
            .rotate([this.state.angle, 0]); // Rotate the globe

        // Create D3 geoPath generator
        let path = d3.geoPath().projection(projection);

        return (
            <svg width={this.props.size} height={this.props.size} ref={this.svgRef}>
                <defs>
                    <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#9cf', stopOpacity: 1 }} />
                    </radialGradient>
                </defs>
                <circle cx={this.props.size / 2} cy={this.props.size / 2} r={this.props.size / 2} fill="url(#grad)" />
                {this.state.geoJson && this.state.geoJson.features.map((feature, i) => (
                    <path key={i} d={path(feature)} fill="#ccc" stroke="#fff" />
                ))}
            </svg>
        );
    }
}

export default Globe;