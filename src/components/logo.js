import React from 'react'
import { Box, Card } from 'theme-ui'

export default ({ toggle }) => (
  <Box>
    <Card
      onClick={toggle}
      variant='logo'
      aria-label='Logo'
      className='logo'
    >
      <LogoIcon />
    </Card>
  </Box>
)

const LogoIcon = () => (
  <svg
    width="92"
    height="18"
    viewBox="0 0 92 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M67.7349 2.80206V3.6H59.9782V2.80206H67.7349ZM62.3163 6.71753C60.405 6.71753 59.9967 6.60619 59.9782 5.90103H69.9617C69.7761 6.60619 69.4235 6.71753 68.0689 6.71753H62.3163ZM68.3472 8.85155C71.1678 8.85155 72.1513 8.46186 72.5039 6.58763C71.7617 6.47629 70.741 6.23505 70.0916 5.90103H70.3885V0.519588H57.139V5.88247C57.139 8.25773 58.3823 8.85155 62.3163 8.85155H68.3472ZM72.6338 10.0763H68.9596V9.22268H66.1575V10.0763H56.007V12.5629H59.2544L58.308 13.4536C59.5142 14.2515 60.9802 15.4763 61.5926 16.3485L63.541 14.4742C63.0586 13.8804 62.205 13.1753 61.3328 12.5629H66.1575V15.0866C66.1575 15.3649 66.0276 15.4577 65.6379 15.4577C65.2854 15.4577 63.7266 15.4577 62.706 15.4021C63.0586 16.0701 63.4668 17.0907 63.5967 17.8144C65.2854 17.8144 66.6215 17.7959 67.6235 17.4619C68.6256 17.1278 68.9596 16.4969 68.9596 15.1794V12.5629H72.6338V10.0763Z" fill="#350909"/>
    <path d="M91.5617 3.00619H86.9225L88.1843 2.63505C87.9802 1.91134 87.5905 0.835051 87.2194 0L84.5843 0.66804C84.8627 1.3732 85.1782 2.28247 85.3637 3.00619H82.0235V5.34433H91.5617V3.00619ZM77.4957 10.7629L77.5142 10.0577H79.5184V12.3216C79.2771 11.6907 78.9431 10.9299 78.6276 10.299L77.4957 10.7629ZM77.5142 6.23505C77.6998 6.7732 77.8668 7.3299 77.9596 7.7567L79.5184 7.08866V7.94227H77.5142V6.23505ZM79.5184 6.71753C79.3328 6.0866 79.0173 5.2701 78.7204 4.62062L77.5142 5.08454V4.43505H79.5184V6.71753ZM89.9658 15.4392C89.9101 15.4392 89.873 15.4206 89.8544 15.3464C89.8359 15.2722 89.8359 15.068 89.8359 14.6784V6.49485H83.1369V10.2804C83.1369 11.9876 83.0256 14.1959 81.8194 15.9031C81.8379 15.7175 81.8379 15.4948 81.8379 15.2722V2.37526H79.3699C79.574 1.81856 79.7967 1.18763 80.0194 0.538144L77.3287 0.129896C77.273 0.797938 77.1431 1.63299 76.9946 2.37526H75.1946V7.94227H74.0256V10.0577H75.1946C75.1761 12.2845 75.0091 14.901 73.9142 16.701C74.4709 16.9423 75.5101 17.6103 75.9369 18C76.9204 16.3856 77.3101 14.0103 77.44 11.8021C77.7184 12.4701 77.9596 13.1381 78.0709 13.6392L79.5184 12.9897V15.2351C79.5184 15.4392 79.4441 15.5134 79.2586 15.5134C79.0544 15.5134 78.4792 15.532 77.9782 15.4948C78.2751 16.0887 78.5905 17.1278 78.6462 17.7588C79.7039 17.7588 80.4648 17.7031 81.0771 17.3134C81.3555 17.1278 81.541 16.9052 81.6524 16.6082C82.2648 16.9423 83.1184 17.5175 83.4895 17.8887C85.2895 15.9216 85.605 12.6742 85.605 10.3175V8.81443H87.3493V14.8268C87.3493 16.2557 87.4792 16.7196 87.8132 17.1093C88.1472 17.4619 88.6668 17.6474 89.1493 17.6474H90.04C90.4297 17.6474 90.8565 17.5546 91.1349 17.3134C91.4132 17.0722 91.5988 16.7381 91.7287 16.2742C91.8215 15.7918 91.9142 14.6227 91.9328 13.6948C91.3946 13.4907 90.708 13.1381 90.2998 12.7856C90.2998 13.7134 90.2812 14.4557 90.2627 14.7897C90.2256 15.1237 90.207 15.2907 90.1699 15.3649C90.1513 15.4206 90.0957 15.4392 90.0586 15.4392H89.9658Z" fill="#350909"/>
    <path d="M35.4054 0L41.4026 5.9455L38.3215 9.00002L32.3247 3.05409L35.4054 0ZM41.4026 12.0545L44.4833 8.99998L50.481 14.9455L47.3999 18L41.4026 12.0545ZM32.3245 14.9455L38.3217 8.99998L41.4024 12.0545L35.4052 18L32.3245 14.9455ZM50.4811 3.05427L44.4835 8.99976L41.4028 5.94523L47.4 0.000173942L50.4811 3.05427Z" fill="#F7417A"/>
    <path d="M7.15735 0.381195C11.951 0.381195 15.8509 4.24742 15.8509 9.00016C15.8509 11.3052 14.9395 13.4545 13.2849 15.0522C11.6531 16.6273 9.47674 17.4952 7.15735 17.4952H0V0.381195H7.15735ZM7.15735 13.2966C9.65751 13.2966 11.6162 11.4096 11.6162 9.00016C11.6162 6.56246 9.61583 4.57932 7.15735 4.57932H4.23509V13.2966H7.15735ZM17.634 17.3895V0.424781H31.2362V4.33973H21.583V7.38468H30.7974V10.8646H21.583V13.9096H31.2362V17.3895H17.634Z" fill="#43E7FD"/>
  </svg>
)

