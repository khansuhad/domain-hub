import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { domainDetails } from "../../../features/domain/domainSlice";

const OffersAndDiscountsCards = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleDetails = () => {
    const discountData = {
      ...data,
      price: (data.price * 0.8).toFixed(2),
    };
    console.log(discountData);
    dispatch(domainDetails(discountData));
    navigate("/domainDetails");
  };
  return (
    <div
      className="card h-72 bg-fourthColor text-primary-content"
      data-aos="fade-down"
    >
      <div className="card-body relative">
        <h2 className="text-3xl font-bold">{data?.name}</h2>
        <p className="text-xl font-semibold">$Price</p>
        <p className="text-md">
          <del>{data?.price}</del> - 20% discount
        </p>
        <p className="text-5xl font-semibold flex items-center my-3">
          {(data?.price * 0.8).toFixed(2)}/
          <span className="text-lg">yearly</span>
        </p>
        <div className="card-actions justify-center">
          <button
            className="block select-none rounded-lg bg-secondColor hover:bg-thirdColor border-b-2 p-2 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-5"
            type="button"
            data-ripple-dark="true"
            onClick={handleDetails}
          >
            {t("showDetails")}
          </button>
        </div>
      </div>
    </div>
  );
};

OffersAndDiscountsCards.propTypes = {
  data: PropTypes.object,
};

export default OffersAndDiscountsCards;
