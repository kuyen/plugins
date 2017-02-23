module.exports = (Franz, options) => {
	const getValueById = (id) => {
		return document.getElementById(id).innerText;
	};
	const getMessages = () => {
		const unreadNotices = getValueById('notificationsCountValue');
		const unreadMessage = getValueById('mercurymessagesCountValue');
		Franz.setBadge(unreadMessage, unreadNotices);
	}
	Franz.loop(getMessages);
	// Franz.injectCSS(path.join(__dirname, "style.css"));
	document.getElementById('rightCol').remove();
	document.getElementById('stream_pagelet').style.width = '150%';
	document.getElementById('mainContainer').style.paddingLeft = '100px';
}
