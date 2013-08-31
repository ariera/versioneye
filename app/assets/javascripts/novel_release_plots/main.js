require(
	["/assets/libs/d3.v3.min", "/assets/plots/summaryplot",
	 "/assets/plots/summarytable", "/assets/plots/timeline"],
	function(d3, SummaryPlot, SummaryTable, Timeline){
		console.debug("Rendering plots for novel releases");
    // -- summary tables
		sumtable1 = new SummaryTable({selector: "#summary-tables .plot1", caption: "Today"});
		sumtable1.loadAndRender("/package/novel/stats/today.json");
		sumtable2 = new SummaryTable({selector: "#summary-tables .plot2", caption: "Current week"});
		sumtable2.loadAndRender("/package/novel/stats/current_week.json");
		sumtable3 = new SummaryTable({selector: "#summary-tables .plot3", caption: "Current month"});
		sumtable3.loadAndRender("/package/novel/stats/current_month.json");
		sumtable4 = new SummaryTable({selector: "#summary-tables .plot4", caption: "Last month"});
		sumtable4.loadAndRender("/package/novel/stats/last_month.json");

    // -- summary plots
		sumplot1 = new SummaryPlot({selector: "#summary-plots .plot1"});
		sumplot1.loadAndRender("/package/novel/stats/today.json");
  	sumplot2 = new SummaryPlot({selector: "#summary-plots .plot2"});
		sumplot2.loadAndRender("/package/novel/stats/current_week.json");
    sumplot3 = new SummaryPlot({selector: "#summary-plots .plot3"});
		sumplot3.loadAndRender("/package/novel/stats/current_month.json");
  	sumplot4 = new SummaryPlot({selector: "#summary-plots .plot4"});
		sumplot4.loadAndRender("/package/novel/stats/last_month.json");

    // -- timeline
    timeline1 = new Timeline({
      selector: "#area3",
      width: 890,
      url: "/package/novel/timeline30"
    });
		timeline1.loadAndRender("/package/novel/timeline30");
	}
);
