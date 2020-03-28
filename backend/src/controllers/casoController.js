const conn = require('../db/connection')

module.exports = {
    async create (request,response) {
    //return response.send('Olá mundo')
    
    const {title,description,value} = request.body;
    const ong_id = request.headers.authorization;
    
    console.log(request.body);
    console.log(ong_id);

    return response.json(await conn('casos').insert({
        title,description,value,ong_id
    }))
    },

    async index (request,response) {
        const {page=1,size=5} = request.query;
        const len = await conn('casos').count()
        console.log(len)
        response.header('X-Total-Count',len[0]['count(*)'])
        return response.json(await conn('casos').join('ongs','ongs.id','=','casos.ong_id').limit(size).offset(size*(page-1)).select(['casos.*',
        'ongs.nome','ongs.email','ongs.whatsapp','ongs.cidade','ongs.uf']));
        //'casos.title','casos.description','casos.value'
    },

    async delete (request,response) {
        const {id}=request.params;
        const ong_id = request.headers.authorization;

        const caso = await conn('casos').where('id',id).select('ong_id').first()
        if(caso.ong_id != ong_id)
            return response.status(401).json({error:'Operation not permitted.'})
        await conn('casos').where('id',id).delete()
        return response.status(204).send()

    }

}