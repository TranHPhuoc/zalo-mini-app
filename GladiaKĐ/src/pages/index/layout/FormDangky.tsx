import { ElasticTextarea } from "components/elastic-textarea";
import React, { FC, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { formDataState } from "types/formState";
import { validationFunctions } from "utils/validate";
import { Box, Button, Text, useSnackbar, Modal } from "zmp-ui";

export const DeliveryFormDangKy: FC = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { openSnackbar } = useSnackbar();
  const { isValidEmail, isValidPhone } = useRecoilValue(validationFunctions);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormDataComplete = () => {
    return formData.name && isValidPhone(formData.phone) && isValidEmail(formData.email);
  };

  const handleSubmit = () => {
    if (!isFormDataComplete()) {
      openSnackbar({ text: "Vui lòng nhập đúng và đầy đủ thông tin!", type: "error" });
      return;
    }
    
    console.log("Dữ liệu đăng ký:", formData);
    openSnackbar({ text: "Đăng ký thành công!", type: "success" });
    setModalVisible(false);
    setFormData({ name: "", phone: "", email: "", note: "" });
  };

  return (
    <Box className="space-y-4 p-4 text-center">
      <Button onClick={() => setModalVisible(true)} style={{ background: "#387270" }}>
        Đăng ký
      </Button>
      
      <Modal
        visible={isModalVisible}
        title="Đăng ký tư vấn"
        onClose={() => setModalVisible(false)}
      >
        <Box className="p-4">
          <ElasticTextarea placeholder="Họ và tên..." value={formData.name} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("name", e.target.value)} />
          <ElasticTextarea placeholder="Số điện thoại..." value={formData.phone} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("phone", e.target.value)} />
          <ElasticTextarea placeholder="Email..." value={formData.email} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("email", e.target.value)} />
          <ElasticTextarea placeholder="Ghi chú..." value={formData.note} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("note", e.target.value)} />
        </Box>
        <Box className="flex justify-between p-4">
          <Button onClick={() => setModalVisible(false)} className="bg-gray-500">Hủy</Button>
          <Button onClick={handleSubmit} style={{ background: "#82ba41" ,color: "white" }}>Gửi đăng ký</Button>
        </Box>
      </Modal>
    </Box>
  );
};
