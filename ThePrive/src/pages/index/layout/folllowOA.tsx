import React, { FC, ChangeEvent, useState } from 'react'
import { Box, Switch, Text } from 'zmp-ui'
import background from 'static/background_OA.jpg'
import { followOA } from 'zmp-sdk/apis'

const FollowPage: FC = () => {
  const [isFollowed, setIsFollowed] = useState(false) // Khai báo biến trạng thái để kiểm tra đã follow chưa

  const follow = async () => {
    try {
      await followOA({
        id: '3578559673417906455',
      })
      setIsFollowed(true) // Đã follow thành công, cập nhật trạng thái là đã follow
    } catch (error) {
      console.log(error)
    }
  }

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isFollowed) {
      // Nếu chưa follow
      if (event.target.checked) {
        follow()
      }
    }
  }

  return (
    <Box className="p-4 rounded-lg relative overflow-hidden" m={4}>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 animate-zoom"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>
      <Box className="h-24 text-black bg-opacity-50 p-4 relative z-10 w-80">
        <Text className="font-semibold">
          Nhấn quan tâm để nhận nhiều quyền lợi đặc biệt từ chúng tôi!
        </Text>
        <div className="mt-4">
          <Switch
            onChange={handleSwitchChange}
            label="Quan tâm OA"
            checked={isFollowed}
          />
        </div>
      </Box>
    </Box>
  )
}

export default FollowPage
