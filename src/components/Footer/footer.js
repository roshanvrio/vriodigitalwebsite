import React from "react";
import './footer.css';
import message from '../../assests/message.png';
import linked from '../../assests/linked.png';
import map from '../../assests/map.png';

const Footer = () => {
    return (
        <div class="card footer">
            <div className="container">
                <div class="row">
                    <div class="col-4 mt-3">
                        <span className="title">
                            <img src={message} alt="" width="15" height="20" class="header-logo" />
                            contact@vriodigital.com
                        </span><br />
                        <span className="title">
                            <img src={linked} alt="" width="15" height="20" class="header-logo" />
                            linkedin.com/vrio-digital
                        </span>
                    </div>


                    <div class="col-3">


                    </div>


                    <div class="col-5 mt-3">
                        <span className="footer-title" onClick={() => {
                            window.open("https://www.google.com/maps/dir//Rd+Number+9,+Opp+Satya+Sai+Hospital,+KIADB+Export+Promotion+Industrial+Area,+Whitefield,+Bengaluru,+Karnataka+560066/@12.9823998,77.6431735,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae11f302ad08ff:0x4a05ebb752f4e5e4!2m2!1d77.7255754!2d12.9824128?entry=ttu")
                        }}>
                            <img src={map} alt="" width="15" height="20" class="header-logo" />
                            BLOCK-G, GOPALAN GLOBAL AXIS, Rd Number 9, opp. Satya Sai Hospital, KIADB Industrial Area, Whitefield, Bengaluru, Karnataka 560066
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;