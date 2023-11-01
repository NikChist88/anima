import { S } from './HeaderLinks_Styles'
import { Icon } from '../../../../components/Icon'
import { headerLinks } from '../../../../data/data'

export const HeaderLinks: React.FC = () => {
  return (
    <S.HeaderLinksBody>
      {headerLinks.map((link) => {
        return (
          <S.HeaderLink key={link.id} href={link.href}>
            <Icon
              iconId={link.iconId}
              width={link.width}
              height={link.height}
            />
            {link.title}
          </S.HeaderLink>
        )
      })}
    </S.HeaderLinksBody>
  )
}
