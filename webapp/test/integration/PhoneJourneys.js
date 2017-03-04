jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"personal/ns/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"personal/ns/test/integration/pages/App",
	"personal/ns/test/integration/pages/Browser",
	"personal/ns/test/integration/pages/Master",
	"personal/ns/test/integration/pages/Detail",
	"personal/ns/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "personal.ns.view."
	});

	sap.ui.require([
		"personal/ns/test/integration/NavigationJourneyPhone",
		"personal/ns/test/integration/NotFoundJourneyPhone",
		"personal/ns/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});