<template>
    <div class="col-3">
        <table class="table table-borderless">
            <thead>
            <tr>
                <th>Product</th>
                <th>QTY</th>
                <th>Each</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody v-for="(item, key) in sepet.data" :key="key">
                <tr class="anchor" v-on:click="open(item.id)">
                    <td>{{item.name}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.totalPrice}}</td>
                </tr>
                <tr v-if="opened===item.id">
                    <td colspan="4" class="sepetItemDetail">
                        <i class="fas fa-pen"></i>
                        <i class="fas fa-bookmark"></i>

                        <span v-on:click="removeItem(item)">
                            <i class="fas fa-minus-circle anchor"></i>
                        </span>
                        <input type="text" :value="item.quantity" class="qtd" @change="setCountItem($event, item)">
                        <span v-on:click="addSepet(item)">
                            <i class="fas fa-plus-circle anchor"></i>
                        </span>

                        <span v-on:click="deleteItem(item)">
                            <i class="fas fa-times-circle anchor"></i>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent,ref} from "vue";
import {useStore} from "vuex";
import {Sepet, SepetData} from '@/types/sepet';

export default defineComponent({
    setup() {
        const store = useStore();
        const opened = ref(0);
        const open = (id:any) =>{
            opened.value = id
        }
        let sepetCore : Sepet = store.state.sepet;
        const sepet = ref(sepetCore);
        const addSepet = (data: SepetData)=>{
            store.commit('addSepet',data);
        }
        const removeItem = (data:SepetData)=>{
            store.commit('removeItem',data);
        }
        const setCountItem = (event: any, data:SepetData)=>{
            data.quantity = event.target.value
            store.commit('addItemCount',data);
        }
        const deleteItem = (data: SepetData)=>{
            store.commit('deleteItem',data)
        }

        return {
            sepet: computed(()=>store.state.sepet),
            open,
            opened,
            addSepet,
            removeItem,
            setCountItem,
            deleteItem
        }
    },
})
</script>

<style lang="sass">
    .anchor
        cursor: pointer

    .sepetItemDetail
        svg, .qtd
            margin-right: 10px
        input.qtd
            width: 30px
</style>