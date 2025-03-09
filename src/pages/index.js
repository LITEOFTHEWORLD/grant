// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

//test new js

// Import required CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";

export default function Home() {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });

    // Initialize Bootstrap JS (if needed)
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }

    setInitialized(true);

    // Notification bar logic
    const showNotification = () => {
      const notificationBar = document.getElementById("notificationBar");
      const notificationText = document.getElementById("notificationText");
      const notificationTime = document.getElementById("notificationTime");

      if (notificationBar && notificationText && notificationTime) {
        const messages = [
          "Chioma J. from Lagos just claimed ₦450,000",
          "Adebayo T. from Abuja just claimed ₦350,000",
          "Ngozi E. from Port Harcourt just claimed ₦500,000",
          "Emeka O. from Enugu just claimed ₦400,000",
          "Funmi L. from Ibadan just claimed ₦380,000",
        ];

        const randomMessage =
          messages[Math.floor(Math.random() * messages.length)];
        notificationText.textContent = randomMessage;

        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, "0");
        const minutes = currentTime.getMinutes().toString().padStart(2, "0");
        notificationTime.textContent = `${hours}:${minutes} - Just Now`;

        notificationBar.classList.add("visible");

        setTimeout(() => {
          notificationBar.classList.remove("visible");
        }, 5000);
      }
    };

    // Success badge logic
    const showSuccessBadge = () => {
      const successBadge = document.getElementById("successBadge");
      const successText = document.getElementById("successText");

      if (successBadge && successText) {
        const names = [
          "Chioma J.",
          "Adebayo T.",
          "Ngozi E.",
          "Emeka O.",
          "Funmi L.",
        ];

        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAmount = Math.floor(Math.random() * 200 + 300) * 1000;

        successText.textContent = `${randomName} got ₦${randomAmount.toLocaleString()}`;
        successBadge.style.display = "block";

        setTimeout(() => {
          successBadge.style.display = "none";
        }, 4000);
      }
    };

    // Set intervals for notifications
    const notificationInterval = setInterval(showNotification, 12000);
    const successBadgeInterval = setInterval(showSuccessBadge, 20000);

    // Show initial notification after 5 seconds
    const initialNotification = setTimeout(showNotification, 5000);

    // Cleanup function
    return () => {
      clearInterval(notificationInterval);
      clearInterval(successBadgeInterval);
      clearTimeout(initialNotification);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>🚀 Claim Your Grant Today - Elevate Your Future!</title>
        <meta
          name="description"
          content="Unlock grant opportunities. Fast, modern, and designed for Nigerian success stories. Apply now!"
        />
        <meta
          name="keywords"
          content="Grant, Funding, Nigeria, Opportunity, Business, Innovation"
        />

        {/* Google fonts will be loaded via _document.js */}
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '530493806068078');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=530493806068078&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </Head>

      {/* Notification Bar */}
      <div className="notification-bar" id="notificationBar">
        <div className="notification-text" id="notificationText">
          {/* Notification message content */}
        </div>
        <div className="notification-time" id="notificationTime"></div>
      </div>

      {/* Top Banner */}
      <div className="top-banner changing2" data-aos="slide-in-down">
        🚨 ALERT: Additional ₦100,000 bonus for next 50 approved applications!
        🚨
      </div>

      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-up">
        <div className="hero-pattern" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <span className="badge bg-danger mb-3">LIMITED TIME OFFER</span>
              <h1 className="display-4 fw-bold mb-4 changing">
                Claim Your Grant Worth Up To
              </h1>
              <div className="money-text mb-4">₦1,000,000</div>
              <p className="lead mb-4">
                ✓ No Repayment Required ✓ Fast &amp; Secure Approval ✓ Trusted
                by Thousands of Nigerians
              </p>
              <p className="mb-4">
                Whether you're launching a startup or expanding your business,
                our hassle-free process ensures you get the financial support
                you need to succeed.
              </p>
              <div className="offer-box" data-aos="zoom-in">
                <div className="live-counter">
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="live-dot" />
                    <span className="text-danger fw-bold">
                      <span id="viewersCount" />
                      2345 people viewing this offer
                    </span>
                  </div>
                </div>
                <div className="timer-container">
                  <h4 className="text-center mb-3">Offer Expires In:</h4>
                  <div className="d-flex justify-content-center gap-3">
                    <div className="timer-box">
                      <p className="timer-value" id="hours">
                        23
                      </p>
                      <small>Hours</small>
                    </div>
                    <div className="timer-box">
                      <p className="timer-value" id="minutes">
                        13
                      </p>
                      <small>Minutes</small>
                    </div>
                    <div className="timer-box">
                      <p className="timer-value" id="seconds">
                        02
                      </p>
                      <small>Seconds</small>
                    </div>
                  </div>
                </div>
                <button
                  onclick="applyNowSection2(this)"
                  className="cta-button w-100 actionbtn"
                  data-aos="fade-up"
                  data-original-text="Claim Your Grant Now! <i class='fas fa-arrow-right ms-2'></i>"
                >
                  Claim Your Grant Now!{" "}
                  <i className="fas fa-arrow-right ms-2" />
                </button>
                <p className="text-center text-white-50 mt-3">
                  <i className="fas fa-lock me-1" /> Safe &amp; Secure
                  Application Process
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-slider">
        <div className="container">
          <h2 className="testimonial-title" data-aos="fade-up">
            Recent Success Stories
          </h2>

          {initialized && (
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={3}
              centeredSlides={false}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              speed={1000}
            >
              <SwiperSlide>
                <div
                  style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 15px 25px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0px 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#f8f9fa",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                    }}
                  >
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", color: "#007bff" }}
                    ></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "5px",
                    }}
                  >
                    Chinedu Okafor
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#28a745",
                      marginBottom: "10px",
                    }}
                  >
                    Received: ₦950,000
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    "Application approved in just 6 hours! I was skeptical at
                    first, but the process was incredibly smooth and fast..."
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 15px 25px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0px 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#f8f9fa",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                    }}
                  >
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", color: "#007bff" }}
                    ></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "5px",
                    }}
                  >
                    Ijeoma Nduka
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#28a745",
                      marginBottom: "10px",
                    }}
                  >
                    Received: ₦530,000
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    The entire process was seamless, and I was genuinely
                    surprised at how quickly everything was handled. I received
                    my grant without any stress, and it has significantly
                    boosted my business growth. I was able to scale up, hire
                    additional staff, and improve my services. Thank you for
                    this life-changing opportunity!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 15px 25px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0px 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#f8f9fa",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                    }}
                  >
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", color: "#007bff" }}
                    ></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "5px",
                    }}
                  >
                    Yakubu Sulaiman
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#28a745",
                      marginBottom: "10px",
                    }}
                  >
                    Received: ₦590,000
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    The best part about this grant was how simple the process
                    was. No complicated paperwork, no unnecessary delays. Just a
                    straightforward application and quick approval. The funds
                    helped me open a second location, and I couldn't be happier!
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  style={{
                    background: "#fff",
                    padding: "25px",
                    borderRadius: "15px",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    textAlign: "center",
                    border: "1px solid #ddd",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px)";
                    e.currentTarget.style.boxShadow =
                      "0px 15px 25px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0px 10px 20px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#f8f9fa",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 15px",
                    }}
                  >
                    <i
                      className="fas fa-user-circle"
                      style={{ fontSize: "30px", color: "#007bff" }}
                    ></i>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "5px",
                    }}
                  >
                    Chika Adebayo
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#28a745",
                      marginBottom: "10px",
                    }}
                  >
                    Received: ₦750,000
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: "1.5",
                    }}
                  >
                    This grant has been a lifesaver for me. As a small business
                    owner, getting access to funding can be difficult, but this
                    opportunity made it easy. I received my grant, expanded my
                    operations, and I am seeing amazing results already. Thank
                    you for this great initiative!
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2
            className="how-it-works-title"
            data-aos="fade-up"
            style={{ textAlign: "center", padding: "40px 0" }}
          >
            How It Works
          </h2>

          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="step-card">
                <div className="step-icon">
                  <i
                    className="fas fa-edit"
                    style={{ fontSize: "3rem", padding: "10px" }}
                  ></i>
                </div>
                <h5>Simple Application</h5>
                <p>Fill out our 2-minute form easily and securely.</p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="step-card">
                <div className="step-icon">
                  <i
                    className="fas fa-check-circle"
                    style={{ fontSize: "3rem", padding: "10px" }}
                  ></i>
                </div>
                <h5>Instant Eligibility</h5>
                <p>
                  Get an instant eligibility check and quick approval
                  notification.
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
              <div className="step-card">
                <div className="step-icon">
                  <i
                    className="fas fa-money-bill-wave"
                    style={{ fontSize: "3rem", padding: "10px" }}
                  ></i>
                </div>
                <h5>Fast Fund Transfer</h5>
                <p>
                  Receive your funds within 24-48 hours directly to your
                  account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="final-cta-section"
        style={{
          marginTop: "60px",
          backgroundColor: "#ebeef2",
          color: "black",
          padding: "30px",
        }}
      >
        <div className="container">
          <h2
            className="final-cta-title"
            data-aos="fade-up"
            style={{
              textAlign: "center",

              padding: "10px",
            }}
          >
            Don't Miss This Limited-Time Opportunity
          </h2>
          <p
            className="final-cta-desc"
            data-aos="fade-up"
            data-aos-delay="200"
            style={{ textAlign: "center", padding: "20px" }}
          >
            Join thousands of successful Nigerians who have already transformed
            their lives with our grant program.
          </p>

          <br />
          <div
            style={{ textAlign: "center", margin: "20px", padding: "0 40px" }}
          >
            <button
              className="cta-button actionbtn"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Start Your Application Now
            </button>
          </div>

          <p
            className="final-cta-limited-text"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <i className="fas fa-exclamation-circle"></i> Limited spots
            available. Application window closing soon.
          </p>
        </div>
      </section>

      {/* Success Notification Badge */}
      <div
        className="success-badge"
        id="successBadge"
        style={{ display: "none" }}
      >
        <div className="d-flex align-items-center">
          <i className="fas fa-badge-check success-icon"></i>
          <div>
            <p className="success-title">Recent Approval!</p>
            <p className="success-text" id="successText"></p>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky-cta">
        <i className="fas fa-hand-point-up sticky-cta-icon"></i>
        <span className="sticky-cta-text">Apply Now</span>
      </div>

      <style jsx global>
        {`
          :root {
            --primary: #00c853;
            --secondary: #2962ff;
            --accent: #ff3d00;
            --dark: #1a237e;
            --light: #f5f5f5;
          }

          body {
            font-family: "Poppins", sans-serif;
            background: #ffffff;
            margin-bottom: 0;
          }

          .top-banner {
            background: var(--accent);
            color: white;
            padding: 8px 0;
            font-weight: 600;
            animation: pulse 2s infinite;
            text-align: center;
          }

          /* --- Notification Bar Styles  --- */
          .notification-bar {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            max-width: 500px;
            width: 90%;
            background-color: #f0f8ff;
            color: var(--dark);
            padding: 10px 20px;
            text-align: center;
            font-weight: 500;
            font-size: 1rem;
            z-index: 9998;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.5s, visibility 0.5s;
          }

          .notification-bar.visible {
            opacity: 1;
            visibility: visible;
            animation: slideInFadeOut 5s ease-in-out forwards;
          }

          .notification-time {
            display: block;
            font-size: 0.8rem;
            color: #777;
            margin-top: 5px;
          }

          @keyframes slideInFadeOut {
            0% {
              opacity: 0;
              transform: translateX(-50%) translateY(-20px);
            }
            10% {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
            90% {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
            100% {
              opacity: 0;
              transform: translateX(-50%) translateY(-20px);
            }
          }

          @media (max-width: 576px) {
            .notification-bar {
              font-size: 0.9rem;
              padding: 8px 15px;
            }
          }

          .hero-section {
            background: linear-gradient(135deg, var(--dark) 0%, #000051 100%);
            color: white;
            padding: 4rem 0;
            position: relative;
            width: 100%;
            overflow: hidden;
          }

          .hero-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }

          .money-text {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--primary);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            animation: scale 3s infinite;
          }

          .offer-box {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            border: 2px solid rgba(255, 255, 255, 0.1);
            margin-top: 2rem;
          }

          .cta-button {
            background: var(--primary);
            color: white;
            border: none;
            padding: 1.5rem 3rem;
            font-size: 1.5rem;
            font-weight: 700;
            border-radius: 50px;
            text-transform: uppercase;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 10px 20px rgba(0, 200, 83, 0.3);
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(0, 200, 83, 0.4);
            background: #00e676;
          }

          .cta-button::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: -100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            animation: shine 3s infinite;
          }

          .timer-container {
            background: var(--accent);
            color: white;
            padding: 1.5rem;
            border-radius: 15px;
            margin: 2rem 0;
          }

          .timer-box {
            background: rgba(0, 0, 0, 0.2);
            padding: 1rem;
            border-radius: 10px;
            text-align: center;
            min-width: 80px;
          }

          .timer-value {
            font-size: 2rem;
            font-weight: 700;
            margin: 0;
            line-height: 1;
          }

          .live-counter {
            background: white;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
          }

          .benefit-card {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            margin: 1rem 0;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .benefit-card:hover {
            transform: translateY(-5px);
          }

          .testimonial-slider {
            background: var(--light);
            padding: 4rem 0;
          }

          .success-badge {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: white;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
          }

          .sticky-cta {
            position: fixed;
            bottom: 15px;
            left: 0;
            width: 100%;
            background: var(--primary);
            padding: 15px;
            box-shadow: 0 -5px 10px rgba(0, 200, 83, 0.3);
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            cursor: pointer;
            transform: none;
          }
          .sticky-cta span {
            color: white;
            font-size: 1.2rem;
            font-weight: 700;
          }
          .sticky-cta i {
            color: white;
            font-size: 1.5rem;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes scale {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes shine {
            0% {
              left: -100%;
            }
            20% {
              left: 100%;
            }
            100% {
              left: 100%;
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .check-mark {
            color: var(--primary);
            margin-right: 10px;
          }

          .eligibility-list {
            list-style: none;
            padding: 0;
          }

          .eligibility-list li {
            padding: 10px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }

          .live-dot {
            display: inline-block;
            width: 10px;
            height: 10px;
            background: var(--accent);
            border-radius: 50%;
            margin-right: 5px;
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          .how-it-works {
            background: #ffffff;
          }
          .how-it-works i {
            color: var(--primary);
          }

          @media (max-width: 768px) {
            .hero-section {
              padding: 2rem 0;
            }
            .money-text {
              font-size: 2.5rem;
            }
            .cta-button {
              font-size: 1.2rem;
              padding: 1rem 2rem;
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              padding: 1rem 0;
            }
            .money-text {
              font-size: 2rem;
            }
            .cta-button {
              font-size: 1rem;
              padding: 0.8rem 1.5rem;
            }
            .sticky-cta {
              padding: 10px;
            }
            .sticky-cta span {
              font-size: 1rem;
            }
            .sticky-cta i {
              font-size: 1.2rem;
            }
          }

          .changing {
          }
          .changing2 {
          }
          .actionbtn {
          }
        `}
      </style>
    </>
  );
}
