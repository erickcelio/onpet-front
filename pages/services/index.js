import ServicesIndex from "containers/Services";
import React, { useContext } from "react";

const PageContext = React.createContext();

const ServicesIndexPage = () => {
  const services = []

  return (
    <PageContext.Provider value={{ services }}>
      <ServicesIndex />
    </PageContext.Provider>
  )
}

export const useServicesIndexPageController = () => useContext(PageContext);

export default ServicesIndexPage;