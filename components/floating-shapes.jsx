import React from 'react'

const FloatingShapes = () => {
    const shapes = [
        {
            id: 1,
            size: "w-72 h-72",
            positions: "top-20 left-10",
            gradient: "from-blue-500 to-purple-600"
        },
        {
            id: 2,
            size: "w-96 h-96",
            positions: "top-1/3 right-10",
            gradient: "from-cyan-400 to-blue-500"
        },
        {
            id: 3,
            size: "w-64 h-64",
            positions: "bottom-20 left-1/4",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            size: "w-80 h-80",
            positions: "bottom-1/3 right-1/4",
            gradient: "from-green-400 to-cyan-500"
        },

    ]


  return (
    <div> 
      FloatingShapes
    </div>
  )
}

export default FloatingShapes;
