import React, { useState, useRef, useEffect } from 'react';
import {
  MessageCircle,
  X,
  Send,
  User,
  Mail,
  MoreVertical,
  Trash2,
  Paperclip,
  Image as ImageIcon,
  Download,
  Eye,
} from 'lucide-react';

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

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  chatState: ChatState;
  updateChatState: (updates: Partial<ChatState>) => void;
  onClearHistory: () => void;
}

export function ChatWindow({ isOpen, onClose, chatState, updateChatState, onClearHistory }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatState.messages, isOpen]);

  // Add this useEffect after the existing useEffects in ChatWindow component

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close image modal with Escape key
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }

      // Handle Ctrl+V for paste
      if (e.ctrlKey && e.key === 'v' && chatState.step === 'chat') {
        handlePaste(e);
      }
    };

    const handlePaste = async (e: KeyboardEvent) => {
      try {
        const clipboardItems = await navigator.clipboard.read();
        for (const clipboardItem of clipboardItems) {
          for (const type of clipboardItem.types) {
            if (type.startsWith('image/')) {
              const blob = await clipboardItem.getType(type);
              const file = new File([blob], `pasted-image-${Date.now()}.png`, { type });

              if (file.size > 10 * 1024 * 1024) {
                alert('Pasted image is too large (max 10MB)');
                return;
              }

              handleFileSelect(file);
              break;
            }
          }
        }
      } catch (err) {
        console.log('Paste not supported or no image in clipboard');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, selectedImage, chatState.step]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;

    if (name.trim() && email.trim()) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: `Hello ${name}! Welcome to Mascort support. How can we help you today? Feel free to share any images or files that might help us assist you better.`,
        sender: 'support',
        timestamp: new Date(),
      };

      updateChatState({
        step: 'chat',
        userInfo: { name, email },
        messages: [welcomeMessage],
      });
    }
  };

  const handleFileSelect = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = e => {
        const imageUrl = e.target?.result as string;
        const userMessage: Message = {
          id: Date.now().toString(),
          text: newMessage.trim() || 'Shared an image',
          sender: 'user',
          timestamp: new Date(),
          attachment: {
            type: 'image',
            url: imageUrl,
            name: file.name,
            size: file.size,
          },
        };

        updateChatState({
          messages: [...chatState.messages, userMessage],
        });
        setNewMessage('');

        // Simulate support response
        setIsTyping(true);
        setTimeout(() => {
          const supportMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: 'Thank you for sharing the image! I can see it clearly. Our team will review this and get back to you with the best solution for your needs.',
            sender: 'support',
            timestamp: new Date(),
          };
          updateChatState({
            messages: [...chatState.messages, userMessage, supportMessage],
          });
          setIsTyping(false);
        }, 2000);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file (PNG, JPG, GIF, etc.)');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'user',
        timestamp: new Date(),
      };

      updateChatState({
        messages: [...chatState.messages, userMessage],
      });
      setNewMessage('');

      // Simulate support response
      setIsTyping(true);
      setTimeout(() => {
        const supportMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Thank you for your message! Our team will get back to you shortly. In the meantime, feel free to browse our services or ask any questions.',
          sender: 'support',
          timestamp: new Date(),
        };
        updateChatState({
          messages: [...chatState.messages, userMessage, supportMessage],
        });
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));

    if (imageFile) {
      handleFileSelect(imageFile);
    }
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear all chat history?')) {
      onClearHistory();
      setShowMenu(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const messageDate = new Date(date);

    if (messageDate.toDateString() === today.toDateString()) {
      return 'Today';
    }

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (messageDate.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }

    return messageDate.toLocaleDateString();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="w-80 h-96 bg-black/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden chat-window-shadow">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Mascort Support</h3>
              {chatState.step === 'chat' && chatState.userInfo.name ? (
                <p className="text-white/80 text-xs">Hi, {chatState.userInfo.name}!</p>
              ) : (
                <p className="text-white/80 text-xs">We're here to help!</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {chatState.step === 'chat' && (
              <div className="relative">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded"
                >
                  <MoreVertical size={16} />
                </button>

                {showMenu && (
                  <div className="absolute right-0 top-8 bg-black/90 backdrop-blur-sm border border-white/20 rounded-lg py-2 min-w-[120px] z-10">
                    <button
                      onClick={handleClearHistory}
                      className="w-full px-3 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
                    >
                      <Trash2 size={14} />
                      Clear History
                    </button>
                  </div>
                )}
              </div>
            )}

            <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col min-h-0">
          {chatState.step === 'form' ? (
            /* Contact Form */
            <div className="p-4 flex-1 flex flex-col justify-center">
              <div className="text-center mb-4">
                <h4 className="text-white font-semibold mb-2">Let's get started!</h4>
                <p className="text-gray-400 text-sm">Please provide your details to begin chatting</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    <User size={14} className="inline mr-1" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={chatState.userInfo.name}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm mb-2">
                    <Mail size={14} className="inline mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={chatState.userInfo.email}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                >
                  {chatState.messages.length > 0 ? 'Continue Chat' : 'Start Chat'}
                </button>
              </form>
            </div>
          ) : (
            /* Chat Interface */
            <>
              {/* Messages */}
              <div
                ref={messagesContainerRef}
                className={`flex-1 p-4 overflow-y-auto space-y-3 chat-messages ${
                  dragOver ? 'bg-purple-500/10 border-2 border-dashed border-purple-400' : ''
                }`}
                style={{ maxHeight: 'calc(100% - 60px)' }}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {dragOver && (
                  <div className="absolute inset-4 flex items-center justify-center bg-purple-500/20 rounded-lg border-2 border-dashed border-purple-400 z-10">
                    <div className="text-center text-white">
                      <ImageIcon size={48} className="mx-auto mb-2 text-purple-400" />
                      <p className="font-semibold">Drop image here to share</p>
                      <p className="text-sm text-gray-300">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                )}

                {chatState.messages.map((message, index) => {
                  const showDate =
                    index === 0 ||
                    formatDate(message.timestamp) !== formatDate(chatState.messages[index - 1].timestamp);

                  return (
                    <div key={message.id}>
                      {showDate && (
                        <div className="text-center my-4">
                          <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                            {formatDate(message.timestamp)}
                          </span>
                        </div>
                      )}

                      <div
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} chat-message`}
                      >
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                              : 'bg-white/10 text-gray-200'
                          }`}
                        >
                          {/* Message Text */}
                          <p className="text-sm mb-2">{message.text}</p>

                          {/* Attachment */}
                          {message.attachment && message.attachment.type === 'image' && (
                            <div className="mt-2">
                              <div className="relative group">
                                <img
                                  src={message.attachment.url}
                                  alt={message.attachment.name}
                                  className="max-w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                  style={{ maxHeight: '200px' }}
                                  onClick={() => setSelectedImage(message.attachment!.url)}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                                  <Eye size={24} className="text-white" />
                                </div>
                              </div>
                              <div className="flex items-center justify-between mt-2 text-xs opacity-75">
                                <span>{message.attachment.name}</span>
                                <span>{formatFileSize(message.attachment.size)}</span>
                              </div>
                            </div>
                          )}

                          <p
                            className={`text-xs mt-1 chat-timestamp ${
                              message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/10">
                <form onSubmit={handleSendMessage} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={e => setNewMessage(e.target.value)}
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 text-sm"
                      placeholder="Type your message..."
                      disabled={isTyping}
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-all duration-300 border border-white/20 hover:border-purple-400/50"
                      disabled={isTyping}
                      title="Attach image"
                    >
                      <Paperclip size={16} />
                    </button>
                    <button
                      type="submit"
                      disabled={isTyping || !newMessage.trim()}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={16} />
                    </button>
                  </div>

                  {/* File size info */}
                  <div className="text-xs text-gray-500 text-center">
                    💡 You can drag & drop images or click 📎 to attach files (max 10MB)
                  </div>
                </form>

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 10 * 1024 * 1024) {
                        // 10MB limit
                        alert('File size must be less than 10MB');
                        return;
                      }
                      handleFileSelect(file);
                    }
                  }}
                  className="hidden"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Click outside to close menu */}
      {showMenu && <div className="fixed inset-0 z-0" onClick={() => setShowMenu(false)} />}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            <img src={selectedImage} alt="Full size image" className="w-full h-full object-contain rounded-lg" />
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center justify-between text-white">
                <span className="text-sm">Click outside or press ESC to close</span>
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = selectedImage;
                    link.download = 'image.png';
                    link.click();
                  }}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded-lg text-sm transition-colors"
                >
                  <Download size={14} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
