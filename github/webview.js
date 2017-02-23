module.exports = (Franz, options) => {
	const getMessages = () => {
		const unread = document.getElementsByClassName('unread').innerText;
		const hasUnread = typeof unread !== 'undefined';
    console.log(unread, hasUnread);
		const unreadMessage = hasUnread ? 1: 0;
		Franz.setBadge(unreadMessage);
	}
	Franz.loop(getMessages);
}
