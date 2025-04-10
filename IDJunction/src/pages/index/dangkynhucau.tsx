import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { formDataState } from "types/formState";
import { Box, Button, Text, useSnackbar, Checkbox, Page } from "zmp-ui";
import { Welcome } from "./welcome";
import { Divider } from "components/divider";
import { ElasticTextarea } from "components/elastic-textarea";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  checkboxGroup: {
    display: "flex",
    gap: "15px",
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
    if (!formData.name || !formData.phone || !formData.email) {
      openSnackbar({
        text: "Vui lòng nhập đầy đủ thông tin!",
        type: "error",
        position: "bottom",
      });
      return;
    }

    try {
      const API_URL = "https://pro.n8n.vn/webhook/phieu-khao-sat-happy-home";
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
        name: "",
        phone: "",
        email: "",
        productType: "",
      });

      navigate("/");
    } catch (error) {
      console.error("Error sending form:", error);
      openSnackbar({
        text: "Có lỗi xảy ra khi gửi biểu mẫu. Vui lòng thử lại.",
        type: "error",
        position: "bottom",
      });
    }
  };

  return (
    <Box className="space-y-3 p-4">
      <Box
        className="bg-white rounded-lg p-7"
        style={{
          boxShadow: "2px 2px 10px #387270",
          border: "1px solid #387270",
        }}
      >
        <div className="text-center mb-5">
          <Text className="text-xl uppercase font-bold text-[#387270]">
            Khảo sát nhu cầu
          </Text>
        </div>
        <div style={styles.container}>
          <div>
            <Text style={styles.label}>
              Họ và tên <i>(Full name)</i>:
            </Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.name}
              onChange={(e) =>
                handleInputChange(
                  "name",
                  (e.target as HTMLTextAreaElement).value
                )
              }
              style={{
                fontSize: "16px",
                padding: "8px 12px",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff"
              }}
            />
          </div>

          <div>
            <Text style={styles.label}>
              Số điện thoại <i>(Phone number)</i>:
            </Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.phone}
              onChange={(e) =>
                handleInputChange(
                  "phone",
                  (e.target as HTMLTextAreaElement).value
                )
              }
              style={{
                fontSize: "16px",
                padding: "8px 12px",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff"
              }}
            />
          </div>

          <div>
            <Text style={styles.label}>Email: </Text>
            <ElasticTextarea
              maxRows={4}
              value={formData.email}
              onChange={(e) =>
                handleInputChange(
                  "email",
                  (e.target as HTMLTextAreaElement).value
                )
              }
              style={{
                fontSize: "16px",
                padding: "8px 12px",
                width: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff"
              }}
            />
          </div>

          <div>
            <Text style={styles.label}>Nhu cầu sản phẩm:</Text>
            <div style={styles.checkboxGroup}>
              <Checkbox
                checked={formData.productType === "canho"}
                onChange={() => handleInputChange("productType", "canho")}
                label="Căn hộ"
                value="canho"
              />
              <Checkbox
                checked={formData.productType === "duplex"}
                onChange={() => handleInputChange("productType", "duplex")}
                label="Duplex"
                value="duplex"
              />
              <Checkbox
                checked={formData.productType === "penthouse"}
                onChange={() => handleInputChange("productType", "penthouse")}
                label="Penthouse"
                value="penthouse"
              />
            </div>
          </div>
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
  const nen =
    "https://res.cloudinary.com/dl4szj3ff/image/upload/v1743405678/the-prive/o3x2zhvkisnnbu5azjtk.png";

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Divider />
      <Box
        className="flex-1 overflow-auto relative background-image-box"
        style={{ backgroundImage: `url(${nen})` }}
      >
        <br />
        <FormDangKy />
      </Box>
    </Page>
  );
};

export default DangKyNhuCau;
