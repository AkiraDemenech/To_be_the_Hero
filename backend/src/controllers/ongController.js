const crypto = require('crypto');
const conn = require('../db/connection')

module.exports = {
    async create (request,response) {
    //return response.send('Olá mundo')
    
    const {nome,email,whatsapp,cidade,uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX')
    console.log(request.body);
    console.log(id);

    await conn('ongs').insert({
        id,nome,email,whatsapp,cidade,uf
    });
    return response.json({id})
    },

    async index (request,response) {
        //const all = await 
        return response.json(await conn('ongs').select('*'));
    }

}