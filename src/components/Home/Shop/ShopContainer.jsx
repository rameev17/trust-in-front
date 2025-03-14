import React, { useState } from "react";
import { useGetShop } from "../../../api/shop";
import OrderModal from "./OrderModal";
import { useTranslation } from "react-i18next";
import ShopCarousel from "./ShopCarousel";

const ShopContainer = () => {
  const [isOpen, setIsOpen] = useState();
  const [selectedItem, setSelectedItem] = useState();

  const { t } = useTranslation();

  const { data } = useGetShop();
  return (
    <div className="main-page-wrapper">
      <div className="header">
        <h1 className="title primary-color">{t("shop_title")}</h1>
      </div>
      {(!data?.length || !data) && (
        <p className="description description-color">{t("shop_empty")}</p>
      )}

      <ShopCarousel
        data={data}
        setSelectedItem={setSelectedItem}
        setIsOpen={setIsOpen}
      />

      <OrderModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedItem={selectedItem}
      />
    </div>
  );
};

export default ShopContainer;
