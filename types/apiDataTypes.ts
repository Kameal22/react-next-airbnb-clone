export type amnesties = {
    seaView: boolean,
    kitchen: boolean,
    terrace: boolean,
    beachAccess: boolean,
    tv: boolean,
    wiFi: boolean,
    freeParking: boolean,
    airConditioning: boolean,
    animalsEnabled: boolean
}

export type apiDataTypes = {
    country: string,
    id: string,
    city: string,
    area: string,
    image: string,
    host: string,
    cost: number,
    rating: number,
    term: string,
    description: string,
    amnesties: amnesties[]
}