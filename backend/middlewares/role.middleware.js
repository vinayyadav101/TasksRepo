export const authorize = (...roles) =>(req,res,next)=> {
  const curentRole = req.user.role;
  
    if (!(roles.includes(curentRole))) {
        return next(new appError("you are not able to accsess",401))
    }
        next()
};
