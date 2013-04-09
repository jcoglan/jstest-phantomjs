phantom.injectJs('vendor/jstest.js');

var page = new WebPage(),
    reporter = new JS.Test.Reporters.PhantomJS({}, page);

page.open('spec/browser.html');

