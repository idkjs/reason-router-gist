// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Nav$ParcelRouter = require("./Nav.bs.js");
var Router$ParcelRouter = require("./Router.bs.js");
var HomePage$ParcelRouter = require("./HomePage.bs.js");
var LoginPage$ParcelRouter = require("./LoginPage.bs.js");
var LogoutPage$ParcelRouter = require("./LogoutPage.bs.js");
var NotFoundPage$ParcelRouter = require("./NotFoundPage.bs.js");

var component = ReasonReact.statelessComponent("App-ParcelRouter");

function make(_children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (_self) {
              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, Nav$ParcelRouter.make(/* array */[])), ReasonReact.element(undefined, undefined, Router$ParcelRouter.make((function (url) {
                                    var match = url[/* path */0];
                                    var exit = 0;
                                    if (match) {
                                      switch (match[0]) {
                                        case "login" : 
                                            if (match[1]) {
                                              exit = 1;
                                            } else {
                                              return ReasonReact.element(undefined, undefined, LoginPage$ParcelRouter.make(/* array */[]));
                                            }
                                            break;
                                        case "logout" : 
                                            if (match[1]) {
                                              exit = 1;
                                            } else {
                                              return ReasonReact.element(undefined, undefined, LogoutPage$ParcelRouter.make(/* array */[]));
                                            }
                                            break;
                                        default:
                                          exit = 1;
                                      }
                                    } else {
                                      return ReasonReact.element(undefined, undefined, HomePage$ParcelRouter.make(/* array */[]));
                                    }
                                    if (exit === 1) {
                                      return ReasonReact.element(undefined, undefined, NotFoundPage$ParcelRouter.make(/* array */[]));
                                    }
                                    
                                  }))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
