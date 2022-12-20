import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";
import BookingForm_ from "parts/BookingForm_";
import FeaturedImage from "parts/FeaturedImage";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade } from "react-reveal";

import { useParams } from "react-router-dom";
import { fetchPage } from "store/actions/page";
export default function DetailPage_() {
  const page = useSelector((state) => state.page);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log("pagee", page);
  const fnLoadPage = useCallback(async () => {
    console.log("ffsffsfsv hjdhhdv ");
    if (!page[id]) {
      const response = await dispatch(fetchPage(`/detail-page/${id}`, id));
      document.title = `StayCation |  ${response.title}`;
      console.log("ress ponesse ", response);
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fnLoadPage(id);
  }, [id, fnLoadPage]);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  if (!page[id]) return null;

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} />
      <FeaturedImage />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={page[id]} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm_ itemDetails={page[id]} />
            </Fade>
          </div>
        </div>
      </section>

      <Activities data={page[id].activityId} />
      <Testimony data={page[id].testimonial} />
    </>
  );
}
