import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { ref } from 'vue'



export const useAuto = () => {
  function clear() {
    newAuto.value = {
      brand: '',
      price: '',
      year: '',
      volume: '',
      color: '',
      saled: '',
      city: '',
      carcase: '',
      gear: '',
      travel: null,
      image: false,
    }
  }

  const newAuto = ref({
    brand: '',
    price: '',
    year: '',
    volume: '',
    color: '',
    saled: false,
    city: '',
    carcase: '',
    gear: '',
    travel: 0,
    image: false,
})

  const auto = ref(null)

  const autoList = ref([])

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  async function createAuto() {
    loading.value.newAuto = true
    try {
        await addDoc(collection(db, 'autos'), newAuto.value).then(() => {
          console.log('Cars added')
        })
      } catch (e) {
        console.error('Error: ', e)
      }
  }
  async function getAutoList() {
    loading.value.autoList = true
    try {
      const querySnapshot = await getDocs(collection(db, 'autos'))
      querySnapshot.forEach((doc) => {
        autoList.value.push(doc.data())
      })
    } catch (e) {
      console.error('Error: ', e)
    } finally {
      loading.value.autoList = false
    }
  }
  return {
    createAuto,
    getAutoList,
    auto,
    newAuto,
    autoList,
    loading,
    clear
  }
}
