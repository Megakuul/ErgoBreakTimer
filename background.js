chrome.alarms.create("poschange", {
		delayInMinutes: 30,
		periodInMinutes: 30
});

chrome.alarms.create("standup", {
		delayInMinutes: 60,
		periodInMinutes: 60
});

chrome.alarms.onAlarm.addListener((alarm) => {
		chrome.storage.local.get(["enabled"], function(result) {
				if (!result || !result.enabled) return;
				
				let title = "";
				let message = "";
				if (alarm.name === "poschange") {
						title = "Time to Adjust Your Posture";
						message = "Consider adjusting your chair or desk height, or simply alter your sitting posture.";
				}
				if (alarm.name === "standup") {
						title = "Stand Up and Stretch";
						message = "It's time for a short break. Stand, stretch, and take a quick walk if possible.";
				}
				
				chrome.notifications.create('ErgoBreakNotification', {
						type: 'basic',
						iconUrl: 'icon.png',
						title: title,
						message: message
				});
		});
});  
