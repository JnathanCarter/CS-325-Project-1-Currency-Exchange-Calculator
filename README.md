# CS-325-Project-1-Currency-Exchange-Calculator

This assignment is intended to give you practice with the AJAX methods available through jQuery, as well as additional practice with JavaScript data structures and dynamic HTML. You will be creating a simple Web-based calculator application for converting U.S. Dollar (USD) values to other currencies, based on the most current exchange rates. You will implement this application in two parts: in the first part, your application will simply convert from USD to GBP (British pound sterling), and in the second part, you will improve the application so that it can convert from USD to any available target currency as selected by the user. Finally, in the third part, you will improve the application further by adding the necessary AJAX calls to fetch the latest available exchange rates from a public API, instead of using the predefined rates used in the first two parts.

## Part One

In the first part of this assignment, build a simple Web page containing a "Currency Conversion Calculator" form, using the HTML provided in the assignment archive as a starting point. Inside the form, you will find the following:

<p>Exchange Rate Date: <span id="ratedate"></span></p>
<p>Convert to: <span id="currencylist"></span></p>

(Note that both paragraphs include empty span elements; later, you will be filling these span with the date from your exchange rate data and a list of currencies for the user to choose from. This data is provided as JSON strings in your JavaScript program file, one for the exchange rates, and another for the list of recognized currency codes, along with their descriptions. (You will be using the latter in Part Two.)

To complete Part One, use the JavaScript file attached to this assignment as a starting point. Your program should accept a value in USD from the user as input; when the user clicks the "Convert" button, the program should compute the equivalent value in GBP, using the latest available rate from the JSON data, and display this value in a new paragraph as the output.

(NOTE: The provided JSON data—and the public API used in Part Three—both use US dollars as the default base currency, so no other conversion should be needed.)

When the first part is complete, your application should appear similar to the following:

p1_v1.png

The attached JavaScript file includes a "hard-coded" copy of the newest exchange rate data (as of this writing) in the form of a JSON string; the corresponding object is parsed from this JSON string and assigned to the rates variable. It also includes three functions for you to complete. The first is start(), which will retrieve the current rates with a jQuery AJAX call (if rates has not already been assigned) in Part Three. Another is init(), which initializes the data: this function parses the list of currencies from the JSON string, and in Part Three, the exchange data fetched from the API. It also displays the exchange rate date in the empty span element mentioned earlier, and produces a diagnostic print which echoes the JSON data to the console as a string for troubleshooting purposes. (In the Firefox browser, select "Web Console" from the "Tools | Web Developer" menu to view console output.) A third function is convert(), which should implement the logic to perform the currency conversion. A fourth function, onClick(), simply calls convert() when the user clicks the button.

To test your program, enter the value shown in the example screenshot above. Your program should display a result which matches the screenshot. You will find a formatter in the JavaScript program which will format the result as US dollars; see the accompanying comments for an example of how to use it, and for more information, see Mozilla's documentation here (Links to an external site.).

## Part Two

After completing the first part of this assignment—and don't move on to this second part until you do!—save a complete backup copy of your completed program from Part One, and then begin work on an improved version which will allow the user to specify the target currency, which was "hard-coded" to GBP in Part One. Recall the span element in which your program displayed GBP as the only option in a placeholder in Part One ...

<span id="currencylist"></span>

... and replace this placeholder with a dynamically generated drop-down list of currencies, based on the collection of currencies present in the JSON rate data. Insert this list into the empty span element in place of the placeholder in your init() function, so that your program presents the currencies as a drop-down list in the page. (This should not need to be a large routine; my implementation is only a few lines of code.)

Remember that drop-down lists are created in HTML with a <select> element, like the following:

<select name="currencymenu" id="currencymenu">
   <option value="CAD">CAD (Canadian Dollars)</option>
   <option value="EUR">EUR (Euro)</option>
   <option selected value="GBP">GBP (Pound sterling)</option>
   <option value="MXN">MXN (Mexican peso)</option>
</select>

(This is a partial example of how your HTML should be structured. In your application, this list must be generated dynamically from the JSON data; it should not be entered into your page as static HTML!)

Note that each option in the drop-down list is represented by an <option> element, and that the "value" parameter, and the menu text within the element, should be the same. In your menu, GBP should be selected as the default option with the selected attribute, as shown in this example. To create the menu, begin by creating the <select> element, then create the <option> elements by looping through the rates in the JSON data, appending one <option> element for each rate found in the object. Finally, append the <select> element to the empty span element. This menu should be created and displayed for the user immediately after the rate data is fetched from the Web service.

Finally, adjust your conversion function to convert the specified amount to the currency selected by the user. To identify the selected currency, you can retrieve the selected value of the <select> form element, just as you retrieved the value from the <input> form element. I recommend using the val() function provided by jQuery, like so:

var targetCurrency = $("#currencymenu").find(":selected").val();

When you are finished, your program should appear similar to the following:

p1_v2.png

## Part Three

Finally, expand your program to retrieve the current currency exchange rates. Your program will be using a simple Web service which provides a convenient API for retrieving the current rates as JSON data, using the HTTP protocol. There are many such APIs in existence, usually provided as paid services by banks and other financial institutions. Here is the service that we will use:

https://openexchangerates.org/ (Links to an external site.)

From the documentation (Links to an external site.), note that this API accepts HTTP GET requests, and that it supports USD as the base currency. The rates are returned in JSON format, almost identical to the example data provided in your program file. Note also that this API (like many others of its kind) requires a valid access key as one of the URL parameters. Here is the URL and access key that you may use in your AJAX call:

https://openexchangerates.org/api/latest.json?app_id=47e7887e69094d879e3a45bd552f0762 (Links to an external site.)

(There is a limit to the number of requests per month, so do not open this link until you are ready to begin using it!) The Firefox browser, and possibly others, will display the returned JSON data using syntax highlighting, so that you can expand and collapse the nested JSON data structures. Note that the rates are provided as key/value pairs inside the "rates" element, and that the exchange rate date is available (as a Unix timestamp) through the "timestamp" element. To see the original JSON data as it was returned by the server as plain text, including all nested element(s) and key/value pairs, select "Raw Data" from the menu of options at the top of the screen. When you have correctly revised your program to use the new data, the exchange rate date shown in the Web page should reflect the current date, not the date of the original data.

This assignment is worth 100 points and is due by the end of the day on Friday, February 25th. When you are finished, compress all of the files in your Web application to a ZIP archive, and submit the archive to Canvas. (You need only submit your work for Part Three of this assignment, since this would also include your work from Parts One and Two.)
