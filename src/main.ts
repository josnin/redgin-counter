
// Import stylesheets
import { style2 } from './styles.css';

import('redgin')
  .then(({ injectStyles }) => {

    // inject global styles
    const styles = [
      style2
    ]

    // inject global styles
    injectStyles.push(...styles)
   

    // load component
    import('./counter')

      
  
  })
  .catch((err) => console.log(err))


