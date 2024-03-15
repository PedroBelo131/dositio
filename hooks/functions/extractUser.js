import { AUTH_INVALID_TOKEN,AUTH_NO_TOKEN } from "../../libs/errors.js";
export const extractUser = (app) => async (request, reply ) => {
    if(!request.headers['x-acessstoken']) throw new AUTH_NO_TOKEN();

    try{
        app.jwt.verify(request.headers ['x-acess-token']);
        request.user = user.username;
        return;
    }catch(error){
        request.log.error(error);
        throw new AUTH_INVALID_TOKEN();
    }
        
    
};