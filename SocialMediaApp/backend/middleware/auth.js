import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

//this is to check if a user wants to like delete then if he is the one or nt
 //it is our own

//a user wants to like a post
//click the like button =>first we go to auth middleware () confirms or denies the request if auth middleware(next) only then like controller...
//this is why middle ware is for any kind of action that happend before somethin