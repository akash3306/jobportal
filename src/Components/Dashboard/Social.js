import React from 'react'

const Social = () => {
  return (
   <div className="social">
    <form >
        <div className="inputs">
          <label>Twitter</label>
          <input
            type="text"
            placeholder="https://twitter.com/user "
          />

          <label>Facebook</label>
          <input
            type="text"
            placeholder="https://facebook.com/user "
          />

          <label>Instagram</label>
          <input type="text" 
           placeholder="https://instagram.com/user" />

          <label>Linkedln</label>
          <input type="text" 
           placeholder="https://linkedln.com/user"/>
        </div>
      </form>
   </div>
  )
}

export default Social
