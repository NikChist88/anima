import sprite from '../assets/icons/sprite.svg'

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${sprite}#${props.iconId}`}></use>
    </svg>
  )
}