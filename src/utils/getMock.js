

const producto = {id: 1,foto:'https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/09/10/ddc110917-008f01.jpg_2087731912.jpg' , name: "arroz jamani", peso: 237, category:"calentitos"}

export const getFetchDetail = new Promise((res, rej)=>{
    let respuesta = '200'
    if(respuesta === '200'){
        setTimeout(()=>{
            res(producto)
        },2000)
    }else{
        rej('404')
    }
})
