export type images = {
    main: string,
    second: string,
    third: string
}

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
    city: string,
    area: string,
    images: images[],
    host: string,
    cost: number,
    rating: number,
    term: string,
    description: string,
    amnesties: amnesties[]
}