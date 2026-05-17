
export default defineEventHandler((event) => {
  return {
    message: "Hello from the Nuxt backend!",
    timestamp: new Date()
  }
});