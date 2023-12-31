/* globals loadFixtures */

import $ from 'jquery'; // eslint-disable-line import/extensions
// eslint-disable-next-line object-curly-spacing
import { Currency } from '../currency';

describe('Currency factory', () => {
    // eslint-disable-next-line no-unused-vars
    let currency;
    // eslint-disable-next-line no-unused-vars
    let canadaPosition;
    // eslint-disable-next-line no-unused-vars
    let usaPosition;
    // eslint-disable-next-line no-unused-vars
    let japanPosition;

    // eslint-disable-next-line no-undef
    window.analytics = jasmine.createSpyObj('analytics', ['page', 'track', 'trackLink']);

    beforeEach(() => {
        loadFixtures('course_experience/fixtures/course-currency-fragment.html');
        canadaPosition = {
            coords: {
                latitude: 58.773884,
                longitude: -124.882581,
            },
        };
        usaPosition = {
            coords: {
                latitude: 42.366202,
                longitude: -71.973095,
            },
        };
        japanPosition = {
            coords: {
                latitude: 35.857826,
                longitude: 137.737495,
            },
        };
        // eslint-disable-next-line object-curly-spacing
        $.cookie('edx-price-l10n', null, { path: '/' });
    });

    describe('converts price to local currency', () => {
        it('when location is the default (US)', () => {
            // eslint-disable-next-line object-curly-spacing
            $.cookie('edx-price-l10n', '{"rate":1,"code":"USD","symbol":"$","countryCode":"US"}', { path: '/' });
            currency = new Currency();
            expect($('[name="verified_mode"].no-discount').filter(':visible').text()).toEqual('Pursue a Verified Certificate($100 USD)');
        });
        it('when cookie is set to a different country', () => {
            // eslint-disable-next-line object-curly-spacing
            $.cookie('edx-price-l10n', '{"rate":2.2,"code":"CAD","symbol":"$","countryCode":"CAN"}', { expires: 1 });
            currency = new Currency();
            expect($('[name="verified_mode"].no-discount').filter(':visible').text()).toEqual('Pursue a Verified Certificate($220 CAD)');
        });
        it('when cookie is set to a different country with a discount', () => {
            // eslint-disable-next-line object-curly-spacing
            $.cookie('edx-price-l10n', '{"rate":2.2,"code":"CAD","symbol":"$","countryCode":"CAN"}', { expires: 1 });
            currency = new Currency();
            expect($('[name="verified_mode"].discount').filter(':visible').text()).toEqual('Pursue a Verified Certificate($198 CAD $220 CAD)');
        });
        it('should send event on initial load', () => {
            // eslint-disable-next-line object-curly-spacing
            $.cookie('edx-price-l10n', '{"rate":1,"code":"USD","symbol":"$","countryCode":"US"}', { path: '/' });
            currency = new Currency();
            expect(window.analytics.track).toHaveBeenCalledWith('edx.bi.user.track_selection.local_currency_cookie_set');
        });
    });
});
