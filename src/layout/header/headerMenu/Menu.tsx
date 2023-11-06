import { S } from "./HeaderMenu_Styles"
import { headerMenuItems } from "../../../data/data"

export const Menu: React.FC = () => {
  return (
    <ul>
      {headerMenuItems.map((item) => {
        return (
          <S.MenuItem key={item.id}>
            <S.MenuLink href={item.href}>{item.title}</S.MenuLink>
          </S.MenuItem>
        )
      })}
    </ul>
  )
}
