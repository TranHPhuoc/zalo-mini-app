import React, { FC} from "react";
import { Box } from "zmp-ui";
import { NhaMau1 } from "./nha-mau-1";
import { NhaMau2 } from "./nha-mau-2";
import { NhaMau3 } from "./nha-mau-3";
import { NhaMau4 } from "./nha-mau-4";

export const NhaMauTest: FC = () => {
  return(
    <Box className="m-1">
      <Box className="text-center" >
        <div className="mt-4">
          <h2
            className="font-tinhHoaHoiTu font-bold"
            style={{
              fontSize: "1.8em",
              textTransform: "uppercase",
              color: "#1f726f",
            }}
          >
            NHÀ MẪU 
          </h2>
        </div>
        <div>
        <NhaMau1/>
        <br></br>

        <NhaMau2/>
        <br></br>

        <NhaMau3/>
        <br></br>

        <NhaMau4/>
        <br></br>
        </div>
      </Box>
      </Box>
  );

};