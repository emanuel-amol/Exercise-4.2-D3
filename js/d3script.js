// Change style of h1
d3.select("h1")
  .style("color", "green")
  .style("font-family", "Arial")
  .style("font-size", "30px");

// Add a paragraph inside a div
d3.select("div")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

  // Add a green rectangle inside the SVG
d3.select("svg")
  .append("rect")
  .attr("x", 50)
  .attr("y", 50)
  .attr("width", 100)
  .attr("height", 30)
  .style("fill", "green");
