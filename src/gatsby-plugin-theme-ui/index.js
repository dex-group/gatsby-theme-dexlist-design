import colors from "./colors"

export default {
  colors,

  fonts: {
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif`,
    heading: '"DM Serif Display", sans-serif',
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`
  },
  fontSizes: [14, 14, 14, 14, 16],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 600
  },
  lineHeights: {
    body: 1.6,
    heading: 1.25
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  breakpoints: ['480px', '952px', '1208px', '1736px', '2264px'],

  text: {
    topic: {
      fontSize: '10px',
      color: 'rgba(51, 20, 30, .8)',
      textShadow: '0 1px 0 rgba(255, 255, 255, .8)'
    },
    slogan: {
      color: 'text',
      fontSize: '11px',
      lineHeight: 1.3,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    },
    about: {
      fontWeight: 'heading',
      fontSize: 11,
      lineHeight: '1.5',
      opacity: 0.5
    }
  },

  images: {
    avatar: {
      display: 'inline-block',
      width: 24,
      height: 24,
      mr: 2,
    }
  },

  cards: {
    logo: {
      px: 2,
      py: 12,
      ml: -2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      cursor: 'pointer',
      backgroundColor: 'none !important',
      transition: 'background-color .2s ease',
      ':hover': {
        backgroundColor: '#0000000d',
      }
    },
    item: {
      px: 2,
      py: '12px',
      backgroundColor: '#fff',
      height: '100%',
      borderRadius: 4,
      border: '1px solid rgba(255, 240, 245, .9)',
      boxShadow: '0 0 0 rgba(0, 0, 0, .05), 0 2px 4px rgba(0, 0, 0, .05), 0 6px 12px rgba(249, 103, 103, .05)',
      ':hover': {
        border: '1px solid rgba(242, 245, 247, .6)',
        boxShadow: '0 0 0 rgba(0, 0, 0, .05), 0 4px 8px rgba(0, 0, 0, .1), 0 12px 24px rgba(249, 103, 103, .25)',
        transition: 'all .4s ease-out'
      }
    },
    menu: {
      p: 2,
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '-.4px',
      position: 'relative',
      zIndex: 2,
      display: 'inline-block',
      borderRadius: 6,
      backgroundColor: '#fff',
      boxShadow: '0 8px 12px 0 rgba(0, 0, 0, .2)'
    },
    count: {
      py: '2px',
      px: 2,
      ml: 2,
      right: 8,
      color: '#fff',
      fontSize: '10px',
      backgroundColor: '#c8b8bd',
      borderRadius: '50px',
      position: 'absolute',
      visibility: 'hidden'
    }
  },

  links: {
    nav: {
      py: 2,
      px: 2,
      color: '#222',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center',
      transition: 'all .2s ease',
      ':hover': {
        backgroundColor: '#0000000d',
      },
      ':hover .count': {
        visibility: 'visible',
      }
    },
    about: {
      py: 2,
      px: 2,
      mb: 2,
      color: '#fff',
      borderRadius: 4,
      display: 'flex',
      alignItems: 'center'
    },
    submit: {
      color: '#fff',
      fontSize: '12px',
      fontWeight: 'bold',
      px: 3,
      py: '6px',
      backgroundColor: 'highlight',
      borderRadius: '50px',
      boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.16), 0 1px 2px rgba(245, 7, 84, .6)',
      transition: 'box-shadow .3s ease, background .2s ease',
      ':hover': {
        backgroundColor: '#b31345',
        boxShadow: 'none'
      }
    },
    newsletter: {
      color: 'highlight'
    },
    viewall: {
      fontSize: '10px',
      color: 'viewall',
      ':hover': {
        color: 'highlight'
      }
    }
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      backgroundColor: 'background'
    },
    a: {
      color: 'tertiary',
      ':hover': {
        color: 'highlight'
      }
    },
    p: {
      fontSize: 3,
    },
    span: {
      fontWeight: 'heading',
      fontSize: 11,
      lineHeight: '1.5',
      opacity: 0.5
    },
    h1: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: [24, 32],
      lineHeight: 'body',
      textAlign: 'center'
    },
    h2: {
      fontFamily: 'body',
      fontWeight: 'heading',
      fontSize: 3,
      lineHeight: '1.8',
      color: '#350909',
      m: 0
    },
    h4: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 3,
      py: '2px',
      m: 0,
      lineHeight: 1,
      letterSpacing: '-0.4px'
    },
    hr: {
      my: 3,
      height: '2px',
      color: '#eaeaea'
    },
    header: {
      py: 2,
      px: 3,
      zIndex: '999',
      position: 'sticky',
      top: '0',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff00',
      justifyContent: 'space-between',
      backdropFilter: 'blur(4px)',
      p: {
        m: 0,
        fontSize: 1,
        fontWeight: 'body'
      }
    },
    footer: {
      margin: '0 auto',
      px: 4,
      pt: 4
    },
    footernote: {
      textAlign: 'center',
      fontSize: '10px',
      pt: 4,
      pb: 3,
      a: {
        fontWeight: 'bold',
        color: '#6d434c',
        '&:hover': {
          color: '#443E4C',
        },
        '&:hover .de': {
          color: '#43E6FE',
        },
        '&:hover .x': {
          color: 'highlight',
        }
      }
    },
    breadcrumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      top: '56px',
      width: '100%',
      height: '100%'
    },
  }
}
