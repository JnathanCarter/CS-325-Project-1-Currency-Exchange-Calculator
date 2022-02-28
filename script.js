var Project1 = (function () {

	jsonCurrencies = "{\"AED\":\"United Arab Emirates dirham\",\"AFN\":\"Afghan afghani\",\"ALL\":\"Albanian lek\",\"AMD\":\"Armenian dram\",\"ANG\":\"Netherlands Antillean guilder\",\"AOA\":\"Angolan kwanza\",\"ARS\":\"Argentine peso\",\"AUD\":\"Australian dollar\",\"AWG\":\"Aruban florin\",\"AZN\":\"Azerbaijani manat\",\"BAM\":\"Bosnia and Herzegovina convertible mark\",\"BBD\":\"Barbados dollar\",\"BDT\":\"Bangladeshi taka\",\"BGN\":\"Bulgarian lev\",\"BHD\":\"Bahraini dinar\",\"BIF\":\"Burundian franc\",\"BMD\":\"Bermudian dollar\",\"BND\":\"Brunei dollar\",\"BOB\":\"Boliviano\",\"BRL\":\"Brazilian real\",\"BSD\":\"Bahamian dollar\",\"BTC\":\"Bitcoin\",\"BTN\":\"Bhutanese ngultrum\",\"BWP\":\"Botswana pula\",\"BYN\":\"Belarusian ruble\",\"BYR\":\"Belarusian ruble\",\"BZD\":\"Belize dollar\",\"CAD\":\"Canadian dollar\",\"CDF\":\"Congolese franc\",\"CHF\":\"Swiss franc\",\"CLF\":\"Unidad de Fomento\",\"CLP\":\"Chilean peso\",\"CNH\":\"Chinese yuan (offshore)\",\"CNY\":\"Chinese yuan\",\"COP\":\"Colombian peso\",\"CRC\":\"Costa Rican colon\",\"CUC\":\"Cuban convertible peso\",\"CUP\":\"Cuban peso\",\"CVE\":\"Cape Verdean escudo\",\"CZK\":\"Czech koruna\",\"DJF\":\"Djiboutian franc\",\"DKK\":\"Danish krone\",\"DOP\":\"Dominican peso\",\"DZD\":\"Algerian dinar\",\"EGP\":\"Egyptian pound\",\"ERN\":\"Eritrean nakfa\",\"ETB\":\"Ethiopian birr\",\"EUR\":\"Euro\",\"FJD\":\"Fiji dollar\",\"FKP\":\"Falkland Islands pound\",\"GBP\":\"Pound sterling\",\"GEL\":\"Georgian lari\",\"GGP\":\"Guernsey pound\",\"GHS\":\"Ghanaian cedi\",\"GIP\":\"Gibraltar pound\",\"GMD\":\"Gambian dalasi\",\"GNF\":\"Guinean franc\",\"GTQ\":\"Guatemalan quetzal\",\"GYD\":\"Guyanese dollar\",\"HKD\":\"Hong Kong dollar\",\"HNL\":\"Honduran lempira\",\"HRK\":\"Croatian kuna\",\"HTG\":\"Haitian gourde\",\"HUF\":\"Hungarian forint\",\"IDR\":\"Indonesian rupiah\",\"ILS\":\"Israeli new shekel\",\"IMP\":\"Manx pound\",\"INR\":\"Indian rupee\",\"IQD\":\"Iraqi dinar\",\"IRR\":\"Iranian rial\",\"ISK\":\"Icelandic krona\",\"JEP\":\"Jersey pound\",\"JMD\":\"Jamaican dollar\",\"JOD\":\"Jordanian dinar\",\"JPY\":\"Japanese yen\",\"KES\":\"Kenyan shilling\",\"KGS\":\"Kyrgyzstani som\",\"KHR\":\"Cambodian riel\",\"KMF\":\"Comoro franc\",\"KPW\":\"North Korean won\",\"KRW\":\"South Korean won\",\"KWD\":\"Kuwaiti dinar\",\"KYD\":\"Cayman Islands dollar\",\"KZT\":\"Kazakhstani tenge\",\"LAK\":\"Lao kip\",\"LBP\":\"Lebanese pound\",\"LKR\":\"Sri Lankan rupee\",\"LRD\":\"Liberian dollar\",\"LSL\":\"Lesotho loti\",\"LTL\":\"Lithuanian litas\",\"LVL\":\"Latvian lats\",\"LYD\":\"Libyan dinar\",\"MAD\":\"Moroccan dirham\",\"MDL\":\"Moldovan leu\",\"MGA\":\"Malagasy ariary\",\"MKD\":\"Macedonian denar\",\"MMK\":\"Myanmar kyat\",\"MNT\":\"Mongolian togrog\",\"MOP\":\"Macanese pataca\",\"MRO\":\"Mauritanian ouguiya (pre-2018)\",\"MRU\":\"Mauritanian ouguiya\",\"MUR\":\"Mauritian rupee\",\"MVR\":\"Maldivian rufiyaa\",\"MWK\":\"Malawian kwacha\",\"MXN\":\"Mexican peso\",\"MYR\":\"Malaysian ringgit\",\"MZN\":\"Mozambican metical\",\"NAD\":\"Namibian dollar\",\"NGN\":\"Nigerian naira\",\"NIO\":\"Nicaraguan cordoba\",\"NOK\":\"Norwegian krone\",\"NPR\":\"Nepalese rupee\",\"NZD\":\"New Zealand dollar\",\"OMR\":\"Omani rial\",\"PAB\":\"Panamanian balboa\",\"PEN\":\"Peruvian sol\",\"PGK\":\"Papua New Guinean kina\",\"PHP\":\"Philippine peso\",\"PKR\":\"Pakistani rupee\",\"PLN\":\"Polish zloty\",\"PYG\":\"Paraguayan guarani\",\"QAR\":\"Qatari riyal\",\"RON\":\"Romanian leu\",\"RSD\":\"Serbian dinar\",\"RUB\":\"Russian ruble\",\"RWF\":\"Rwandan franc\",\"SAR\":\"Saudi riyal\",\"SBD\":\"Solomon Islands dollar\",\"SCR\":\"Seychelles rupee\",\"SDG\":\"Sudanese pound\",\"SEK\":\"Swedish krona\",\"SGD\":\"Singapore dollar\",\"SHP\":\"Saint Helena pound\",\"SLL\":\"Sierra Leonean leone\",\"SOS\":\"Somali shilling\",\"SRD\":\"Surinamese dollar\",\"SSP\":\"South Sudanese Pound\",\"STD\":\"Sao Tome and Principe dobra (pre-2018)\",\"STN\":\"Sao Tome and Principe dobra\",\"SVC\":\"Salvadoran colon\",\"SYP\":\"Syrian pound\",\"SZL\":\"Swazi lilangeni\",\"THB\":\"Thai baht\",\"TJS\":\"Tajikistani somoni\",\"TMT\":\"Turkmenistan manat\",\"TND\":\"Tunisian dinar\",\"TOP\":\"Tongan pa'anga\",\"TRY\":\"Turkish lira\",\"TTD\":\"Trinidad and Tobago dollar\",\"TWD\":\"New Taiwan dollar\",\"TZS\":\"Tanzanian shilling\",\"UAH\":\"Ukrainian hryvnia\",\"UGX\":\"Ugandan shilling\",\"USD\":\"United States dollar\",\"UYU\":\"Uruguayan peso\",\"UZS\":\"Uzbekistan som\",\"VEF\":\"Venezuelan bolivar\",\"VES\":\"Venezuelan bolivar\",\"VND\":\"Vietnamese dong\",\"VUV\":\"Vanuatu vatu\",\"WST\":\"Samoan tala\",\"XAF\":\"CFA franc BEAC\",\"XAG\":\"Silver (one troy ounce)\",\"XAU\":\"Gold (one troy ounce)\",\"XCD\":\"East Caribbean dollar\",\"XDR\":\"Special drawing rights (IMF)\",\"XOF\":\"CFA franc BCEAO\",\"XPD\":\"Palladium Ounce\",\"XPF\":\"CFP franc (franc Pacifique)\",\"XPT\":\"Platinum Ounce\",\"YER\":\"Yemeni rial\",\"ZAR\":\"South African rand\",\"ZMK\":\"Zambian kwacha\",\"ZMW\":\"Zambian kwacha\",\"ZWL\":\"Zimbabwean dollar\"}";

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

				alert("Getting current rates ...");

				/* REPLACE THE NEXT TWO LINES WITH AN AJAX CALL LATER! */

				//rates = JSON.parse(jsonRates); // replace with AJAX call later!



				// INSERT AJAX CALL HERE (remember to call that.init() in callback function!
				$.ajax({
					url: 'http://openexchangerates.org/api/latest.json?app_id=47e7887e69094d879e3a45bd552f0762',
					method: 'GET',
					dataType: 'json',
					success: function (response) {
						console.log("current data " + response);
						rates = response;
						that.init();
					}
				})

			}
			else {

				alert("Already have current rates!");
				this.init();

			}
		},


		/* Initialize Currency and Rate Lists */

		init: function () {

			/* Print Current Rates; Display Rate Date */

			currencies = JSON.parse(jsonCurrencies);
			$("#ratedate").html(new Date(rates.timestamp * 1000));

			/* Initialize Currency List; Display Rate Date */


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
