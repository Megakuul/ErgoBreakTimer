document.addEventListener("DOMContentLoaded", function() {
		const enablebtn = document.getElementById("enable-btn");
		
		chrome.storage.local.get(["enabled"], function(result) {
				if (result.enabled) {
						enablebtn.innerHTML = "Disable";
						enablebtn.classList.add("enabled");
				} else {
						enablebtn.innerHTML = "Enable";
						enablebtn.classList.remove("enabled");
				}
		});

		enablebtn.addEventListener("click", function() {
				chrome.storage.local.get(["enabled"], function(result) {
						chrome.storage.local.set({ enabled: !result.enabled }, function() {
								if (!result.enabled) {
										enablebtn.innerHTML = "Disable";
										enablebtn.classList.add("enabled");
								} else {
										enablebtn.innerHTML = "Enable";
										enablebtn.classList.remove("enabled");
								}
						});
				});
		});
});
