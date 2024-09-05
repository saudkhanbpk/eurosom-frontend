import React from "react";
import "./BusinessStaff.css";

const BusinessStaff = () => {
  return (
    <div className="mx-lg-4">
      <div className=" container-fluid my-5 pt-5">
        <div className="text-center">
          <h4 className='fw-bold text-dark"'>WHO WE ARE?</h4>
          <h1 className="fw-bolder fs-1 text-primary mb-5">
            Boost Business with IT Staff Augmentation
          </h1>
        </div>

        <div className=" container-fluid ">
          <div className="row gap-lg-4 gap-md-3 gap-3 ms-lg-3  ">
            {/* card 1 start */}
            <div
              className="col-lg-5 col-md-7 rounded-full border d-flex justify-content-between align-items-center p-lg-2 small "
              style={{ background: "rgb(168, 232, 243)" }}
            >
              <div className="col-lg-6 col-md-6 col-sm-6  ">
                <h4 className="fw-bold">Part of ABM Info Tech</h4>
                <p className="fw-bold ">
                  Pakistan's leading provider of technology services and
                  solutions since 1983.lorem lorem lorem lorem lorem Pakistan's
                  leading provider of technology services and solutions since
                  1983.lorem lorem lorem lorem lorem
                </p>
              </div>
              <div className="col-lg-4 col-sm-5">
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023401.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>

            {/* card 1 end  */}

            {/* card 2 start */}

            <div
              className="col-lg-3 col-md-4  rounded-full  border"
              style={{ background: "rgb(250, 230, 223)" }}
            >
              <div className="text-center">
                <h1 className="fw-bold">50+</h1>
                <p className="fw-bold">
                  Highly qualified professionals and accredited resources
                </p>
              </div>
              <div>
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023429.svg"
                  alt=""
                  className="img-fluid"
                  style={{ height: "80px" }}
                />
              </div>
            </div>
            {/* card2 end  */}

            {/* card3 start */}

            <div
              className="col-lg-3 col-md-4 rounded-full  border"
              style={{ background: "rgb(212, 240, 253)" }}
            >
              <div className="text-center">
                <h1 className="fw-bold">50+</h1>
                <p className="fw-bold">
                  Highly qualified professionals and accredited resources
                </p>
              </div>
              <div>
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023429.svg"
                  alt=""
                  className="img-fluid"
                  style={{ height: "80px" }}
                />
              </div>
            </div>
            {/* card 3 end  */}

            {/* card 4 start */}
            <div
              className="col-lg-5 col-md-7 rounded-full border d-flex justify-content-between align-items-center py-lg-4  p-lg-2 small  "
              style={{ background: "rgb(128, 252, 286)" }}
            >
              <div className="col-lg-6 col-md-6 col-sm-6">
                <h4 className="fw-bold">Part of ABM Info Tech</h4>
                <p className="fw-bold">
                  Pakistan's leading provider of technology services and
                  solutions since 1983.Pakistan's leading provider of technology
                  services and solutions since 1983.lorem lorem lorem lorem
                  lorem
                </p>
              </div>
              <div className="col-lg-4 col-sm-5 ">
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023401.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            {/* card 4 end  */}

            {/* card 5 start */}
            <div
              className=" small rounded-full col-lg-6 border d-flex justify-content-between align-items-center p-lg-2 py-lg-4 p-md-5  "
              style={{ background: "rgb(254, 181, 167)" }}
            >
              <div className="col-lg-6 col-md-6 col-sm-6">
                <h4 className="fw-bold">Part of ABM Info Tech</h4>
                <p className="fw-bold">
                  Pakistan's leading provider of technology services and
                  solutions since 1983Pakistan's leading provider of technology
                  services and solutions since 1983.lorem lorem lorem lorem
                  lorem.
                </p>
              </div>
              <div className="col-lg-4 col-sm-5 ">
                <img
                  src="https://api.lucerna-tech.com/storage/stats/Group%2023401.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            {/* card 5 end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStaff;
