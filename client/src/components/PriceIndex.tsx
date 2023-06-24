
export const PriceIndex = (): JSX.Element => {
  return (
    <div id="price-conatiner">
      <div className="pasentage-conatiner">
        <div className="pasentage">0.38 %</div>
        <div className="min-div">5 mins</div>
      </div>
      <div className="pasentage-conatiner">
        <div className="pasentage">0.4 %</div>
        <div className="min-div">1 Hour</div>
      </div>
      <div className="bestPrice-div">
        <h1>Best Price to Trade</h1>
        <h3 className="price">
   
        ₹ 24,42,737
        </h3>
        <p>Average BTC/INR not price including commission</p>
      </div>
      <div className="pasentage-conatiner">
        <div className="pasentage">5.34 %</div>
        <div className="min-div">1 Day</div>
      </div>
      <div className="pasentage-conatiner">
        <div className="pasentage">11.13 %</div>
        <div className="min-div">7 Days</div>
      </div>
    </div>
  );
};
