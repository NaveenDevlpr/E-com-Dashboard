export interface navlinks{
    id:number,
    name:string,
    link:string
    icon: React.ComponentType<{ size?: string }>
}

export interface card{
    id:number,
    name:string,
    value:number,
  
}

export interface pieData{
    
    total_quantity:number
    name:string
}
export interface pieProps{
    piedata:pieData[]
}

export interface sales{
    name:string,
    total_quantity:number
}

export interface BarProps{
    datas:sales[]
}

