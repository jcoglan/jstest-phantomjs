# Running JS.Test on PhantomJS

A simple project showing how to run JS.Test on PhantomJS. Run the tests either
by opening the test page:

    $ open spec/browser.html

Or running the PhantomJS script:

    $ FORMAT=spec phantomjs spec/phantom.js

`FORMAT` can have any of the following values:

* `dot`
* `error`
* `json`
* `progress`
* `spec`
* `tap`
* `xml`

