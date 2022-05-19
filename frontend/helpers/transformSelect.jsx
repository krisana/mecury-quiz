export const transformSelect = (data) => {
  if(!data) return []

  let arr = [];

  data.forEach((v) => {
    const obj = {
      value: v.id,
      label: v.name,
    }
    arr.push(obj)
  })

  return arr;
}