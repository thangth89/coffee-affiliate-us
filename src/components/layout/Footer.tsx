'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer" role="contentinfo">
        <div className="footer-content">
          <div className="footer-column">
            <h4>Về vay24h.pro.vn</h4>
            <p>
              vay24h.pro.vn là website tư vấn tài chính, cung cấp thông tin và đánh giá dịch vụ vay tiền online, mở thẻ tín dụng uy tín tại Việt Nam. Hoạt động từ 2025, chúng tôi giúp người dùng so sánh và chọn giải pháp tài chính phù hợp. Website không trực tiếp cho vay hay phát hành thẻ, mà giới thiệu đối tác đáng tin cậy.
            </p>
          </div>

          <div className="footer-column">
            <h4>Trang thông tin</h4>
            <ul>
              <li><Link href="/gioi-thieu">Giới thiệu vay24.pro.vn</Link></li>
              <li><Link href="/dieu-khoan">Điều khoản sử dụng</Link></li>
              <li><Link href="/chinh-sach">Chính sách bảo mật</Link></li>
              <li><Link href="/lien-he">Liên hệ với chúng tôi</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Mune</h4>
            <ul>
              <li><Link href="/vay-tien-nhanh">Products</Link></li>
              <li><Link href="/the-tin-dung">Blog</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/tin-tuc">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span>© 2025 vay24h.pro.vn All rights reserved.</span>
            <div className="social-links-bottom">
              <a 
                href="https://www.facebook.com/giaiphaptaichinhlinhhoat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-small facebook"
                aria-label="Facebook"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a 
                href="https://www.tiktok.com/@vay24h.pro.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link-small tiktok"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background-color:rgb(9, 24, 39);
          color: #ecf0f1;
          padding: 40px 0 20px;
          margin-top: 0;
        }

        .footer-content {
  	  width: 100%;
  	  padding: 0 40px;
  	  display: grid;
  	  grid-template-columns: 2fr 1fr 1fr;
  	  gap: 40px;
	}

        .footer-column h4 {
          color: #3498db;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          border-bottom: 2px solid #3498db;
          padding-bottom: 8px;
        }

        .footer-column p {
          line-height: 1.6;
          font-size: 16px;
          color: #bdc3c7;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin-bottom: 10px;
        }

        .footer-column ul li a {
          color: #ecf0f1;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-column ul li a:hover {
          color: #3498db;
        }

        .footer-bottom {
          border-top: 1px solid #34495e;
          margin-top: 30px;
          padding-top: 20px;
        }

 	.footer-bottom-content {
  	  width: 100%;
  	  padding: 0 160px;
  	  display: flex;
  	  justify-content: space-between;
  	  align-items: center;
	}

        .footer-bottom-content span {
          font-size: 14px;
          color: #95a5a6;
        }

        .social-links-bottom {
          display: flex;
          gap: 15px;
        }

        .social-link-small {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link-small.facebook {
          background-color: #1877f2;
          color: white;
        }

        .social-link-small.facebook:hover {
          background-color: #166fe5;
          transform: translateY(-2px);
        }

        .social-link-small.tiktok {
          background-color: #000;
          color: white;
        }

        .social-link-small.tiktok:hover {
          background-color: #333;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 30px 0 15px;
          }

          .footer-content {
            padding: 0 15px;
          }

          .footer-column h4 {
            font-size: 16px;
          }

          .footer-column p,
          .footer-column ul li a {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}