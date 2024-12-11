import React, { createContext, useContext, useState } from 'react';

interface ChatSettings {
  fontSize: string;
  fontWeight: string;
  iconColor: string;
}

interface ChatSettingsContextType {
  settings: ChatSettings;
  updateSettings: (newSettings: Partial<ChatSettings>) => void;
}

const defaultSettings: ChatSettings = {
  fontSize: 'text-base',
  fontWeight: 'font-normal',
  iconColor: '#1B4B8A', // moroccan-blue
};

const ChatSettingsContext = createContext<ChatSettingsContextType | undefined>(undefined);

export function ChatSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<ChatSettings>(defaultSettings);

  const updateSettings = (newSettings: Partial<ChatSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <ChatSettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </ChatSettingsContext.Provider>
  );
}

export function useChatSettings() {
  const context = useContext(ChatSettingsContext);
  if (context === undefined) {
    throw new Error('useChatSettings must be used within a ChatSettingsProvider');
  }
  return context;
}