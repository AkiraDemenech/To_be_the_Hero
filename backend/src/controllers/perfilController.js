const conn = require('../db/connection')

module.exports = {
    async index (request,response) {
        return response.json(await conn('casos').where('ong_id',request.headers.authorization).select('*'))
    },
    async login (request,response) {
        const {id} = request.body;
        const ong = await conn('ongs').where('id',id).select('nome').first();
        if(!ong) return response.status(400).json({error:'Profile unknown.'})
        return response.json(ong)
    }
}