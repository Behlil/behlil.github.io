import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { geoOrthographic, geoPath } from 'd3-geo';
import { timer } from 'd3-timer';

const WorldGlobe = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = svg.node().getBoundingClientRect().width;
        const height = width;

        const projection = geoOrthographic()
            .scale(width / 2)
            .translate([width / 2, height / 2])
            .clipAngle(90);

        const pathGenerator = geoPath().projection(projection);

        const graticule = d3.geoGraticule();

        svg
            .append('path')
            .datum(graticule)
            .attr('class', 'graticule')
            .attr('d', pathGenerator);

        d3.json(
            'https://raw.githubusercontent.com/topojson/world-atlas/master/world/110m.json'
        ).then((data) => {
            const countries = topojson.feature(data, data.objects.countries);

            svg
                .selectAll('.country')
                .data(countries.features)
                .enter()
                .append('path')
                .attr('class', 'country')
                .attr('d', pathGenerator);
        });

        let rotation = [0, 0];
        timer((elapsed) => {
            rotation[0] += 0.1;
            rotation[1] += 0.1;
            projection.rotate(rotation);
            svg.selectAll('.country').attr('d', pathGenerator);
        });
    }, []);

    return (
        <svg ref={svgRef} style={{ width: '100%', height: 'auto' }}></svg>
    );
};

export default WorldGlobe;
