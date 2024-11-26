import loader from "../../assets/imgs/template/favicon.svg";

const Preloader = () => {
  return (
    <div id="preloader-active">
      <div className="preloader d-flex align-items-center justify-content-center">
        <div className="preloader-inner position-relative">
          <div className="text-center">
            <img className="mb-10" src={loader} alt="Ecom" />
            <div className="preloader-dots"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
