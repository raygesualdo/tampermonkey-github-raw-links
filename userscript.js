// ==UserScript==
// @name       GitHub Raw Links
// @namespace  http://www.rjgesualdo.com/
// @version    0.2.7
// @description  adds raw file links to file icons on GitHub
// @match      https://github.com/*
// @copyright  2014+, Ray Gesualdo
// ==/UserScript==

(function($) {
    
    function buildLinks() {
        
        $('table.files tr').each(function(){
            
            var $this = $(this),
                $icon = $this.find('.icon .octicon-file-text'),
                $href = $this.find('.content a').attr('href');
                
            $icon.wrap('<a href="https://raw.github.com'+$href+'" />');
            
        });
        
    }
    
    $(document).ajaxSuccess(function(event, xhr, settings){
        buildLinks();
    });
    
    buildLinks();
    
})(jQuery);
