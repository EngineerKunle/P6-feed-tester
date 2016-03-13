#Project P6 : FEED READER TESTING

This project uses jasmine testing tool to help check the app functionality.

##Set Up

1) clone this repo - git@github.com:EngineerKunle/P6-feed-tester.git

2) download MAMP/XAMP - as I used MAMP download here (https://www.mamp.info/en/downloads/)

3) set the MAMP directory to this directory. 

4) Run browser and it should run index.html

5) Scroll to the bottom of the page and should see in green 7 specs, 0 failures.


This project can be played with to test to see what happens when a test fails, i.e when feeder does not load, or 

each content is different or if the menu button has been clicked.

###What was tested?

As this is to introduce test driven development (TDD) we tested the following:

#### RSS Feeds
- allFeeds variable is defined
- all URL are defined and not empty
- all URL feeds have a name and is not empty
#### The Menu
- menu element is hidden by default
- Test if the menu changes are visible
#### Initial Entries
- we have atleast 1 entry
#### New Feed Selection
- first Content should not match second along with each headers

what was learned was how to use jasmine to help with Test driven development, all tests should initially fail then as we build 
the application we start passing the test.