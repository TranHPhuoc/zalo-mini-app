import { ElasticTextarea } from "components/elastic-textarea";
import React, { FC, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { formDataState } from "types/formState";
import { validationFunctions } from "utils/validate";
import { Box, Button, Text, useSnackbar } from "zmp-ui";

export const DeliveryFormDangKy: FC = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { openSnackbar, closeSnackbar } = useSnackbar();
  const timemerId = useRef<number | null>(null);
  const { isValidEmail, isValidPhone } = useRecoilValue(validationFunctions);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormDataComplete = (data: typeof formData) => {
    return data.name && isValidPhone(data.phone) && isValidEmail(data.email);
  };

  const handleInputBlur = (name: string) => {
    if (name === "phone" && formData.phone && !isValidPhone(formData.phone)) {
      openSnackbar({
        text: "Số điện thoại không hợp lệ ! Vui lòng nhập lại !!!",
        type: "error",
        position: "top",
      });
    }

    if (name === "email" && formData.email && !isValidEmail(formData.email)) {
      openSnackbar({
        text: "Email không hợp lệ ! Vui lòng nhập lại !!!",
        type: "error",
        position: "top",
      });
    }
  };


  useEffect(() => {
    return () => {
      closeSnackbar();
      if (timemerId.current !== null) {
        clearInterval(timemerId.current);
      }
    };
  }, []);

  const handleSendOrder = async () => {

    if (!isFormDataComplete(formData)) {
      openSnackbar({
        text: "Vui lòng nhập đúng và đầy đủ thông tin trước khi gửi đơn hàng.",
        type: "error",
        position: "bottom",
      });
      return;
    }

    try {
      const API_URL = 'https://pro.n8n.vn/webhook/miniapp-lark';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/json',
          // Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3JtRGF0YSI6eyJuYW1lIjoiVsWpIEh1eSBIaeG7h3UiLCJwaG9uZSI6IjAzMjc5MjAwNjEiLCJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJub3RlIjoixJFzZHNkc2QifSwiY2FydCI6W3sicHJvZHVjdCI6eyJpZCI6MTAsIm5hbWUiOiJNYXNzYWdlIHRy4buLIGxp4buHdSBj4buVIHZhaSBnw6F5IiwiaW1hZ2UiOiIvc3JjL3N0YXRpYy9uYjEuanBnIiwicHJpY2UiOjU0OTAwMCwic2FsZSI6eyJ0eXBlIjoiZml4ZWQiLCJhbW91bnQiOjEwMDAwMH0sImRlc2NyaXB0aW9uIjoiU-G7rSBk4bulbmcgZOG7i2NoIHbhu6UgU3BhIHRy4buLIGxp4buHdSDEkeG7gyBjaOG7r2EgYuG7h25oIMSRYXUgbeG7j2kgdmFpIGfDoXkgxJFhbmcgxJHGsOG7o2Mgbmhp4buBdSBuZ8aw4budaSBs4buxYSBjaOG7jW4gdGhheSB0aOG6vyBjaG8gdmnhu4djIGTDuW5nIHRodeG7kWMuKDQ0OS4wMDBWTkQvNjBtaW5zIC0gNjcwLjAwMFZORC85MG1pbnMpIiwiY2F0ZWdvcnlJZCI6WyJTZXJ2aWNlcyJdLCJ2YXJpYW50cyI6W3sia2V5Ijoic2l6ZSIsImxhYmVsIjoiR8OzaSIsInR5cGUiOiJzaW5nbGUiLCJkZWZhdWx0IjoiMCIsIm9wdGlvbnMiOlt7ImtleSI6InMiLCJsYWJlbCI6IjYwIHBow7p0IiwicHJpY2VDaGFuZ2UiOnsidHlwZSI6InBlcmNlbnQiLCJwZXJjZW50IjowfX0seyJrZXkiOiJtIiwibGFiZWwiOiI5MCBwaMO6dCIsInByaWNlQ2hhbmdlIjp7InR5cGUiOiJmaXhlZCIsImFtb3VudCI6MjIxMDAwfX1dfV19LCJvcHRpb25zIjp7InNpemUiOiJtIn0sInF1YW50aXR5IjoxfV0sInRvdGFsUHJpY2UiOjY3MDAwMH0.pAkRHmt5PtHzOfqS5C1UPhGiS95yvBVMCA-yxWS7Fyg'
        },
        body: JSON.stringify({
          formData,
          app: "Happy Home"
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Order sent successfully');
      openSnackbar({
        text: "Đơn hàng đã được gửi thành công",
        type: "success",
        position: "bottom",
      });

      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          note: '',
          address: '',
          ownsProperty: false,
          permanentAddress: '',
          temporaryAddress: '',
          department: '',
          jobPosition: '',
          monthlyIncome: '',
          isMarried: false,
          spouseIncome: ''
        });
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Error sending order:', error);
      openSnackbar({
        text: "Có lỗi xảy ra khi gửi đơn hàng. Vui lòng thử lại.",
        type: "error",
        position: "bottom",
      });
    }
  };
  return (
    <Box className="space-y-3 p-4">
      <Box className="bg-white rounded-lg p-7" style={{ boxShadow: "2px 2px 10px #387270", border: "1px solid #387270" }}>
        <div className="text-center mb-5">
          <Text className="text-xl uppercase font-bold text-[#387270]">Đăng ký tư vấn</Text>
        </div>
        <div>
          <ElasticTextarea
            placeholder="Họ và tên..."
            maxRows={4}
            value={formData.name}
            onChange={(e) => handleInputChange("name", (e.target as HTMLTextAreaElement).value)}
          />

          <ElasticTextarea
            placeholder="Số điện thoại..."
            maxRows={4}
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", (e.target as HTMLTextAreaElement).value)}
            onBlur={() => handleInputBlur("phone")}
          />

          <ElasticTextarea
            placeholder="Email..."
            maxRows={4}
            value={formData.email}
            onChange={(e) => handleInputChange("email", (e.target as HTMLTextAreaElement).value)}
            onBlur={() => handleInputBlur("email")}
          />

          {/* <ElasticSelect
            placeholder=""
            value={formData.dichvu_kh}
            onChange={(e) => handleInputChange("dichvu_kh", (e.target as HTMLTextAreaElement).value)}
          >
          </ElasticSelect> */}

          <ElasticTextarea
            placeholder="Ghi chú..."
            maxRows={4}
            value={formData.note}
            onChange={(e) => handleInputChange("note", (e.target as HTMLTextAreaElement).value)}
          />
        </div>
        <Button
          disabled={!isFormDataComplete}
          fullWidth
          onClick={handleSendOrder}
          style={{ background: "#387270" }}
        >
          Gửi đăng ký
        </Button>
      </Box>
    </Box>
  );
};