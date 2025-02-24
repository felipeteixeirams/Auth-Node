"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodes = void 0;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Status200OK"] = 200] = "Status200OK";
    StatusCodes[StatusCodes["Status201Created"] = 201] = "Status201Created";
    StatusCodes[StatusCodes["Status400BadRequest"] = 400] = "Status400BadRequest";
    StatusCodes[StatusCodes["Status401Unauthorized"] = 401] = "Status401Unauthorized";
    StatusCodes[StatusCodes["Status403Forbidden"] = 403] = "Status403Forbidden";
    StatusCodes[StatusCodes["Status404NotFound"] = 404] = "Status404NotFound";
    StatusCodes[StatusCodes["Status409Conflict"] = 409] = "Status409Conflict";
    StatusCodes[StatusCodes["Status500InternalServerError"] = 500] = "Status500InternalServerError";
})(StatusCodes || (exports.StatusCodes = StatusCodes = {}));
