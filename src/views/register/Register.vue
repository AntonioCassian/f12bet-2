<template>
    <div class="register">
        <Header />
        <main>
            <div class="container">
                <section>
                    <div class="numeros padd">
                        <ol>
                            <li class="actived">
                                <span class="number">1</span>
                                <span class="progress">
                                    <span class="progreso1" :style="{width}"></span>
                                </span>
                            </li>
                            <li :class="ativ">
                                <span class="number">2</span>
                                <span class="progress">
                                    <span class="progreso2" :style="{width:width2}"></span>
                                </span>
                            </li>
                            <li :class="activ">
                                <span class="number">3</span>
                            </li>
                        </ol>
                    </div>
                    <div class="padd" >
                        <span class="txt">{{citacoes[indice].title}}</span>
                    </div>
                    <form @submit.prevent="submit()">
                        <fieldset class="field" v-if="numero === 0">
                            <div  class="divisorHead">
                                <InputLabel class="txt  padd" label="CPF">
                                <input 
                                type="text"
                                required
                                 v-mask="['###.###.###-##']"
                                 v-model="form.cpf"
                                 />
                            </InputLabel>
                            </div>
                            
                           <button class="btn" @click.prevent="next">Continuar</button>
                        </fieldset>

                        <fieldset class="field" id="dateName" v-if="numero === 1" >
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Nome Completo">
                                <input type="text"
                                v-model="form.nome"
                                />
                            </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" 
                                label="Data De Nascimento">
                                <input type="date"
                                v-model="form.dataNas"
                                />
                            </InputLabel>
                            </div>
                           <div class="divisor divisorHead">
                            <button class="btn" @click.prevent="back">Voltar</button>
                           <button class="btn" @click.prevent="next">Continuar</button>
                           </div>
                        </fieldset>

                        <fieldset class="field" v-if="numero === 2">
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Usuário (Login)">
                                    <input 
                                    type="text"
                                    v-model="form.user"
                                    />
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="E-Mail">
                                    <input type="email"
                                    v-model="form.email"/>
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Senha">
                                    <input 
                                    type="password"
                                    v-model="form.senha"/>
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Telefone">
                                    <input 
                                    type="tel"
                                    v-mask="['(##) #####-####']"
                                    v-model="form.tel"
                                    />
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Promo Code">
                                    <input
                                     type="text"
                                     v-model="form.code"
                                     />
                                </InputLabel>
                            </div>
                            <div class="checkdiv">
                                <input class="check" 
                                type="checkbox"
                                v-model="form.check"
                                />
                                <span class="spancheck">Sou maior de 18 anos <a href="" target="_blank">Termos e Condições</a><br /> Eu li e aceito</span>
                            </div>
                            
                           <div class="divisor divisorHead">
                            <button class="btn" @click.prevent="back">Voltar</button>
                           <button class="btn" type="submit">Registro</button>
                           </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Headers/Header.vue'
import Footer from '@/components/Footer.vue'
import InputLabel from '@/components/InputLabel.vue'
import { mapActions } from 'vuex'

export default {
    name: 'registerA',
    components: {
        Header,
        Footer,
        InputLabel
    },
   data(){
    return{
        numero:0,
        ativo: false,
        atv: false,
        width: 0,
        width2: 0,
        form:{
            cpf: '',
            nome: '',
            dataNas: '',
            user: '',
            email: '',
            senha: '',
            tel: '',
            code: '',
            check: false
        },
        citacoes: [
            {title: 'Informação Pessoal'},
            {title: ''},
            {title: 'Informação Pessoal'}
        ]
    }
   },
   methods: {
    
    next(e){
       this.numero ++
       let valor= 0  
       this.errors= []
       
       e.preventDefault();
       if(this.numero === 1) {
        console.log(valor)
        console.log(this.numero)
        const tempo = setInterval(() => {
           valor += 5
            this.width = `${valor}%`
            if(valor == 50) {
                if(this.form.cpf === ''){
                    clearInterval(tempo)
                    this.numero = 0
                    e.preventDefault();
                }
            }
            if(valor === 100) {
                clearInterval(tempo) 
                this.ativo = true
                return this.numero = 1
            }
        },100)
       } else if (this.numero === 2){
        const tempo = setInterval(() => {
           valor += 5
            this.width2 = `${valor}%`
            if(valor == 40) {
                if(this.form.nome === ''){
                    clearInterval(tempo)
                    this.numero = 1
                    e.preventDefault();
                }
            }
            if(valor == 80) {
                if(this.form.dataNas === ''){
                    clearInterval(tempo)
                    this.numero = 1
                    e.preventDefault();
                }
            }

            if(valor === 100) {
               clearInterval(tempo)
               this.atv = true
            }
        },100)
       }
        
    },
    back(){
        this.numero --
       let valor= 100
       if( this.numero === 0) {
           this.ativo = false
           const tempo = setInterval(() => {
           valor -= 5
            this.width = `${valor}%`
            if(valor === 0) {
                clearInterval(tempo) 
            }
        },100)
       } else if (this.numero === 1){
        this.atv = false
        const tempo = setInterval(() => {
           valor -= 5
            this.width2 = `${valor}%`
            if(valor === 0) {
               clearInterval(tempo)
            }
        },100)
       }
    },

    ...mapActions('users', ['addUsers']),
    submit(add){
        add = {
            cpf: this.form.cpf,
            nome: this.form.nome,
            dataNas: this.form.dataNas,
            user: this.form.user,
            email: this.form.email,
            senha: this.form.senha,
            tel: this.form.tel,
            code: this.form.code,
            check: this.form.check
        }
        this.submit(add)
        
    }
   },
   computed: {
    indice() {
        return Math.abs(this.numero % 3)
    },
    ativ() {
        return{
            actived: this.ativo == true
        }
    },
    activ() {
        return{
            actived: this.atv == true
        }
    }
   }
}
</script>

<style scoped>
    main{
        margin: 30px 0px;
    }
    .register{
        background: #000;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        background: #484848;
        padding: 2px;
        display: inline-flex;
        flex-direction: column;
        color: #fff;
        text-align: center;
        padding: 40px 0;
        border-radius: 0px 0px 5px 5px
    }

    ol {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    ol li {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        flex: 1 1;
        position: relative;
        margin: 0 39px 0;
        height: 80px;
        width: 80px;
        background: #fff;
        border-radius: 100%;
    }
    ol li span{
        display: block;
        text-align: center;
    }
    .actived{
        background: #c9f73c;
    }
    .error{
        color: red;
        border: 1px solid #D90222;
        background-color: #f8d2d6;
        font-size: 13px;
    }
    .number{
        line-height: 78px;
        color: #484848;
        font-size: 30px;
        font-weight: 800;
    }
    .progress, .progress2{
        width: 100%;
        height: 10px;
        background-color: #fff;
        position: absolute;
        transform: translateX(50%);
        z-index: 1;
        text-align: center;
        margin-left: 49%;
        top: 36px;
    }
    .progreso1{
        background: #c9f73c;
        height: 100%;
    }
    .progreso2{
        background: #c9f73c;
        height: 100%;
        width: 0%;
    }
    .err-prog{
        background: red;
        height: 100%;
    }
    .txt{
        color: rgba(255, 255, 255, 0.5);
        font-size: 25px;
    }

    .padd{
        padding-bottom: 35px;
    }
    input{
        background: #31343b;
        border: 1px solid #324154;
        font-size: 16px;
        color:#fff;
        width: 100%;
        outline: none;
        padding: 7px 0;
    }
    .field{
        padding: 0 40px;
        display: flex;
        flex-direction: column;
    }
    .divisorHead{
        align-items: center;
        padding-bottom: 25px;
    }
    .divisor{
        display: flex;
        gap: 10px;
    }
    .termos{
        color: #232520;
    }
    .btn{
        width: 100%;
        background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
        color: #232520;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        border: none;
        border-radius: 3px;
    }
    .checkdiv{
        padding-bottom: 30px
    }
    .check{
        width: 15px !important;
    }
    .spancheck{
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
    }
    .spancheck > a {
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
    }
</style>