import { NextRequest, NextResponse } from "next/server";

// 预设客服回复规则（不依赖外部API）
const FAQ_RULES: Record<string, string> = {
  moq: "📦 Our MOQ (Minimum Order Quantity):\n\n• **Smartwatch**: 200 pcs\n• **AI Glasses**: 200 pcs\n\nContact us for pilot-order options! WhatsApp: +852 6733 7121",
  
  price: "💰 **Pricing**:\n\nUnit pricing depends on model, features, and order volume. Contact us for a factory quote tailored to your specs — fill our contact form or WhatsApp us.",
  
  certification: "✅ **Our Certifications**:\n\n• ISO9001 Quality Management\n• CE (European conformity)\n• FCC (US Federal Communications)\n• RoHS (Environmental compliance)\n• REACH (Chemical safety)\n\nAll products meet international B2B standards!",
  
  delivery: "🚚 **Delivery Timeline**:\n\n• **Sample**: 7 days\n• **Mass Production**: 15-25 days\n• **Shipping**: 5-10 days (Air) / 20-40 days (Sea)\n\nFast turnaround for urgent orders available!",
  
  customization: "🎨 **Customization Services**:\n\n• Logo printing (free for MOQ+)\n• Firmware customization\n• Packaging design\n• APP development\n• Exclusive colors\n\nTell us your requirements!",
  
  payment: "💳 **Payment Methods**:\n\n• T/T (Bank Transfer)\n• PayPal (for samples)\n• Western Union\n• Alibaba Trade Assurance\n\n30% deposit, 70% before shipping.",
  
  warranty: "🔧 **Warranty & Support**:\n\n• 1-year warranty\n• Free repair for quality issues\n• Technical support via WhatsApp/Email\n• Replacement parts available\n\nLong-term partnership guaranteed!",
  
  factory: "🏭 **Factory Capacity**:\n\n• 8 SMT production lines\n• 2M+ units/year\n• 200+ skilled workers\n• Located in Shenzhen, China\n\nVisit us for factory tour!",
  
  ai_glasses: "🤖 **AI Glasses Models**:\n\n• **W Ai 4**: ChatGPT Ready, voice assistant (38g ultra-light)\n• **W AI 3**: 8MP camera, video recording, real-time translation\n\nRevolutionary wearable AI technology!",
  
  contact: "📱 **Contact Us**:\n\n• WhatsApp: +852 6733 7121\n• Email: donaldfang@njytech.com.cn\n• Website: microwear.info/contact\n\n24-hour response guaranteed!",
};

const DEFAULT_REPLY = "👋 Hi! I'm Microwear's AI assistant.\n\nI can help with:\n• MOQ & Pricing\n• Certifications\n• Customization\n• Delivery timeline\n• AI Glasses info\n\nAsk me anything! For complex questions, WhatsApp us: +852 6733 7121";

function getReply(message: string): string {
  const lowerMsg = message.toLowerCase();
  
  // 关键词匹配
  if (lowerMsg.includes("moq") || lowerMsg.includes("minimum") || lowerMsg.includes("quantity") || lowerMsg.includes("order quantity")) {
    return FAQ_RULES.moq;
  }
  
  if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("pricing") || lowerMsg.includes("how much")) {
    return FAQ_RULES.price;
  }
  
  if (lowerMsg.includes("certif") || lowerMsg.includes("iso") || lowerMsg.includes("ce") || lowerMsg.includes("fcc") || lowerMsg.includes("quality")) {
    return FAQ_RULES.certification;
  }
  
  if (lowerMsg.includes("delivery") || lowerMsg.includes("ship") || lowerMsg.includes("time") || lowerMsg.includes("how long") || lowerMsg.includes("lead time")) {
    return FAQ_RULES.delivery;
  }
  
  if (lowerMsg.includes("custom") || lowerMsg.includes("logo") || lowerMsg.includes("brand") || lowerMsg.includes("design")) {
    return FAQ_RULES.customization;
  }
  
  if (lowerMsg.includes("pay") || lowerMsg.includes("payment") || lowerMsg.includes("transfer")) {
    return FAQ_RULES.payment;
  }
  
  if (lowerMsg.includes("warranty") || lowerMsg.includes("guarantee") || lowerMsg.includes("support") || lowerMsg.includes("repair")) {
    return FAQ_RULES.warranty;
  }
  
  if (lowerMsg.includes("factory") || lowerMsg.includes("capacity") || lowerMsg.includes("production") || lowerMsg.includes("tour")) {
    return FAQ_RULES.factory;
  }
  
  if (lowerMsg.includes("ai glass") || lowerMsg.includes("smart glass") || lowerMsg.includes("chatgpt") || lowerMsg.includes("w ai")) {
    return FAQ_RULES.ai_glasses;
  }
  
  if (lowerMsg.includes("contact") || lowerMsg.includes("whatsapp") || lowerMsg.includes("email") || lowerMsg.includes("reach")) {
    return FAQ_RULES.contact;
  }
  
  if (lowerMsg.includes("hello") || lowerMsg.includes("hi") || lowerMsg.includes("hey") || lowerMsg.includes("help")) {
    return DEFAULT_REPLY;
  }
  
  // 无法匹配时返回默认回复+引导
  return `${DEFAULT_REPLY}\n\nOr contact our sales expert directly:\n📱 WhatsApp: +852 6733 7121\n📧 Email: donaldfang@njytech.com.cn`;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    const reply = getReply(message || "");
    
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { reply: FAQ_RULES.contact },
      { status: 200 }
    );
  }
}