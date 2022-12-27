import React from 'react'
import Color from './Color';

const ColorList = ({ colors=[], onRemoverColor = f => f }) => {
   console.log(colors.colors)
   console.log("length",colors.length)

   if(!colors.colors?.length) return <div>표시할 색이 없습니다.</div>
   return (
      <div>
         {
            colors.colors?.map(color => (<Color onRemove={onRemoverColor} key={color.id} {...color}/>))
         }
      </div>
   )
}

export default ColorList
