import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#099103] ">
      <div id="" className="w-[1200px] mx-auto grid grid-cols-[2fr,1fr]">
        <div className="footer_pos mt-10">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div>
                <img src="http://trasuamoc.com/images/icon_moctrang.png" alt />
                <p>
                  <span style={{ color: "#FFFFFF" }}>
                    &nbsp;
                    <em>
                      <span style={{ fontSize: 16 }}>
                        Tận tâm phục vụ, cam kết chất lượng
                      </span>
                    </em>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    <span style={{ color: "#FFFFFF" }}>
                      <strong>CN1:</strong> 021 Lô K, Cư xá&nbsp;Thanh
                      Đa,&nbsp;phường 27, Q. Bình Thạnh&nbsp;&nbsp;
                    </span>
                    <a href="https://www.google.com/maps/place/Tr%C3%A0+S%E1%BB%AFa+M%E1%BB%99c/@10.8143813,106.7183779,17z/data=!3m1!4b1!4m5!3m4!1s0x3175289e8a3bb3cb:0xf03ac712aa8da768!8m2!3d10.814376!4d106.7205666?hl=vi-VN">
                      <span style={{ color: "#FFFFFF" }}>
                        <img
                          alt
                          src="http://trasuamoc.com/upload/images/BMHD-map.png"
                          style={{ height: 25, width: 32 }}
                        />
                      </span>
                    </a>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    <span style={{ color: "#FFFFFF" }}>
                      <strong>CN2: </strong>16 Thanh Đa,&nbsp;phường 27, Q. Bình
                      Thạnh&nbsp;&nbsp;
                    </span>
                    <a href="https://www.google.com/maps/place/16+Thanh+%C4%90a,+Ph%C6%B0%E1%BB%9Dng+27,+B%C3%ACnh+Th%E1%BA%A1nh,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8143823,106.7193743,17z/data=!3m1!4b1!4m5!3m4!1s0x3175289e6e645645:0x7c3a369922fef7ab!8m2!3d10.814377!4d106.721563?hl=vi-VN">
                      <span style={{ color: "#FFFFFF" }}>
                        <img
                          alt
                          src="http://trasuamoc.com/upload/images/BMHD-map.png"
                          style={{ height: 25, width: 32 }}
                        />
                      </span>
                    </a>
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: 16 }}>
                    <span style={{ color: "#FFFFFF" }}>
                      <strong>CN3</strong>: 100 Đường D5, phường 25, Q. Bình
                      Thạnh&nbsp;&nbsp;
                    </span>
                    <a href="https://www.google.com/maps/place/100+%C4%90%C6%B0%E1%BB%9Dng+D5,+Ph%C6%B0%E1%BB%9Dng+25,+B%C3%ACnh+Th%E1%BA%A1nh,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.8058303,106.7132992,17z/data=!3m1!4b1!4m5!3m4!1s0x317528a397084277:0x42724be97d131095!8m2!3d10.805825!4d106.7154879?hl=vi-VN">
                      <span style={{ color: "#FFFFFF" }}>
                        <img
                          alt
                          src="http://trasuamoc.com/upload/images/BMHD-map.png"
                          style={{ height: 25, width: 32 }}
                        />
                      </span>
                    </a>
                  </span>
                </p>
                <p>
                  <span style={{ color: "#FFFFFF" }}>
                    <span style={{ fontSize: 16 }}>
                      Điện thoại : <strong>0988 373 939</strong>
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ color: "#FFFFFF" }}>
                    <span style={{ fontSize: 16 }}>
                      <strong>Hotline: 098 5551555</strong>
                    </span>
                  </span>
                </p>
                <p>
                  <span style={{ color: "#FFFFFF" }}>
                    <span style={{ fontSize: 16 }}>Website: trasuamoc.com</span>
                    &nbsp;
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bando">
          <div className="content_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.960227178934!2d106.71935821480118!3d10.814355692295825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752961ebd45e9d%3A0x1cee1cc4b3240a6d!2zVHLDoCBT4buvYSBN4buZYw!5e0!3m2!1svi!2s!4v1547014106629"
              width={600}
              height={450}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
