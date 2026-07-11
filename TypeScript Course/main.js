var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // let c = 20;
    // if (c < 30) {
    //     console.log("less")
    // }
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = "Laila";
            this.age = 27;
            this.name = name;
            this.age = age;
        }
        User.prototype.getUser = function () {
            return this.name;
        };
        return User;
    }());
    var Admin = /** @class */ (function (_super) {
        __extends(Admin, _super);
        function Admin(name, age, permissions) {
            var _this = _super.call(this, name, age) || this;
            _this.permissions = permissions;
            _this.permissions = permissions;
            return _this;
        }
        return Admin;
    }(User));
})();
