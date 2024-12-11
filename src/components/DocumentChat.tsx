import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageSquare, Send, FileText, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "./ui/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const examplePrompts = [
  "كيفية استخراج البطاقة الوطنية للتعريف الإلكترونية؟",
  "ما هي الوثائق المطلوبة للحصول على جواز السفر؟",
  "كيف يمكنني الحصول على رخصة السياقة؟",
  "ما هي خطوات استخراج عقد الازدياد؟"
];

export function DocumentChat() {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !apiKey) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch('https://gptmodelbargain.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2024-08-01-preview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `You are an Arabic-speaking assistant specialized in guiding users through the process of obtaining various Moroccan government documents. 
              
              IMPORTANT RULES:
              1. ALWAYS respond in Arabic, regardless of the language used in the question
              2. ONLY respond if the question is related to Moroccan government documents, procedures, or administrative processes. If the question is not related, respond with: "عذراً، يمكنني فقط المساعدة في الأسئلة المتعلقة بالوثائق والإجراءات الإدارية المغربية."
              3. When mentioning icons, use the exact names from this list wrapped in double curly braces: {{check}}, {{info}}, {{alert-circle}}, {{link}}, {{clock}}, {{calendar}}, {{map-pin}}, {{document}}, {{file-text}}, {{user}}
              4. For EVERY document and step, you MUST specify WHERE it can be obtained or completed using the {{map-pin}} icon, including:
                 - The exact office or authority name
                 - The type of office (municipality, police station, etc.)
                 - If available online, include the website link
              5. ALWAYS include relevant official links using the {{link}} icon, such as:
                 - Official government portals
                 - Online application systems
                 - Document verification services
                 - Appointment booking systems
                 Format links as: {{link}} [الرابط الرسمي](https://example.com)
              
              Your responses should be clear, informative, and structured in a newsletter-style format with:
              - Bullet points
              - Icons (using the names above)
              - Clear headings
              - Links to official portals when available
              - Specific locations for each document and step
              
              You will provide:
              1. Detailed steps with locations
              2. Required documents and where to obtain them
              3. Timeframes
              4. Locations and office types
              5. Additional notes
              6. Relevant official links and portals
              
              Example location and link format:
              {{map-pin}} يمكن الحصول على هذه الوثيقة من:
              - مقر البلدية في حي [اسم الحي]
              - مركز الشرطة في [المنطقة]
              - عبر البوابة الإلكترونية: {{link}} [البوابة الرقمية](https://www.service-public.ma)
              
              Your language should be friendly, concise, and professional.`
            },
            ...messages,
            userMessage
          ],
          max_tokens: 800,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      if (data.choices && data.choices[0]) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }]);
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 min-h-[600px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-moroccan-blue text-white ml-4'
                        : 'bg-moroccan-sand/20 text-moroccan-charcoal mr-4'
                    }`}
                    dir="rtl"
                  >
                    {message.role === 'user' ? (
                      <div className="flex items-start gap-2">
                        <FileText className="h-5 w-5" />
                        <p className="whitespace-pre-wrap font-['Noto_Naskh_Arabic']">{message.content}</p>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap font-['Noto_Naskh_Arabic']" 
                           dangerouslySetInnerHTML={{ __html: message.content }} />
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-moroccan-sand/20 text-moroccan-charcoal p-4 rounded-lg mr-4">
                    <p className="font-['Noto_Naskh_Arabic']">جاري التحميل...</p>
                  </div>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === 'ar' ? 'اكتب سؤالك هنا...' : 'Écrivez votre question ici...'}
                className="flex-1 font-['Noto_Naskh_Arabic']"
                dir="rtl"
              />
              <Button 
                type="submit" 
                className="bg-moroccan-blue hover:bg-moroccan-blue/90"
                disabled={!apiKey || isLoading}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-moroccan-blue font-['Noto_Naskh_Arabic']" dir="rtl">
              <AlertTriangle className="inline-block h-5 w-5 ml-2" />
              مفتاح API
            </h3>
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="أدخل مفتاح API الخاص بك"
              className="font-['Noto_Naskh_Arabic']"
              dir="rtl"
            />
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4 text-moroccan-blue font-['Noto_Naskh_Arabic']" dir="rtl">
              <MessageSquare className="inline-block h-5 w-5 ml-2" />
              أمثلة على الأسئلة
            </h3>
            <div className="space-y-3">
              {examplePrompts.map((prompt, index) => (
                <div
                  key={index}
                  className="p-3 bg-moroccan-sand/10 rounded-lg cursor-pointer hover:bg-moroccan-sand/20 transition-colors"
                  onClick={() => setInput(prompt)}
                >
                  <p className="text-moroccan-charcoal font-['Noto_Naskh_Arabic']" dir="rtl">
                    <FileText className="inline-block h-4 w-4 ml-2" />
                    {prompt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};