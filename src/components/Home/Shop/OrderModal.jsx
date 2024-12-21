import React, { useEffect } from "react";
import { Form, Input, Modal } from "antd";
import styled from "styled-components";
import { useCreateOrder } from "../../../api/shop";

const OrderModal = ({ isOpen, setIsOpen, selectedItem }) => {
  const [form] = Form.useForm();

  const { mutate } = useCreateOrder();

  useEffect(() => {
    if (isOpen && selectedItem) {
      form.setFieldsValue({
        itemName: selectedItem?.title || "",
      });
    }
  }, [isOpen, selectedItem, form]);

  const handleSubmit = (values) => {
    console.log(values);
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
      title="Сделать заказ"
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
            label="Имя"
            name="name"
            rules={[{ required: true, message: "Введите свое имя" }]}
          >
            <Input placeholder="Введите свое имя" />
          </Form.Item>

          <Form.Item
            label="Номер"
            name="phoneNumber"
            rules={[
              { required: true, message: "Введите свой номер" },
              {
                pattern: /^[0-9]+$/,
                message: "Номер должен состоять из цифр",
              },
            ]}
          >
            <Input placeholder="Введите свой номер" />
          </Form.Item>

          <Form.Item label="Название заказа" name="itemName">
            <Input readOnly />
          </Form.Item>

          <ButtonWrapper>
            <Button type="primary" htmlType="submit">
              Заказать
            </Button>
            <CancelButton type="default" onClick={handleCancel}>
              Отменить
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
  background-color: #26395f;
  color: white;
  border: 1px solid #26395f;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 24px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #26395f;
    border-color: #26395f;
  }
`;
const CancelButton = styled.button`
  background-color: white;
  color: #26395f;
  border: 1px solid #26395f;
  border-radius: 12px;
  text-align: center;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  padding: 8px 24px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #26395f;
    border-color: #26395f;
  }
`;
export default OrderModal;
