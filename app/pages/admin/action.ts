type CreateRequest = {
    type: 'create',
    id: string,
    titre: string,
    description: string,
    ia: boolean
}
type UpdateRequest = {
    type: 'update',
    id?: string,
    titre?: string,
    description?: string,
    contenu?: string,
    image?: string
}

type DeleteRequest = {
    type: 'delete',
    id: string
}
type Unknown = {
    type: 'unknown'
}

type Requests = CreateRequest | UpdateRequest | DeleteRequest | Unknown

// On cherche à extraire les données 
// de la requête et les formatter
export const traitementRequete = async (request: Request): Promise<Requests> => {
    const formData = await request.formData();
    const id = formData.get('identifiant')?.toString();
    const titre = formData.get('titre')?.toString();
    const description = formData.get('description')?.toString()
    const contenu = formData.get('contenu')?.toString()
    const image = formData.get('image')?.toString()
    const ia = formData.get('ia')?.toString()

    if(formData.has('update')) return {
        type: 'update',
        id,
        titre,
        description,
        contenu,
        image
    }
    else if(id && (!description || !titre)) return {
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
        description,
        ia: !!ia
    }
}