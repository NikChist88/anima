import { S } from './Socials_Styles'
import { Icon } from '../Icon'
import { socials } from '../../data/data'

export const Socials: React.FC = () => {
  return (
    <S.Social>
      {socials.map((social) => {
        return (
          <S.SocialLink
            key={social.id}
            href={social.href}
            aria-label={social.label}
          >
            <Icon
              iconId={social.iconId}
              width={social.width}
              height={social.height}
            />
          </S.SocialLink>
        )
      })}
    </S.Social>
  )
}
