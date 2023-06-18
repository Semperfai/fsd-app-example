export interface Props {
  disabled: boolean
  text: string
  link: boolean
  method: (payload: MouseEvent) => void
}
