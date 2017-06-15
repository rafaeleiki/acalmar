var loadCss;

(function() {
    'use strict';

    loadCss = function() {
        var cssFiles = [
            'profile.css',
            'support.css',
            'diario.css',
            'tutorial.css',
            'calm.css'
        ];

        cssFiles.forEach(function(fileName) {
            var linkElement = $(`<link rel="stylesheet" href="pages/css/${fileName}" />`);
            $(document.head).append(linkElement);
        });
    }

    loadCss();
})();