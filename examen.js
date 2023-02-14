Vue.createApp({
    data(){
        return{
                cursos:[],
                nombre: '',
                descripcion: '',
                precio: '',
                cantidad: '',
                url:'',
                acumulacion:0,
                total:0

            }
        },
        methods:{
            agregarcurso(){
                const curso = {
                    nombre: this.nombre,
                    descripcion: this.descripcion,
                    precio: this.precio,
                    cantidad: this.cantidad,
                    url: this.url,
                    total: this.total,
                    acumulacion: this.acumulacion
                }
                this.cursos.push(curso);
               this.acumulacion = this.precio * this.cantidad
               this.total = this.acumulacion + this.total

            },
            
        }
    }).mount('#app')