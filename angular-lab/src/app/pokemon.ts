export interface Pokemon {
    id: number;
    name: string;
    damage: number;
}


export interface PokemonWithAction {
    name: string;
    action: boolean;
}