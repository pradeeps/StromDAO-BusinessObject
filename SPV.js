/**
 * StromDAO Business Object: DirectConnectionFactory
 * =========================================
 * Factory Contract to build direct connections handling for StromDAO Energy Blockchain.
 * 
 * @author Thorsten Zoerner thorsten.zoerner@stromdao.de 
 * */
 

this.spv = function(obj_or_address) {
			if(typeof obj_or_address == "undefined") obj_or_address=parent.options.contracts["StromDAO-BO.sol_SPV"];
			
			var p1 = new Promise(function(resolve, reject) { 
				var instance=parent._objInstance(obj_or_address,'StromDAO-BO.sol_SPV');			
				instance.test = {};				
				
				instance.fund=function(uint256_value) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.fund(uint256_value).then(function(o) {
										parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				instance.allowFunding=function() {							
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.allowFunding().then(function(o) {													
										parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				instance.disallowFunding=function() {							
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.disallowFunding().then(function(o) {													
											parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				instance.spend=function(uint256_value) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.spend(uint256_value).then(function(o) {
										parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				
				instance.earn=function(uint256_value) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.earn(uint256_value).then(function(o) {
										parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				
				instance.meteredEarn=function(uint256_reading) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.meteredEarn(uint256_reading).then(function(o) {
										parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				
				instance.meteredPrice=function(uint256_value) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
							instance.obj.meteredPrice(uint256_value).then(function(o) {
									parent._waitForTransactionKeepRef(o,resolve2);
							});
						});
						return p2;
				};
				
				instance.sell=function(address_to,uint256_fund,uint256_value) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.sell(address_to,uint256_fund,uint256_value).then(function(o) {
											parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				
				instance.transfer=function(address_to, uint256_fund) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
									instance.obj.transfer(address_to, uint256_fund).then(function(o) {
										parent._waitForTransactionKeepRef(o,resolve2);	
									});
						});
						return p2;
				};
				
				instance.totalSupply=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.totalSupply().then(function(o) {	
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};
				
				instance.owner=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.owner().then(function(o) {														
								 resolve2(o[0].toString());									
							});									
					});
					return p2;
				};
				
				instance.balanceOf=function(address_account) {					
						var p2 = new Promise(function(resolve2, reject2) { 											
											instance.obj.balanceOf( parent._resolveName(address_account)).then(function(o) {
													resolve2(o[0].toString()*1);
											});
								});
								return p2;
				};
					
				instance.totalSupply=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.totalSupply().then(function(o) {																				
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};
				
				instance.sumHolders=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.sumHolders().then(function(o) {														
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};
				
				instance.earnings=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.earnings().then(function(o) {														
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};
				instance.lastreading=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.lastreading().then(function(o) {														
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};	
				instance.name=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.name().then(function(o) {														
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};		
				instance.stromkonto=function() {					
					var p2 = new Promise(function(resolve2, reject2) { 							
							instance.obj.stromkonto().then(function(o) {														
								 resolve2(o[0].toString()*1);									
							});									
					});
					return p2;
				};											
				/**
				 * Stores a reading to this contract instance. Requires sender to be approved Meter-Point 
				 * @see approveMP()
				 */
				instance.issue= function() {	
							
					var p2 = new Promise(function(resolve2, reject2) { 
							var bdx="";
							
							instance.obj.issue({value:"0x0",gasPrice:"0x0",gasLimit:3903918}).then(function(o) {									
								parent._waitForTransactionKeepRef(o,resolve2);									
							});									
					});
					return p2;
				};
				
				instance.addMeterpoint= function(address_meterpoint) {	
							
					var p2 = new Promise(function(resolve2, reject2) { 
							var bdx="";
							
							instance.obj.addMeterpoint( parent._resolveName(address_meterpoint),{value:"0x0",gasPrice:"0x0",gasLimit:3903918}).then(function(o) {									
								parent._waitForTransactionKeepRef(o,resolve2);									
							});									
					});
					return p2;
				};
				
				resolve(instance);
			});
			return p1;
		};
