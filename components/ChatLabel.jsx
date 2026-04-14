import { assets } from "@/assets/assets"
import Image from "next/image"
import React from "react"

const ChatLabel = ({ openMenu, setOpenMenu, id }) => {

  const isOpen = openMenu === id

  return (
    <div className="flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer relative">
      
      {/* Chat name */}
      <p className="truncate max-w-[75%]">
        Chat Name Here
      </p>

      {/* Menu wrapper (IMPORTANT: separate group) */}
      <div className="relative group/menu">
        
        {/* Three dots button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setOpenMenu(isOpen ? null : id)
          }}
          className="flex items-center justify-center h-7 w-7 rounded-lg transition hover:bg-black/70"
        >
          <Image 
            src={assets.three_dots} 
            alt="menu" 
            className="w-4 opacity-0 group-hover:opacity-100 transition" 
          />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute right-0 top-full mt-2 
          bg-[#1a1a1a] text-white rounded-lg p-2 text-xs 
          shadow-xl z-50 min-w-[140px]
          
          ${isOpen ? "block" : "hidden"}
          group-hover/menu:block`}
        >

          <button className="flex items-center gap-3 w-full hover:bg-white/10 px-3 py-2 rounded-md">
            <Image src={assets.pencil_icon} alt="" className="w-4" />
            Rename
          </button>

          <button className="flex items-center gap-3 w-full hover:bg-red-500/20 px-3 py-2 rounded-md">
            <Image src={assets.delete_icon} alt="" className="w-4" />
            Delete
          </button>

        </div>

      </div>
    </div>
  )
}

export default ChatLabel