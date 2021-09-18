const productos = [
    { id: 1,foto:'https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/09/10/ddc110917-008f01.jpg_2087731912.jpg' , name: "arroz jamani", peso: 237,  category:"calentitos"},
    { id: 2,foto:'https://images.evisos.com.ar/2014/09/14/viandas-vegetarianas-y-veganas-para-oficinas_549b72924_3.jpg' , name: "hamburguesa de soja", peso: 210, category:"calentitos" },
    { id: 3,foto:'http://1.bp.blogspot.com/-jHJH7bD0Swk/UAr0Sg8osSI/AAAAAAAABAY/dwGgfsNs0L4/s400/SAM_3309.JPG' , name: "preparado de legumbres", peso: 300, category:"preparados" },
    { id: 4,foto:'https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2017/09/10/ddc110917-008f01.jpg_2087731912.jpg' , name: "hamburguesa", peso: 180, category:"congelados" },
    { id: 5,foto:'https://images.evisos.com.ar/2014/09/14/viandas-vegetarianas-y-veganas-para-oficinas_549b72924_3.jpg' , name: "vianda preparada", peso: 170, category:"almacén" },
    { id: 6,foto:'https://andreferrario.files.wordpress.com/2015/08/fullsizerender-8.jpg?w=1100&h=500&crop=1' , name: "vianda vegana", peso: 210, category:"preparados" },
    { id: 7,foto:'http://1.bp.blogspot.com/-jHJH7bD0Swk/UAr0Sg8osSI/AAAAAAAABAY/dwGgfsNs0L4/s400/SAM_3309.JPG' , name: "vianda vegetariana", peso: 230, category:"congelados" }
  ];

export  const getFetch = new Promise((resolve)=>{
    //Tareas asincrónicas
        setTimeout(()=>{
            resolve(productos)
        }, 5000)
})