// JavaScript
define( [], function () {
	'use strict';

	return {
	
	
			type: "items",
			component: "accordion",
			
			
			items: {
			
			
			
				dimensions: {
					uses: "dimensions",
					min: 0
				},
				
				
				
				measures: {
					uses: "measures",
					min: 0
				},
				
				
				
				sorting: {
					uses: "sorting"
				},
				
				
				
				settings: {
					uses: "settings",
					
					items: {
						MyIntProp: {
						type: "integer",
						label: "Font Size",
						ref: "FontSize",
						defaultValue: "10"
									}
						,
						CustomText: {
						type: "string",
						label: "Clicked or Passed Through",
						ref: "ClickedOrPassedThrough",
						defaultValue: "Clicked"
									}
							}
						}
					}
				}});
				
				
				
				