import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MainContainer, PageHeading } from "../Components/Styles/Global.style";
import pageNotFound from "../img/404.jpg"

const PageNotFound = () => {

    const navigator = useNavigate();

    const goToHome = () => {
        navigator("/");
    }
  return (
    <>
      <PageHeading>Page not found</PageHeading>
      <MainContainer bg>
              <img className="pageNotFound" src={pageNotFound} alt="" onClick={ goToHome } />
      </MainContainer>
    </>
  );
};

export default PageNotFound;
