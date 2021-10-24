<template>
    <div class="col-9 row">
        <div class="col-12 pt-15 border-bottom posContainer">
            <button class="btn btn-light posButton" v-bind:class="selected.menu === item.id ? 'active': ''" v-for="(item, key) in menu" v-bind:key="key" v-on:click="menuSelect(item.id)">{{item.name}}</button>
        </div>
        <div class="col-12 pt-15 border-bottom posContainer" v-if="submenu.length">
            <button class="btn btn-light posButton" v-bind:class="selected.submenu === item.id ? 'active': ''" v-for="(item, key) in submenu" v-bind:key="key" v-on:click="subMenuSelect(item.id)">{{item.name}}</button>
        </div>
        <div class="col-12 pt-15 border-bottom posContainer" v-if="submenu.length && product.length">
            <button class="btn btn-light posButton counter" v-for="(item, key) in product" v-bind:key="key" v-on:click="addSepet(item)"><div class="quantity" v-if="item.quantity !== 0">{{item.quantity}}</div><span>{{item.name}}</span></button>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent,ref} from "vue";
import {useStore} from "vuex";
import menu from '../../menu.json';
import {Sepet, SepetData} from '@/types/sepet';

export default defineComponent({
    setup() {
        const store = useStore();
        const selected = ref({
            menu: null,
            submenu: null,
            product: 0
        })
        const menuSelect = (id: null)=>{
            selected.value.menu = id
        }
        const subMenuSelect = (id: null)=>{
            selected.value.submenu = id
        }
        const addSepet = (data: SepetData)=>{
            selected.value.product = data.id
            store.commit('addItem',data)
        }
        
        return {
            menu: menu.filter(item=>(item.type === 'menu')),
            menuSelect,
            selected: computed(()=>selected.value),
            submenu: computed(()=>menu.filter(item=>(item.type === 'submenu' && item.parent_id === selected.value.menu))),
            subMenuSelect,
            product: computed(()=>menu.filter(item=>(item.type === 'product' && item.parent_id === selected.value.submenu))),
            addSepet,
            sepet: computed(()=>store.state.sepet)
        }
    },
})
</script>

<style lang="sass">
    .posContainer
        padding: 15px

        .posButton
            padding:20px 50px
            margin-right: 5px
            border: unset
            
            &.active
                background-color: #d3d3d3

            &.counter
                position: relative

                .quantity
                    position: absolute
                    top: 50%
                    -ms-transform: translateY(-50%)
                    transform: translateY(-50%)
                    font-size: 50px
                    color: lightgrey
                    left: 25%
                    opacity: .5

    table
        thead
            background-color: #f8f9fa
</style>