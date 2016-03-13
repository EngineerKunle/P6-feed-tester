/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            
            //check if feeds are presents
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all URL are defined and not empty', function () {

             //here declare the scope variables one for i to be used in for loop and the all feed length
            var i;
            var allFeedsLength = allFeeds.length;

            for (i = 0; i < allFeedsLength; i++) {
                //loop through objecs properties and check if url is defined and is not empty.
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all URL feeds have a name and is not empty', function () {

            //here declare the scope variables one for i to be used in for loop and the all feed length
            var i;
            var allFeedsLength = allFeeds.length;

            for (i = 0; i < allFeedsLength; i++) {
                //loop through objecs properties and check if name is defined and is not empty.
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function () {

        //declare our varibales 
        var menuId = $('body').hasClass('menu-hidden');
        var menuClk = $('.menu-icon-link');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function () {

            //check if the body has menu-hidden class
            expect(menuId).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('Test if the menu changes are visible', function () {
            
            //initates click to help begin test
 
            menuClk.click();

            //check if the body does not have menu-hidden class
            expect($('body').hasClass('menu-hidden')).toEqual(false);

            //test other click methods - just to try another click method
            menuClk.trigger('click');

            //checks if the body does have the menu-hidden class
            expect($('body').hasClass('menu-hidden')).toEqual(true);

        });
    })

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        //here we are loading the feed and to see if there is a single or multiple of .entry elements
        
        beforeEach(function (done) {
            //here using jasmine before to help run the load feed to be tested.
            loadFeed(0, function () {
                done();
            });
        });

  
        it('we have atleast 1 entry', function (done) {
            
            //here declared variabe to get the length of .entry
            var entryLength = $('.entry').length;
            
            //here to make sure we have 1 entry minimum
            expect(entryLength).toBeGreaterThan(0);
            done();
        });

    });

    /* TODO: Write a new test suite named "New Feed Selection"*/
   describe('New Feed Selection', function() {
       
       /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
       
       /*declare varibales to get values of each loadfeed values and then compare and also check header as reassurance that 
       content has changed*/
        var firstItem,
            firstHeader,
            secondItem,
            secondHeader;

        beforeEach(function(done) {

            loadFeed(0, function() {
                
                /*first content of the loadfeed*/
                firstItem = $('.feed').find('.entry');
                firstHeader = $('.feed .entry h2').text();

                loadFeed(1, function() {
                    /*second content of the loadfeed*/
                    secondItem = $('.feed').find('.entry');
                    secondHeader = $('.feed .entry h2').text();
                    done();
                });
            });
        });

        it('first Content should not match second along with each headers', function(done) {
           
            //compare values we in our variables.
            expect(firstItem).not.toBe(secondItem);
            expect(firstHeader === secondHeader).not.toBe(true);
            done();
        });
    });
    

}());