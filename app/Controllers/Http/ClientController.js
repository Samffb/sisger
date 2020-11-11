'use strict'

const Client = use('App/Models/Client')
const AuthenticatedResourceController = use('App/Classes/AuthenticatedResourceController')

class ClientController extends AuthenticatedResourceController {

    constructor(){
        super();
        this.model = Client;
    }

    async index({ request, auth }){
        const data = request.only(['page'])
        return this.model
        .query()
        .where("clients.createdBy", auth.user.id)
        .innerJoin('companies', 'companies.id', 'clients.company')
        .paginate(data.page, 5)
    }

}

module.exports = ClientController
