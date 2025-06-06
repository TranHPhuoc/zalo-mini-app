import { ElasticTextarea } from "components/elastic-textarea";
import React, { FC, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { formDataState } from "types/formState";
import { validationFunctions } from "utils/validate";
import { Box, Button, Text, useSnackbar, Modal } from "zmp-ui";

export const DeliveryFormDangKy: FC = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { openSnackbar, closeSnackbar } = useSnackbar();
  const timemerId = useRef<number | null>(null);
  const { isValidEmail, isValidPhone } = useRecoilValue(validationFunctions);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputBlur = (name: string) => {
    if (name === "phone" && formData.phone && !isValidPhone(formData.phone)) {
      openSnackbar({ text: "Số điện thoại không hợp lệ!", type: "error" });
    }
    if (name === "email" && formData.email && !isValidEmail(formData.email)) {
      openSnackbar({ text: "Email không hợp lệ!", type: "error" });
    }
  };

  const handleSendOrder = async () => {
    if (
      !formData.name ||
      !isValidPhone(formData.phone) ||
      !isValidEmail(formData.email)
    ) {
      openSnackbar({
        text: "Vui lòng nhập đúng và đầy đủ thông tin.",
        type: "error",
      });
      return;
    }

    try {
      await fetch("https://pro.n8n.vn/webhook-test/miniapp-lark-1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData, app: "NewLAVIDA" }),
      });
      openSnackbar({
        text: "Đơn hàng đã được gửi thành công!",
        type: "success",
      });
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", note: "" });
        setIsModalOpen(false);
        navigate("/");
      }, 2000);
    } catch (error) {
      openSnackbar({ text: "Có lỗi xảy ra, vui lòng thử lại.", type: "error" });
    }
  };

  return (
    <Box className="p-4 "
    style={{
      backgroundColor:"#30726f"
    }}>
      <Button
      className="animate-pulseScale font-bold uppercase"
        fullWidth
        onClick={() => setIsModalOpen(true)}
        style={{
          fontSize: "1.2em",
          background: "#ffffff",
          color: "#30726f",
          animation: "pulseScale 2s ease-in-out infinite 0.5s",
        }}
      >
        Đăng ký tư vấn
      </Button>

      <Modal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box className="p-1">
          <Text className="text-xl uppercase font-bold text-[#30726f] text-center mb-5">
            Đăng ký tư vấn
          </Text>
          <ElasticTextarea
            placeholder="Họ và tên..."
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("name", e.target.value)
            }
          />
          <ElasticTextarea
            placeholder="Số điện thoại..."
            value={formData.phone}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("phone", e.target.value)
            }
            onBlur={() => handleInputBlur("phone")}
          />
          <ElasticTextarea
            placeholder="Email..."
            value={formData.email}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("email", e.target.value)
            }
            onBlur={() => handleInputBlur("email")}
          />
          <ElasticTextarea
            placeholder="Ghi chú..."
            value={formData.note}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("note", e.target.value)
            }
          />
          <Box className="flex space-x-3 mt-4">
            <Button
              fullWidth
              onClick={handleSendOrder}
              style={{
                background: "#30726f",
                color: "#ffffff",
                border: "1px solid #30726f",
              }}
            >
              Gửi đăng ký
            </Button>
            <Button
              fullWidth
              onClick={() => setIsModalOpen(false)}
              variant="secondary"
            >
              Hủy
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};
