"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json([
        { name: "John", age: 30 },
        { name: "Jane", age: 25 },
    ]);
};
exports.getUsers = getUsers;
