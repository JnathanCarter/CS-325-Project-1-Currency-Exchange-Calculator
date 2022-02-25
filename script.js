var Project1 = (function () {

	var jsonRates = "{\"timestamp\":1644476400,\"base\":\"USD\",\"rates\":{\"AED\":3.6731,\"AFN\":93.544772,\"ALL\":106.448363,\"AMD\":481.224083,\"ANG\":1.804601,\"AOA\":521.695,\"ARS\":105.866435,\"AUD\":1.394084,\"AWG\":1.80025,\"AZN\":1.7,\"BAM\":1.712621,\"BBD\":2,\"BDT\":86.088302,\"BGN\":1.71038,\"BHD\":0.376886,\"BIF\":2000.681707,\"BMD\":1,\"BND\":1.344086,\"BOB\":6.894073,\"BRL\":5.2358,\"BSD\":1,\"BTC\":0.000022728256,\"BTN\":74.904144,\"BWP\":11.562531,\"BYN\":2.562798,\"BZD\":2.018124,\"CAD\":1.267528,\"CDF\":2003.965911,\"CHF\":0.92412,\"CLF\":0.029475,\"CLP\":813.3,\"CNH\":6.359293,\"CNY\":6.356,\"COP\":3951.7271,\"CRC\":643.637134,\"CUC\":1,\"CUP\":25.75,\"CVE\":96.65,\"CZK\":21.297968,\"DJF\":178.234011,\"DKK\":6.515427,\"DOP\":57.444453,\"DZD\":140.692701,\"EGP\":15.7098,\"ERN\":15.00001,\"ETB\":50.25,\"EUR\":0.875438,\"FJD\":2.1345,\"FKP\":0.738779,\"GBP\":0.738779,\"GEL\":2.925,\"GGP\":0.738779,\"GHS\":6.408354,\"GIP\":0.738779,\"GMD\":53.1,\"GNF\":9061.888794,\"GTQ\":7.702546,\"GYD\":209.487503,\"HKD\":7.793431,\"HNL\":24.650073,\"HRK\":6.591,\"HTG\":103.357144,\"HUF\":308.84,\"IDR\":14342.5,\"ILS\":3.20465,\"IMP\":0.738779,\"INR\":74.961504,\"IQD\":1460.943089,\"IRR\":42250,\"ISK\":124.13,\"JEP\":0.738779,\"JMD\":156.789054,\"JOD\":0.709,\"JPY\":115.66966667,\"KES\":113.6,\"KGS\":84.78565,\"KHR\":4073.224673,\"KMF\":430.850085,\"KPW\":900,\"KRW\":1195.779863,\"KWD\":0.302334,\"KYD\":0.834304,\"KZT\":426.712824,\"LAK\":11455.078999,\"LBP\":1514.85875,\"LKR\":202.241469,\"LRD\":153.450006,\"LSL\":15.318654,\"LYD\":4.588364,\"MAD\":9.330916,\"MDL\":17.849263,\"MGA\":3992.720239,\"MKD\":53.966257,\"MMK\":1780.131548,\"MNT\":2863.455582,\"MOP\":8.036444,\"MRU\":36.377488,\"MUR\":43.649998,\"MVR\":15.46,\"MWK\":817.46572,\"MXN\":20.488233,\"MYR\":4.1853,\"MZN\":63.863751,\"NAD\":15.25,\"NGN\":417.05,\"NIO\":35.501131,\"NOK\":8.82593,\"NPR\":119.84677,\"NZD\":1.496177,\"OMR\":0.384982,\"PAB\":1,\"PEN\":3.842173,\"PGK\":3.516488,\"PHP\":51.242501,\"PKR\":175.159122,\"PLN\":3.933574,\"PYG\":6948.270274,\"QAR\":3.645717,\"RON\":4.3286,\"RSD\":102.989018,\"RUB\":74.6577,\"RWF\":1040.774776,\"SAR\":3.751756,\"SBD\":8.100479,\"SCR\":13.275157,\"SDG\":442.5,\"SEK\":9.111759,\"SGD\":1.342445,\"SHP\":0.738779,\"SLL\":11386.050181,\"SOS\":579.233739,\"SRD\":20.573,\"SSP\":130.26,\"STD\":21135.390504,\"STN\":21.8,\"SVC\":8.760671,\"SYP\":2512,\"SZL\":15.315292,\"THB\":32.713,\"TJS\":11.309735,\"TMT\":3.5,\"TND\":2.87,\"TOP\":2.26779,\"TRY\":13.562475,\"TTD\":6.804098,\"TWD\":27.8195,\"TZS\":2313,\"UAH\":27.994748,\"UGX\":3529.594875,\"USD\":1,\"UYU\":43.711831,\"UZS\":10854.355634,\"VES\":4.48505,\"VND\":22693.748165,\"VUV\":113.994207,\"WST\":2.620932,\"XAF\":574.249983,\"XAG\":0.0428826,\"XAU\":0.00054513,\"XCD\":2.70255,\"XDR\":0.711966,\"XOF\":574.249983,\"XPD\":0.00043727,\"XPF\":104.467596,\"XPT\":0.0009648,\"YER\":250.250057,\"ZAR\":15.20363,\"ZMW\":18.547126,\"ZWL\":322}}";
	var jsonCurrencies = "{\"AED\":\"United Arab Emirates dirham\",\"AFN\":\"Afghan afghani\",\"ALL\":\"Albanian lek\",\"AMD\":\"Armenian dram\",\"ANG\":\"Netherlands Antillean guilder\",\"AOA\":\"Angolan kwanza\",\"ARS\":\"Argentine peso\",\"AUD\":\"Australian dollar\",\"AWG\":\"Aruban florin\",\"AZN\":\"Azerbaijani manat\",\"BAM\":\"Bosnia and Herzegovina convertible mark\",\"BBD\":\"Barbados dollar\",\"BDT\":\"Bangladeshi taka\",\"BGN\":\"Bulgarian lev\",\"BHD\":\"Bahraini dinar\",\"BIF\":\"Burundian franc\",\"BMD\":\"Bermudian dollar\",\"BND\":\"Brunei dollar\",\"BOB\":\"Boliviano\",\"BRL\":\"Brazilian real\",\"BSD\":\"Bahamian dollar\",\"BTC\":\"Bitcoin\",\"BTN\":\"Bhutanese ngultrum\",\"BWP\":\"Botswana pula\",\"BYN\":\"Belarusian ruble\",\"BYR\":\"Belarusian ruble\",\"BZD\":\"Belize dollar\",\"CAD\":\"Canadian dollar\",\"CDF\":\"Congolese franc\",\"CHF\":\"Swiss franc\",\"CLF\":\"Unidad de Fomento\",\"CLP\":\"Chilean peso\",\"CNH\":\"Chinese yuan (offshore)\",\"CNY\":\"Chinese yuan\",\"COP\":\"Colombian peso\",\"CRC\":\"Costa Rican colon\",\"CUC\":\"Cuban convertible peso\",\"CUP\":\"Cuban peso\",\"CVE\":\"Cape Verdean escudo\",\"CZK\":\"Czech koruna\",\"DJF\":\"Djiboutian franc\",\"DKK\":\"Danish krone\",\"DOP\":\"Dominican peso\",\"DZD\":\"Algerian dinar\",\"EGP\":\"Egyptian pound\",\"ERN\":\"Eritrean nakfa\",\"ETB\":\"Ethiopian birr\",\"EUR\":\"Euro\",\"FJD\":\"Fiji dollar\",\"FKP\":\"Falkland Islands pound\",\"GBP\":\"Pound sterling\",\"GEL\":\"Georgian lari\",\"GGP\":\"Guernsey pound\",\"GHS\":\"Ghanaian cedi\",\"GIP\":\"Gibraltar pound\",\"GMD\":\"Gambian dalasi\",\"GNF\":\"Guinean franc\",\"GTQ\":\"Guatemalan quetzal\",\"GYD\":\"Guyanese dollar\",\"HKD\":\"Hong Kong dollar\",\"HNL\":\"Honduran lempira\",\"HRK\":\"Croatian kuna\",\"HTG\":\"Haitian gourde\",\"HUF\":\"Hungarian forint\",\"IDR\":\"Indonesian rupiah\",\"ILS\":\"Israeli new shekel\",\"IMP\":\"Manx pound\",\"INR\":\"Indian rupee\",\"IQD\":\"Iraqi dinar\",\"IRR\":\"Iranian rial\",\"ISK\":\"Icelandic krona\",\"JEP\":\"Jersey pound\",\"JMD\":\"Jamaican dollar\",\"JOD\":\"Jordanian dinar\",\"JPY\":\"Japanese yen\",\"KES\":\"Kenyan shilling\",\"KGS\":\"Kyrgyzstani som\",\"KHR\":\"Cambodian riel\",\"KMF\":\"Comoro franc\",\"KPW\":\"North Korean won\",\"KRW\":\"South Korean won\",\"KWD\":\"Kuwaiti dinar\",\"KYD\":\"Cayman Islands dollar\",\"KZT\":\"Kazakhstani tenge\",\"LAK\":\"Lao kip\",\"LBP\":\"Lebanese pound\",\"LKR\":\"Sri Lankan rupee\",\"LRD\":\"Liberian dollar\",\"LSL\":\"Lesotho loti\",\"LTL\":\"Lithuanian litas\",\"LVL\":\"Latvian lats\",\"LYD\":\"Libyan dinar\",\"MAD\":\"Moroccan dirham\",\"MDL\":\"Moldovan leu\",\"MGA\":\"Malagasy ariary\",\"MKD\":\"Macedonian denar\",\"MMK\":\"Myanmar kyat\",\"MNT\":\"Mongolian togrog\",\"MOP\":\"Macanese pataca\",\"MRO\":\"Mauritanian ouguiya (pre-2018)\",\"MRU\":\"Mauritanian ouguiya\",\"MUR\":\"Mauritian rupee\",\"MVR\":\"Maldivian rufiyaa\",\"MWK\":\"Malawian kwacha\",\"MXN\":\"Mexican peso\",\"MYR\":\"Malaysian ringgit\",\"MZN\":\"Mozambican metical\",\"NAD\":\"Namibian dollar\",\"NGN\":\"Nigerian naira\",\"NIO\":\"Nicaraguan cordoba\",\"NOK\":\"Norwegian krone\",\"NPR\":\"Nepalese rupee\",\"NZD\":\"New Zealand dollar\",\"OMR\":\"Omani rial\",\"PAB\":\"Panamanian balboa\",\"PEN\":\"Peruvian sol\",\"PGK\":\"Papua New Guinean kina\",\"PHP\":\"Philippine peso\",\"PKR\":\"Pakistani rupee\",\"PLN\":\"Polish zloty\",\"PYG\":\"Paraguayan guarani\",\"QAR\":\"Qatari riyal\",\"RON\":\"Romanian leu\",\"RSD\":\"Serbian dinar\",\"RUB\":\"Russian ruble\",\"RWF\":\"Rwandan franc\",\"SAR\":\"Saudi riyal\",\"SBD\":\"Solomon Islands dollar\",\"SCR\":\"Seychelles rupee\",\"SDG\":\"Sudanese pound\",\"SEK\":\"Swedish krona\",\"SGD\":\"Singapore dollar\",\"SHP\":\"Saint Helena pound\",\"SLL\":\"Sierra Leonean leone\",\"SOS\":\"Somali shilling\",\"SRD\":\"Surinamese dollar\",\"SSP\":\"South Sudanese Pound\",\"STD\":\"Sao Tome and Principe dobra (pre-2018)\",\"STN\":\"Sao Tome and Principe dobra\",\"SVC\":\"Salvadoran colon\",\"SYP\":\"Syrian pound\",\"SZL\":\"Swazi lilangeni\",\"THB\":\"Thai baht\",\"TJS\":\"Tajikistani somoni\",\"TMT\":\"Turkmenistan manat\",\"TND\":\"Tunisian dinar\",\"TOP\":\"Tongan pa'anga\",\"TRY\":\"Turkish lira\",\"TTD\":\"Trinidad and Tobago dollar\",\"TWD\":\"New Taiwan dollar\",\"TZS\":\"Tanzanian shilling\",\"UAH\":\"Ukrainian hryvnia\",\"UGX\":\"Ugandan shilling\",\"USD\":\"United States dollar\",\"UYU\":\"Uruguayan peso\",\"UZS\":\"Uzbekistan som\",\"VEF\":\"Venezuelan bolivar\",\"VES\":\"Venezuelan bolivar\",\"VND\":\"Vietnamese dong\",\"VUV\":\"Vanuatu vatu\",\"WST\":\"Samoan tala\",\"XAF\":\"CFA franc BEAC\",\"XAG\":\"Silver (one troy ounce)\",\"XAU\":\"Gold (one troy ounce)\",\"XCD\":\"East Caribbean dollar\",\"XDR\":\"Special drawing rights (IMF)\",\"XOF\":\"CFA franc BCEAO\",\"XPD\":\"Palladium Ounce\",\"XPF\":\"CFP franc (franc Pacifique)\",\"XPT\":\"Platinum Ounce\",\"YER\":\"Yemeni rial\",\"ZAR\":\"South African rand\",\"ZMK\":\"Zambian kwacha\",\"ZMW\":\"Zambian kwacha\",\"ZWL\":\"Zimbabwean dollar\"}";

	var rates = null;
	var currencies = null;

	var formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}); // example: var valueString = formatter.format(5.00);

	return {

		start: function () {

			var that = this;

			if (rates === null) {

				//alert("Getting current rates ...");

				/* REPLACE THE NEXT TWO LINES WITH AN AJAX CALL LATER! */

				//rates = JSON.parse(jsonRates); // replace with AJAX call later!


				this.init();

				// INSERT AJAX CALL HERE (remember to call that.init() in callback function!
			}
			else {

				//alert("Already have current rates!");
				this.init();

			}
		},


		/* Initialize Currency and Rate Lists */

		init: function () {

			/* Print Current Rates; Display Rate Date */

			console.log(JSON.stringify(rates)); // diagnostic print; delete later
			$("#ratedate").html(new Date(rates.timestamp * 1000));

			/* Initialize Currency List; Display Rate Date */

			currencies = JSON.parse(jsonCurrencies);

			/* Currencies List Placeholder (replace with drop-down menu later!) */

			//drop down menu
			$("#currencylist").append("<select title=\"currencymenu\" id=\"currencymenu\">" + "</select name>");
			for (const key in currencies) {

				$("#currencymenu").append("<option value=\"" + key + "\">" + currencies[key]);
			}





		},

		/* Convert from USD to Selected Currency */

		convert: function () {

			// INSERT YOUR CODE HERE
			/* check currency selection*/
			var targetCurrency = $("#currencymenu").val().trim();

			/* calulate the exchangee */
			var selectedRate = rates.rates[targetCurrency];
			var inputValue = $("#value").val();
			var result;

			result = formatter.format(inputValue * selectedRate);

			$("#output").html("Result:" + result);



		},

		onClick: function () {

			this.convert();

		}

	}

})();
