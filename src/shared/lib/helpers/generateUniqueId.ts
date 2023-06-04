import { v4 } from 'uuid'

export const generateUniqueID = (prefix: string): string => {
  const id = v4()
  const trimmedUID = id.substring(id.lastIndexOf('-') + 1)
  const fullID = [prefix.toLocaleLowerCase(), trimmedUID].join('-')
  return fullID
}
