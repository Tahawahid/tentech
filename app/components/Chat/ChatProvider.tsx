import React, { useState, useEffect } from 'react';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
  attachment?: {
    type: 'image';
    url: string;
    name: string;
    size: number;
  };
}

interface ChatState {
  isOpen: boolean;
  step: 'form' | 'chat';
  userInfo: { name: string; email: string };
  messages: Message[];
}

const CHAT_STORAGE_KEY = 'mascort_chat_state';

export function ChatProvider() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    step: 'form',
    userInfo: { name: '', email: '' },
    messages: [],
  });

  // Load chat state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem(CHAT_STORAGE_KEY);
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsed.messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setChatState({
          ...parsed,
          messages: messagesWithDates,
          isOpen: false, // Always start closed on page load
        });
      } catch (error) {
        console.error('Error loading chat state:', error);
      }
    }
  }, []);

  // Save chat state to localStorage whenever it changes
  useEffect(() => {
    if (chatState.step === 'chat' || chatState.messages.length > 0) {
      // Create a serializable version of the state
      const serializableState = {
        ...chatState,
        messages: chatState.messages.map(msg => ({
          ...msg,
          timestamp: msg.timestamp.toISOString(),
        })),
      };
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(serializableState));
    }
  }, [chatState]);

  const toggleChat = () => {
    setChatState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const closeChat = () => {
    setChatState(prev => ({ ...prev, isOpen: false }));
  };

  const updateChatState = (updates: Partial<ChatState>) => {
    setChatState(prev => ({ ...prev, ...updates }));
  };

  const clearChatHistory = () => {
    setChatState({
      isOpen: false,
      step: 'form',
      userInfo: { name: '', email: '' },
      messages: [],
    });
    localStorage.removeItem(CHAT_STORAGE_KEY);
  };

  // Check for unread messages (messages from support that user hasn't seen)
  const hasUnreadMessages =
    chatState.messages.length > 0 &&
    chatState.step === 'chat' &&
    chatState.messages[chatState.messages.length - 1]?.sender === 'support';

  return (
    <>
      {!chatState.isOpen && <ChatButton onClick={toggleChat} hasUnreadMessages={hasUnreadMessages} />}
      <ChatWindow
        isOpen={chatState.isOpen}
        onClose={closeChat}
        chatState={chatState}
        updateChatState={updateChatState}
        onClearHistory={clearChatHistory}
      />
    </>
  );
}
