"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.validateBody = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateBody = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
    }
    catch (error) {
        console.log(error);
    }
    return next();
};
exports.validateBody = validateBody;
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    const splitedToken = token.split(" ")[1];
    jsonwebtoken_1.default.verify(splitedToken, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "invalid token"
            });
        }
        res.locals.clientId = decoded.sub;
        return next();
    });
};
exports.verifyToken = verifyToken;
// export const verifyToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const { authorization } = req.headers;
//   if (!authorization) throw new AppError("Missing bearer token", 401);
//   const token: string = authorization.split(" ")[1];
//   verify(token, process.env.SECRET_KEY!, (error, decoded) => {
//     if (error) throw new AppError(error.message, 400)
//       res.locals = { ...res.locals, decoded };
//     res.locals.clientId = decoded?.sub
//   });
//   return next();
// };
