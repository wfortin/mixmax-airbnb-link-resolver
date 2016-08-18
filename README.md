# AirBnB Link Preview for Mixmax

This is an open source Mixmax Link Resolver. See <http://sdk.mixmax.com/docs/tutorial-giphy-link-preview> for more information about how to use this example code in Mixmax.

## Running locally

1. Git clone `https://github.com/wfortin/mixmax-airbnb-link-resolver.git`
2. Install using `npm install` and `npm start`
3. Verify it works by visiting http://localhost:9146/resolver?url=https%3A%2F%2Fwww.airbnb.ca%2Frooms%2F10711908 in your browser. It should not throw an error.
4. Open up the [Mixmax Dashboard](http://sdk.mixmax.com/docs/the-mixmax-dashboard), click Integrations, and click Add Link Resolver.
5. Enter the following for the parameters:


| Input name         | Value                          |
|--------------------|--------------------------------|
| Description        | AirBnB (airbnb.com/rooms/*)    |
| Regular Expression | airbnb.(com|ca)/rooms/[^\\/]+  |
| Resolver URL       | http://localhost:9146/resolver |

Refresh Gmail with Mixmax installed. Click Compose and paste a AirBnB url such as https://www.airbnb.ca/rooms/7424390 on a new line.
Note that you might need to restart Chrome in "insecure" mode for local testing - see instructions [here](http://sdk.mixmax.com/docs/chrome-insecure-content-https-request-blocked-when-developing-locally).

### This is based on the fantastic [airapi](https://github.com/phamtrisi/airapi) library.