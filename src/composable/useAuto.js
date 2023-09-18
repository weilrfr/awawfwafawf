import { collection, getDocs, addDoc } from 'firebase/firestore'
import { db } from '@/firebases'
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { computed, ref } from 'vue'
import { createId, formatDate } from '@/services/methods';
import * as firebase from 'firebase/storage';

export const useAuto = () => {
  function clear() {
    newAuto.value = {
      id: '',
      brand: '',
      price: '',
      year: '',
      volume: '',
      age: '',
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
    id: createId(),
    brand: '',
    price: '',
    year: '',
    volume: '',
    age: '',
    color: '',
    saled: false,
    city: '',
    carcase: '',
    gear: '',
    travel: 0,
    image: '',
})

  const auto = ref(null)

  const autoList = ref([])

  const loading = ref({
    auto: false,
    autoList: false,
    newAuto: false,
  })

  const autoListRemake = computed(() => {
    if (!autoList.value.length) return []

    const _autoListRemake = autoList.value.map((auto) => {
      auto.year = formatDate(auto.year);
      auto.price = `${parseInt(auto.price).toFixed(2)}KZT`
      auto.volume = `${auto.volume} л`;
      auto.travel = `${auto.travel} км`;
      auto.age = `${new Date().getFullYear() - auto.year} лет`;
      auto.color = `#${auto.color}`

      return auto;
    })
    return _autoListRemake || [];
  });

  async function createAuto() {
    loading.value.newAuto = true
    try {
        await addDoc(collection(db, 'autos'), newAuto.value).then(
          async () => {
            await getAutoList();
          }
        )
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

  async function uploadImage(file) {
    loading.value.newAuto = true
    const storage = getStorage()
    const storageRef = firebase.ref(storage, `autos/${file.name}`)
    await uploadBytes(storageRef, file)
      .then(() => {
        console.log('File uploaded successfully')

        getDownloadURL(storageRef).then((url) => {
          newAuto.value.image = url;
        })
        .catch((error) => {
          console.log('Error: ', error)
        })
    })
    loading.value.newAuto = false
  }

  async function onUpload(e) {
    const image = e.target.files[0]

    await uploadImage(image)
  }
  


  return {
    createAuto,
    getAutoList,
    auto,
    newAuto,
    onUpload,
    autoListRemake,
    loading,
    clear,
  }
}
