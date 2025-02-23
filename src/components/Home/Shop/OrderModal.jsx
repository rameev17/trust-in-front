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
      title="Тапсырыс беру"
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
            label="Аты"
            name="name"
            rules={[{ required: true, message: "Атыңызды енгізіңіз" }]}
          >
            <Input placeholder="Атыңызды енгізіңіз" />
          </Form.Item>

          <Form.Item
            label="Нөмірі"
            name="phoneNumber"
            rules={[
              { required: true, message: "Нөміріңізді енгізіңіз" },
              {
                pattern: /^[0-9]+$/,
                message: "Номер должен состоять из цифр",
              },
            ]}
          >
            <Input placeholder="Нөмір сандардан тұруы керек" />
          </Form.Item>

          <Form.Item label="Тапсырыс атауы" name="itemName">
            <Input readOnly />
          </Form.Item>

          <ButtonWrapper>
            <Button type="primary" htmlType="submit">
              Тапсырыс беру
            </Button>
            <CancelButton type="default" onClick={handleCancel}>
              Бас тарту
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
