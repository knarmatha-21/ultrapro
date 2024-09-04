import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="footerBg">
      <div className="footerContentSec">
        <div className="footerGrid">
          <div>
            <img src={FooterLogo} alt="Logo" className="footerLogo" />
            <p className="logoText">
              The Ultrapro Blockchain is a global, decentralized network with
              developers
            </p>
          </div>
          <div>
            <ul className="footerListItems">
              <li className="footerTitle">Explore</li>
              <li>
                <a className="footerList" href="#">
                  UPRO Explorer
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Exchange
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Wallet
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  DeFi
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Payments
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  NFT
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footerListItems">
              <li className="footerTitle">Build</li>
              <li>
                <a className="footerList" href="#">
                  Expo
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Whitepaper
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Token
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Staking
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footerListItems">
              <li className="footerTitle">Community</li>
              <li>
                <a className="footerList" href="#">
                  Save Crypto
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Telegram
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Youtube
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  X
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footerListItems">
              <li className="footerTitle">About</li>
              <li>
                <a className="footerList" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="footerList" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="copyrightSec">
        <p className="copyrightText">© 2024 ultrapro blockchain.info. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
