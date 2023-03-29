export interface IplayersData {
    name: string;
    loot: number;
    supplies: number;
    balance: number;
    damage: number;
    healing: number;
}

export interface Ipayments {
    name: string;
    amount: number;
    payTo: string;

}

export type topsType = {
    loot?: Array<{name:string, total:number}>
    supplies?: Array<{name:string, total:number}>
    balance?: Array<{name:string, total:number}>
    damage?: Array<{name:string, total:number}>
    healing?: Array<{name:string, total:number}>
}

export interface IgetPayments {
    tops?: topsType    
    payments?: Ipayments[]    
    error: boolean
    individualProfit?: number,
    numberOfPlayers?:number
}

export type IplayerBalance = Omit<IplayersData, "loot" | "supplies" | "damage" | "healing">

export type resultType = {
    payments: Ipayments[] | undefined;
    individualProfit:number | undefined;
    numberOfplayers: number | undefined;
}