import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "شركة Microwear لتصنيع الساعات الذكية | OEM/ODM",
  description: "شركة Microwear - شركة تصنيع ساعات ذكية معتمدة ISO9001. أسعار الجملة 15-50 دولار، MOQ 200 قطعة. عينات مجانية، توصيل خلال 7-15 يوم. خدمة عملاء باللغة العربية.",
  alternates: {
    canonical: "https://microwear.info/ar/",
  },
};

export default function ArabicLandingPage() {
  return (
    <div dir="rtl" lang="ar" style={{ 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'right'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '80px 24px',
        backgroundColor: '#1a1a1a',
        color: 'white',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '42px', marginBottom: '24px' }}>
          شركة ميكرووير لتصنيع الساعات الذكية
        </h1>
        <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '800px', margin: '0 auto 32px' }}>
          تصنيع OEM/ODM محترف مع 15+ عاماً من الخبرة. معتمد ISO9001، CE، FCC، RoHS
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/contact?subject=استفسار_عربي"
            style={{
              padding: '16px 32px',
              backgroundColor: '#4CAF50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600'
            }}
          >
            احصل على عرض سعر
          </Link>
          <Link 
            href="/products"
            style={{
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600'
            }}
          >
            تصفح المنتجات
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '60px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>
          لماذا تختار ميكرووير؟
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '32px' 
        }}>
          <div style={{ padding: '32px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏭</div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>مصنع مباشر</h3>
            <p style={{ color: '#666' }}>أسعار تنافسية بدون وسطاء</p>
          </div>
          <div style={{ padding: '32px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>شهادات معتمدة</h3>
            <p style={{ color: '#666' }}>CE، FCC، RoHS، ISO9001</p>
          </div>
          <div style={{ padding: '32px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>توصيل سريع</h3>
            <p style={{ color: '#666' }}>7-15 يوم إنتاج، شحن لدول الخليج</p>
          </div>
          <div style={{ padding: '32px', textAlign: 'center', border: '1px solid #e0e0e0', borderRadius: '12px' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>دعم عربي</h3>
            <p style={{ color: '#666' }}>فريق مبيعات يتحدث العربية</p>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section style={{ padding: '60px 24px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '48px' }}>
            منتجاتنا
          </h2>
          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/products"
              style={{
                padding: '16px 48px',
                backgroundColor: '#1a1a1a',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                display: 'inline-block'
              }}
            >
              عرض جميع المنتجات →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: '60px 24px', backgroundColor: '#1a1a1a', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>
          جاهز لبدء طلبك؟
        </h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>
          تواصل معنا اليوم واحصل على عرض سعر خلال 24 ساعة
        </p>
        <Link 
          href="/contact?subject=استفسار_عربي"
          style={{
            padding: '16px 48px',
            backgroundColor: '#4CAF50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px'
          }}
        >
          تواصل معنا الآن
        </Link>
      </section>
    </div>
  );
}
