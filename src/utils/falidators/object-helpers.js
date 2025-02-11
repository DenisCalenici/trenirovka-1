export const updateObjectInArray = (
  items,
  ItemId,
  objPropName,
  newOjectProps
) => {
  return items.map((u) => {
    if (u[objPropName] === ItemId) {
      return { ...u, ...newOjectProps }
    }
    return u
  })
}
