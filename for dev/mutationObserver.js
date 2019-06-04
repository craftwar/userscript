mutationObserver = new MutationObserver( (mutationList, observer)=> {
	for (mutation of mutationList) {
		console.log(mutation);
	}
});
var config = { attributeOldValue:true, attributes:true, characterData:true,
	characterDataOldValue:true, childList: true, subtree: true };
mutationObserver.observe(document, config);
