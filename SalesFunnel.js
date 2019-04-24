define( ["qlik", "jquery", './properties', "text!./SalesFunnel.css"], 

function ( qlik, $ , props , cssContent) {
	'use strict';
	$("<style>").html(cssContent).appendTo("head");	 
	
 
	
	return {
	
initialProperties : {  
            qHyperCubeDef : {  
                        qDimensions : [],  
                        qMeasures : [],  
                        qInitialDataFetch : [{  
                                     qWidth : 10,  
                                     qHeight : 50  
                         }]  
               }
			   },  

	definition: props,
	
		support : {
			snapshot: true,
			export: true,
			exportData : false
		} ,
		
		paint: function ($element, layout) {

//QvAjaxZfc/QvsViewClient.aspx?public=only&type=document&name=Extensions/fun1/redchev.png 

console.log('i am gay')
console.log (layout.qHyperCube.qMeasureInfo[0].qFallbackTitle) 
var ft = layout.FontSize 
var CustomText = layout.ClickedOrPassedThrough 
var gvvtitle = layout.qHyperCube.qMeasureInfo[0].qFallbackTitle 
var gvv = layout.qHyperCube.qGrandTotalRow[0].qText
var sec = layout.qHyperCube.qGrandTotalRow[1].qText 
var sectitle = layout.qHyperCube.qMeasureInfo[1].qFallbackTitle


var sctnum = (layout.qHyperCube.qGrandTotalRow[1].qNum / layout.qHyperCube.qGrandTotalRow[0].qNum) 

var sctnumpct = (layout.qHyperCube.qGrandTotalRow[1].qNum / layout.qHyperCube.qGrandTotalRow[0].qNum)*100
var sctnumformat = sctnumpct.toFixed(2) + ' %'


if( sctnum <= 0.33) { 
  		var level = "low"} 
  else if (sctnum > 0.33 && sctnum < 0.66) { 
  		var level = "mid"} 
  else if (sctnum => 0.66) { 
  		var level = "high"};
		
console.log(level) 
console.log(gvvtitle)  
console.log(ft)    
console.log(sctnumformat)  

$element.empty();	

var html = '<div class="grid-container">';

html += '<div class="leftp"><div class="chev"><img class="inner" src="http://localhost:4848/Extensions/SalesFunnel/images/greenchev.png"></div></div>';

  html += '<div class="grid-item" style="font-size:';
  html += ft
  html += 'px">';
  html += gvvtitle 
  html += '<br>';
  html += gvv
  html += '<br>';
  
    html += '<div class="chart" >';
 	html += sctnumformat
    html += '<div ng-repeat="row in data.rows" class="row">';
	  html += '<div class="bar" style="width:';
	  html += sctnum*100
	  html += '%">'; 
	  html += '</div>';
		  html += '<div style="font-size:12px;text-align:left">';
		  html += '</div> </div> </div></div>';
  
   
html += '<div class="rightp"><div class="chev"><img class="inner" src="http://localhost:4848/Extensions/SalesFunnel/images/redchev.png"></div></div>'; 


  if( level === "low") {
  html += '<div class="low" style="background-image:url(http://localhost:4848/Extensions/SalesFunnel/images/1a.png);background-repeat: no-repeat;background-position: center; background-size: contain;font-size:';
  html += ft
  html += 'px"><br>';
  } else if (level === "mid") {
  html += '<div class="low" style="background-image:url(http://localhost:4848/Extensions/SalesFunnel/images/2a.png);background-repeat: no-repeat;background-position: center; background-size: contain;font-size:';
  html += ft
  html += 'px"><br>';
  } else if (level === "high") {
  html += '<div class="low" style="background-image:url(http://localhost:4848/Extensions/SalesFunnel/images/3a.png);background-repeat: no-repeat;background-position: center; background-size: contain;font-size:';
  html += ft
  html += 'px"><br>';
  }
  
  html += sec
  html += '<br>';
  html += CustomText
  html += ' Through to <br>';
  html += sectitle
  html += '<br><br><br></div>'; 

html += '</div>';


$element.append( html );
	 
	 
	 
	 
	 
	} 

	} ;

} );

/*

document.getElementById("parentElement").innerHTML = html;

			//add your rendering code here
				$element.empty();
                var $helloWorld = $( document.createElement( 'div' ) );
				div.classList.add('qv-object-grid-item');
                $helloWorld.html( 'Hello World from the extension "SimpleHelloWorld"<br/>' );
                $element.append( $helloWorld );
				*/
				
 
