'use client'

import { useDarkMode } from '@/hooks/useDarkmode'

export const HomeIcon: React.FC = (): JSX.Element => {
  return (
    <svg
      width="32"
      height="32"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5Z"></path>
    </svg>
  )
}

export const NotepadIcon: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 48 48"
    >
      <image
        width="48"
        height="48"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/xISIRlJoIWIRIYpFAqIg2kkEbdQiRjBqk928hDyW3Q0itoKNhWAh2vgq/AfaCrYKgqAIInb2vhoJ651EiEgyy+z9ODPncvcsuGfyesHyTEChaJux6WhwMbEU9L3ixY2HPsaTumXMzk/Fabq+7nGpehdRvZrfa7jaU2lLB1er8KhumLawTMPMmm0o3hbu0nPJlPCRcNiUAYWvla7V+EVxtsYfis14bBLcqmcw+4e1P6znzILwoHCokC/rv/OoL/GniwvzUntk92IRY5ooQTTKrJLHJiK1KJk19g1VfXOUxKPL22AdUxxZcuINi1qWrmmpGdHT8uRZV7n/z9PKjAzXuvuj4H12nPd+8O1CZcdxvo8dp3ICLU9wWaz7S5LT2KfoO3UtdAiBTTi/qmvaHlxsQfejkTSTValFtjuTgbcz6EhA5y20Ldey+j3n9AHiG/KLbmD/AAbkfmDlBynBaB3MfTDHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkElEQVRoQ+1Z207DMAztRrkIaTyzN/5xfAZ8Is+AACEYYwxKhz2aKglpjtM0pYhGqrTOzrGP7bhJm2XjGCPwvyMwiaG/paHPn9BQ921lof5MQycMTf/PExCVUFUOnxT9vR4zUFBF7iN7MAPk/FsF0qfzbDIn22U0AQSQWP6O8GEGCODQAbLVO46S839q2HOQjPSNjlbNh/7liCHJjdp3OS7AgCqEWzurteA7NBEy7Hnh2v7OEQFJBhoxfNloK7OMpVvEF9fPGV+JRyeLOLGPXvgjZFyyBhBGSjl80EatgcXpbLsw93OtyFzeLJscfWkFqE/ilqYPJeP6t2Vt720nXfaaiAy9hFwPN4NLFAFOfRfDEd1N9V9aAtH12Qyg+nNUgHfwVl0/JHS6hiabV8ousgfblHU03FDJwN6MjCI52eT9F0efN43eLISmqK8zgQpsgciGPgde7RaLDLDc0+ez8/mJC4IXL5PgTHhHaAZmCLAjuToFfiC8UAIIryv5cQV0gABDS8hY9KkON5rTrtOgwWmoGUCBr+WhGRADSxVjzxSSDKykzvyGXmsCPZ3IYEwkBIzeryPyeaDNgF4FKEgInLnwGh5AAaa7UZXshdS+ZGfR9wpd6pKv/ZZludb3W6hVS7pQY5YQuJSQrkeYsPfr+hICal/Sxh84x26jlIHJdFrH7AkCIAVapKuQMyrCQ3IioJtTe6LGaZIMGBsq+9MRckj/CsW/ycEsz7/NFkWRcbS1L1PGb1KB5SQhAPfkPhK2c1p51ERQEHxySRvtawv9w09Jk4AEqq7AL5g4E490Lenih9stXfzyVR3A9TcI9tsEvud2zOWoy+6re/6PcVlnTdeLxPmYzI1zxwiMERhIBL4A9VxrC1h/lngAAAAASUVORK5CYII="
      />
    </svg>
  )
}

export const ShopIcon: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <image
        width="32"
        height="32"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/xISIRlJoIWIRIYpFAqIg2kkEbdQiRjBqk928hDyW3Q0itoKNhWAh2vgq/AfaCrYKgqAIInb2vhoJ651EiEgyy+z9ODPncvcsuGfyesHyTEChaJux6WhwMbEU9L3ixY2HPsaTumXMzk/Fabq+7nGpehdRvZrfa7jaU2lLB1er8KhumLawTMPMmm0o3hbu0nPJlPCRcNiUAYWvla7V+EVxtsYfis14bBLcqmcw+4e1P6znzILwoHCokC/rv/OoL/GniwvzUntk92IRY5ooQTTKrJLHJiK1KJk19g1VfXOUxKPL22AdUxxZcuINi1qWrmmpGdHT8uRZV7n/z9PKjAzXuvuj4H12nPd+8O1CZcdxvo8dp3ICLU9wWaz7S5LT2KfoO3UtdAiBTTi/qmvaHlxsQfejkTSTValFtjuTgbcz6EhA5y20Ldey+j3n9AHiG/KLbmD/AAbkfmDlBynBaB3MfTDHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABE0lEQVRYR+1WXQ/CIBAbTOeT/v//6UfUiHoQtrANSO+8xEThcWNtKaWj69r4dwdMyYAXDU1zDI0cntUk+Sksb9dGcUXFrS5xWJ8BjRwkOHgG6COnuPoARZhPKIQ08TBOVD4InXNuwh45VrYsbN/R6blLt8IfPSIdrLW3SHiiR/vUiVRAT0SP2ct4dj8REO2fdQrB9vQ8bMkkYElSKg5pNiB8reTX2lXqpnThsu+0najhwW3HtQ7N0Nd/RrADU3EY48vkWNhcX+GsFpU4cJElK/+VRMCsyRawvmBYQyLgXGFg36IkAoaKAHamUAHpvJoD10QcdAlBBbCtJSFbJAxZldzSQYjCny9zM0YdQDnavOYA24E360d69wq8HTsAAAAASUVORK5CYII="
      />
    </svg>
  )
}

export const PaletteIcon: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <image
        width="32"
        height="32"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/xISIRlJoIWIRIYpFAqIg2kkEbdQiRjBqk928hDyW3Q0itoKNhWAh2vgq/AfaCrYKgqAIInb2vhoJ651EiEgyy+z9ODPncvcsuGfyesHyTEChaJux6WhwMbEU9L3ixY2HPsaTumXMzk/Fabq+7nGpehdRvZrfa7jaU2lLB1er8KhumLawTMPMmm0o3hbu0nPJlPCRcNiUAYWvla7V+EVxtsYfis14bBLcqmcw+4e1P6znzILwoHCokC/rv/OoL/GniwvzUntk92IRY5ooQTTKrJLHJiK1KJk19g1VfXOUxKPL22AdUxxZcuINi1qWrmmpGdHT8uRZV7n/z9PKjAzXuvuj4H12nPd+8O1CZcdxvo8dp3ICLU9wWaz7S5LT2KfoO3UtdAiBTTi/qmvaHlxsQfejkTSTValFtjuTgbcz6EhA5y20Ldey+j3n9AHiG/KLbmD/AAbkfmDlBynBaB3MfTDHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC60lEQVRYR8WXTUiVQRSGr2mZSRYWBIZFbVqIFbYppKA2Jva3aOe+dasgogwKoiBoUfSzijbR1k3UIuwXglq0sIUVZQoVRRQVZqm3543zyfg1M99cDe6BlzN35vy8c2a+mbk15XK5VE2ZV83kyl11AnUVVqAD+/1gG1gHlpv/O/RT8ARcB0PJcbUHErAVm0cgRaYwugk2J8QtFSWvJ8hloKCST+As6ALLnAQttHeBc+CL2U6gT4EFMSIxAktxvG/BxtBHQUPCrBqxOQx+mu+dmF+IwEKcBizACHqjk7iH9ihQf3eE0HrGXlqMW2hV8598IQIXzFGJVuUclTiTtwUVke9rMz6dSkAbbhL8Ah0epxgBX3XaiDEOfoNN+Xi+CmjNJCcCs1PZRUKz35lYneMW83YRAa215CtYAlLXO5tIqDramIqpyq5xSeQr0GcELppRJeutWLHqXLLYx2IE7pnR7lkSiH3Wiinpdwnk74K1doQ+M30APQpGgNpzkUFzbnOD1IiNSS163Nr16Mm5ZPP4Kv6ExZ2+g9wKKKEM1Of2N/G7B/SCTqBARSL7rHLdzqTUnFn13Gehg0eyGqg6OlK/W1+mXtDYnvPLr71v866wAB9jm/CGGT1GZ/eAurQ5r4IhG9chFSPhI6AzQ6K404TzzFsZHHRmLLZ7HIc62udtXJWoDVTC9znqppScjBEQISXZAfTZNHkSzKdPySVbAgTyE1uE3Wfz2VBEoOiNoPFrFqzXghWdmH1m/yBPOCWZz+ahBcyu49iJqRnrPaFHTef/ILDPkn9DL7aAIQIrGX9j9tnxPmNClVZAryQ9yySHnNn4Nl0748Nmq4pV9CAJEdtrAe+i/56iHujmOwKyJ5nWvTlgW6r0Wf7DTrUGdCt4D6ZAC2gHXXZiNqN1xl8BB8FY8OgMMQv06xN9blWIKc1an3LhEruXUdH5no1r5meA/pxopqriB/AKDIB+oD8pSTIbAkmBU42q/t+w6gT+AKe6XNuPuQLaAAAAAElFTkSuQmCC"
      />
    </svg>
  )
}

export const MusicIcon: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <image
        width="32"
        height="32"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/xISIRlJoIWIRIYpFAqIg2kkEbdQiRjBqk928hDyW3Q0itoKNhWAh2vgq/AfaCrYKgqAIInb2vhoJ651EiEgyy+z9ODPncvcsuGfyesHyTEChaJux6WhwMbEU9L3ixY2HPsaTumXMzk/Fabq+7nGpehdRvZrfa7jaU2lLB1er8KhumLawTMPMmm0o3hbu0nPJlPCRcNiUAYWvla7V+EVxtsYfis14bBLcqmcw+4e1P6znzILwoHCokC/rv/OoL/GniwvzUntk92IRY5ooQTTKrJLHJiK1KJk19g1VfXOUxKPL22AdUxxZcuINi1qWrmmpGdHT8uRZV7n/z9PKjAzXuvuj4H12nPd+8O1CZcdxvo8dp3ICLU9wWaz7S5LT2KfoO3UtdAiBTTi/qmvaHlxsQfejkTSTValFtjuTgbcz6EhA5y20Ldey+j3n9AHiG/KLbmD/AAbkfmDlBynBaB3MfTDHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADe0lEQVRYR+2X30tUQRTH75r1ELtp+bvINrYearMfEEj0w63/IOihQCiiog1DgoV66zVSCKIfTybVSxgGle9uKUSRZerig1tWEO6Sq8kaksna58jcbXa9d3+4vtXAhzt37sw5Z753Zu65hvGvF8f8/LylBq2trW6n07kfqqEYDJfLZchVRwZPT0+nEI/Hzfs5nkWgNxAIfLFytCiAUChU6fV679L5KPyAyQLf0lrGl0Inti9g+3uKPVHAZGhoqJL6R+iHQ9w7CnRuiA1s+WAAwtxX6D6TzlVjp3LuNDsVGoDmzEX9A3RYBtDS0uLmQUJmntKhwAh0W0qJBL5qzfYi074sOHnnvKeefHy2t7ev6e7uPjg6OnoRo23wFr5AXfoCx/YLbE/h64Dpo1gLoJx6lEWSsi0sdslG+p2E3bAHNoOsFVnl/dAFTbAPBvXJKNtRAqiwCkDUsN6TqZI85HYTvIRbyqk41nfLqQwqJgggqbyuQK7KV9LxJtzQBqygvk2psourqGlb5BxZpIAcMnmUrfQ9D/IKxGEdrIY4DEDG7av7WooCEqcfxiAEr2Ox2J1wONw3MjIy3NjYmKDtc94K6LLkoMRl+lw3+5WVlRlCfX19DkONhaPcLPo2zGmw6vQ7W+eZmZmc1sBSA8jm35ictP+EWCqQ1WJ+HYozBaCbSiogn9RCSjAYlF2wDo7D+kwB6L6WEsDKtGDdOOzx+Xwygxg8gLllDYDZbcDoFjgHnmg0qot1T900cN0L1TBOAL/sFNUnkDwHbF6BHDhPmN0OZewn15lIJGJ4PB7Tvjg9LSqohu1cawhADiTLYhmApFEWRTIjyWB2gjj/BsMooO+xV7RdUs+ruF6Frubm5vd2Aei+sq0BL0bug3zVPoEo4iaAd5rxs9RF7mdwDZ7DCTvn0m73CuQITT/Du2m7AvJMPqEBeOr3+99oDr5SPwKrYDaTY/WsiADE3kLRFRjnvoqkQQ9Cvut90ApnoA1kmyWLw+EwFLNa3WxLiQfb4q+KAJKJqb4Ie3lYStIgqzmoRk5gtDGHWeXURdkukTQ9OSAtZ3usEkdJIBcS1kJLWlIqmfEj26xYpcxhFUTDMqXlRdg7DIMwgs1yPQCrH5MKpLrNzI/BFEwUqIIczyXQwRpowrastb9ryE5mfs1qJXuFmgJ/zcbUr5nslv9lkQJ/AMBURRact8KSAAAAAElFTkSuQmCC"
      />
    </svg>
  )
}

export const BlogIcon: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="24"
      height="24"
      xmlSpace="preserve"
      version="1.1"
      viewBox="0 0 32 32"
    >
      <image
        width="32"
        height="32"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABbmlDQ1BpY2MAACiRdZE7SwNBFIW/xISIRlJoIWIRIYpFAqIg2kkEbdQiRjBqk928hDyW3Q0itoKNhWAh2vgq/AfaCrYKgqAIInb2vhoJ651EiEgyy+z9ODPncvcsuGfyesHyTEChaJux6WhwMbEU9L3ixY2HPsaTumXMzk/Fabq+7nGpehdRvZrfa7jaU2lLB1er8KhumLawTMPMmm0o3hbu0nPJlPCRcNiUAYWvla7V+EVxtsYfis14bBLcqmcw+4e1P6znzILwoHCokC/rv/OoL/GniwvzUntk92IRY5ooQTTKrJLHJiK1KJk19g1VfXOUxKPL22AdUxxZcuINi1qWrmmpGdHT8uRZV7n/z9PKjAzXuvuj4H12nPd+8O1CZcdxvo8dp3ICLU9wWaz7S5LT2KfoO3UtdAiBTTi/qmvaHlxsQfejkTSTValFtjuTgbcz6EhA5y20Ldey+j3n9AHiG/KLbmD/AAbkfmDlBynBaB3MfTDHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVRYR+1WAQ6CMAwUY/yU7zO+Q7+i/kR4hrNNKJnQsutYMkhY0pCN7Xq93pQmhHCoOY41k3PuncAJaMFSkzRzOaq3AFFACpitRKkSUm5TCkiRqcpcSm1SAVeFqVuGmDA3IXTOIpDq8/hmePcPwqzSA3E1Yxnl3Xhd5tZ7Wefn31nEA5qPUMlTHlT/DSHzJJH1DRNsrwLFyVU3IUrgTYo+I1W9c7NjKIEvIcTG885NAo3xUWpdp0zvDeQnHkIVkMTFpBdAL4Fi0g+/5WttQdczvOQ2PTonGK2GZbXg0W9+9e5nU+YGY/C4q8VwC5Q409qNoqVYOj4EcKVgzEku6xoWUB6D8N4CDNWxayfwA3Lyu1YVflZaAAAAAElFTkSuQmCC"
      />
    </svg>
  )
}

export const Facebook: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 512 512"
    >
      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
    </svg>
  )
}

export const Twitter: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 448 512"
    >
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
    </svg>
  )
}

export const Instagram: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 448 512"
    >
      <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
    </svg>
  )
}

export const Tiktok: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 448 512"
    >
      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
    </svg>
  )
}

export const Deviantart: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="10"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 320 512"
    >
      <path d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z" />
    </svg>
  )
}

export const Github: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="15.5"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 496 512"
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  )
}

export const Youtube: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="18"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 576 512"
    >
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  )
}

export const Linkedin: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 448 512"
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  )
}

export const Pinterest: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="15.5"
      fill={`${theme === 'light' ? '#ffffff' : ' #000000'}`}
      viewBox="0 0 496 512"
    >
      <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
    </svg>
  )
}

export const MailIcon: React.FC = (): JSX.Element => {
  const { theme, mounted } = useDarkMode()
  if (!mounted) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      fill={`${theme === 'light' ? '#000000' : ' #ffffff'}`}
      viewBox="0 0 512 512"
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  )
}
