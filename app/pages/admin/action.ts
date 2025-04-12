type CreateRequest = {
    type: 'create',
    id: string,
    titre: string,
    description: string
}

type DeleteRequest = {
    type: 'delete',
    id: string
}
type Unknown = {
    type: 'unknown'
}

export const traitementRequete = async (request: Request): Promise<CreateRequest | DeleteRequest | Unknown> => {
    const formData = await request.formData();
    const id = formData.get('identifiant')?.toString();
    const titre = formData.get('titre')?.toString();
    const description = formData.get('description')?.toString()
    
    if(id && (!description || !titre)) return {
        type: 'delete',
        id
    } 
    else if(!id || !description || !titre) return {
        type: 'unknown'
    }
    return {
        type: 'create',
        id,
        titre,
        description
    }
}