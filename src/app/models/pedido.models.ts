export interface Pedido{
    uid?: string;
    codigo: string;
    cliente: string;
    representante: string;
    desconto: string;
    tipoPagamento: string;
    listaProdutos: any;
    dataCreate: Date
}
