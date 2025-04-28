// Change style of h1
d3.select("h1")
  .style("color", "green")
  .style("font-family", "Arial")
  .style("font-size", "30px");

// Add a paragraph inside a div
d3.select("div")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");
