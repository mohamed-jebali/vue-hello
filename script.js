
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        image: "./img/kangoroo.jpg"
      };
    }
  }).mount('#app')
