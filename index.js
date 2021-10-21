
 const allImg=[
  'Primo_GM2_Plus_20180910_205500.jpg',
  'Primo_GM2_Plus_20181006_175804.jpg',
  'Primo_GM2_Plus_20181006_175807.jpg',
  'Primo_GM2_Plus_20181006_182552.jpg',
  'Primo_GM2_Plus_20181128_144322.jpg'
 ]
  
 const slider=document.getElementById('slider-img') 
 let imgIncrement=0
 
 setInterval(()=>{
   if(imgIncrement>=allImg.length){
     imgIncrement=0
   }

    const imgUrl=allImg[imgIncrement]
    slider.setAttribute('src',imgUrl)
    console.log(imgUrl)
    imgIncrement++
  },600)


















// const img=[
//   'one- 1',
//   'one- 2',
//   'one- 3',
//   'one- 4'
// ]

// let imgIncre=0
//  const inter= setInterval(()=>{
//   if(imgIncre>=img.length){
//   imgIncre=0  
  
//   }
   
//  const imgUrl=img[imgIncre]
//   console.log(imgUrl)
//   imgIncre++
  
// },1000)