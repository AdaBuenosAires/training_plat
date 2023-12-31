// eslint-disable-next-line no-shadow-restricted-names
(function(define, undefined) {
    'use strict';

    define(['jquery', 'underscore'], function($, _) {
    /**
     * Loads the named template from the page, or logs an error if it fails.
     * @param name The name of the template.
     * @return The loaded template.
     */
        var loadTemplate = function(name) {
            var templateSelector = '#' + name + '-tpl',
                templateText = $(templateSelector).text();
            if (!templateText) {
                console.error('Failed to load ' + name + ' template');
            }
            return _.template(templateText);
        };

        return {
            loadTemplate: loadTemplate
        };
    });
}).call(this, define || RequireJS.define);
