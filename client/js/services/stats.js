'use strict';
//Stats service used for stats REST endpoint
angular.module('mean.stats').factory('Stats', ['$resource', function($resource) {
	
	var stats = $resource('/stats/:roomId/:cmd', 
    	{roomId:'@id'},
    	{
    		rooms: {method: 'GET', params:{cmd: 'rooms'}, isArray: true},
    		roomsbytype: {method: 'GET', params:{cmd: 'roomsbytype'}, isArray: true},
			webrtcstats: {method: 'GET', params:{cmd: 'webrtcstats'}}
        });
	
	var statsFactory = {};
	
	statsFactory.rooms = function(cb) {
		stats.rooms({},cb);
	};

	statsFactory.roomsbytype = function(cb) {
		stats.roomsbytype({},cb);
	};

	statsFactory.webrtcstats = function(roomId,cb) {
		stats.webrtcstats({roomId:roomId},cb);
	};

	
	return statsFactory;
	
}]);
