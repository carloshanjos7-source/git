export const formatosService = {
    PrecoBR: (preco: number): string => {
        return `${preco.toLocaleString('pt-BR', {
           style: 'currency', 
           currency: 'BRL'
        })}`
    },
    PesoEmkg: (ValorPeso: number): string =>{
        return `${ValorPeso.toLocaleString(`pt-BR`, {minimumFractionDigits: 3 })} kg`
    }
}