
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  { code: "en", name: "English (US)" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "pt", name: "Português (Brasil)" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italiano" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文(简体)" },
  { code: "ja", name: "日本語" },
  { code: "hi", name: "हिन्दी" },
];

const LanguageSelector: React.FC = () => {
  return (
    <div className="w-40">
      <Select defaultValue="en">
        <SelectTrigger className="bg-transparent border-none text-sm focus:ring-0 p-0 h-8">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
