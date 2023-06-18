export interface Props {
  disabled: boolean
  text: string
  link: boolean
  poster: string
  method: (payload: MouseEvent) => void
}
