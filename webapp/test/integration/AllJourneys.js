jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 PERSONELSet in the list

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
		"personal/ns/test/integration/MasterJourney",
		"personal/ns/test/integration/NavigationJourney",
		"personal/ns/test/integration/NotFoundJourney",
		"personal/ns/test/integration/BusyJourney",
		"personal/ns/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});