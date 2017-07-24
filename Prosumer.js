/**
 * StromDAO Business Object: MPR
 * =========================================
 * Meter Point Operator handling for StromDAO Energy Blockchain.
 * 
 * In general a Meter Point Operating (Contract) handles meter readings and issues Deliverables as soon as a new reading is received.
 * 
 * @author Thorsten Zoerner thorsten.zoerner@stromdao.de 
 * */
 this.prosumer = function(obj_or_address) {
			
			var p1 = new Promise(function(resolve, reject) { 
				var instance={};			
				instance.test = {};				
				
				/**
				 * Stores a reading to this contract instance. Requires sender to be approved Meter-Point 
				 * @see approveMP()
				 */
				instance.konto= function() {
					
					var p2 = new Promise(function(resolve2, reject2) { 
						var res={};
						
						parent.roleLookup().then(function(rlup) {
							rlup.relations(obj_or_address,10).then(function(skop_sc) {
							if(skop_sc=="0x0000000000000000000000000000000000000000") {
								skop_sc="0x19BF166624F485f191d82900a5B7bc22Be569895";
							}
							console.log(skop_sc);
							res.stromkontoproxy=skop_sc;
							res.account=obj_or_address;
							parent.stromkonto(res.stromkontoproxy).then(function(skop) {
								skop.balancesHaben(obj_or_address).then(function(haben) {
									res.haben=haben;
									skop.balancesSoll(obj_or_address).then(function(soll) {
										res.soll=soll;
										skop.history(obj_or_address,1000).then(function(history) {
											res.history=history;
											resolve2(res);
										});
									});
								});								
							});							
						});								
					});
				});
					return p2;
				};
				
				
				resolve(instance);
			});
			return p1;
		};
