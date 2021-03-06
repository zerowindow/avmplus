/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var DESC = "'try-catch', exception thrown";

function f() {
    throw null;
}

function tryloop() {
    for ( var i=0 ; i < 100000 ; i++ ) {
	try {
	    f();
	}
	catch (e) {
	}
    }
    return i;
}

TEST(tryloop, "try-2");

