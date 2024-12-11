import React from 'react';
import { useChatSettings } from '@/contexts/ChatSettingsContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export function ChatSettingsPanel() {
  const { settings, updateSettings } = useChatSettings();

  return (
    <div className="space-y-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="space-y-2">
        <Label htmlFor="fontSize" className="font-['Noto_Naskh_Arabic']" dir="rtl">حجم الخط</Label>
        <Select
          value={settings.fontSize}
          onValueChange={(value) => updateSettings({ fontSize: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="text-sm">صغير</SelectItem>
            <SelectItem value="text-base">متوسط</SelectItem>
            <SelectItem value="text-lg">كبير</SelectItem>
            <SelectItem value="text-xl">كبير جداً</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fontWeight" className="font-['Noto_Naskh_Arabic']" dir="rtl">سمك الخط</Label>
        <Select
          value={settings.fontWeight}
          onValueChange={(value) => updateSettings({ fontWeight: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="font-normal">عادي</SelectItem>
            <SelectItem value="font-medium">متوسط</SelectItem>
            <SelectItem value="font-semibold">سميك</SelectItem>
            <SelectItem value="font-bold">سميك جداً</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="iconColor" className="font-['Noto_Naskh_Arabic']" dir="rtl">لون الأيقونات</Label>
        <Input
          type="color"
          value={settings.iconColor}
          onChange={(e) => updateSettings({ iconColor: e.target.value })}
          className="h-10 w-full"
        />
      </div>
    </div>
  );
}