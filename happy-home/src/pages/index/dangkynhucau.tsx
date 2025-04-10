import { ElasticTextarea } from "components/elastic-textarea";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { formDataState } from "types/formState";
import { Box, Button, Text, useSnackbar, Checkbox, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Divider } from "components/divider";

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  checkboxGroup: {
    display: 'flex',
    gap: '15px',
  },
};

const FormDangKy: FC = () => {
  const [formData, setFormData] = useRecoilState(formDataState);
  const { openSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSendForm = async () => {
    if (!formData.name || !formData.phone || !formData.address) {
      openSnackbar({
        text: "Vui lòng nhập đầy đủ thông tin!",
        type: "error",
        position: "bottom",
      });
      return;
    }

    try {
      const API_URL = 'https://pro.n8n.vn/webhook/phieu-khao-sat-happy-home';
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          app: "Happy Home",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      openSnackbar({
        text: "Biểu mẫu đã được gửi thành công!",
        type: "success",
        position: "bottom",
      });

      setFormData({
        name: '',
        phone: '',
        address: '',
        ownsProperty: false,
        permanentAddress: '',
        temporaryAddress: '',
        department: '',
        jobPosition: '',
        monthlyIncome: '',
        isMarried: false,
        spouseIncome: '',
      });

      navigate('/');

    } catch (error) {
      console.error('Error sending form:', error);
      openSnackbar({
        text: "Có lỗi xảy ra khi gửi biểu mẫu. Vui lòng thử lại.",
        type: "error",
        position: "bottom",
      });
    }
  };

  return (
    <Box className="space-y-3 p-4">
      <Box className="bg-white rounded-lg p-7" style={{ boxShadow: "2px 2px 10px #387270", border: "1px solid #387270" }}>
        <div className="text-center mb-5">
          <Text className="text-xl uppercase font-bold text-[#387270]">
            Phiếu khảo sát Thông tin và Nhu cầu khách hàng
            <br></br>
            <i> (Information and Needs of Customer)</i>
          </Text>
        </div>
        <div style={styles.container}>
          <div>
            <Text style={styles.label}>Họ và tên <i>(Full name)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.name}
              onChange={(e) => handleInputChange("name", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Số điện thoại <i>(Phone number)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Địa chỉ <i>(Address)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.address}
              onChange={(e) => handleInputChange("address", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Sở hữu Bất động sản tại Đồng Nai <i>(Own property in Dong Nai)</i>:</Text>
            <div style={styles.checkboxGroup}>
              <Checkbox
                checked={formData.ownsProperty}
                onChange={() => handleInputChange("ownsProperty", true)}
                label="Đã có (Already has)"
              />
              <Checkbox
                checked={!formData.ownsProperty}
                onChange={() => handleInputChange("ownsProperty", false)}
                label="Chưa có (Not yet)"
              />
            </div>
          </div>

          <div>
            <Text style={styles.label}>Địa chỉ thường trú <i>(Permanent address)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.permanentAddress}
              onChange={(e) => handleInputChange("permanentAddress", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Địa chỉ tạm trú <i>(Temporary address)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.temporaryAddress}
              onChange={(e) => handleInputChange("temporaryAddress", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Phòng ban làm việc <i>(Department)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.department}
              onChange={(e) => handleInputChange("department", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Vị trí công việc <i>(Job position)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.jobPosition}
              onChange={(e) => handleInputChange("jobPosition", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Thu nhập hàng tháng hiện tại <i>(Current monthly income)</i>:</Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.monthlyIncome}
              onChange={(e) => handleInputChange("monthlyIncome", (e.target as HTMLTextAreaElement).value)}
            />
          </div>

          <div>
            <Text style={styles.label}>Tình trạng hôn nhân <i>(Marital status)</i>:</Text>
            <div style={styles.checkboxGroup}>
              <Checkbox
                checked={formData.isMarried}
                onChange={() => handleInputChange("isMarried", true)}
                label="Đã kết hôn (Married)"
              />
              <Checkbox
                checked={!formData.isMarried}
                onChange={() => handleInputChange("isMarried", false)}
                label="Chưa kết hôn (Not married)"
              />
            </div>
          </div>

          {formData.isMarried && (
            <div>
              <Text style={styles.label}>Thu nhập của Vợ/chồng <i>(Spouse income)</i>:</Text>
              <ElasticTextarea
                maxRows={4}
                value={formData.spouseIncome}
                onChange={(e) => handleInputChange("spouseIncome", (e.target as HTMLTextAreaElement).value)}
              />
            </div>
          )}
        </div>
        <Button
          fullWidth
          onClick={handleSendForm}
          style={{ background: "#387270" }}
        >
          Gửi đăng ký <i>(Submit)</i>
        </Button>
      </Box>
    </Box>
  );
};

const DangKyNhuCau: React.FunctionComponent = () => {
  const nen = "https://res.cloudinary.com/dqcrcdufy/image/upload/v1741706686/Artboard_54_1_qlgiw4.png";

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Divider />
      <Box className="flex-1 overflow-auto relative background-image-box" style={{ backgroundImage: `url(${nen})` }}>
        <br /><br /><br /><br /><br /><br /><br />
        <FormDangKy />
      </Box>
    </Page>
  );
};

export default DangKyNhuCau;