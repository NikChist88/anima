import { S } from "./HeaderMenu_Styles"
import { headerMenuItems } from "../../../data/data"

export const Menu: React.FC = () => {
  return (
    <S.HeaderMenuList>
      {headerMenuItems.map((item) => {
        return (
          <S.HeaderMenuItem key={item.id}>
            <S.HeaderMenuLink href={item.href}>{item.title}</S.HeaderMenuLink>
          </S.HeaderMenuItem>
        )
      })}
    </S.HeaderMenuList>
  )
}
