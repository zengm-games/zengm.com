const base = require("../../base");
const bySport = require("../../../util/bySport");

const myStringify = (obj, indentationLevels) => {
	const indentation = "\t".repeat(indentationLevels);
	let string = JSON.stringify(obj, null, indentation);

	// Handle closing }
	if (string[string.length - 1] === "}") {
		string = `${string.slice(0, string.length - 1)}${"\t".repeat(
			indentationLevels - 1,
		)}}`;
	}

	return string.replace(/\t/g, "    ");
};

module.exports = class {
	data() {
		return {
			...base("md"),
			title: "Customizing Player Names, Countries, and Colleges",
			parent: "customization",
		};
	}

	render({ gameName, sport }) {
		const defaultCountryFrequencies = bySport(
			{
				baseball: {
					Algeria: 0.2,
					"American Samoa": 1,
					Angola: 0.2,
					Argentina: 0.2,
					Armenia: 0.2,
					Australia: 3,
					Austria: 1,
					Azerbaijan: 0.2,
					Bahamas: 1,
					Belarus: 0.2,
					Belgium: 1,
					Benin: 0.2,
					Bolivia: 0.2,
					"Bosnia and Herzegovina": 0.2,
					Brazil: 1,
					Bulgaria: 0.2,
					Cameroon: 0.2,
					Canada: 14,
					"Cape Verde": 0.2,
					"Central African Republic": 0.2,
					Chad: 0.2,
					Chile: 0.2,
					China: 1,
					Colombia: 11,
					Congo: 0.2,
					"Costa Rica": 0.2,
					Croatia: 0.2,
					Cuba: 27,
					"Czech Republic": 1,
					Denmark: 1,
					"Dominican Republic": 169,
					"East Timor": 0.2,
					Ecuador: 0.2,
					Egypt: 0.2,
					"El Salvador": 0.2,
					England: 1,
					Estonia: 0.2,
					Ethiopia: 0.2,
					Finland: 1,
					France: 1,
					"French Guiana": 0.2,
					Gabon: 0.2,
					Georgia: 0.2,
					Germany: 1,
					Ghana: 0.2,
					Greece: 1,
					Guadeloupe: 0.2,
					Guatemala: 0.2,
					Guinea: 0.2,
					"Guinea-Bissau": 0.2,
					Haiti: 0.2,
					Honduras: 1,
					Hungary: 0.2,
					Iceland: 0.2,
					India: 0.2,
					Indonesia: 1,
					Iran: 0.2,
					Ireland: 1,
					Israel: 0.2,
					Italy: 1,
					"Ivory Coast": 0.2,
					Jamaica: 1,
					Japan: 8,
					Kazakhstan: 0.2,
					Kenya: 0.2,
					Kosovo: 0.2,
					Kyrgyzstan: 0.2,
					Laos: 0.2,
					Latvia: 1,
					Liberia: 0.2,
					Lithuania: 1,
					Luxembourg: 0.2,
					Macau: 0.2,
					Mali: 0.2,
					Mexico: 17,
					Moldova: 0.2,
					Montenegro: 0.2,
					Morocco: 0.2,
					Mozambique: 0.2,
					Nepal: 0.2,
					Netherlands: 1,
					"New Zealand": 0.2,
					Nicaragua: 1,
					Nigeria: 0.2,
					"North Korea": 0.2,
					"North Macedonia": 0.2,
					Norway: 1,
					Pakistan: 0.2,
					Panama: 9,
					"Papua New Guinea": 0.2,
					Paraguay: 0.2,
					Peru: 1,
					Philippines: 1,
					Poland: 1,
					Portugal: 1,
					"Puerto Rico": 30,
					Romania: 0.2,
					Russia: 1,
					Samoa: 0.2,
					Scotland: 0.2,
					Senegal: 0.2,
					Serbia: 0.2,
					Slovakia: 1,
					Slovenia: 0.2,
					"South Africa": 1,
					"South Korea": 7,
					"South Sudan": 0.2,
					Spain: 1,
					Sudan: 0.2,
					Sweden: 1,
					Switzerland: 1,
					Thailand: 0.2,
					"Trinidad and Tobago": 0.2,
					Turkey: 0.2,
					USA: 1088,
					Ukraine: 1,
					Uruguay: 0.2,
					Uzbekistan: 0.2,
					Venezuela: 101,
					Vietnam: 1,
					"Virgin Islands": 1,
				},
				basketball: {
					Algeria: 1,
					"American Samoa": 0.2,
					Angola: 8,
					Argentina: 71,
					Armenia: 0.2,
					Australia: 174,
					Austria: 15,
					Azerbaijan: 1,
					Bahamas: 48,
					Belarus: 12,
					Belgium: 44,
					Benin: 5,
					Bolivia: 0.2,
					"Bosnia and Herzegovina": 140,
					Brazil: 82,
					Bulgaria: 29,
					Cameroon: 69,
					Canada: 392,
					"Cape Verde": 5,
					"Central African Republic": 9,
					Chad: 5,
					Chile: 0.2,
					China: 30,
					Colombia: 15,
					Congo: 34,
					"Costa Rica": 0.2,
					Croatia: 216,
					Cuba: 0.2,
					"Czech Republic": 34,
					Denmark: 21,
					"Dominican Republic": 33,
					"East Timor": 0.2,
					Ecuador: 0.2,
					Egypt: 15,
					"El Salvador": 0.2,
					England: 112,
					Estonia: 14,
					Ethiopia: 0.2,
					Finland: 34,
					France: 294,
					"French Guiana": 7,
					Gabon: 5,
					Georgia: 20,
					Germany: 181,
					Ghana: 10,
					Greece: 214,
					Guadeloupe: 13,
					Guatemala: 0.2,
					Guinea: 11,
					"Guinea-Bissau": 0.2,
					Haiti: 12,
					Honduras: 0.2,
					Hungary: 22,
					Iceland: 10,
					India: 1,
					Indonesia: 0.2,
					Iran: 6,
					Ireland: 7,
					Israel: 50,
					Italy: 228,
					"Ivory Coast": 26,
					Jamaica: 28,
					Japan: 7,
					Kazakhstan: 7,
					Kenya: 5,
					Kosovo: 13,
					Kyrgyzstan: 0.2,
					Laos: 0.2,
					Latvia: 69,
					Liberia: 4,
					Lithuania: 195,
					Luxembourg: 3,
					Macau: 0.2,
					Mali: 20,
					Mexico: 17,
					Moldova: 4,
					Montenegro: 85,
					Morocco: 5,
					Mozambique: 0.2,
					Nepal: 0.2,
					Netherlands: 49,
					"New Zealand": 24,
					Nicaragua: 0.2,
					Nigeria: 136,
					"North Korea": 0.2,
					"North Macedonia": 28,
					Norway: 6,
					Pakistan: 0.2,
					Panama: 17,
					"Papua New Guinea": 0.2,
					Paraguay: 0.2,
					Peru: 0.2,
					Philippines: 3,
					Poland: 69,
					Portugal: 12,
					"Puerto Rico": 58,
					Romania: 22,
					Russia: 116,
					Samoa: 0.2,
					Scotland: 6,
					Senegal: 113,
					Serbia: 341,
					Slovakia: 22,
					Slovenia: 105,
					"South Africa": 9,
					"South Korea": 5,
					"South Sudan": 7,
					Spain: 251,
					Sudan: 24,
					Sweden: 47,
					Switzerland: 15,
					Thailand: 0.2,
					"Trinidad and Tobago": 11,
					Turkey: 110,
					USA: 23461,
					Ukraine: 48,
					Uruguay: 7,
					Uzbekistan: 3,
					Venezuela: 13,
					Vietnam: 0.2,
					"Virgin Islands": 10,
				},
				football: {
					Algeria: 0.2,
					"American Samoa": 70,
					Angola: 1,
					Argentina: 1,
					Armenia: 0.2,
					Australia: 108,
					Austria: 5,
					Azerbaijan: 0.2,
					Bahamas: 6,
					Belarus: 0.2,
					Belgium: 1,
					Benin: 0.2,
					Bolivia: 0.2,
					"Bosnia and Herzegovina": 0.2,
					Brazil: 2,
					Bulgaria: 0.2,
					Cameroon: 2,
					Canada: 219,
					"Cape Verde": 0.2,
					"Central African Republic": 0.2,
					Chad: 0.2,
					Chile: 0.2,
					China: 1,
					Colombia: 0.2,
					Congo: 0.2,
					"Costa Rica": 0.2,
					Croatia: 0.2,
					Cuba: 0.2,
					"Czech Republic": 0.2,
					Denmark: 7,
					"Dominican Republic": 1,
					"East Timor": 0.2,
					Ecuador: 0.2,
					Egypt: 0.2,
					"El Salvador": 0.2,
					England: 13,
					Estonia: 1,
					Ethiopia: 0.2,
					Finland: 5,
					France: 2,
					"French Guiana": 0.2,
					Gabon: 0.2,
					Georgia: 0.2,
					Germany: 31,
					Ghana: 3,
					Greece: 0.2,
					Guadeloupe: 0.2,
					Guatemala: 0.2,
					Guinea: 0.2,
					"Guinea-Bissau": 0.2,
					Haiti: 1,
					Honduras: 0.2,
					Hungary: 0.2,
					Iceland: 0.2,
					India: 0.2,
					Indonesia: 0.2,
					Iran: 0.2,
					Ireland: 1,
					Israel: 0.2,
					Italy: 4,
					"Ivory Coast": 0.2,
					Jamaica: 0.2,
					Japan: 9,
					Kazakhstan: 0.2,
					Kenya: 1,
					Kosovo: 0.2,
					Kyrgyzstan: 0.2,
					Laos: 0.2,
					Latvia: 1,
					Liberia: 1,
					Lithuania: 0.2,
					Luxembourg: 0.2,
					Macau: 0.2,
					Mali: 0.2,
					Mexico: 10,
					Moldova: 1,
					Montenegro: 0.2,
					Morocco: 0.2,
					Mozambique: 0.2,
					Nepal: 0.2,
					Netherlands: 9,
					"New Zealand": 4,
					Nicaragua: 0.2,
					Nigeria: 14,
					"North Korea": 0.2,
					"North Macedonia": 0.2,
					Norway: 2,
					Pakistan: 0.2,
					Panama: 0.2,
					"Papua New Guinea": 0.2,
					Paraguay: 0.2,
					Peru: 0.2,
					Philippines: 0.2,
					Poland: 0.2,
					Portugal: 0.2,
					"Puerto Rico": 3,
					Romania: 0.2,
					Russia: 2,
					Samoa: 1,
					Scotland: 2,
					Senegal: 0.2,
					Serbia: 1,
					Slovakia: 1,
					Slovenia: 0.2,
					"South Africa": 4,
					"South Korea": 1,
					"South Sudan": 0.2,
					Spain: 0.2,
					Sudan: 0.2,
					Sweden: 13,
					Switzerland: 2,
					Thailand: 0.2,
					"Trinidad and Tobago": 0.2,
					Turkey: 0.2,
					USA: 73489,
					Ukraine: 0.2,
					Uruguay: 0.2,
					Uzbekistan: 0.2,
					Venezuela: 0.2,
					Vietnam: 0.2,
					"Virgin Islands": 1,
				},
				hockey: {
					Algeria: 0.2,
					"American Samoa": 0.2,
					Angola: 0.2,
					Argentina: 0.2,
					Armenia: 0.2,
					Australia: 1,
					Austria: 1,
					Azerbaijan: 0.2,
					Bahamas: 1,
					Belarus: 2,
					Belgium: 1,
					Benin: 0.2,
					Bolivia: 0.2,
					"Bosnia and Herzegovina": 0.2,
					Brazil: 1,
					Bulgaria: 1,
					Cameroon: 0.2,
					Canada: 433,
					"Cape Verde": 0.2,
					"Central African Republic": 0.2,
					Chad: 0.2,
					Chile: 0.2,
					China: 0.2,
					Colombia: 0.2,
					Congo: 0.2,
					"Costa Rica": 0.2,
					Croatia: 0.2,
					Cuba: 0.2,
					"Czech Republic": 34,
					Denmark: 8,
					"Dominican Republic": 0.2,
					"East Timor": 0.2,
					Ecuador: 0.2,
					Egypt: 0.2,
					"El Salvador": 0.2,
					England: 1,
					Estonia: 0.2,
					Ethiopia: 0.2,
					Finland: 59,
					France: 3,
					"French Guiana": 0.2,
					Gabon: 0.2,
					Georgia: 0.2,
					Germany: 9,
					Ghana: 0.2,
					Greece: 0.2,
					Guadeloupe: 0.2,
					Guatemala: 0.2,
					Guinea: 0.2,
					"Guinea-Bissau": 0.2,
					Haiti: 1,
					Honduras: 0.2,
					Hungary: 0.2,
					Iceland: 0.2,
					India: 0.2,
					Indonesia: 0.2,
					Iran: 0.2,
					Ireland: 1,
					Israel: 0.2,
					Italy: 1,
					"Ivory Coast": 0.2,
					Jamaica: 1,
					Japan: 1,
					Kazakhstan: 1,
					Kenya: 0.2,
					Kosovo: 0.2,
					Kyrgyzstan: 0.2,
					Laos: 0.2,
					Latvia: 4,
					Liberia: 0.2,
					Lithuania: 1,
					Luxembourg: 0.2,
					Macau: 0.2,
					Mali: 0.2,
					Mexico: 0.2,
					Moldova: 0.2,
					Montenegro: 0.2,
					Morocco: 0.2,
					Mozambique: 0.2,
					Nepal: 0.2,
					Netherlands: 1,
					"New Zealand": 0.2,
					Nicaragua: 0.2,
					Nigeria: 1,
					"North Korea": 0.2,
					"North Macedonia": 0.2,
					Norway: 1,
					Pakistan: 0.2,
					Panama: 0.2,
					"Papua New Guinea": 0.2,
					Paraguay: 1,
					Peru: 0.2,
					Philippines: 0.2,
					Poland: 1,
					Portugal: 0.2,
					"Puerto Rico": 0.2,
					Romania: 0.2,
					Russia: 53,
					Samoa: 0.2,
					Scotland: 0.2,
					Senegal: 0.2,
					Serbia: 0.2,
					Slovakia: 10,
					Slovenia: 1,
					"South Africa": 1,
					"South Korea": 1,
					"South Sudan": 0.2,
					Spain: 0.2,
					Sudan: 0.2,
					Sweden: 98,
					Switzerland: 12,
					Thailand: 0.2,
					"Trinidad and Tobago": 0.2,
					Turkey: 0.2,
					USA: 283,
					Ukraine: 1,
					Uruguay: 0.2,
					Uzbekistan: 0.2,
					Venezuela: 1,
					Vietnam: 0.2,
					"Virgin Islands": 0.2,
				},
			},
			sport,
		);

		return `<p class="alert alert-info">When this document was written, the only way to customize any of these things was to edit a JSON file. But now, you can edit it within the normal game UI at Tools > League Settings > Players > Biographical Info. You can still do it like described below in a JSON file if you like, though!</p>
		
One of the [game attributes](/${sport}/manual/customization/game-attributes) you can customize is called "playerBioInfo". This lets you specify how biographical information is generated for players, specifically their names, countries, and colleges.

By default, ${gameName} includes a pretty large library of all of those, and picks them in proportion so that random leagues feel realistic. But if you want to simulate a different type of league, such as in a different country, then the defaults are no good.

## Player Names

Specify custom names like this:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "USA": {
                    "first": {
                        "George": 1,
                        "John": 10,
                        "Thomas": 2
                    },
                    "last": {
                        "Washington": 1,
                        "Adams": 5,
                        "Jefferson": 1
                    }
                },
                "Canada": {
                    "first": {
                        "Bob": 3,
                        "Aaron": 1,
                        "Chad": 1
                    },
                    "last": {
                        "Smith": 1,
                        "Jones": 5,
                        "Anderson": 4
                    }
                }
            }
        }
    }
}
\`\`\`

You can't specify names without specifying countries. If you don't care about having multiple countries, you can put all the names in one country.

Within each country, there is a "first" object containing first names and a "last" object containing last names. The number next to each name is its relative frequency. So looking at the first names in the USA:

\`\`\`
"George": 1,
"John": 10,
"Thomas": 2
\`\`\`

That means George will be selected 8% of the time (1/13), John will be selected 77% of the time (10/13), and Thomas will be selected 15% of the time (2/13).

If you don't care about all that and just want all the names to be selected with equal probabilities, set their relative frequencies to the same number, like:

\`\`\`
"George": 5,
"John": 5,
"Thomas": 5
\`\`\`

It can be any number - as long as it's the same number, then George, John, and Thomas will all be selected with equal probability.

Okay, that explains the probability of selecting different names within a single country. But what about the probability of generating players from different countries?

The easiest way to set that is to look in the "Country Frequencies" section below, which explains how to manually set the frequencies of players from different countries. If you don't do that, and just use a league file like shown above with only the "countries" property set inside "playerBioInfo", then it bases the relative frequencies of countries off of the sum of the relative frequencies of first names. In this case, it's 1+10+2=13 for the USA and 3+1+1=5 for Canada, so it will be 72% (13/18 Americans and 28% (5/18) Canadians.

But again, you're probably better of manually specifying the frequency of players from each country:

## Country Frequencies

The "frequencies" field lets you specify which countries players are drawn from, and what probability is associated with each country. The default setting is currently:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "frequencies": ${myStringify(defaultCountryFrequencies, 4)}
        }
    }
}
\`\`\`

Like with "countries" above, those numbers are relative frequencies. So when you see:

\`\`\`
"Germany": ${defaultCountryFrequencies.Germany},
"USA": ${defaultCountryFrequencies.USA},
\`\`\`

That means the USA is (${defaultCountryFrequencies.USA} / ${
			defaultCountryFrequencies.Germany
		}) or roughly ${Math.round(
			defaultCountryFrequencies.USA / defaultCountryFrequencies.Germany,
		)}x more likely to be chosen as a country of origin than Germany.

You can change the relative frequencies to whatever you want. Setting one to 0 is the same as just deleting that country from the list, which means that country will never be selected.

To rename or add a new country, you will also need to specify names for that country in the "countries" object, as described in the "Player Names" section above. If you do that, then your "frequencies" can include both the countries you manually specified in "countries" and the built-in countries. If you specify a country in "countries" that is a built-in country, that will override the built-in list of names for that country.

So to go back to that first example from the "Player Names" section, here it is with 80% of the players coming from the USA, 10% from Canada, and 10% from Mexico. USA and Canada will use the custom names specified in "countries", and Mexico will use the default built-in names.

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "USA": {
                    "first": {
                        "George": 1,
                        "John": 10,
                        "Thomas": 2
                    },
                    "last": {
                        "Washington": 1,
                        "Adams": 5,
                        "Jefferson": 1
                    }
                },
                "Canada": {
                    "first": {
                        "Bob": 3,
                        "Aaron": 1,
                        "Chad": 1
                    },
                    "last": {
                        "Smith": 1,
                        "Jones": 5,
                        "Anderson": 4
                    }
                }
            },
            "frequencies": {
                "USA": 8,
                "Canada": 1,
                "Mexico": 1
            }
        }
    }
}
\`\`\`

## Colleges

${
	sport === "hockey"
		? `By default, players in ${gameName} do not have a college associated with them because I still need to figure out how to deal with junior teams, which are more common than colleges in hockey.`
		: `By default, ${gameName} uses a realistic set of colleges, and assigns players to those colleges with realistic frequencies. Players from the USA and Canada have a 98% chance of going to college, and players from other countries have only a 2% chance.`
}

But you can override all of that.

There are multiple different college settings:

1. "colleges": a list of colleges for players from a certain country
2. "fractionSkipCollege": the percentage of players from a certain country who skip college
3. "default colleges": like "colleges" but applies to any country where "colleges" has not been manually set
4. "default fractionSkipCollege": like "fractionSkipCollege" but applies to any country where "fractionSkipCollege" has not been manually set

First I'll show "default colleges" and "default fractionSkipCollege":

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "default": {
                "colleges": {
                    "Harvard": 2,
                    "Yale": 1
                },
                "fractionSkipCollege": 0.4
            }
        }
    }
}
\`\`\`

That will result in Harvard and Yale being the only colleges in the game. The numbers are relative frequencies, same as described above for names and countries. So 2/3 of colleges will be Harvard and 1/3 will be Yale.

"default fractionSkipCollege" is a little trickier. By default it is 0.02. Above I changed it to 0.4. But still, that only applies to countries besides Canada and the US, because the built-in info for those countries includes a "fractionSkipCollege" override of 0.98. If you want to change that, you'll have to specify a "fractionSkipCollege" value for those countries. Example of making 20% of all players skip college, including the USA and Canada:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "USA": {
                    "fractionSkipCollege": 0.2
                },
                "Canada": {
                    "fractionSkipCollege": 0.2
                }
            },
            "default": {
                "fractionSkipCollege": 0.2
            }
        }
    }
}
\`\`\`

You can use "default colleges" and "default fractionSkipCollege" either together or alone. Whatever you want. If you leave one out, the built-in default will be used.

The "colleges" setting is very similar. The only difference is that it applies to an individual country. And the "fractionSkipCollege" feature is pretty straightforward to apply to an individual country. Example:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "USA": {
                    "first": {
                        "George": 1,
                        "John": 10,
                        "Thomas": 2
                    },
                    "last": {
                        "Washington": 1,
                        "Adams": 5,
                        "Jefferson": 1
                    },
                    "colleges": {
                        "Harvard": 2,
                        "Yale": 1
                    }
                },
                "Canada": {
                    "first": {
                        "Bob": 3,
                        "Aaron": 1,
                        "Chad": 1
                    },
                    "last": {
                        "Smith": 1,
                        "Jones": 5,
                        "Anderson": 4
                    },
                    "fractionSkipCollege": 0.5
                }
            },
            "default": {
                "colleges": {
                    "Stanford": 1,
                    "UCLA": 1
                }
            }
        }
    }
}
\`\`\`

In the above example, all American college players will be from Harvard or Yale, and only 2% of them will skip college. Canada has no "colleges" set, so players will be drawn from the schools in "defaultColleges", but 50% of them will have no college.

You can mix and match these college settings as you please. They're all optional. For instance, if you left out "defaultColleges" in the previous example, then Canadian players' colleges would be drawn from the built-in default list of colleges.

Here's another example, where "colleges" is set for a country without overriding the built-in names:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "USA": {
                    "colleges": {
                        "Harvard": 2,
                        "Yale": 1
                    }
                }
            },
            "frequencies": {
                "USA": 1,
                "Canada": 1
            }
        }
    }
}
\`\`\`

## Races

Each randomly generated player gets a cartoon face. A face can come from one of 4 "races": Asian, black, brown, and white. The only thing that varies with race is skin color, all other facial features are the same. Each country in the game has its own set of frequencies for the 4 races. You can override them like this, either for built-in countries or for new countries you make:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "Canada": {
                    "races": {
                        "asian": 2,
                        "black": 1,
                        "brown": 1,
                        "white": 1
                    }
                }
            }
        }
    }
}
\`\`\`

That would change the races for Canadian players to be 40% Asian, 20% black, 20% brown, and 20% white.

If you define a country and don't include races, it will either use the built-in races for that country, or if they don't exist, it will use the default races (you have to specify them similar to default colleges above) or built-in races for the USA.

## Flags

The default countries (and [some more](https://flagicons.lipis.dev/)) have built-in flags. If you'd like to override a default flag or add a flag for a country that does not have a built-in flag, such as a historical or fictional country, you can do this:

\`\`\`
{
    "gameAttributes": {
        "playerBioInfo": {
            "countries": {
                "Canada": {
                    "flag": "http://example.com/flag-image.png"
                }
            }
        }
    }
}
\`\`\`

You can also use \`"none"\` instead of a URL if you want to remove the flag of a country with a built-in flag.`;
	}
};
