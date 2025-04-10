import { ListItem } from 'components/list-item';
import React, { useState, useCallback } from 'react';
import { Box, Input, Button, Text, List, Page, Slider, Swiper, Spinner } from 'zmp-ui';
import { Welcome } from './welcome';
import { createOrder } from 'zmp-sdk/apis';
import { Divider } from 'components/divider';

type PaymentMethodId = "ZALOPAY_SANDBOX" | "ZALOPAY" | "MOMO" | "MOMO_SANDBOX" | "ATM" | "ATM_SANDBOX" | "CC" | "CC_SANDBOX" | "VNPAY" | "VNPAY_SANDBOX";

interface PaymentMethod {
  id: PaymentMethodId;
  isCustom: boolean;
}

interface BillingResponse {
  month: string;
  user: string;
  electric: {
    usage: number;
    amount: number;
    dueDate: string;
  };
  water: {
    usage: number;
    amount: number;
    dueDate: string;
  };
  service: {
    amount: number;
    dueDate: string;
  };
  status?: 'success' | 'error';
  message?: string;
}

interface PaidResponse {
  status: string;
  month: string;
  "can-ho": string;
  "tien-dien-da-thanh-toan": string;
  "tien-nuoc-da-thanh-toan": string;
  "tien-dich-vu-da-thanh-toan": string;
  "tong-tien": string;
  "thoi-gian-thanh-toan": string;
}

const NotFoundMessage: React.FC<{ onReset: () => void }> = React.memo(({ onReset }) => (
  <Box className="mt-4 bg-white p-6 rounded-lg text-center">
    <Box className="mb-4 flex justify-center">
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ color: '#be2026' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </Box>
    <Text className="text-xl font-bold text-gray-700 mb-2">
      Không tìm thấy dịch vụ
    </Text>
    <Text className="text-gray-500 mb-4">
      Xin lỗi! Chúng tôi không tìm thấy dịch vụ của Quý khách
    </Text>
    <Box className="p-4 bg-gray-50 rounded-lg">
      <Text size="small" className="text-gray-600">
        Vui lòng kiểm tra lại:
      </Text>
      <Box className="mt-2 text-left">
        <Text size="small" className="text-gray-500">• Mã căn hộ đã nhập chính xác</Text>
        <Text size="small" className="text-gray-500">• Số điện thoại đã đăng ký</Text>
        <Text size="small" className="text-gray-500">• Hoặc liên hệ quản lý để được hỗ trợ</Text>
      </Box>
    </Box>
    <Button
      className="mt-4"
      onClick={onReset}
    >
      Thử lại
    </Button>
  </Box>
));

const PaidMessage: React.FC<{ data: PaidResponse; onReset: () => void }> = React.memo(({ data, onReset }) => (
  <Box className="mt-4 bg-white p-6 rounded-lg text-center">
    <Box className="mb-4 flex justify-center">
      <svg
        className="w-16 h-16"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ color: '#008000' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </Box>
    <Text className="text-xl font-bold text-gray-700 mb-2">
      Dịch vụ đã được thanh toán
    </Text>

    <Box className="p-4 bg-gray-50 rounded-lg mt-4">
      <Box className="text-left space-y-3">
        <Box className="flex justify-between items-center">
          <Text size="small" className="text-gray-600">Căn hộ:</Text>
          <Text size="small" className="font-medium">{data["can-ho"]}</Text>
        </Box>
        <Box className="flex justify-between items-center">
          <Text size="small" className="text-gray-600">Tháng:</Text>
          <Text size="small" className="font-medium">{data.month}</Text>
        </Box>
        <Divider />
        <Box className="flex justify-between items-center">
          <Text size="small" className="text-gray-600">Tiền điện:</Text>
          <Text size="small" className="text-primary font-medium">
            {parseInt(data["tien-dien-da-thanh-toan"]).toLocaleString('vi-VN')} đ
          </Text>
        </Box>
        <Box className="flex justify-between items-center">
          <Text size="small" className="text-gray-600">Tiền nước:</Text>
          <Text size="small" className="text-primary font-medium">
            {parseInt(data["tien-nuoc-da-thanh-toan"]).toLocaleString('vi-VN')} đ
          </Text>
        </Box>
        <Box className="flex justify-between items-center">
          <Text size="small" className="text-gray-600">Phí dịch vụ:</Text>
          <Text size="small" className="text-primary font-medium">
            {parseInt(data["tien-dich-vu-da-thanh-toan"]).toLocaleString('vi-VN')} đ
          </Text>
        </Box>
        <Divider />
        <Box className="flex justify-between items-center">
          <Text className="text-gray-700 font-medium">Tổng tiền:</Text>
          <Text className="text-primary font-bold">
            {parseInt(data["tong-tien"]).toLocaleString('vi-VN')} đ
          </Text>
        </Box>
        <Box className="flex justify-between items-center">
          <Text size="small" className="text-gray-600">Thời gian thanh toán:</Text>
          <Text size="small" className="text-green-600 font-medium">
            {data["thoi-gian-thanh-toan"]}
          </Text>
        </Box>
        <Divider />
      </Box>
    </Box>

    <Button
      className="mt-4"
      onClick={onReset}
    >
      Kiểm tra dịch vụ khác
    </Button>
  </Box>
));

const BillingData: React.FC<{
  data: BillingResponse;
  orderId: string;
  onPay: (amount: number) => void;
  formatMoney: (amount: number) => string;
}> = React.memo(({ data, orderId, onPay, formatMoney }) => (
  <Box className="mt-4 bg-white p-4 rounded-lg">
    <Text className="font-bold mb-3">
      Khách hàng: {data.user}
    </Text>

    <Text className="font-bold mb-3">
      Hóa đơn tháng {data.month}:
    </Text>

    <List>
      <ListItem
        title="Tiền điện"
        subtitle={
          <Text className="text-primary font-bold">
            {formatMoney(data.electric.amount)}
          </Text>
        }
        description={
          <Box>
            <Text size="small">Số điện đã sử dụng: {data.electric.usage} kWh</Text>
            <Text size="small" className="text-red-600">
              Hạn đóng: {data.electric.dueDate}
            </Text>
          </Box>
        }
      />
      <ListItem
        title="Tiền nước"
        subtitle={
          <Text className="text-primary font-bold">
            {formatMoney(data.water.amount)}
          </Text>
        }
        description={
          <Box>
            <Text size="small">Số nước đã sử dụng: {data.water.usage} m³</Text>
            <Text size="small" className="text-red-600">
              Hạn đóng: {data.water.dueDate}
            </Text>
          </Box>
        }
      />
      <ListItem
        title="Phí dịch vụ"
        subtitle={
          <Text className="text-primary font-bold">
            {formatMoney(data.service.amount)}
          </Text>
        }
        description={
          <Text size="small" className="text-red-600">
            Hạn đóng: {data.service.dueDate}
          </Text>
        }
      />
    </List>

    <Box className="mt-3 pt-3 border-t">
      <Text className="font-bold flex justify-between">
        <span>Tổng tiền:</span>
        <span className="text-primary">
          {formatMoney(
            data.electric.amount +
            data.water.amount +
            data.service.amount
          )}
        </span>
      </Text>
    </Box>

    <Button
      fullWidth
      className="mt-4"
      onClick={() => onPay(
        data.electric.amount +
        data.water.amount +
        data.service.amount
      )}
      disabled={!data}
    >
      {orderId ? 'Thanh toán lại' : 'Tiến hành thanh toán'}
    </Button>
  </Box>
));

const PaymentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    apartmentCode: '',
    phoneNumber: ''
  });
  const [loading, setLoading] = useState(false);
  const [billingData, setBillingData] = useState<BillingResponse | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [orderId, setOrderId] = useState<string>('');
  const [paidData, setPaidData] = useState<PaidResponse | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const formatMoney = useCallback((amount: number) => {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }, []);

  const handleInputChange = useCallback((field: 'apartmentCode' | 'phoneNumber', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      apartmentCode: '',
      phoneNumber: ''
    });
    setBillingData(null);
    setPaidData(null);
    setNotFound(false);
    setOrderId('');
    setIsChecking(true);
    setTimeout(() => setIsChecking(false), 500);
  }, []);

  const handleCheck = useCallback(async () => {
    if (!formData.apartmentCode || !formData.phoneNumber) {
      return;
    }

    setIsChecking(true);
    setLoading(true);
    setNotFound(false);
    setBillingData(null);
    setPaidData(null);
    setOrderId('');

    try {
      const response = await fetch('https://pro.n8n.vn/webhook/banking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apartmentCode: formData.apartmentCode,
          phoneNumber: formData.phoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể kết nối đến máy chủ');
      }

      const data = await response.json();

      if (data.status === "failed") {
        setNotFound(true);
      }
      else if (data.status === "Đã thanh toán") {
        setPaidData(data as PaidResponse);
      }
      else if (data.status === "Chưa thanh toán") {
        setBillingData(data);
      }
      else {
        setNotFound(true);
      }

    } catch (err) {
      console.error('Error:', err);
      setNotFound(true);
    } finally {
      setLoading(false);
      setIsChecking(false);
    }
  }, [formData.apartmentCode, formData.phoneNumber]);

  const sendOrderIdToWebhook = useCallback(async (orderId: string) => {
    try {
      const response = await fetch('https://pro.n8n.vn/webhook/status-banking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idApp: "2911551627993142706",
          orderId,
          apartmentCode: formData.apartmentCode,
          phoneNumber: formData.phoneNumber,
          amount: billingData ? (
            billingData.electric.amount +
            billingData.water.amount +
            billingData.service.amount
          ) : 0,
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Không thể gửi thông tin thanh toán');
      }

      const result = await response.json();
      console.log('Webhook response:', result);

      if (result.status === "Đã thanh toán") {
        setPaidData({
          status: "Đã thanh toán",
          month: billingData?.month || "",
          "can-ho": formData.apartmentCode,
          "tien-dien-da-thanh-toan": billingData?.electric.amount.toString() || "0",
          "tien-nuoc-da-thanh-toan": billingData?.water.amount.toString() || "0",
          "tien-dich-vu-da-thanh-toan": billingData?.service.amount.toString() || "0",
          "tong-tien": (billingData ? (
            billingData.electric.amount +
            billingData.water.amount +
            billingData.service.amount
          ) : 0).toString(),
          "thoi-gian-thanh-toan": new Date().toLocaleString('vi-VN')
        });
        setPaymentError(null);
      } else {
        console.error('Webhook error:', result.message || 'Thanh toán không thành công');
      }
    } catch (error) {
      console.error('Error sending orderId to webhook:', error);
      // Không set paymentError vì thanh toán đã thành công
    } finally {
      setIsPaying(false);
    }
  }, [formData.apartmentCode, formData.phoneNumber, billingData]);

  const pay = useCallback((amount: number) => {
    setIsPaying(true);
    setPaymentError(null);
    
    createOrder({
      desc: `Thanh toán dịch vụ căn hộ ${formData.apartmentCode}`,
      item: [
        { id: "electric", amount: billingData?.electric.amount || 0 },
        { id: "water", amount: billingData?.water.amount || 0 },
        { id: "service", amount: billingData?.service.amount || 0 }
      ],
      amount: amount,
      success: async (data) => {
        console.log("Payment success: ", data);
        if (data.orderId) {
          setOrderId(data.orderId);
          await sendOrderIdToWebhook(data.orderId);
          resetForm();
        }
      },
      fail: (err) => {
        console.log("Payment error: ", err);
        setPaymentError('Thanh toán không thành công');
        setIsPaying(false);
      },
    });
  }, [formData.apartmentCode, formData.phoneNumber, billingData, sendOrderIdToWebhook, resetForm]);

  return (
    <Page className="relative flex-1 flex flex-col bg-white">
      <Welcome />
      <Box mt={2} p={4}>
        <Swiper autoplay loop>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743592529/happyhome/wbi7mkwrrejggov2hscs.jpg"
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743592528/happyhome/vahhvkvc5pvvojlxrpql.jpg"
              alt="slide-2"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743592686/happyhome/pawe4fmvwjnb53wkgqgn.jpg"
              alt="slide-3"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743592686/happyhome/b2js3lmllaqfqky0k1kc.webp"
              alt="slide-4"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="https://res.cloudinary.com/dl4szj3ff/image/upload/v1743592688/happyhome/ktilv7lw6h3qharv6glv.jpg"
              alt="slide-5"
            />
          </Swiper.Slide>
        </Swiper>
      </Box>
      <Box className="p-4">
        <Text className="text-xl font-bold text-center mb-4">
          Kiểm Tra Dịch Vụ Chưa Thanh Toán
        </Text>

        {isChecking ? (
          <Box className="flex flex-col items-center justify-center min-h-[200px]">
            <Spinner visible logo={"https://res.cloudinary.com/dqcrcdufy/image/upload/v1737552566/logo-square_xxwopo.png"} />
            <Box mt={6}>
              <Text.Title>
                Đang kiểm tra...
              </Text.Title>
            </Box>
          </Box>
        ) : (
          <>
            <Box className="bg-white p-4 rounded-lg">
              <Box className="mb-4">
                <Text className="mb-2">Mã căn hộ</Text>
                <Input
                  value={formData.apartmentCode}
                  onChange={(e) => handleInputChange('apartmentCode', e.target.value)}
                  placeholder="Nhập mã căn hộ"
                  clearable
                />
              </Box>

              <Box className="mb-4">
                <Text className="mb-2">Số điện thoại</Text>
                <Input
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  placeholder="Nhập số điện thoại"
                  clearable
                />
              </Box>

              <Button
                fullWidth
                disabled={loading}
                onClick={handleCheck}
              >
                {loading ? 'Đang kiểm tra...' : 'Kiểm tra dịch vụ'}
              </Button>
            </Box>

            {paymentError && (
              <Box className="mt-4 bg-red-50 p-4 rounded-lg">
                <Text className="text-red-600 text-center">{paymentError}</Text>
                <Button
                  className="mt-4"
                  onClick={resetForm}
                >
                  Thử lại
                </Button>
              </Box>
            )}

            {notFound && <NotFoundMessage onReset={resetForm} />}
            {paidData && <PaidMessage data={paidData} onReset={resetForm} />}
            {billingData && (
              <BillingData
                data={billingData}
                orderId={orderId}
                onPay={pay}
                formatMoney={formatMoney}
              />
            )}
          </>
        )}
      </Box>
    </Page>
  );
};

export default PaymentPage;