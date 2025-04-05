import jwt from "jsonwebtoken";
const generateToken = (user) => {
    const secret = process.env.JWT_SECRET || "oHwJPyRzP5P58GXyAoCDYoTS3gX0GDfx";
    delete user.password;
    return jwt.sign({
        id: user._id,
        email: user.email,
        username: user.username,
    }, secret);
};
export default generateToken;
//# sourceMappingURL=generateToken.js.map