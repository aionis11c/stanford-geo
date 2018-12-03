"use strict";
const express = require("express");
const db = require("../models/index");
const ctrl = require("./../controllers");
const router = express.Router();
var bodyParser = require("body-parser");
var {
  initialize,
  default_rels,
  search_atts,
  search_joins
} = require("./initialize");
const { AttributeValue, SearchQuery } = require("../models/search");
var jsonParser = bodyParser.json({ type: "application/json" });

const fs = require("fs");

let search_config = JSON.parse(
  fs.readFileSync("./routes/search_config.json", "utf8")
);

initialize(search_config);

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route

router.post("/post", jsonParser, function(req, res) {
  console.log(req.body);

  // Base Relation Setup
  var req_type = "samples";
  if (default_rels[req.body.type]) {
    req_type = req.body.type;
  }
  // New Search Query object
  var search_req = new SearchQuery(default_rels[req_type]);
  console.log(search_req);
  // Handle show attribute
  // handle default show attributes first
  search_req.sq_base_rel.br_show.forEach(item => {
    if (search_atts[item]) {
      search_req.sq_select.push(search_atts[item]);
      search_req.add_joins(search_atts[item]);
    }
  });
  // handle custom show attributes next
  if (req.body.show) {
    // populate SearchQuery select and join lists
    for (var i = 0; i < req.body.show.length; i++) {
      var att = req.body.show[i];
      if (
        search_atts[att] &&
        search_atts[att].search_bases.indexOf(search_req.sq_base_rel.br_api) !=
          -1
      ) {
        search_req.sq_select.push(search_atts[att]);
        search_req.add_joins(search_atts[att]);
      } else {
        // @TODO Error Case
        console.log("sufsufsuf");
        res
          .status(400)
          .send(
            `filter error: ${att} is not a valid attribute in this search type.`
          );
        return;
      }
    }
  }
  // Handle filter attributes
  if (req.body.filters) {
    //console.log(req.body.filters);
    for (var keys in req.body.filters) {
      if (
        search_atts[keys] &&
        search_atts[keys].search_bases.indexOf(search_req.sq_base_rel.br_api) !=
          -1
      ) {
        // derive value type of attribute_db
        //console.log(keys, "filter");
        var value_type = "";
        var value_api = null;
        if (typeof req.body.filters[keys] === "string") {
          value_type = "string";
          value_api = req.body.filters[keys];
        } else if (typeof req.body.filters[keys] === "number") {
          value_type = "number";
          value_api = req.body.filters[keys];
        } else if (Array.isArray(req.body.filters[keys])) {
          if (typeof req.body.filters[keys][0] === "string") {
            value_type = "str_arr";
            value_api = req.body.filters[keys];
          } else if (
            typeof req.body.filters[keys][0] === "number" &&
            req.body.filters[keys].length == 2
          ) {
            value_type = "num_arr";
            value_api = req.body.filters[keys];
          } else {
            // @TODO Error Case
            res
              .status(400)
              .send(
                `filter error: ${
                  req.body.filters[keys]
                } is not a valid filter value for ${keys}.`
              );
            return;
          }
        } else {
          // @TODO Error Case
          res
            .status(400)
            .send(
              `filter error: ${
                req.body.filters[keys]
              } is not a valid filter value for ${keys}.`
            );
          return;
        }
        search_req.add_joins(search_atts[keys]);
        var new_av = new AttributeValue(
          search_atts[keys],
          value_type,
          value_api
        );
        search_req.sq_where.push(new_av);
      } else {
        // @TODO Error Case
        res
          .status(400)
          .send(
            `filter error: ${keys} is not a valid attribute in this search type.`
          );
        return;
      }
    }
  }

  // Evaluate the query
  search_req.to_sql(search_atts, search_joins);
  //console.log(search_req);
  // Run the query
  const sq_query = {
    text: search_req.sq_sql
  };
  ctrl.example.post(sq_query, req, res);
});

// router.get("/get", function(req, res) {
//   ctrl.example.get();
// });

// export our router to be mounted by the parent application
module.exports = router;
