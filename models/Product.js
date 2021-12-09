class Product{

    static STOCK_MIN = 5

    constructor(idProducto, description, value, stock, dateExpired, typeProduct){
        this.idProducto = idProducto
        this.description = description
        this.value = value
        this.stock = stock
        this.typeProduct = typeProduct //Alguno de los atributos estaticos de la clase ETypeProduct
        this.dateExpired = dateExpired
    }

}