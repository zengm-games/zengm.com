const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "Debugging Quota Errors",
			parent: "debugging",
		};
	}

	render({ gameName, sport }) {
		return `<p>
    If ${gameName} is refusing to allow you to play more, it could be because of
    a quota error. This happens when your browser decides to not let you store any
    more data because it thinks you're running low on hard drive space.
</p>
<p>Here are a few things you can try to fix the problem:</p>
<ul>
    <li>
        Delete some old data from your leagues (Tools > Improve Performance within a
        league)
    </li>
    <li>Delete some old leagues entirely</li>
    <li>Delete some other files on your hard drive</li>
</ul>
<p>
    If none of that works, you can try a
    <a href="/${sport}/manual/debugging/hard-reset/">Hard Reset</a> which will delete all
    your ${gameName} data and leave you with a completely blank slate. Sometimes
    this is the only way to get Chrome working again due to
    <a href="https://code.google.com/p/chromium/issues/detail?id=488851"
        >this bug</a
    > where there is some delay between you deleting data and the browser actually recognizing the old data is gone and it should now let you store more data.
</p>
<p>
    And if all else fails, you can try using another browser.
    <a href="https://www.google.com/chrome/">Chrome</a> and <a href="https://firefox.com/">Firefox</a> work
    best, but it runs in any web browser.
</p>
<p>
    If you need help, <a href="/contact/">send an email or post to Reddit</a>.
</p>`;
	}
};
