import checkContainsAnyText from '../support/check/checkContainsAnyText';
import checkContainsText from '../support/check/checkContainsText';
import checkCookieContent from '../support/check/checkCookieContent';
import checkCookieExists from '../support/check/checkCookieExists';
import checkDimension from '../support/check/checkDimension';
import checkElementExists from '../support/check/checkElementExists';
import checkEqualsText from '../support/check/checkEqualsText';
import checkModal from '../support/check/checkModal';
import checkOffset from '../support/check/checkOffset';
import checkProperty from '../support/check/checkProperty';
import checkSelected from '../support/check/checkSelected';
import checkTitle from '../support/check/checkTitle';
import checkUrl from '../support/check/checkURL';
import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import compareText from '../support/check/compareText';
import isEnabled from '../support/check/isEnabled';
import isVisible from '../support/check/isVisible';
import openWebsite from '../support/action/openWebsite';
import resizeScreenSize from '../support/action/resizeScreenSize';

module.exports = function given() {

    this.When(/^the user submits valid login details$/, function() {
        $('[data-test-id=username]').setValue('surprise');
        $('[data-test-id=password]').setValue('4f84e9b09e41f673cc96b3de62683e06');
        $('button[data-test-id=log-in]').click();
    });
};
