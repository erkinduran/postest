import { createStore } from 'vuex';
import {Sepet, SepetData} from '@/types/sepet';

let sepetCore : Sepet = {
  total: 0,
  data: []
}

export default createStore({
  state: {
    sepet: (localStorage.getItem("sepet") !== null ? JSON.parse(localStorage.getItem("sepet") || '{}') : sepetCore)
  },
  mutations: {
    initSepet (state, sepet){
      state.sepet = sepet
    },
    addItem(state, data:SepetData){
      if(state.sepet.data.filter((item: SepetData)=>item.id === data.id).length){
          state.sepet.data.filter((item: SepetData)=>item.id === data.id).map((item: SepetData)=>{
              item.quantity += 1
              item.totalPrice = item.price * item.quantity

              return item
          })
      }else{
          data.quantity = 1;
          data.totalPrice = data.price * data.quantity
          state.sepet.data.push(data)
      }
      state.sepet.total = state.sepet.data.map((item: SepetData)=>item.totalPrice).reduce((a:number, b:number) => a + b, 0)
      localStorage.setItem('sepet',JSON.stringify(state.sepet));
    },
    removeItem(state, data:SepetData){
      if(state.sepet.data.filter((item: SepetData)=>item.id === data.id).filter((item: SepetData)=>item.quantity > 1).length){
          state.sepet.data.filter((item: SepetData)=>item.id === data.id).map((item: SepetData)=>{
              item.quantity -= 1
              item.totalPrice = item.price * item.quantity

              return item
          })
      }else if(state.sepet.data.filter((item: SepetData)=>item.id === data.id).length){
        for (const key in state.sepet.data) {
            if (state.sepet.data[key].id == data.id) {
              state.sepet.data.splice(key, 1);
              break;
            }
        }
      }
      state.sepet.total = state.sepet.data.map((item: SepetData)=>item.totalPrice).reduce((a:number, b:number) => a + b, 0)
      localStorage.setItem('sepet',JSON.stringify(state.sepet));
    },
    addItemCount(state, data:SepetData){
      if(state.sepet.data.filter((item: SepetData)=>item.id === data.id).length){
          state.sepet.data.filter((item: SepetData)=>item.id === data.id).map((item: SepetData)=>{
              item.totalPrice = item.price * item.quantity

              return item
          })
      }else{
          data.totalPrice = data.price * data.quantity
          state.sepet.data.push(data)
      }
      state.sepet.total = state.sepet.data.map((item: SepetData)=>item.totalPrice).reduce((a:number, b:number) => a + b, 0)
      localStorage.setItem('sepet',JSON.stringify(state.sepet));
    },
    deleteItem(state, data: SepetData){
      if(state.sepet.data.filter((item: SepetData)=>item.id === data.id).length){
        for (const key in state.sepet.data) {
            if (state.sepet.data[key].id == data.id) {
              state.sepet.data.splice(key, 1);
              break;
            }
        }
      }
      state.sepet.total = state.sepet.data.map((item: SepetData)=>item.totalPrice).reduce((a:number, b:number) => a + b, 0)
      localStorage.setItem('sepet',JSON.stringify(state.sepet));
    }
  },
  actions: {
  },
  modules: {
  }
})
