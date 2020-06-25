import React from "react";
import benefitsImg from "../../../../assets/imgs/benefits.jpg";
import classes from "./Benefits.module.css";

function MiddleSection() {
  const {
    Container,
    ContentWrapper,
    MainContent,
    BenefitsOne,
    BenefitsTwo,
    ImgContainer,
  } = classes;

  return (
    <section className={Container}>
      <div className={ImgContainer}></div>
      <aside className={ContentWrapper}>
        <div className={MainContent}>
          <h2>
            How our products <br />
            benefits your health
          </h2>
          <p>
            Our food doesn’t just taste good, it’s also made to benefit your
            everyday life! Every products have perfect balance of vitammins and
            other nutrientsd to fulfill your health needs.
          </p>
        </div>
        <div className={BenefitsOne}>
          <div>
            <h3>More energy</h3>
            <p>
              Our food contains low-glycemic carbs and protein-rich ingredients
              to promote even energy burn. No sugar spikes!
            </p>
          </div>
          <div>
            <h3>More focus</h3>
            <p>
              We use healthy fats & omega fatty acids to fuel your brain,
              combatting stress and balancing hormones.
            </p>
          </div>
        </div>
        <div className={BenefitsTwo}>
          <div>
            <h3>Less bloat</h3>
            <p>
              We use high-fiber, low-sodium foods to reduce inflammation and
              promote blood flow to your digestive system.
            </p>
          </div>
          <div>
            <h3>Clearer skin</h3>
            <p>
              Our products are low in sugar and rich in antioxidants, biotin &
              beta-carotenes to hydrate skin and slow aging.
            </p>
          </div>
        </div>
      </aside>
    </section>
  );
}

export default MiddleSection;
