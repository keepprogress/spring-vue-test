export default function (time) {
  const datefiltered = new Date(time * 1000)
  return datefiltered.toLocaleDateString()
}
