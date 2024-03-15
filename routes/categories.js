/** @type{import('fastify').FastifyPluginAsync<>} */
import createError from '@fastify/error';
export default async function categories(app, options) {
    const InvalidcategoriesError = createError('InvalidcategoriesError', 'categoria Inválido.', 400);

    const categories = app.mongo.db.collection('categories');


    app.get('/categories', 
        {
            config: {
                logMe: false,
                requireAuthentication: false
            }
        }, 
        async (request, reply) => {
            request.log.info(categories);
        return await categories.find().toArray();
    });

    app.get('/categories/:name', async (request, reply) => {
        app.log.info('categories requisitado> ' + request.params.id);
        return {};
    });
}