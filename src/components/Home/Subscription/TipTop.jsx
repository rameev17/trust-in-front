import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TEXT_COLORS } from "../../../helper/constants";
import styled from "styled-components";

const TipTopRecurringPayment = ({
  amount,
  accountId,
  label,
  email,
  disabled,
  setIsOpenModal,
}) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.tiptoppay.kz/bundles/widget.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const generateInvoiceId = () => {
    return "inv_" + Math.random().toString(36).substring(2, 10);
  };

  const handlePay = () => {
    if (!scriptLoaded || !window.tiptop) return;

    const widget = new window.tiptop.Widget();

    const invoiceId = generateInvoiceId();

    const receipt = {
      Items: [
        {
          label: label || "Наименование товара",
          price: amount,
          quantity: 1,
          amount: amount,
          vat: 0,
          method: 0,
          object: 0,
        },
      ],
      taxationSystem: 0,
      email: email || "",
      phone: "",
      isBso: false,
      amounts: {
        electronic: amount,
      },
    };

    const data = {
      PaymentData: {
        CustomerReceipt: receipt,
        recurrent: {
          interval: "Month",
          period: 1,
          customerReceipt: receipt,
        },
      },
    };

    widget.charge(
      {
        publicId: "pk_ccc85fa0fa1bc04dcffebc7253e35",
        description: `Подписка на ежемесячный доступ ${label}`,
        amount: amount,
        currency: "KZT",
        invoiceId: invoiceId,
        accountId: accountId,
        data: data,
      },
      function (options) {
        console.log("✅ Успешная оплата", options);
        setIsOpenModal(false);
      },
      function (reason, options) {
        console.error("❌ Ошибка оплаты", reason, options);
      }
    );
  };

  return (
    <Button onClick={handlePay} disabled={!scriptLoaded || disabled}>
      {t("subscription_button")}
    </Button>
  );
};

const Button = styled.button`
  background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  color: white;
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 12px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: ${TEXT_COLORS.PRIMARY_COLOR};
    border-color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
export default TipTopRecurringPayment;
