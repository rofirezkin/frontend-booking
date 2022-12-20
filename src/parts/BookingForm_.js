import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm_({ data, itemDetails }) {
  const navigate = useNavigate();
  const startBooking = () => {
    navigate("/checkout");
  };
  return (
    <div className="card bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 text-teal mb-4">
        ${itemDetails.price}{" "}
        <span className="text-gray-500 font-weight-light">
          per {itemDetails.unit}
        </span>
      </h5>

      <label htmlFor="duration">How long you will stay?</label>
      <InputNumber
        max={30}
        suffix={" night"}
        isSuffixPlural
        name="duration"
        value={data?.duration}
      />

      <label htmlFor="date">Pick a date</label>
      <InputDate name="date" value={data?.date} />

      <h6
        className="text-gray-500 font-weight-light"
        style={{ marginBottom: 40 }}
      >
        You will pay{" "}
        <span className="text-gray-900">
          ${itemDetails.price * data?.duration} USD
        </span>{" "}
        per{" "}
        <span className="text-gray-900">
          {data?.duration} {itemDetails?.unit}
        </span>
      </h6>

      <Button
        className="btn"
        hasShadow
        isPrimary
        isBlock
        onClick={startBooking}
      >
        Continue to Book
      </Button>
    </div>
  );
}
