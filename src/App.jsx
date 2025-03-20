import React from 'react'
import Likes from './components/Likes'
function App() {
  return (
    <div>
<Likes/>
<div>
<h3> Add Comments</h3>
<textarea name="textarea"placeholder='Please Type your Comments here ' id=""></textarea>
</div>
    </div>
  )
}
export default App
