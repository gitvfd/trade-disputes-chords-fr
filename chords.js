/*//////////////////////////////////////////////////////////
////////////////// Set up the Data /////////////////////////
//////////////////////////////////////////////////////////*/

var NameProvider = ["États-Unis", "Chine", "UE", "Russie", "Ukraine", "Canada", "Japon", "Corée", "Tunisie", "Turquie", "Argentine", "Brésil", "Taipei chinois", "Inde", "Indonésie", "Mexique", "Norvège", "Suisse", "Thaïlande", "EAU", "Venezuela", "Viet Nam", "Arménie", "Australie", "Costa Rica", "Kazakhstan", "Kirghizistan", "Maroc", "Pakistan", "Pérou"];

var matrix = [
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];
/*Sums up to exactly 100*/

var colors = ['#612794','#04629a','#0bb89c','#0bb89c','#0bb89c','#90bd79', '#90bd79','#cdc052', '#cdc052', '#cdc052', '#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#ffc20e','#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7','#f7f7f7'];


/*Initiate the color scale*/
var fill = d3.scale.ordinal()
    .domain(d3.range(NameProvider.length))
    .range(colors);

var test = Math.min(700, window.innerWidth)
var test2 = Math.min(500, 5/7*window.innerWidth)
/*//////////////////////////////////////////////////////////
/////////////// Initiate Chord Diagram /////////////////////
//////////////////////////////////////////////////////////*/
var margin = {top: 30, right: 25, bottom: 10, left: 25},
	width = test - margin.left - margin.right,
	height = test2 - margin.top - margin.bottom,
    innerRadius = Math.min(width, height) * .39,
    outerRadius = innerRadius * 1.04;

/*Initiate the SVG*/
var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("svg:g")
    .attr("transform", "translate(" + (margin.left + width/2) + "," + (margin.top + height/2) + ")");

	
var chord = d3.layout.chord()
    .padding(.04)
    .sortSubgroups(d3.descending) /*sort the chords inside an arc from high to low*/
    .sortChords(d3.descending) /*which chord should be shown on top when chords cross. Now the biggest chord is at the bottom*/
	.matrix(matrix);
	

/*//////////////////////////////////////////////////////////
////////////////// Draw outer Arcs /////////////////////////
//////////////////////////////////////////////////////////*/

var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
	
var g = svg.selectAll("g.group")
	.data(chord.groups)
	.enter().append("svg:g")
	.attr("class", function(d) {return "group " + NameProvider[d.index];});
	
g.append("svg:path")
	  .attr("class", "arc")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .attr("d", arc)
	  .style("opacity", 0)
	  .transition().duration(1000)
	  .style("opacity", 1);

/*//////////////////////////////////////////////////////////
////////////////// Initiate Ticks //////////////////////////
//////////////////////////////////////////////////////////*/

var ticks = svg.selectAll("g.group").append("svg:g")
	.attr("class", function(d) {return "ticks " + NameProvider[d.index];})
	.selectAll("g.ticks")
	.attr("class", "ticks")
    .data(groupTicks)
	.enter().append("svg:g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius+10 + ",0)";
    });

/*Append the tick around the arcs*/
ticks.append("svg:line")
	.attr("x1", 1)
	.attr("y1", 0)
	.attr("x2", 5)
	.attr("y2", 0)
	.attr("class", "ticks")
	.style("stroke", "#FFF");
	
/*Add the labels for the %'s*/
ticks.append("svg:text")
	.attr("x", 8)
	.attr("dy", ".35em")
	.attr("class", "tickLabels")
	.attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
	.style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
	.text(function(d) { return d.label; })
	.attr('opacity', 1);
	
/*//////////////////////////////////////////////////////////
////////////////// Initiate Names //////////////////////////
//////////////////////////////////////////////////////////*/

g.append("svg:text")
  .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
  .attr("dy", ".35em")
  .attr("class", "titles")
  .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
  .attr("transform", function(d) {
		return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
		+ "translate(" + (innerRadius + 35) + ")"
		+ (d.angle > Math.PI ? "rotate(180)" : "");
  })
  .attr('opacity', 1)
  .text(function(d,i) { return NameProvider[i]; });  

/*//////////////////////////////////////////////////////////
//////////////// Initiate inner chords /////////////////////
//////////////////////////////////////////////////////////*/
 
var chords = svg.selectAll("path.chord")
	.data(chord.chords)
	.enter().append("svg:path")
	.attr("class", "chord")
	.style("stroke", function (d) { return d3.rgb(fill(d.source.index)).darker(); })
	.style("fill", function(d) { return fill(d.source.index); })
	.attr("d", d3.svg.chord().radius(innerRadius))
	.attr('opacity', 1);


/*Make mouse over and out possible*/
d3.selectAll(".group")
	.on("mouseover", fade(.02))

	.on("mousemove", function () {

		//Change titles
		d3.select("#chart-tooltip .tooltip-title").html(this.className.baseVal.slice(6, this.className.baseVal.length))

		//Place & show the tooltip
		d3.select("#chart-tooltip")
			.style("top", (event.clientY - 5 + "px"))
			.style("left", (event.clientX + 5 + "px"))
			.style("opacity", 1)


	})
	.on("mouseout", function () {
		d3.select("#chart-tooltip")
			.style("top", (event.clientY - 5 + "px"))
			.style("left", (event.clientX + 5 + "px"))
			.style("opacity", 0);

		svg.selectAll("path.chord")
			.transition()
			.style("stroke-opacity", 0.8)
			.style("fill-opacity", 0.8);
	});


/*//////////////////////////////////////////////////////////	
///////////// Initiate Progress Bar ////////////////////////
//////////////////////////////////////////////////////////*/
/*Initiate variables for bar*/
var progressColor = ["#949494","#96ffea"],
	progressClass = ["prgsBehind","prgsFront"],
	prgsWidth = 0.4*650,
	prgsHeight = 3;
/*Create SVG to visualize bar in*/
var progressBar = d3.select("#progress").append("svg")
	.attr("width", prgsWidth)
	.attr("height", 3*prgsHeight);
/*Create two bars of which one has a width of zero*/
progressBar.selectAll("rect")
	.data([prgsWidth, 0])
	.enter()
	.append("rect")
	.attr("class", function(d,i) {return progressClass[i];})
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", function (d) {return d;})
	.attr("height", prgsHeight)
	.attr("fill", function(d,i) {return progressColor[i];});

/*//////////////////////////////////////////////////////////	
/////////// Initiate the Center Texts //////////////////////
//////////////////////////////////////////////////////////*/
/*Create wrapper for center text*/
var textCenter = svg.append("g")
					.attr("class", "explanationWrapper");

/*Starting text middle top*/
var middleTextTop = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", -12*10/2 + "px")
	.attr("dy", "1em")
	.attr("opacity", 1)
	.text("")
	.call(wrap, 225);

/*Starting text middle bottom*/
var middleTextBottom = textCenter.append("text")
	.attr("class", "explanation")
	.attr("text-anchor", "middle")
	.attr("x", 0 + "px")
	.attr("y", 50*3/2 + "px")
	.attr("dy", "1em")
	.attr('opacity', 1)
    .text("")
    .call(wrap, 225);


/*//////////////////////////////////////////////////////////
//////////////// Storyboarding Steps ///////////////////////
//////////////////////////////////////////////////////////*/

var counter = 0,
	buttonTexts = ["Commencer", "Suivant", "Suivant", "Suivant", "Terminer"],
	opacityValueBase = 0.8,
	opacityValue = 0.4;

/*Reload page*/
d3.select("#reset")
	.on("click", function(e) {location.reload();});

/*Skip to final visual right away*/
d3.select("#skip")
	.on("click", finalChord);
	
/*Order of steps when clicking button*/
d3.select("#clicker")      
	.on("click", function(e){
		if (counter == 0) DrawInit();
		else if(counter == 1) Draw2(); // intro explanation
		else if(counter == 2) Draw3(); // OK -- drawing one line ie US
       // else if (counter == 3) Draw4(); // OK -- Drawing all the other lines
        //else if (counter == 4) Draw5(); // OK -- highlighting one arc
        //else if (counter == 5) Draw6(); // OK -- explaining one end of the highlighted arc
        else if (counter == 3) Draw8(); // OK -- explaining second end of the highlighted arc
		else if (counter == 4) finalChord(); // OK -- overall arc explanation
		
		counter = counter + 1;
	});

/*//////////////////////////////////////////////////////////
//Initiate
///////////////////////////////////////////////////////////*/
function DrawInit(){


	/*First disable click event on clicker button*/
	stopClicker();

	d3.selectAll(".arc").transition().duration(700)
		.style("opacity", 0.4)

	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("opacity",0);

	/*Add the labels for the %'s at Apple*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().duration(700)
		.attr("opacity", 0);

	/*Show the Apple name*/
	d3.selectAll(".titles")
		.transition().duration(700)
		.attr("opacity", 0);

	svg.selectAll(".chord")
		.transition().duration(700)
		.attr("opacity", 0);

	changeTopText(newText = "Cette infographie détaille les plaintes en cours relatives aux mesures tarifaires et autres restrictions au commerce déposées à l'OMC depuis 2017.",
		loc = 1 / 2, delayDisappear = 0, delayAppear = 1, finalText = true);


};/*DrawInit*/

/*//////////////////////////////////////////////////////////	
//Show Arc of Apple
//////////////////////////////////////////////////////////*/
function Draw2(){ 

	//Remove arcs again
	d3.selectAll(".arc")
		.transition().delay(1 * 700).duration(700)
		.style("opacity", 0)
		.each("end", function () { d3.selectAll(".arc").remove(); });
	/*First disable click event on clicker button*/
	stopClicker();
	
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);
				
	/*Initiate all arcs but only show the Apple arc (d.index = 0)*/
	g.append("svg:path")
	  .style("stroke", function(d) { return fill(d.index); })
	  .style("fill", function(d) { return fill(d.index); })
	  .transition().duration(700)
	  .attr("d", arc)
	  .attrTween("d", function(d) {
		  if (d.index == 0 || d.index == 1) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
	  });
	  
	/*Show the tick around the Apple arc*/
	d3.selectAll("g.group").selectAll("line")
		.transition().delay(700).duration(1000)
		.style("stroke", function (d, i, j) { ; return (j == 0 || j == 1) ? "#000"  : 0; });

	/*Add the labels for the %'s at Apple*/
	d3.selectAll("g.group").selectAll(".tickLabels")
		.transition().delay(700).duration(2000)
		.attr("opacity", function (d, i, j) { return (j == 0 || j == 1)  ? 1  : 0; });

	/*Show the Apple name*/
	d3.selectAll(".titles")
	  .transition().duration(2000)
		.attr("opacity", function (d, i) { return (d.index == 0 || d.index == 1) ? 1  : 0; });
	  
	/*Switch  text*/
	changeTopText(newText = "Deux pays ont initié cinq différends.",
	loc = 1/2, delayDisappear = 0, delayAppear = 1, finalText = true);
	
    changeBottomText(newText = "",
	loc = 0/2, delayDisappear = 0, delayAppear = 1)	;
	
};/*Draw2*/

/*///////////////////////////////////////////////////////////  
//Draw the other arcs as well
//////////////////////////////////////////////////////////*/
function Draw3(){

	/*First disable click event on clicker button*/
	stopClicker();

	var arcDelay = [ 0, 0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0, 5, 5, 5, 5, 5, 5, 5, 5];


    /*Show and run the progressBar*/
	runProgressBar(time=700*(arcDelay[(arcDelay.length-1)]+1));	
		
   /*Fill in the other arcs*/
   svg.selectAll("g.group").select("path")
	.transition().delay(function(d, i) { return 700*arcDelay[i];}).duration(1000)
	.attrTween("d", function(d) {
		if (d.index != 0 && d.index != 1) {
		   var i = d3.interpolate(d.startAngle, d.endAngle);
		   return function(t) {
			   d.endAngle = i(t);
			 return arc(d);
		   }
		}
    });
 
  /*Make the other strokes black as well*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("line").style("stroke", "#000");
  /*Same for the %'s*/
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("g").selectAll("text").style("opacity", 1);
  /*And the Names of each Arc*/	
  svg.selectAll("g.group")
	.transition().delay(function(d,i) { return 700*arcDelay[i]; }).duration(700)
	.selectAll("text").style("opacity", 1);

	/*Change the text of the top section inside the circle accordingly*/
	/*between 1 and 5 disputes*/
	changeTopText(newText = "D'autres pays ont initié entre un et quatre différends.",
        loc = 1/2, delayDisappear = 0, delayAppear = 1);
	/*0 disputes*/
	changeTopText(newText = "Huit pays répondent à des différends mais n’en ont pas initié.",
		loc = 1 / 2, delayDisappear = (arcDelay[22] - 1), delayAppear = arcDelay[22], finalText = true);
    /*0 dispute%*/
    //changeTopText(newText = "8 countries are just responding to disputes but haven't issued any",
	//	loc = 1 / 2, delayDisappear = (arcDelay[22] - 1), delayAppear = arcDelay[22], finalText = true);		
	/*Chord intro*/			
 
	

};/*Draw3*/

/*///////////////////////////////////////////////////////////
//Show the chord between Samsung and Nokia
//////////////////////////////////////////////////////////*/
function Draw4(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia intro text*/
	changeTopText(newText = "Let's focus on one dispute.",
		loc = 0, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	/*Bottom text disappear*/
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);	
	
    /*Make the non Samsung & Nokia arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", function(d) {
			if(d.index != 0 && d.index != 2) {return opacityValue;}
		});		
	
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 5 || j == 4) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 5 || j == 4) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 4 || d.index == 5) {return 1;} else {return opacityValue;}});

	/*Show only the Samsung Nokia chord*/
	chords.transition().duration(2000)
		.attr("opacity", function(d, i) { 
			if(d.source.index == 2 && d.target.index == 0) 
				{return opacityValueBase;}
			else {return 0;}
		});
	
};/*Draw4*/

/*//////////////////////////////////////////////////////////////////////////*/
function Draw5(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "Looking at one end of the arc, we see two disputes have been initiated by this country aginst the other.",
		loc = 0, delayDisappear = 0, delayAppear = 1, finalText = true);
	
    /*Make the non Samsung & Nokia arcs less visible*/
    svg.selectAll("g.group").select("path")
		.transition().duration(1000)
		.style("opacity", opacityValue);		

	/*Show only the Samsung Nokia part at Samsung*/
	var arcSamsung = d3.svg.arc()
				.innerRadius(innerRadius)
				.outerRadius(outerRadius)
				.startAngle(1.1850402841694754)
				.endAngle(1.4060483410033704);
				
	svg.append("path")
		.attr("class","SamsungToNokiaArc")
		.attr("d", arcSamsung)
		.attr("fill", colors[2])
		.style('stroke', colors[2]);
		
	repeat();
	
	/*Repeatedly let an arc change colour*/
	function repeat() {
		d3.selectAll(".SamsungToNokiaArc")
			.transition().duration(700)
            .attr("fill", "#00429d")
            .style('stroke', "#00429d")
			.transition().duration(700)
			.attr("fill", colors[2])
			.style('stroke', colors[2])
			.each("end", repeat)
			;
	};
	
};/*Draw5*/


/*//////////////////////////////////////////////////////////////////////////*/
function Draw6(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	/*Samsung and Nokia text*/
	changeTopText(newText = "The other country has initiated just one dispute. The chord is the color of the country that has initiated more disputes.",
        loc = 0, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	/*Stop the color changing on the Samsung side*/
	d3.selectAll(".SamsungToNokiaArc")
		.transition().duration(700)
		.attr("fill", colors[2])
		.style("stroke", colors[2]);

    /*Show only the Samsung Nokia part at Nokia*/
    var arcSamsung = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
		.startAngle(0.11050402841694752)
		.endAngle(0.22100805683389504);

    svg.append("path")
        .attr("class", "NokiaToSamsungArc")
        .attr("d", arcSamsung)
        .attr("fill", colors[1])
        .style('stroke', colors[1]);

    repeat();

	/*Repeatedly let an arc change colour*/		
	repeat();
	function repeat() {
		d3.selectAll(".NokiaToSamsungArc")
			.transition().duration(700)
            .attr("fill", "#00429d")
            .style('stroke', "#00429d")
			.transition().duration(700)
			.attr("fill", colors[0])
			.style("stroke", colors[0])
			.each("end", repeat)
			;
	};
				
};/*Draw7*/



/*//////////////////////////////////////////////////////////
//Show all chords that are connected to Apple
//////////////////////////////////////////////////////////*/
function Draw8(){

	/*First disable click event on clicker button*/
	stopClicker();
	/*Show and run the progressBar*/
	runProgressBar(time=700*2);	
	
	changeTopText(newText = "Dans les différends bilatéraux, le ruban prend la couleur du pays qui a initié le plus de différends.",
		loc = 2/2, delayDisappear = 0, delayAppear = 1, finalText = true);
		
	/*Remove the Nokia arc*/
	d3.selectAll(".NokiaLoyalArc")
		.transition().duration(1000)
		.attr("opacity", 0)
        .each("end", function() {d3.selectAll(".NokiaLoyalArc").remove();});
    

	changeBottomText(newText = "Cliquez \"Terminer\" et passez la souris sur les bords du cercle pour plus d'informations.",
		loc = 10/4 , delayDisappear = 0, delayAppear = 1);
			
	/*Only show the chords of Apple*/
	chords.transition().duration(2000)
    .attr("opacity", function(d, i) { 
		if(d.source.index == 0 || d.target.index == 0) {return opacityValueBase;}
		else {return 0;}
	});

	/*Highlight arc of Apple*/
	svg.selectAll("g.group").select("path")
		.transition().duration(2000)
		.style("opacity", function(d) {
			if(d.index != 0) {return opacityValue;}
		});	
		
	/*Show only the ticks and text at Apple*/
	/*Make the other strokes less visible*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(700)
		.style("stroke",function(d,i,j) {if (j == 0) {return "#000";} else {return "#DBDBDB";}});
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".tickLabels").style("opacity",function(d,i,j) {if (j == 0) {return 1;} else {return opacityValue;}});
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(700)
		.selectAll(".titles").style("opacity", function(d) { if(d.index == 0) {return 1;} else {return opacityValue;}});

	/*Stop the colour changing on the Nokia side*/
	d3.selectAll(".NokiaToSamsungArc")
		.transition().duration(700)
		.attr("fill", colors[0])
		.style("stroke", colors[0]);

};/*Draw9*/

 

/*///////////////////////////////////////////////////////////
//Draw the original Chord diagram
///////////////////////////////////////////////////////////*/
/*Go to the final bit*/
function finalChord() {
	/*counter=-1;*/
	/*Remove button*/
	d3.select("#clicker")
		.style("visibility", "hidden");
	d3.select("#skip")
		.style("visibility", "hidden");
	d3.select("#progress")
		.style("visibility", "hidden");
	
	/*Remove texts*/
	changeTopText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);
	changeBottomText(newText = "",
		loc = 0, delayDisappear = 0, delayAppear = 1);			

	/*Create arcs or show them, depending on the point in the visual*/
	if (counter <= 4 ) {
		g.append("svg:path")
		  .style("stroke", function(d) { return fill(d.index); })
		  .style("fill", function(d) { return fill(d.index); })
		  .attr("d", arc)
		  .style("opacity", 0)
		  .transition().duration(1000)
		  .style("opacity", 1);
		  
	} else {
		 /*Make all arc visible*/
		svg.selectAll("g.group").select("path")
			.transition().duration(1000)
			.style("opacity", 1);
	};
	
	/*Make mouse over and out possible*/
	d3.selectAll(".group")
		.on("mouseover", fade(.02))

		.on("mousemove", function () {

			//Change titles
			d3.select("#chart-tooltip .tooltip-title").html(this.className.baseVal.slice(6, this.className.baseVal.length))

			//Place & show the tooltip
			d3.select("#chart-tooltip")
				.style("top", (event.clientY - 5 + "px"))
				.style("left", (event.clientX + 5 + "px"))
				.style("opacity", 1)


		})
		.on("mouseout",function(){
			d3.select("#chart-tooltip")
				.style("top", (event.clientY - 5 + "px"))
				.style("left", (event.clientX + 5 + "px"))
				.style("opacity", 0);

			svg.selectAll("path.chord")
				.transition()
				.style("stroke-opacity", 0.8)
				.style("fill-opacity", 0.8);
		} );
		
	/*Show all chords*/
	chords.transition().duration(1000)
		.style("opacity", opacityValueBase);

	/*Show all the text*/
	d3.selectAll("g.group").selectAll("line")
		.transition().duration(100)
		.style("stroke","#000");
	/*Same for the %'s*/
	svg.selectAll("g.group")
		.transition().duration(100)
		.selectAll(".tickLabels").style("opacity",1);
	/*And the Names of each Arc*/	
	svg.selectAll("g.group")
		.transition().duration(100)
		.selectAll(".titles").style("opacity",1);		

};/*finalChord*/

/*//////////////////////////////////////////////////////////
////////////////// Extra Functions /////////////////////////
//////////////////////////////////////////////////////////*/

/*Returns an event handler for fading a given chord group*/
function fade(opacity) {
  return function(d, i) {
    svg.selectAll("path.chord")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
		.transition()
        .style("stroke-opacity", opacity)
        .style("fill-opacity", opacity);
  };
};/*fade*/

/*Returns an array of tick angles and labels, given a group*/
function groupTicks(d) {
    var k = (d.endAngle - d.startAngle)/ (d.value );
    return d3.range(0, d.value, 1).map(function(v, i) {
    return {
        angle: v * k + d.startAngle,
        label: i % 1 ? null : v 
    };
  });
};/*groupTicks*/

/*Taken from https://groups.google.com/forum/#!msg/d3-js/WC_7Xi6VV50/j1HK0vIWI-EJ
//Calls a function only after the total transition ends*/
function endall(transition, callback) { 
    var n = 0; 
    transition 
        .each(function() { ++n; }) 
        .each("end", function() { if (!--n) callback.apply(this, arguments); }); 
};/*endall*/ 

/*Taken from http://bl.ocks.org/mbostock/7555321
//Wraps SVG text*/
function wrap(text, width) {
    var text = d3.select(this)[0][0],
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, 
        y = text.attr("y"),
		x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
		
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      };
    };  
};

/*Transition the top circle text*/
function changeTopText (newText, loc, delayDisappear, delayAppear, finalText, xloc, w) {

	/*If finalText is not provided, it is not the last text of the Draw step*/
	if(typeof(finalText)==='undefined') finalText = false;
	
	if(typeof(xloc)==='undefined') xloc = 0;
	if(typeof(w)==='undefined') w = 350;
	
	middleTextTop	
		/*Current text disappear*/
		.transition().delay(700 * delayDisappear).duration(700)
		.attr('opacity', 0)	
		/*New text appear*/
		.call(endall,  function() {
			middleTextTop.text(newText)
			.attr("y", -24*loc + "px")
			.attr("x", xloc + "px")
			.call(wrap, w);	
		})
		.transition().delay(700 * delayAppear).duration(700)
		.attr('opacity', 1)
		.call(endall,  function() {
			if (finalText == true) {

				d3.select("#clicker")
					.text(buttonTexts[counter])
					.style("pointer-events", "auto")
					.transition().duration(400)
					.style("border-color", "#363636")
					.style("color", "#363636");
				};
		});
};/*changeTopText */

/*Transition the bottom circle text*/
function changeBottomText (newText, loc, delayDisappear, delayAppear) {
	middleTextBottom
		/*Current text disappear*/
		.transition().delay(700 * delayDisappear).duration(700)
		.attr('opacity', 0)
		/*New text appear*/
		.call(endall,  function() {
			middleTextBottom.text(newText)
			.attr("y", 24*loc + "px")
			.call(wrap, 350);	
		})
		.transition().delay(700 * delayAppear).duration(700)
		.attr('opacity', 1);
;}/*changeBottomText*/

/*Stop clicker from working*/
function stopClicker() {
	d3.select("#clicker")
		.style("pointer-events", "none")
		.transition().duration(400)
		.style("border-color", "#D3D3D3")
		.style("color", "#D3D3D3");
};/*stopClicker*/

/*Run the progress bar during an animation*/
function runProgressBar(time) {	
	
	/*Make the progress div visible*/
	d3.selectAll("#progress")
		.style("visibility", "visible");
	
	/*Linearly increase the width of the bar
	//After it is done, hide div again*/
	d3.selectAll(".prgsFront")
		.transition().duration(time).ease("linear")
		.attr("width", prgsWidth)
		.call(endall,  function() {
			d3.selectAll("#progress")
				.style("visibility", "hidden");
		});
	
	/*Reset to zero width*/
	d3.selectAll(".prgsFront")
		.attr("width", 0);
		
};/*runProgressBar*/