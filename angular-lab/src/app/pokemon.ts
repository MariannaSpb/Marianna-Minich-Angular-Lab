export interface Pokemon {
    id: number;
    name: string;
    damage: number;
    isCaught: boolean;
}


export interface PokemonWithAction {
    name: string;
    action: boolean;
}