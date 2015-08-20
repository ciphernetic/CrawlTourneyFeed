var crawlApp = angular.module('CrawlApp', []);

crawlApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
		var milestones = [{
			Name: 'palyth',
			Level: 15,
			Combo: 'GrMo',
			Message: 'reached level 5 of the Spider Nest. (Spider:5)',
			MessageQuality: 'neutral'
		}, {
			Name: 'palyth',
			Level: 16,
			Combo: 'GrMo',
			Message: 'found a gossamer rune of Zot. (Spider:5)',
			MessageQuality: 'good'
		}, {
			Name: 'palyth the Impaler',
			Level: 14,
			Combo: 'DsWn',
			Message: 'worshipper of Kikubaaqudgha, slain by an eight-headed',
			MessageQuality: 'bad'
		}];
		
		$scope.Milestones = milestones;
	}]);