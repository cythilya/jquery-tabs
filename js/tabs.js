(function($) {
    $.fn.tabs = function(opts) {
        //default configuration
        var config = $.extend({}, { 
            customClass: '',
            selectedNumber: 1
        }, opts);
        //main function
        function init(obj) {
            var dTab = obj,
                dTabNav = dTab.find('.tabs-nav-item'),
                dTabPanel = dTab.find('.tab-panel');

            function init(){
                dTab.addClass(config.customClass); //add customized purses classes.
                dTabNav.eq(config.selectedNumber - 1).trigger('click'); //set default tab number to show when page loaded.
            };

            function getTargetPanel(nav){
                var dThisNav = nav,
                    target = dThisNav.find('a').attr('href'),
                    dThisPanel;
                target = target.split('#');
                dThisPanel = dThisNav.parents('.tabs').find('#'+target[1]);
                return dThisPanel;
            };

            function setCurrentTab(tab){
                var dCurrentTab = tab,
                    dCurrentPanel = getTargetPanel(dCurrentTab);;
                dTabNav.removeClass('selected');
                dCurrentTab.addClass('selected');
                dTabPanel.hide();
                dCurrentPanel.show();               
            };
            
            dTab.on('click', '.tabs-nav-item', function(e){
                var dThisTabNav = $(this),
                    target,
                    dThisTabPanel;
                e.preventDefault();
                setCurrentTab(dThisTabNav);
            });

            init();
        }
        //initialize every element
        this.each(function() {
            init($(this));
        });
        return this;
    };
})(jQuery);