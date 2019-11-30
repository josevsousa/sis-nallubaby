export interface Pedido{
    uid?: string;
    codigo: string;
    cliente: string;
    representante: string;
    desconto: number;
    tipoPagamento: string;
    listaProdutos: any;
}
