import { create } from 'zustand';

export const useAuthStore = create(set => ({
  username: '',
  setUsername: (name) => set((state) => ({ username : name }))
}))

export const useBackground = create(set => ({
  backgroundList: [
    'https://witcher-tv.ru/wp-content/uploads/2020/01/yennefer-sodden-full-hd.jpg',
    'https://img2.akspic.ru/crops/9/2/1/6/6/166129/166129-california_streaming_apple_event_wallpaper_without_logo-1920x1080.jpg',
    'https://images.wallpaperscraft.ru/image/single/gory_pejzazh_sumerki_139582_1920x1080.jpg',
    'https://cs11.pikabu.ru/post_img/big/2019/11/23/6/157450204217337987.jpg'
  ],
  background: "https://witcher-tv.ru/wp-content/uploads/2020/01/yennefer-sodden-full-hd.jpg",
  loading: false,
  error: null,
  changeBackground: (newBackground) => set(state => {
    return {background: newBackground}
  }),
  addBackground: (newBackground) => set(state => {

    return {backgroundList: [...state.backgroundList, newBackground]}
  })
}))