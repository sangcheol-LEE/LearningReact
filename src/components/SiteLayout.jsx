import React from 'react'

const SiteLayout = ({children, menu = c => null}) => {
   return (
      <div>
         <div>{menu}</div>
         <div>{children}</div>
      </div>
   )
}

export default SiteLayout
