import {ref} from "vue"
export default function useOverlay(props){

    const count = ref(0)

  function  increment(){
    count.value +=2
  }
  return {
    count,increment
  }
}