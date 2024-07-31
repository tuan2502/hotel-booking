// Hàm xử lý format ngày
const FormatDate = (dataInput) => {
  const date = dataInput ? new Date(dataInput) : new Date();
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('vi-VN', options); // 'vi-VN' là mã ngôn ngữ Việt Nam
  return formattedDate;
};

export default FormatDate;