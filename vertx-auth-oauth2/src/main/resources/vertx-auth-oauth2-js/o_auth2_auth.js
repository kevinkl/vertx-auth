/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-auth-oauth2-js/o_auth2_auth */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');
var AccessToken = require('vertx-auth-oauth2-js/access_token');
var AuthProvider = require('vertx-auth-common-js/auth_provider');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JOAuth2Auth = io.vertx.ext.auth.oauth2.OAuth2Auth;
var OAuth2ClientOptions = io.vertx.ext.auth.oauth2.OAuth2ClientOptions;

/**

 @class
*/
var OAuth2Auth = function(j_val) {

  var j_oAuth2Auth = j_val;
  var that = this;
  AuthProvider.call(this, j_val);

  /**
   Generate a redirect URL to the authN/Z backend. It only applies to auth_code flow.

   @public
   @param params {Object} 
   @return {string}
   */
  this.authorizeURL = function(params) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_oAuth2Auth["authorizeURL(io.vertx.core.json.JsonObject)"](utils.convParamJsonObject(params));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the Access Token object.

   @public
   @param params {Object} - JSON with the options, each flow requires different options. 
   @param handler {function} - The handler returning the results. 
   */
  this.getToken = function(params, handler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_oAuth2Auth["getToken(io.vertx.core.json.JsonObject,io.vertx.core.Handler)"](utils.convParamJsonObject(params), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(ar.result(), AccessToken), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Call OAuth2 APIs.

   @public
   @param method {Object} HttpMethod 
   @param path {string} target path 
   @param params {Object} parameters 
   @param handler {function} handler 
   @return {OAuth2Auth} self
   */
  this.api = function(method, path, params, handler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'string' && (typeof __args[2] === 'object' && __args[2] != null) && typeof __args[3] === 'function') {
      j_oAuth2Auth["api(io.vertx.core.http.HttpMethod,java.lang.String,io.vertx.core.json.JsonObject,io.vertx.core.Handler)"](io.vertx.core.http.HttpMethod.valueOf(method), path, utils.convParamJsonObject(params), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns true if this provider supports JWT tokens as the access_token. This is typically true if the provider
   implements the `openid-connect` protocol. This is a plain return from the config option jwtToken, which is false
   by default.
  
   This information is important to validate grants. Since pure OAuth2 should be used for authorization and when a
   token is requested all grants should be declared, in case of openid-connect this is not true. OpenId will issue
   a token and all grants will be encoded on the token itself so the requester does not need to list the required
   grants.

   @public

   @return {boolean} true if openid-connect is used.
   */
  this.hasJWTToken = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_oAuth2Auth["hasJWTToken()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_oAuth2Auth;
};

/**
 Create a OAuth2 auth provider

 @memberof module:vertx-auth-oauth2-js/o_auth2_auth
 @param vertx {Vertx} the Vertx instance 
 @param flow {Object} 
 @param config {Object} the config as exported from the admin console 
 @return {OAuth2Auth} the auth provider
 */
OAuth2Auth.createKeycloak = function(vertx, flow, config) {
  var __args = arguments;
  if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string' && (typeof __args[2] === 'object' && __args[2] != null)) {
    return utils.convReturnVertxGen(JOAuth2Auth["createKeycloak(io.vertx.core.Vertx,io.vertx.ext.auth.oauth2.OAuth2FlowType,io.vertx.core.json.JsonObject)"](vertx._jdel, io.vertx.ext.auth.oauth2.OAuth2FlowType.valueOf(flow), utils.convParamJsonObject(config)), OAuth2Auth);
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a OAuth2 auth provider

 @memberof module:vertx-auth-oauth2-js/o_auth2_auth
 @param vertx {Vertx} the Vertx instance 
 @param flow {Object} 
 @param config {Object} the config 
 @return {OAuth2Auth} the auth provider
 */
OAuth2Auth.create = function() {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string') {
    return utils.convReturnVertxGen(JOAuth2Auth["create(io.vertx.core.Vertx,io.vertx.ext.auth.oauth2.OAuth2FlowType)"](__args[0]._jdel, io.vertx.ext.auth.oauth2.OAuth2FlowType.valueOf(__args[1])), OAuth2Auth);
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string' && (typeof __args[2] === 'object' && __args[2] != null)) {
    return utils.convReturnVertxGen(JOAuth2Auth["create(io.vertx.core.Vertx,io.vertx.ext.auth.oauth2.OAuth2FlowType,io.vertx.ext.auth.oauth2.OAuth2ClientOptions)"](__args[0]._jdel, io.vertx.ext.auth.oauth2.OAuth2FlowType.valueOf(__args[1]), __args[2] != null ? new OAuth2ClientOptions(new JsonObject(JSON.stringify(__args[2]))) : null), OAuth2Auth);
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = OAuth2Auth;