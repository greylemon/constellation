export const getTime = () => {
  const _padTime = (time: number) => ('0' + time).slice(-2)

  const date = new Date()
  const hours = _padTime(date.getHours())
  const minutes = _padTime(date.getMinutes())
  // const seconds = _padTime(date.getSeconds())
  // return `${hours}:${minutes}:${seconds}`
  return `${hours}:${minutes}`
}
