const products = [
    {
        id:'1',
        name:'Disco SSD 240 Gb',
        price: 5600,
        category: 'almacenamiento',
        stock: 20,
        img: 'https://www.ashir.com.ar/wp-content/uploads/2018/11/disco-duro-solido-ssd-crucial-240gb-ct240bx500ssd1-nuevo-D_NQ_NP_730209-MPE28209019715_092018-F-600x450.jpg',
        desciption: 'Disco de estado solido de 240 Gb Crucial x 28 Speed'
    },
    {
        id:'2',
        name:'Kumara K552',
        price: 9600,
        category: 'perifericos',
        stock: 5,
        img: 'https://www.newmaster.com.ar/wp-content/uploads/2020/08/KUMARED.jpg',
        desciption: 'Teclado mecanico para gamers RGB'
    },
    {
        id:'3',
        name:'Gabinete Sentey',
        price: 4900,
        category: 'gabinetes',
        stock: 30,
        img: 'https://www.computershopping.com.ar/Images/Productos/Grandes/CS3-1356-CB_Foto3g.jpg',
        desciption: 'Gabinete tipo ATX no RGB'
    },
    {
        id:'4',
        name:'Monitor Samsung Plano',
        price: 57500,
        category: 'monitores',
        stock: 7,
        img: 'https://www.megatone.net/images//Articulos/zoom2x/74/MKT2329ARC-1.jpg',
        desciption: 'Monitor 24 pulgadas full HD ideal para Gaming'
    },
    {
        id:'5',
        name:'Monitor Samsung Curvo',
        price: 59600,
        category: 'monitores',
        stock: 16,
        img: 'https://http2.mlstatic.com/D_NQ_NP_753195-MLA49064201668_022022-O.jpg',
        desciption: 'Monitor 19 pulgadas full HD ideal para Developers'
    }
]
export const getProducts = () => {
    return new Promise((resolve,reject)=>{
        resolve(products)
    },1500)
}
export const getProduct = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===id))
        },1500)
    })
}
export const getProductsByCategory = (categoryID) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod=>prod.category===categoryID))
        },1000)
    })
}