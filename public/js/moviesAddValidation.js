window.addEventListener('load',() =>{

let titulo = document.querySelector('.title')
let rating = document.querySelector('#rating')
let premios = document.querySelector('#premios')
let fecha = document.querySelector('#fecha')
let duracion = document.querySelector('#duracion')
let genero = document.querySelector('#genero')

let small1 = document.querySelector('.small1')
let small2 = document.querySelector('.small2')
let small3 = document.querySelector('.small3')
let small4 = document.querySelector('.small4')
let small5 = document.querySelector('.small5')
let small6 = document.querySelector('.small6')
let small7 = document.querySelector('.small7')


let Titulo2 = false
let Rating2 = false
let premios2 = false
let fecha2 = false
let duracion2 = false
let genero2 = false

let form = document.querySelector('form')

let errores = []

let error = document.querySelector('.errores')

    title.focus()

    titulo.addEventListener('input',(e)=>{

        if(e.target.value ==''){
            titulo.classList.add('is-invalid')
            titulo.classList.remove('is-valid')
            small1.innerHTML = ('el campo no puede estar vacio')
            Titulo2 = false
        }else{
            titulo.classList.remove('is-invalid')
            titulo.classList.add('is-valid')
            small1.innerHTML = ('')
            Titulo2 = true
        }

    })

    rating.addEventListener('input',(e)=>{

        if(e.target.value =='' || e.target.value < 0){
            rating.classList.add('is-invalid')
            rating.classList.remove('is-valid')
            small2.innerHTML = ('el campo no puede estar vacio ni ser menor a 0')
            Rating2 = false
        }else{
            rating.classList.remove('is-invalid')
            rating.classList.add('is-valid')
            small2.innerHTML = ('')
            Rating2 = true
        }

        })

    premios.addEventListener('input',(e)=>{
        if(e.target.value =='' || e.target.value < 0){
            premios.classList.add('is-invalid')
            premios.classList.remove('is-valid')
            small3.innerHTML = ('el campo no puede estar vacio ni ser menor a 0')
            premios2 = false
        }else{
            premios.classList.remove('is-invalid')
            premios.classList.add('is-valid')
            small3.innerHTML = ('')
            premios2 = true
        }

        })

    fecha.addEventListener('input',(e)=>{
        console.log(e.target.value);
        if(e.target.value ==''){
            fecha.classList.add('is-invalid')
            fecha.classList.remove('is-valid')
            small4.innerHTML = ('el campo no puede estar vacio')
            fecha2 = false
        }else{
            fecha.classList.remove('is-invalid')
            fecha.classList.add('is-valid')
            small4.innerHTML = ('')
            fecha2 = true
        }
        
        })

    duracion.addEventListener('input',(e)=>{
        console.log(e.target.value);
        if(e.target.value ==''|| e.target.value < 60 || e.target.value > 360){
            duracion.classList.add('is-invalid')
            duracion.classList.remove('is-valid')
            small5.innerHTML = ('el campo no puede estar vacio ni ser menor a 1')
            duracion2 = false
        }else{
            duracion.classList.remove('is-invalid')
            duracion.classList.add('is-valid')
            small5.innerHTML = ('')
            duracion2 = true
        }
        
        })

    genero.addEventListener('input',(e)=>{
        console.log(e.target.value);
        if(e.target.value ==''|| e.target.value < 1){
            genero.classList.add('is-invalid')
            genero.classList.remove('is-valid')
            small6.innerHTML = ('el campo no puede estar vacio')
            genero2 = false
        }else{
            genero.classList.remove('is-invalid')
            genero.classList.add('is-valid')
            small6.innerHTML = ('')
            genero2 = true
        }
        
        })

        form.addEventListener('submit',(e)=>{
            errores =[]
            for (let i = 0; i < error.length; i++) {
                error.innerHTML += `<li class="errores" >${''}</li>` ;
                
            }
            if(!Titulo2 || !Rating2 || !premios2 || !fecha2 || !duracion2 || !genero2){
                e.preventDefault()
                small7.innerHTML = ('complete los campos')


                if(!Titulo2){
                    errores.push('error en el campo del titulo')
                }
                if(!Rating2){
                    errores.push('error en el campo del rating')
                }
                if(!premios2){
                    errores.push('error en el campo de premios')
                }
                if(!fecha2){
                    errores.push('error en el campo de fecha')
                }
                if(!duracion2){
                    errores.push('error en el campo de duracion')
                }
                if(!genero2){
                    errores.push('error en el campo de genero')
                }
                







                for (let i = 0; i < errores.length; i++) {
                    error.innerHTML += `<li class="errores" >${errores[i]}</li>` ;
                    
                }


            }else{
                small7.innerHTML = ('')
                alert('La película se guardó satisfactoriamente')
            }
    
            
        })



})