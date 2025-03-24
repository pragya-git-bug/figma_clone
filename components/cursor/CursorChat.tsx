import CursorSVG from '@/public/assets/CursorSVG'
import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      ...cursorState,
      mode: CursorMode.Chat,
      message: e.target.value,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCursorState({
        mode: CursorMode.Chat,
        previousMessage: cursorState.message, // Move current message to previousMessage
        message: '', // Clear input
      });
    } else if (e.key === 'Escape') {
      setCursorState({
        mode: CursorMode.Chat,
        previousMessage: cursorState.previousMessage,
         // Keep previous message
        message: '', // Clear input
      });
    }
  };

  return (
    <div className="absolute top-0 left-0" style={{ transform: `translateX(${cursor?.x || 0}px) translateY(${cursor?.y || 0}px)` }}>
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color="#000" />
          <div className='absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]'>
            {/* Show previous message only if message is empty */}
            {cursorState.previousMessage && !cursorState.message && (
              <div>{cursorState.previousMessage}</div>
            )}
            <input 
              className="z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none" 
              autoFocus={true}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              value={cursorState.message}
              maxLength={50}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CursorChat;
