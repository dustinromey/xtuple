/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global describe:true, it:true, XT:true, XM:true, XV:true, process:true, module:true, require:true */

(function () {
  "use strict";

  var crud = require('../lib/crud'),
    data = {
      recordType: "XM.IncidentSeverity",
      autoTestAttributes: true,
      createHash: {
        name: "SEVERECONSERVATIVE" + Math.random(),
        description: "descr",
        order: 10
      },
      updateHash: {
        order: 20
      }
    };

  describe('IncidentSeverity CRUD Test', function () {
    crud.runAllCrud(data);
  });
}());
