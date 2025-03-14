import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";
import styled from "styled-components";
import { useCreateOrder } from "../../../api/shop";
import { TEXT_COLORS } from "../../../helper/constants";
import { useTranslation } from "react-i18next";

const OrderModal = ({ isOpen, setIsOpen, selectedItem }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const { mutate } = useCreateOrder();

  useEffect(() => {
    if (isOpen && selectedItem) {
      form.setFieldsValue({
        itemName: selectedItem?.title || "",
      });
    }
  }, [isOpen, selectedItem, form]);

  const handleSubmit = (values) => {
    mutate({
      itemId: selectedItem?.id,
      name: values.name,
      phoneNumber: values.phoneNumber,
    });
    setIsOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsOpen(false);
  };

  return (
    <Modal
      title={t("shop_order")}
      open={isOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <FormWrapper>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            itemName: selectedItem?.title || "",
          }}
        >
          <Form.Item
            label={t("shop_order_name")}
            name="name"
            rules={[
              { required: true, message: t("shop_order_name_placeholder") },
            ]}
          >
            <Input placeholder={t("shop_order_name_placeholder")} />
          </Form.Item>

          <Form.Item
            label={t("shop_order_phone")}
            name="phoneNumber"
            rules={[
              { required: true, message: t("shop_order_phone_placeholder") },
              {
                pattern: /^[0-9]+$/,
                message: t("shop_order_phone_error"),
              },
            ]}
          >
            <Input placeholder={t("shop_order_phone_placeholder")} />
          </Form.Item>

          <Form.Item label={t("shop_order_item_name")} name="itemName">
            <Input readOnly />
          </Form.Item>

          <ButtonWrapper>
            <Button type="primary" htmlType="submit">
              {t("shop_order")}
            </Button>
            <CancelButton type="default" onClick={handleCancel}>
              {t("shop_order_back")}
            </CancelButton>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    </Modal>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Button = styled.button`
  background-color: ${TEXT_COLORS.PRIMARY_COLOR};
  color: white;
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 24px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${TEXT_COLORS.PRIMARY_COLOR};
    border-color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
const CancelButton = styled.button`
  background-color: white;
  color: ${TEXT_COLORS.PRIMARY_COLOR};
  border: 1px solid ${TEXT_COLORS.PRIMARY_COLOR};
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 24px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: ${TEXT_COLORS.PRIMARY_COLOR};
    border-color: ${TEXT_COLORS.PRIMARY_COLOR};
  }
`;
export default OrderModal;
