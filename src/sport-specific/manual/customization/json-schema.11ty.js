const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "JSON Schema",
			parent: "customization",
		};
	}

	render({ gameName, sport, websitePlay }) {
		return `<p>
	If you look in a ${gameName} league export (Tools > Export League) or in the
	<a href="/${sport}/manual/customization/">customization documentation</a>, it's clear
	that ${gameName} league files are fairly complicated. There are a lot of
	different ways that things can go wrong, and some of them can be subtle things
	that you don't notice immediately.
</p>

<p>
	When you create a new league with a file, you may see a warning like this
	appear (and probably this is what brought you to this page):
</p>

<figure><img src="/files/json-schema-1.png" class="img-fluid"></figure>

<p>
	This means there are some problems with your league file. Maybe some required
	fields are missing, or some values are in the wrong format. It might work, but
	it might not. Especially if you're sharing this file with others, you should
	probably fix the errors to be sure.
</p>

<p>
	As an example of how to do this, try loading
	<a href="/files/schema_errors.json">this file</a>. It should show 2 errors. To
	view the details of the errors, open the JavaScript console. In Chrome, do
	this by pressing ctrl+shift+i. Other browsers may have different ways to do
	it. This will open up a new panel showing some debugging information:
</p>

<figure><img src="/files/json-schema-2.png" class="img-fluid"></figure>

<p>
	Click the arrow below "JSON Schema validation errors" to see the details for
	each of the two errors:
</p>

<figure><img src="/files/json-schema-3.png" class="img-fluid"></figure>

<p>
	The first error means that the "tid" property of the 4th team is supposed to
	be an integer, but instead it is a string. You can see this in the JSON file -
	<code>"3"</code> should be <code>3</code>.
</p>

<p>
	The second error means that the 15th team is missing the required property
	"did", which is the division ID number. Again, you can see this in the JSON
	file. (See <a href="/${sport}/manual/customization/teams/">teams customization</a> for
	a description of this property, and
	<a href="/${sport}/manual/customization/game-attributes/"
		>game attributes customization</a
	>
	for more information about customizing conferences and divisions.)
</p>

<p>
	If you fix both errors, then when you upload it again there will be no
	warning. Hopefully you can do the same thing to fix any problems you're having
	with custom league files.
</p>

<p>
	<a href="${websitePlay}files/league-schema.json"
		>Here is a link to the JSON Schema file</a
	>, in case you want to use it in some external validation tool.
</p>

<p>
	There is one big caveat here. Just because your league file passes this test,
	it does not guarantee it will work. This checks some (not all) structural
	aspects of your league file, but it does not check the logical relationship
	between parts of the league file. For instance, if you say a player belongs to
	team 28 but you only have 20 teams in your league, that is not going to work
	correctly, but this check will miss it. Some day there will be more
	comprehensive checks that include stuff like this. Baby steps!
</p>`;
	}
};
