(function() {
    'use strict';
    var userName = window.localStorage.getItem('user-name');
    if (userName) {
        window.user = {
            name: userName
        };
    }
})();