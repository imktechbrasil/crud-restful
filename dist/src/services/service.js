"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var Service = (function () {
    function Service(http) {
        this.http = http;
        var header = { 'Content-Type': 'application/json', 'Accept': 'application/json' };
        this.setHeader(header, false);
        this.body = '';
    }
    Service.prototype.get = function (url, json) {
        if (json === void 0) { json = true; }
        return this.http.get(url, this.getHeader)
            .map(function (res) {
            if (json) {
                return res.json();
            }
            else {
                return res;
            }
        })
            .catch(function (error) {
            var errorAll = error.json().errorMessage;
            var errorFields = error.json().fields[0];
            if (errorFields != null) {
                errorAll = errorAll + "<br><br>" + errorFields;
            }
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    Service.prototype.post = function (url, json) {
        if (json === void 0) { json = true; }
        return this.http.post(url, this.getBody, this.getHeader)
            .map(function (res) {
            // Get Response
            if (json) {
                return res.json();
            }
            else {
                return res;
            }
        })
            .catch(function (error) {
            //this.login.tokenCheck(error.json().error);
            // Show mensage error
            var errorAll = error.json().errorMessage;
            var errorFields = error.json().fields[0];
            if (errorFields != null) {
                errorAll = errorAll + "<br><br>" + errorFields;
            }
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    Service.prototype.put = function (url, json) {
        if (json === void 0) { json = true; }
        return this.http.put(url, this.getBody, this.getHeader)
            .map(function (res) {
            // Get Response
            if (json) {
                return res.json();
            }
            else {
                return res;
            }
        })
            .catch(function (error) {
            //this.login.tokenCheck(error.json().error);
            // Show mensage error
            var errorAll = error.json().errorMessage;
            var errorFields = error.json().fields[0];
            if (errorFields != null) {
                errorAll = errorAll + "<br><br>" + errorFields;
            }
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    Service.prototype.delete = function (url, json) {
        if (json === void 0) { json = true; }
        return this.http.delete(url, this.getHeader)
            .map(function (res) {
            // Get Response
            if (json) {
                return res.json();
            }
            else {
                return res;
            }
        })
            .catch(function (error) {
            //this.login.tokenCheck(error.json().error);
            // Show mensage error
            var errorAll = error.json().errorMessage;
            var errorFields = error.json().fields[0];
            if (errorFields != null) {
                errorAll = errorAll + "<br><br>" + errorFields;
            }
            return Rx_1.Observable.throw(error || 'Server error');
        });
    };
    Service.prototype.setHeader = function (header, authorization) {
        if (header === void 0) { header = null; }
        if (authorization === void 0) { authorization = true; }
        // Set Authorization
        if (authorization) {
            header.Authorization = localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token');
        }
        var headers = new http_1.Headers(header);
        this.header = new http_1.RequestOptions({ headers: headers });
    };
    Object.defineProperty(Service.prototype, "getHeader", {
        get: function () {
            return this.header;
        },
        enumerable: true,
        configurable: true
    });
    Service.prototype.setBody = function (body) {
        this.body = JSON.stringify(body);
    };
    Object.defineProperty(Service.prototype, "getBody", {
        get: function () {
            return this.body;
        },
        enumerable: true,
        configurable: true
    });
    Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Service);
    return Service;
}());
exports.Service = Service;
//# sourceMappingURL=service.js.map