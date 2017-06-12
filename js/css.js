var loadCss;

(function() {
    'use strict';

    loadCss = function() {
        var cssFiles = [
            'profile.css'
        ];

        cssFiles.forEach((fileName) => {
            var linkElement = $(`<link rel="stylesheet" href="pages/css/${fileName}" />`);
            $(document.body).append(linkElement);
        });
    }
})();