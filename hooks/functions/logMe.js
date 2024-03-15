export const logMe = (app) => async (request, reply) => {
    request.log.info(`request for url: ${request.url}.`);
};