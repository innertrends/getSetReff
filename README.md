Store all referrers of website visitors
===============================================

In April 2014, Google Analytics upgraded to a new tracking code and technology, named Universal Analytics. 
With the upgrade, the **__utmz** cookie that used to contain the last referrer details for each visitor was rolled out.

getSetReff() replicates the functionality of the **__utmz** cookie and adds a few features on top:
* stores all the referrers of a visitor, not just the last referrer
* is able to identify marketing campaigns as reffers, based on the utm parameters
* stores the length of each visit both in time spent and in number of pages viewed

Setting it up
-------------

**Step 1**:
Set the domain on which the getSetReff script is added inside the dataLayer variable
```javascript
<script type="text/javascript">
var dataLayer = dataLayer || [];
dataLayer.push({"getSetReff" : "v1.0", "setDomain" : ".ReplaceWithYourDomain.com"});
</script>
```

**Step 2**:
Place the getSetReff() function definition under the dataLayer declaration. It can be done in an external file.


**Step 3**:
Trigger the getSetReff() function.
```javascript
<script type="text/javascript">
getSetReff();
</script>
```
Each time the function is triggered, it will write inside the following 2 cookies:
 * *__reff* stores all the details about all past referrers for at least 2 years
 * *__sreff* a session cookie used to calculate time spent on website and number of viewed pages. Gets deleted after the session expire

**Step 4**:
Whenever you need, just store the content of the *__reff* cookie on your own database for future analyses.

Possible __reff values
----------------------

Before diving into cookie examples, here is a bit of explanation of the special characters and elements found in the cookie:
* | is used to mark out each visit with its traffic source
* & is used to split the traffic source from the visit details
* _XXXXXXXXXXXX.XXXXXXXXXXXX.X.X_ represents _timestampVisitStart.timeStampLastAction.pagesViewed

### Single referrer
When a visitor first gets to your website, the *__reff* will have a value similar to this one:
```
"hsrd.yahoo.com&1396714229529.1396714229529.1"
```

### Multiple referrers
Subsequent future visits will drive the *__reff* cookie to grow to this
```
"hsrd.yahoo.com&1396714229529.1396714229529.1|www.google.com&1396714366071.1396714366071.1"
```

### Marketing Campaigns as referrers
If the 3rd visit will be via a marketing campaign (which uses utm variables), the cookie will become
```
"hsrd.yahoo.com&1396714229529.1396714229529.1|www.google.com&1396714366071.1396714366071.1|c:[discount]m:[mail]s:[affiliate]&1396714474814.1396714474814.1"
```
*c* represents the campaign name, *m* the medium name and *s* the source name.


### AdWords campaigns
If the 4th traffic source that brought the user to the website was AdWords, the cookie will look like this
```
"hsrd.yahoo.com&1396714229529.1396714229529.1|www.google.com&1396714366071.1396714366071.1|c:[discount]m:[mail]s:[affiliate]&1396714474814.1396714474814.1|www.google.com:[adwords]&1396714638762.1396714638762.1"
```


A typical scenarion for getSetReff()
------------------------------------

_Note_: The code runs on each page visited by the visitor. It does not communicate with any external service or server.
It simply stores a cookie in the browser of the user with the details of the traffic source that brought him to the website.

Each time a user visits your website the script will set the *__reff* cookie on his browser, with the details of his traffic sources.

Once the user converts (creates account, buys a product, sends a message) simply store the value in the *__reff* cookie in your database. Make sure to delete the *__reff* and *__sreff* cookies once you store them in order to avoid duplicate values in your database.


Optimized for Google Tag Manager
--------------------------------

The getSetReff() script is optimized for Google Tag Manager. Just place the minified version of the code in either a dedicated Tag or any other tag that runs on all pages of your website.

The getSetReff() uses the standard dataLayer format that is already used by Google Tag Manager.


