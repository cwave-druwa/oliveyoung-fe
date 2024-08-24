import './Footer.css';

const Footer = () => {

    const items = [
        {
          section: "고객센터",
          content: [
            { label: "010-2046-6906", url: "" },
            { label: "09:00-18:00", url: "" },
            { label: "1대1 고객상담", url: "https://www.oliveyoung.co.kr/store/counsel/getFaqList.do?faqLrclCd=99&t_page=%EA%B3%A0%EA%B0%9D%EC%84%BC%ED%84%B0&t_click=FAQ" },
          ],
          noCursor: true
        },
        {
          section: "회사소개",
          content: [
            { label: "회사소개", url: "https://corp.oliveyoung.com/ko" },
            { label: "채용안내", url: "https://career.oliveyoung.com/jobs" },
            { label: "가맹점 개설문의", url: "https://www.oliveyoung.co.kr/store/prvsuser/getPrvsuser.do" },
          ]
        },
        {
          section: "제휴문의",
          content: [
            { label: "상품입점문의", url: "https://oypartner.cj.net/CJOYP/prvsuser/index/index.fo" },
            { label: "제휴문의", url: "https://example.com/partnerships" },
            { label: "매장개설문의", url: "https://example.com/store-open" },
          ]
        },
      ];
      const handleTextClick = (url) => {
        window.location.href = url;
      };

      return (
        <footer className="footer-wrapper">
          <div className="footer-content">
            {items.map((section, index) => (
              <div className="footer-section" key={index}>
                <h3 className="footer-title">{section.section}</h3>
                <ul className="footer-list">
                  {section.content.map((item, index) => (
                    <li 
                      className="footer-item" 
                      key={index} 
                      onClick={() => handleTextClick(item.url)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </footer>
      );
    };

export default Footer;