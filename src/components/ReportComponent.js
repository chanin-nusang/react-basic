import { useContext } from "react";
import DataContext from "../data/DataContext";
import "./ReportComponent.css";
const ReportComponent = () => {
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <DataContext.Consumer>
        {(context) => (
          <div>
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>
              ฿{formatNumber((context.income - context.expense).toFixed(2))}
            </h1>
            <div className="report-container">
              <div>
                <h4>รายรับทั้งหมด</h4>
                <p className="report-plus">฿{formatNumber(context.income)}</p>
              </div>
              <div>
                <h4>รายจ่ายทั้งหมด</h4>
                <p className="report-minus">฿{formatNumber(context.expense)}</p>
              </div>
            </div>
          </div>
        )}
      </DataContext.Consumer>
    </div>
  );
};
export default ReportComponent;
