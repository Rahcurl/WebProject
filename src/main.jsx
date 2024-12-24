import { createRoot } from 'react-dom/client'
//import MyComponent from './comp1'
import Xyz from './firstdir/component1'
//1.Class based implementation
//2.Function based implementation
createRoot(document.getElementById('root')).render(
  <div>
    <Xyz/>
  </div>
  
)
