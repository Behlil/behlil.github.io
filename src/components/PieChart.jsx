
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

// A function component that takes data and width as props
function PieChart({ width }) {
    // A ref to access the DOM element
    const ref = useRef();

    // An array of objects with label and value properties
    const data = [
        { label: "Apple", value: 20 },
        { label: "Banana", value: 15 },
        { label: "Cherry", value: 10 },
        { label: "Durian", value: 5 },
        { label: "Elderberry", value: 3 },
    ];

    // A useEffect hook to render the pie chart
    useEffect(() => {
        // Select the element and remove any existing children
        const svg = d3.select(ref.current).html("");

        // Create a pie layout function
        const pie = d3.pie().value((d) => d.value);

        // Create an arc generator function
        const arc = d3
            .arc()
            .innerRadius(0)
            .outerRadius(width / 2);

        // Create a color scale function
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        // Append a group element to the svg and center it
        const g = svg
            .append("g")
            .attr("transform", `translate(${width / 2}, ${width / 2})`);

        // Bind the data to the pie layout and append path elements for each slice
        const paths = g
            .selectAll("path")
            .data(pie(data))
            .join("path")
            .attr("d", arc)
            .attr("fill", (d) => color(d.data.label));

        // Append text elements for each slice to show the label and value
        const texts = g
            .selectAll("text")
            .data(pie(data))
            .join("text")
            .attr("transform", (d) => `translate(${arc.centroid(d)})`)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .text((d) => `${d.data.label}: ${d.data.value} `);

        // Define a transition function for the paths and texts
        const transition = (selection) => {
            selection
                .transition()
                .duration(500)
                .attrTween("d", (d) => {
                    // Interpolate the start and end angles of the arc
                    const i = d3.interpolate(d.startAngle, d.endAngle);
                    return (t) => {
                        // Update the end angle based on the interpolation value
                        d.endAngle = i(t);
                        // Return the new arc path
                        return arc(d);
                    };
                })
                .attrTween("transform", (d) => {
                    // Interpolate the centroid of the arc
                    const i = d3.interpolateArray(arc.centroid(d), [
                        width / 2 * Math.cos(d.endAngle - Math.PI / 2),
                        width / 2 * Math.sin(d.endAngle - Math.PI / 2),
                    ]);
                    return (t) => {
                        // Return the new transform value based on the interpolation array
                        return `translate(${i(t)})`;
                    };
                });
        };

        // Add event listeners to the paths and texts for interactivity
        paths.on("mouseover", function (event, d) {
            // Select the current element and move it to the front
            d3.select(this).raise();
            // Apply the transition function to the current element and its corresponding text element
            transition(d3.select(this));
            transition(texts.filter((t) => t.data.label === d.data.label));
        });

        paths.on("mouseout", function (event, d) {
            // Select the current element and move it back to its original position
            d3.select(this).lower();
            // Apply the transition function to the current element and its corresponding text element with reversed angles
            transition(
                d3.select(this).datum({
                    ...d,
                    startAngle: d.endAngle,
                    endAngle: d.startAngle,
                })
            );
            transition(
                texts.filter((t) => t.data.label === d.data.label).datum({
                    ...d,
                    startAngle: d.endAngle,
                    endAngle: d.startAngle,
                })
            );
        });
    }, [data, width]); // Re-render when data or width changes

    // Return the svg element with the ref
    return <svg ref={ref} width={width} height={width} />;
}

export default PieChart;
